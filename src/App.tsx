import React from 'react';
import Layout from './layout/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

// Icon fonts (se cargan localmente desde node_modules/imports)
import "@fortawesome/fontawesome-free/css/all.min.css";

/**
 * App principal: las secciones están montadas permanentemente (no routing).
 * Esto evita desmontar/montar Home -> mejora UX y evita re-render visible.
 */
const App: React.FC = () => {
  return (
    <Layout>
      {/* Preload visual: imagen cargada en background y en DOM (hidden) para asegurar cache */}
      <div aria-hidden className="hidden">
        <img src="/images/HeroImg.webp" alt="preload" loading="eager" />
      </div>

      <section id="home" className="min-h-screen w-full">
        <Home />
      </section>

      <section id="projects" className="w-full">
        <Projects />
      </section>

      <section id="about" className="min-h-screen w-full">
        <About />
      </section>

      <section id="contact" className="min-h-screen w-full">
        <Contact />
      </section>
    </Layout>
  );
};

export default App;
