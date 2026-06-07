import { useState } from "react";
import { SITE } from "../data/company";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const { ref, visible } = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="section section--dark" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`section-inner reveal ${visible ? "reveal--visible" : ""}`}>
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="section-eyebrow">Contacto</p>
            <h2>¿Listo para construir?</h2>
            <p>
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas con una
              evaluación honesta de alcance, stack y tiempos.
            </p>
            <a href={`mailto:${SITE.email}`} className="contact-email">
              {SITE.email}
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact-success">
                <span className="success-icon" aria-hidden="true">✓</span>
                <p>Mensaje recibido. Te contactaremos pronto.</p>
              </div>
            ) : (
              <>
                <label>
                  <span>Nombre</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label>
                  <span>Proyecto</span>
                  <textarea name="message" rows={4} required placeholder="¿Qué quieres construir?" />
                </label>
                <button type="submit" className="btn btn-primary btn-full">
                  Enviar mensaje
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
          <p>Software premium. Deploy real.</p>
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
