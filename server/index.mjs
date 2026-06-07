import express from "express";
import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const PORT = Number(process.env.PORT ?? 3921);
const TO = process.env.CONTACT_TO ?? "ivan@ironslash.com";
const FROM = process.env.CONTACT_FROM ?? process.env.SMTP_USER ?? TO;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ?? "https://ironslash.com,https://www.ironslash.com")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

const smtpConfigured =
  Boolean(process.env.SMTP_HOST) &&
  Boolean(process.env.SMTP_USER) &&
  Boolean(process.env.SMTP_PASS);

let transporter = null;
if (smtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
} else {
  console.warn("[contact-api] SMTP no configurado — define SMTP_HOST, SMTP_USER y SMTP_PASS en .env");
}

const rateLimit = new Map();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip) ?? { count: 0, resetAt: now + RATE_WINDOW_MS };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + RATE_WINDOW_MS;
  }
  entry.count += 1;
  rateLimit.set(ip, entry);
  return entry.count > RATE_MAX;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(text, maxLen) {
  return String(text ?? "")
    .trim()
    .slice(0, maxLen);
}

const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: "16kb" }));

app.use((req, res, next) => {
  const origin = req.get("origin");
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, smtp: smtpConfigured });
});

app.post("/api/contact", async (req, res) => {
  if (!smtpConfigured || !transporter) {
    res.status(503).json({ error: "Servicio de correo no disponible." });
    return;
  }

  const ip = req.ip ?? "unknown";
  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Demasiados intentos. Espera unos minutos." });
    return;
  }

  const { name, email, message, _website } = req.body ?? {};

  if (_website) {
    res.json({ ok: true });
    return;
  }

  const cleanName = sanitize(name, 200);
  const cleanEmail = sanitize(email, 320);
  const cleanMessage = sanitize(message, 5000);

  if (!cleanName || !cleanEmail || !cleanMessage) {
    res.status(400).json({ error: "Completa todos los campos." });
    return;
  }
  if (!isValidEmail(cleanEmail)) {
    res.status(400).json({ error: "Email inválido." });
    return;
  }
  if (cleanMessage.length < 10) {
    res.status(400).json({ error: "Cuéntanos un poco más sobre tu proyecto." });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"IronSlash Contacto" <${FROM}>`,
      to: TO,
      replyTo: cleanEmail,
      subject: `Contacto IronSlash — ${cleanName}`,
      text: `Nombre: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
      html: `
        <p><strong>Nombre:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></p>
        <hr>
        <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br>")}</p>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("[contact-api] Error al enviar:", err);
    res.status(500).json({ error: "No pudimos enviar tu mensaje. Intenta de nuevo." });
  }
});

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

app.listen(PORT, "127.0.0.1", () => {
  console.log(`[contact-api] Escuchando en http://127.0.0.1:${PORT}`);
});
