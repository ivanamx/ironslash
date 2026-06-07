import { ModalProvider, useModal } from "./context/ModalContext";
import { Navbar, Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process, TechStack } from "./components/Process";
import { Contact, Footer } from "./components/Contact";
import { ModalHost } from "./components/ModalHost";

function AppContent() {
  const { openModal } = useModal();

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
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
