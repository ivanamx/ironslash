import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/company";
import { useModal } from "../context/ModalContext";
import { useScrollProgress } from "../hooks/useReveal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="nav-inner">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="logo-iron">Iron</span>
          <span className="logo-slash">Slash</span>
        </a>

        <nav className="nav-links" aria-label="Principal">
          {NAV.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
          <button type="button" className="nav-about" onClick={() => openModal({ type: "about" })}>
            Nosotros
          </button>
        </nav>

        <button
          type="button"
          className="nav-cta"
          onClick={() => scrollTo("contacto")}
        >
          Iniciar proyecto
        </button>

        <button
          type="button"
          className="nav-burger"
          aria-expanded={menuOpen}
          aria-label="Menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile">
          {NAV.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
          <button type="button" onClick={() => { setMenuOpen(false); openModal({ type: "about" }); }}>
            Nosotros
          </button>
          <button type="button" className="nav-cta" onClick={() => scrollTo("contacto")}>
            Iniciar proyecto
          </button>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-label="Introducción">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow--1" aria-hidden="true" />
      <div className="hero-glow hero-glow--2" aria-hidden="true" />
      <div className="hero-beam" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="pulse-dot" aria-hidden="true" />
          Desarrollo de software · {SITE.location}
        </p>
        <h1>
          Construimos productos
          <br />
          <span className="hero-accent">digitales de élite</span>
        </h1>
        <p className="hero-sub">
          {SITE.tagline} Web apps, APIs, bots e IA aplicada — diseñados con precisión,
          desplegados en producción real.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}>
            Ver proyectos
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}>
            Hablemos
          </button>
        </div>
        <div className="hero-stats" aria-label="Métricas">
          <div><strong>8+</strong><span>Proyectos en producción</span></div>
          <div><strong>100%</strong><span>Deploy real</span></div>
          <div><strong>24/7</strong><span>Bots activos</span></div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
