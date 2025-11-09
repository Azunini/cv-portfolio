import React from 'react';
import Layout from './layout/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// Así no bloquean el renderizado inicial lo cargo local
import "@fortawesome/fontawesome-free/css/all.min.css";

// Le digo que app es del tipo function componetn (FC)
const App: React.FC = () => {
  return (
    <Layout>
      <section id="home" className='min-h-screen w-full'><Home /></section>
      <section id="projects" className='w-full'> <Projects /></section>
      <section id="about" className='min-h-screen w-full'> <About /></section>
      <section id="contact" className='min-h-scree w-full'><Contact /></section>   
    </Layout>
  );
};

export default App;
