export type Service = {
  id: string;
  title: string;
  summary: string;
  icon: string;
  modal: {
    headline: string;
    body: string[];
    deliverables: string[];
  };
};

export const SERVICES: Service[] = [
  {
    id: "product",
    title: "Product Engineering",
    summary: "MVPs, plataformas y SaaS de producción con arquitectura escalable.",
    icon: "◈",
    modal: {
      headline: "Ingeniería de producto de punta a punta",
      body: [
        "Diseñamos y construimos productos digitales completos: desde la primera validación hasta el despliegue en producción con CI/CD, monitoreo y documentación.",
        "Priorizamos decisiones técnicas que reducen deuda y aceleran iteraciones futuras.",
      ],
      deliverables: [
        "Arquitectura y roadmap técnico",
        "Frontend + backend integrados",
        "Deploy en VPS, cloud o edge",
        "Handoff y documentación viva",
      ],
    },
  },
  {
    id: "web",
    title: "Web Premium",
    summary: "Landings, portales y SPAs con animaciones, SEO y rendimiento extremo.",
    icon: "◇",
    modal: {
      headline: "Experiencias web que se sienten de otro nivel",
      body: [
        "Sitios de una sola página o aplicaciones web completas con micro-interacciones, dark mode, accesibilidad y Core Web Vitals optimizados.",
        "Cada pixel comunica marca; cada milisegundo cuenta en conversión.",
      ],
      deliverables: [
        "Diseño UI/UX premium",
        "React / Next / Vite",
        "Animaciones y motion design",
        "SEO técnico + analytics",
      ],
    },
  },
  {
    id: "api",
    title: "APIs & Backend",
    summary: "REST, webhooks, integraciones Stripe, WhatsApp y servicios en tiempo real.",
    icon: "⬡",
    modal: {
      headline: "Backends robustos, APIs limpias",
      body: [
        "Construimos APIs Node, Python y bases de datos PostgreSQL con autenticación, pagos, colas y webhooks listos para escalar.",
        "Integramos terceros (Stripe, Meta, OpenAI, Twilio) con contratos claros y manejo de errores impecable.",
      ],
      deliverables: [
        "API REST documentada",
        "PostgreSQL / Redis",
        "Stripe & webhooks",
        "PM2 / Docker / nginx",
      ],
    },
  },
  {
    id: "automation",
    title: "Automatización & Bots",
    summary: "Bots WhatsApp, cron jobs, scrapers y pipelines de contenido automatizado.",
    icon: "⟡",
    modal: {
      headline: "Automatización inteligente que opera 24/7",
      body: [
        "Bots conversacionales, publicación programada, ETL y workers que eliminan trabajo manual repetitivo.",
        "Diseñamos flujos con fallback humano, logs y alertas para operación confiable.",
      ],
      deliverables: [
        "Bots WhatsApp / Telegram",
        "Cron & workers PM2",
        "Integración CRM / sheets",
        "Monitoreo y alertas",
      ],
    },
  },
  {
    id: "ai",
    title: "IA Aplicada",
    summary: "Restauración de imágenes, análisis, generación de contenido y asistentes.",
    icon: "✦",
    modal: {
      headline: "Inteligencia artificial con propósito de negocio",
      body: [
        "No vendemos hype: integramos modelos donde generan valor real — restauración fotográfica, análisis de datos, generación de copy y asistentes contextuales.",
        "Cada feature de IA incluye controles de costo, latencia y calidad medible.",
      ],
      deliverables: [
        "Pipelines OpenAI / Replicate",
        "Prompt engineering",
        "Fallbacks determinísticos",
        "Métricas de calidad",
      ],
    },
  },
  {
    id: "ops",
    title: "DevOps & Infra",
    summary: "nginx, SSL, PM2, despliegues zero-downtime y servidores optimizados.",
    icon: "▣",
    modal: {
      headline: "Infraestructura que no te despierta a las 3am",
      body: [
        "Configuramos servidores Ubuntu con nginx, Certbot, PM2 y PostgreSQL. Reverse proxy, SSL automático y patrones probados en producción.",
        "Documentamos cada deploy para que tu equipo pueda operar con confianza.",
      ],
      deliverables: [
        "nginx + Let's Encrypt",
        "PM2 / systemd",
        "Backups y logs",
        "Runbooks de deploy",
      ],
    },
  },
];
