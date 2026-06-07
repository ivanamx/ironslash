import { PROJECTS } from "../data/projects";
import { useModal } from "../context/ModalContext";
import { useReveal } from "../hooks/useReveal";

export function Projects() {
  const { openModal } = useModal();
  const { ref, visible } = useReveal();

  return (
    <section id="proyectos" className="section section--dark" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`section-inner reveal ${visible ? "reveal--visible" : ""}`}>
        <header className="section-header">
          <p className="section-eyebrow">Portfolio</p>
          <h2>Nuestros proyectos</h2>
          <p className="section-desc">
            Productos reales en producción — cada uno con su dominio, stack e infraestructura documentada.
            Toca un proyecto para ver cómo funciona.
          </p>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <button
              key={proj.id}
              type="button"
              className="project-card"
              style={{
                animationDelay: `${i * 60}ms`,
                "--accent": proj.accent,
              } as React.CSSProperties}
              onClick={() => openModal({ type: "project", id: proj.id })}
            >
              <div className="project-card-top">
                <span className="project-category">{proj.category}</span>
                <span className="project-domain">{proj.domain}</span>
              </div>
              <h3>{proj.name}</h3>
              <p>{proj.tagline}</p>
              <div className="project-tags">
                {proj.stack.slice(0, 3).map((t) => (
                  <span key={t} className="tag tag--sm">{t}</span>
                ))}
              </div>
              <span className="card-link">Explorar →</span>
              <div className="project-card-glow" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
