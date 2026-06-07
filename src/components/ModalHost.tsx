import { useEffect, useRef } from "react";
import { useModal } from "../context/ModalContext";
import { SERVICES } from "../data/services";
import { PROJECTS } from "../data/projects";

export function ModalHost() {
  const { modal, closeModal } = useModal();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modal && panelRef.current) {
      panelRef.current.focus();
    }
  }, [modal]);

  if (!modal) return null;

  let content: React.ReactNode = null;

  if (modal.type === "service") {
    const svc = SERVICES.find((s) => s.id === modal.id);
    if (!svc) return null;
    content = (
      <>
        <p className="modal-eyebrow">{svc.icon} Servicio</p>
        <h2 id="modal-title">{svc.modal.headline}</h2>
        {svc.modal.body.map((p) => (
          <p key={p.slice(0, 24)} className="modal-body">{p}</p>
        ))}
        <div className="modal-list-block">
          <h3>Entregables</h3>
          <ul>
            {svc.modal.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  if (modal.type === "project") {
    const proj = PROJECTS.find((p) => p.id === modal.id);
    if (!proj) return null;
    content = (
      <>
        <p className="modal-eyebrow" style={{ color: proj.accent }}>{proj.category}</p>
        <h2 id="modal-title">{proj.name}</h2>
        <p className="modal-domain">
          <a href={proj.url} target="_blank" rel="noopener noreferrer">{proj.domain} ↗</a>
        </p>
        <p className="modal-body">{proj.modal.overview}</p>
        <div className="modal-list-block">
          <h3>Cómo funciona</h3>
          <ol>
            {proj.modal.howItWorks.map((h) => (
              <li key={h.slice(0, 24)}>{h}</li>
            ))}
          </ol>
        </div>
        <div className="modal-list-block">
          <h3>Destacados</h3>
          <ul>
            {proj.modal.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <p className="modal-infra">
          <span className="mono-label">Infra</span> {proj.modal.infra}
        </p>
        <div className="modal-tags">
          {proj.stack.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </>
    );
  }

  if (modal.type === "about") {
    content = (
      <>
        <p className="modal-eyebrow">◆ Nosotros</p>
        <h2 id="modal-title">IronSlash</h2>
        <p className="modal-body">
          Somos un estudio de desarrollo de software enfocado en productos digitales premium.
          Construimos desde landings de alta conversión hasta plataformas completas con bots,
          pagos e inteligencia artificial — siempre con código limpio y deploy en producción real.
        </p>
        <p className="modal-body">
          Operamos desde México con alcance global. Cada proyecto en nuestro portfolio corre
          en infraestructura propia: nginx, PM2, SSL y bases de datos administradas con
          los mismos estándares que ofrecemos a clientes.
        </p>
        <div className="modal-list-block">
          <h3>Principios</h3>
          <ul>
            <li>Precisión sobre volumen — menos proyectos, más calidad</li>
            <li>Transparencia técnica en cada decisión de arquitectura</li>
            <li>Entrega en producción, no solo en Figma o staging</li>
            <li>Diseño y código como una sola disciplina</li>
          </ul>
        </div>
      </>
    );
  }

  if (modal.type === "privacy") {
    content = (
      <>
        <p className="modal-eyebrow">Legal</p>
        <h2 id="modal-title">Privacidad</h2>
        <p className="modal-body">
          Este sitio no recopila datos personales más allá de analytics anónimos estándar
          que puedan configurarse en el futuro. El formulario de contacto es informativo;
          al activarse en producción, se publicará aquí la política completa de tratamiento
          de datos conforme a la legislación aplicable.
        </p>
        <p className="modal-body">
          Para consultas sobre privacidad:{" "}
          <a href="mailto:hello@ironslash.com">hello@ironslash.com</a>
        </p>
      </>
    );
  }

  return (
    <div className="modal-overlay" onClick={closeModal} role="presentation">
      <div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={closeModal} aria-label="Cerrar">
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal-scroll">{content}</div>
      </div>
    </div>
  );
}
