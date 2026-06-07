export const SITE = {
  name: "IronSlash",
  tagline: "Software que corta el ruido.",
  url: "https://ironslash.com",
  email: "ivan@ironslash.com",
  location: "Toluca · Saltillo · México",
  locationShort: "Toluca & Saltillo",
} as const;

export const NAV = [
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "proceso", label: "Proceso" },
  { id: "stack", label: "Stack" },
  { id: "contacto", label: "Contacto" },
] as const;

export const SEO_COPY = {
  heroSub:
    "Desarrollo de software, apps móviles, bots con IA y automatizaciones para empresas en Toluca, Saltillo y todo México — diseñados con precisión y desplegados en producción real.",
  servicesDesc:
    "Apps, bots con inteligencia artificial, web apps, APIs y automatizaciones — el mismo estándar que aplicamos en nuestro portfolio en producción.",
  projectsDesc:
    "Productos reales desplegados en servidores propios. Toca un proyecto para ver stack, infraestructura y cómo funciona.",
  contactDesc:
    "¿Necesitas una app, un bot con IA o automatizar procesos en Toluca, Saltillo o remoto? Cuéntanos tu proyecto — respondemos en menos de 24 horas.",
  coverageTitle: "Desarrollo de software en Toluca y Saltillo",
  coverageBody:
    "IronSlash es tu partner tecnológico para convertir ideas en productos digitales: aplicaciones móviles, bots conversacionales con inteligencia artificial, automatizaciones de procesos, integraciones con WhatsApp y Stripe, y plataformas web de alto rendimiento. Atendemos empresas y emprendedores en el Estado de México, Coahuila y todo el país.",
} as const;
