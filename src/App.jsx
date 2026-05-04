import { AnimatedBackground } from "./components/AnimatedBackground";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      
      <Navbar />
      
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
