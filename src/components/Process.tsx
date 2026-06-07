import { PROCESS_STEPS, TECH_STACK } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

export function Process() {
  const { ref, visible } = useReveal();

  return (
    <section id="proceso" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`section-inner reveal ${visible ? "reveal--visible" : ""}`}>
        <header className="section-header">
          <p className="section-eyebrow">Proceso</p>
          <h2>De la idea al deploy</h2>
          <p className="section-desc">
            Metodología directa, sin burocracia. Cada fase tiene entregables concretos.
          </p>
        </header>

        <div className="process-track">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="process-step" style={{ animationDelay: `${i * 100}ms` }}>
              <span className="process-num">{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  const { ref, visible } = useReveal();

  return (
    <section id="stack" className="section section--compact" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`section-inner reveal ${visible ? "reveal--visible" : ""}`}>
        <header className="section-header section-header--center">
          <p className="section-eyebrow">Stack</p>
          <h2>Tecnologías que dominamos</h2>
        </header>
        <div className="stack-marquee" aria-label="Stack tecnológico">
          <div className="stack-track">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={`${tech}-${i}`} className="stack-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
