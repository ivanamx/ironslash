import { SERVICES } from "../data/services";
import { useModal } from "../context/ModalContext";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const { openModal } = useModal();
  const { ref, visible } = useReveal();

  return (
    <section id="servicios" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`section-inner reveal ${visible ? "reveal--visible" : ""}`}>
        <header className="section-header">
          <p className="section-eyebrow">Servicios</p>
          <h2>Lo que construimos</h2>
          <p className="section-desc">
            Soluciones end-to-end con el mismo estándar que aplicamos a nuestro propio portfolio.
          </p>
        </header>

        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <button
              key={svc.id}
              type="button"
              className="service-card"
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => openModal({ type: "service", id: svc.id })}
            >
              <span className="service-icon" aria-hidden="true">{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.summary}</p>
              <span className="card-link">Detalles →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
