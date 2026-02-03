import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Curriculum } from './components/Curriculum';
import { Projects } from './components/Projects';
import { Deliverables } from './components/Deliverables';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <Hero />
      <Features />
      <Curriculum />
      <Projects />
      <Deliverables />
      <Footer />
    </div>
  );
}

export default App;