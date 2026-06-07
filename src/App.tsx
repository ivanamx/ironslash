import { ModalProvider, useModal } from "./context/ModalContext";
import { Navbar, Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process, TechStack } from "./components/Process";
import { LocalCoverage } from "./components/LocalCoverage";
import { Contact, Footer } from "./components/Contact";
import { ModalHost } from "./components/ModalHost";
import { JsonLd } from "./components/JsonLd";

function AppContent() {
  const { openModal } = useModal();

  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <LocalCoverage />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer onPrivacy={() => openModal({ type: "privacy" })} />
      <ModalHost />
    </>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}
