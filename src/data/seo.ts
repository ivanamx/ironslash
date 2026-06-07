export const SITE_URL = "https://ironslash.com";

export const SEO = {
  title: "IronSlash | Desarrollo de Software, Bots IA y Apps — Toluca & Saltillo",
  description:
    "Empresa de desarrollo de software en Toluca y Saltillo. Apps móviles, bots con inteligencia artificial, automatizaciones, web apps, APIs y plataformas SaaS con deploy en producción.",
  keywords: [
    "desarrollo de software Toluca",
    "desarrollo de software Saltillo",
    "empresa de software Toluca",
    "empresa de software Saltillo",
    "bots con inteligencia artificial",
    "automatizaciones empresariales",
    "apps móviles México",
    "desarrollo web apps",
    "desarrollo SaaS",
    "APIs a medida",
    "bot WhatsApp IA",
    "IronSlash",
  ],
} as const;

export const LOCATIONS = {
  primary: ["Toluca", "Saltillo"],
  region: "México",
  areas: [
    {
      name: "Toluca",
      state: "Estado de México",
      geo: { lat: 19.2826, lng: -99.6557 },
    },
    {
      name: "Saltillo",
      state: "Coahuila",
      geo: { lat: 25.438, lng: -100.9737 },
    },
  ],
} as const;

export const BUSINESS = {
  name: "IronSlash",
  email: "hello@ironslash.com",
  url: SITE_URL,
  description:
    "Desarrollo de software premium: apps, bots con IA, automatizaciones, web apps y plataformas SaaS en Toluca, Saltillo y todo México.",
  services: [
    "Desarrollo de software a medida",
    "Apps móviles iOS y Android",
    "Bots con inteligencia artificial",
    "Automatizaciones empresariales",
    "Web apps y landings premium",
    "APIs y backends",
    "Integraciones Stripe y WhatsApp",
    "DevOps y despliegue en producción",
  ],
} as const;

export function getJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
      email: BUSINESS.email,
      description: BUSINESS.description,
      areaServed: LOCATIONS.areas.map((a) => ({
        "@type": "City",
        name: a.name,
        containedInPlace: { "@type": "State", name: a.state },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: BUSINESS.name,
      url: BUSINESS.url,
      email: BUSINESS.email,
      description: BUSINESS.description,
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Toluca", addressRegion: "MX" },
        { "@type": "City", name: "Saltillo", addressRegion: "MX" },
        { "@type": "Country", name: "México" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo de software",
        itemListElement: BUSINESS.services.map((s, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: { "@type": "Service", name: s },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: BUSINESS.name,
      url: BUSINESS.url,
      description: SEO.description,
      inLanguage: "es-MX",
    },
  ];
}
