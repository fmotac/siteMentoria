import React from 'react';
import { Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="text-blue-500" size={24} />
            <span className="font-bold text-slate-200 text-lg">Mentoria Qikbyte</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>

          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Mentoria Qikbyte.</p>
            <p>Todos os direitos reservados.</p>
            <p>(11) 99226-8175</p>
          </div>
        </div>
      </div>
    </footer>
  );
};