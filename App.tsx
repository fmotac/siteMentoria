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
      <a
        href="https://wa.me/5511992268175"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato WhatsApp"
        className="fixed right-4 bottom-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center w-14 h-14"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .007 5.373.007 12 0 13.992.485 15.877 1.39 17.542L0 24l6.605-1.338A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12 0-1.98-.476-3.844-1.48-5.52zM12 22.05c-1.26 0-2.49-.33-3.57-.95l-.26-.15-3.92.79.83-3.83-.17-.31A9.02 9.02 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm5.12-7.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18 0-.34-.04-.47-.04-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.47.07-.72.34c-.25.27-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.86.14.18 1.94 3.02 4.7 4.23 3.03 1.34 3.03.9 3.58.85.55-.05 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.07-.12-.25-.18-.52-.32z" />
        </svg>
      </a>
    </div>
  );
}

export default App;