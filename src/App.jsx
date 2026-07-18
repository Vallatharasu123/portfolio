import "./App.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AIResearch from "./components/AIResearch";
import Education from "./components/Education";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Vallatharasu Katturaja" />
        <meta itemProp="jobTitle" content="Junior Full Stack Developer" />
        <meta
          itemProp="description"
          content="Junior Full Stack Developer specializing in Flutter, Laravel, POS systems, and AI-assisted business software."
        />
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AIResearch />
        <Education />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}

export default App;
