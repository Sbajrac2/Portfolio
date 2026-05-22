// ============================================================
// Home.jsx — Assembles all sections in order
// Add or remove sections here to customize the page layout
// ============================================================

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Personality from "../components/Personality";
import Contact from "../components/Contact";

function Home({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky navigation with section tabs */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content — each section has an id for scroll navigation */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="beyond">
          <Personality />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Home;
