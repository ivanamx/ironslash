import { useState } from "react";
import { SITE, SEO_COPY } from "../data/company";
import { useReveal } from "../hooks/useReveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _website: data.get("_website"),
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(payload.error ?? "Error al enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "No pudimos enviar tu mensaje. Escríbenos a " + SITE.email,
      );
    }
  };

  return (
    <section id="contacto" className="section section--dark" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`section-inner reveal ${visible ? "reveal--visible" : ""}`}>
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="section-eyebrow">Contacto</p>
            <h2>¿Listo para construir?</h2>
            <p>{SEO_COPY.contactDesc}</p>
            <a href={`mailto:${SITE.email}`} className="contact-email">
              {SITE.email}
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status === "success" ? (
              <div className="contact-success">
                <span className="success-icon" aria-hidden="true">✓</span>
                <p>Mensaje enviado. Te respondemos en menos de 24 horas.</p>
              </div>
            ) : (
              <>
                <label>
                  <span>Nombre</span>
                  <input type="text" name="name" required autoComplete="name" disabled={status === "loading"} />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" disabled={status === "loading"} />
                </label>
                <label>
                  <span>Proyecto</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="¿Qué quieres construir?"
                    disabled={status === "loading"}
                  />
                </label>
                <input
                  type="text"
                  name="_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="contact-honeypot"
                />
                {status === "error" && errorMsg && (
                  <p className="contact-error" role="alert">{errorMsg}</p>
                )}
                <button type="submit" className="btn btn-primary btn-full" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando…" : "Enviar mensaje"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onPrivacy }: { onPrivacy: () => void }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-iron">Iron</span>
          <span className="logo-slash">Slash</span>
          <p>Software premium · {SITE.location}</p>
        </div>
        <div className="footer-links">
          <button type="button" onClick={onPrivacy}>Privacidad</button>
          <a href={`mailto:${SITE.email}`}>Contacto</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} IronSlash. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
