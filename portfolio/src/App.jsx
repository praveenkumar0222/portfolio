import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default App;