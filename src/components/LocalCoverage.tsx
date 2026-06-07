import { SEO_COPY } from "../data/company";
import { LOCATIONS } from "../data/seo";
import { useReveal } from "../hooks/useReveal";

const CAPABILITIES = [
  "Desarrollo de software a medida",
  "Apps móviles",
  "Bots con IA",
  "Automatizaciones",
  "Web apps & SaaS",
  "APIs & backends",
  "WhatsApp bots",
  "DevOps & deploy",
] as const;

export function LocalCoverage() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="cobertura"
      className="section section--compact section--dark"
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Cobertura geográfica y servicios"
    >
      <div className={`section-inner reveal ${visible ? "reveal--visible" : ""}`}>
        <header className="section-header section-header--center">
          <p className="section-eyebrow">Cobertura</p>
          <h2>{SEO_COPY.coverageTitle}</h2>
          <p className="section-desc section-desc--center">{SEO_COPY.coverageBody}</p>
        </header>

        <div className="coverage-grid">
          {LOCATIONS.areas.map((area) => (
            <article key={area.name} className="coverage-card">
              <h3>{area.name}</h3>
              <p className="coverage-state">{area.state}</p>
              <p>
                Desarrollo de software, apps, bots con inteligencia artificial y
                automatizaciones para negocios en {area.name} y zona metropolitana.
              </p>
            </article>
          ))}
        </div>

        <ul className="coverage-tags" aria-label="Especialidades">
          {CAPABILITIES.map((cap) => (
            <li key={cap}>{cap}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
