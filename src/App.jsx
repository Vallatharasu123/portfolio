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
      <main>
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
