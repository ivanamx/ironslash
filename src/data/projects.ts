export type Project = {
  id: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  tagline: string;
  stack: string[];
  accent: string;
  modal: {
    overview: string;
    howItWorks: string[];
    highlights: string[];
    infra: string;
  };
};

export const PROJECTS: Project[] = [
  {
    id: "ann",
    name: "Ann Atelier",
    domain: "ann.ironslash.com",
    url: "https://ann.ironslash.com",
    category: "Web Premium",
    tagline: "Landing bilingüe de alta costura con lookbook 3D y SEO local Houston.",
    stack: ["React 19", "Vite", "Three.js", "Tailwind"],
    accent: "#c9a962",
    modal: {
      overview:
        "Sitio premium para atelier de couture custom. Single-page con secciones ancladas, i18n EN/ES, mapa Leaflet, lookbook con modal 3D opcional y schema SEO para Houston.",
      howItWorks: [
        "SPA estática compilada con Vite — nginx sirve dist/ con fallback SPA.",
        "Routing client-side para /privacy, /terms y /plans sin recargas.",
        "Feature flag VITE_LOOKBOOK_3D activa visor Three.js en modales del catálogo.",
      ],
      highlights: [
        "Dark/light theme con persistencia local",
        "Cursor personalizado y reveals on scroll",
        "Export PDF de planes comerciales",
        "Optimizado para móvil (320px+)",
      ],
      infra: "nginx estático · SSL Certbot · sin PM2 en runtime",
    },
  },
  {
    id: "cargolux",
    name: "Cargolux Tracking",
    domain: "tracking.ironslash.com",
    url: "https://tracking.ironslash.com",
    category: "Plataforma Logística",
    tagline: "Portal de rastreo y gestión con frontend React y API FastAPI.",
    stack: ["FastAPI", "React", "Mantine", "Python"],
    accent: "#4da3ff",
    modal: {
      overview:
        "Sistema de tracking logístico con dashboard interactivo, drag-and-drop, formularios avanzados y API Python en producción.",
      howItWorks: [
        "Frontend React (Mantine) compilado en dist/ — nginx sirve estáticos.",
        "Rutas /api/* proxeadas a uvicorn (FastAPI) en puerto 8000 vía PM2.",
        "Autenticación, CORS y uploads manejados en el backend Python.",
      ],
      highlights: [
        "UI enterprise con @dnd-kit y Mantine",
        "Build optimizado para servidores con poca RAM",
        "Separación clara frontend/API",
        "Dominio tracking.ironslash.com",
      ],
      infra: "PM2 uvicorn :8000 · nginx híbrido estático + proxy",
    },
  },
  {
    id: "nocircula",
    name: "No Circula",
    domain: "nocircula.autos",
    url: "https://nocircula.autos",
    category: "Utilidad Pública",
    tagline: "Consulta Hoy No Circula CDMX y Toluca con alertas WhatsApp.",
    stack: ["Next.js 14", "React", "Node"],
    accent: "#ff4d6a",
    modal: {
      overview:
        "Herramienta de consulta vehicular ultra directa: ingresa placa, selecciona zona y obtiene resultado instantáneo en modal. Diseño serio, sin scroll innecesario.",
      howItWorks: [
        "Next.js en modo producción (PM2 cluster) escucha en puerto 5847.",
        "nginx hace proxy_pass completo a la app Next.",
        "Lógica de reglas Hoy No Circula embebida; alertas vía WhatsApp en roadmap.",
      ],
      highlights: [
        "Flujo de una sola pantalla",
        "Modal de resultado accesible",
        "Soporte CDMX-ZMVM y Toluca",
        "SSL en nocircula.autos",
      ],
      infra: "PM2 Next.js :5847 · nginx proxy · Certbot",
    },
  },
  {
    id: "memorial",
    name: "Memoriales Celestiales",
    domain: "memorialescelestiales.com",
    url: "https://memorialescelestiales.com",
    category: "Bot + SaaS",
    tagline: "Memoriales con IA: WhatsApp bot, pagos Stripe y landing de conversión.",
    stack: ["Node", "WhatsApp", "Stripe", "PostgreSQL"],
    accent: "#a78bfa",
    modal: {
      overview:
        "Servicio de memoriales digitales en México. Bot WhatsApp guía al cliente, procesa pagos Stripe y genera entregables con IA (restauración, video memorial).",
      howItWorks: [
        "Servidor Node (PM2) en puerto 8780 maneja webhooks WhatsApp y Stripe.",
        "nginx proxea tráfico web; /media/ servido como alias estático local.",
        "PostgreSQL almacena pedidos, estados y pricing dinámico.",
      ],
      highlights: [
        "3 tiers de pricing con express",
        "Flujo conversacional completo en WhatsApp",
        "Landing + bot unificados",
        "Esquemas de partnership B2B",
      ],
      infra: "PM2 Node :8780 · nginx proxy + media alias · PostgreSQL",
    },
  },
  {
    id: "parabrisas",
    name: "Parabrisas Arizmendi",
    domain: "parabrisasariz.com",
    url: "https://parabrisasariz.com",
    category: "Negocio Local + API",
    tagline: "Sitio corporativo, citas online y bot de contenido para redes.",
    stack: ["Node", "PostgreSQL", "Stripe", "HTML/CSS"],
    accent: "#38bdf8",
    modal: {
      overview:
        "Presencia digital para taller de parabrisas: frontend estático optimizado (WebP), API de citas con Stripe y bot autónomo de publicación en Facebook.",
      howItWorks: [
        "nginx sirve frontend estático desde frontend/src con try_files.",
        "Rutas /api/* proxeadas al backend Node (PM2, puerto 3847).",
        "social-content-bot publica 1 post/día + blog semanal vía PM2 daemon.",
      ],
      highlights: [
        "Sistema de citas con horarios dinámicos",
        "Optimización WebP automática en nginx",
        "Catálogos PDF descargables",
        "Bot de marketing autónomo",
      ],
      infra: "PM2 API :3847 + bot · nginx estático híbrido · PostgreSQL",
    },
  },
  {
    id: "autoindex",
    name: "AutoIndex",
    domain: "autoindex.lat",
    url: "https://autoindex.lat",
    category: "Catálogo Digital",
    tagline: "Plataforma Flask de catálogos PDF con generación bajo demanda.",
    stack: ["Flask", "Gunicorn", "Python"],
    accent: "#34d399",
    modal: {
      overview:
        "Aplicación web para indexar y servir catálogos PDF. Gunicorn en producción con workers múltiples y timeouts extendidos para generación pesada.",
      howItWorks: [
        "Flask app servida por Gunicorn (3 workers) en 127.0.0.1:8001.",
        "nginx proxy_pass total incluyendo ruta /catalogo-pdf/ sin buffering.",
        "Deploy documentado con ecosystem.config.cjs y nginx versionado en repo.",
      ],
      highlights: [
        "Generación PDF bajo demanda",
        "Timeouts de 300s para archivos grandes",
        "Dominio propio autoindex.lat",
        "Patrón deploy replicable",
      ],
      infra: "PM2 Gunicorn :8001 · nginx proxy · Certbot",
    },
  },
  {
    id: "clipstar",
    name: "ClipStar",
    domain: "clipstar.ironslash.com",
    url: "https://clipstar.ironslash.com",
    category: "Media Platform",
    tagline: "Plataforma de video con streaming optimizado para iOS Safari.",
    stack: ["FastAPI", "Python", "nginx"],
    accent: "#fb923c",
    modal: {
      overview:
        "Servicio de landing y recursos multimedia servido por FastAPI. Streaming de video con soporte Range Requests crítico para reproducción en iOS.",
      howItWorks: [
        "FastAPI en puerto 8000 sirve /landing y /resources.",
        "nginx proxea todo el tráfico con headers Range e If-Range para Safari.",
        "CORS y cache headers configurados para assets de video inmutables.",
      ],
      highlights: [
        "Streaming compatible iOS",
        "Buffering desactivado para video",
        "Landing + recursos unificados",
        "Verificación Google Search Console",
      ],
      infra: "FastAPI :8000 · nginx proxy con range headers",
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Descubrimiento",
    text: "Entendemos el problema, usuarios y restricciones. Definimos alcance y métricas de éxito.",
  },
  {
    step: "02",
    title: "Arquitectura",
    text: "Elegimos stack, dibujamos flujos y acordamos entregables incrementales sin sorpresas.",
  },
  {
    step: "03",
    title: "Build",
    text: "Desarrollo iterativo con demos frecuentes. Código limpio, tipado y revisiones continuas.",
  },
  {
    step: "04",
    title: "Deploy",
    text: "Producción en tu infraestructura: nginx, SSL, PM2, monitoreo y documentación de operación.",
  },
  {
    step: "05",
    title: "Evolución",
    text: "Soporte post-lanzamiento, optimización de performance y nuevas features según datos reales.",
  },
];

export const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "Flask",
  "PostgreSQL", "Stripe", "OpenAI", "Three.js", "Tailwind", "Docker",
  "nginx", "PM2", "WhatsApp API", "Vite",
];
