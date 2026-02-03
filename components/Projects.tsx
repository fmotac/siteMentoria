import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Sistema de Cadastro de Alunos",
    description: "CRUD completo em memória focado em manipulação de Arrays e Objetos.",
    tech: ["JavaScript", "Lógica", "Estrutura de Dados"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Sistema de Biblioteca POO",
    description: "Aplicação dos 4 pilares da Orientação a Objetos para gerenciar livros e empréstimos.",
    tech: ["Classes", "Herança", "Polimorfismo"],
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Agendamento Médico",
    description: "Modelagem completa de banco de dados (DER) e regras de negócio complexas.",
    tech: ["SQL", "Modelagem", "Análise"],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "API",
    description: "Backend completo com autenticação JWT, tratamento de erros e banco de dados.",
    tech: ["Node.js", "Express", "JWT", "Postgres"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Portfólio Prático</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">O Que Você Vai Construir</h2>
          <p className="text-slate-400 mt-4 max-w-2xl">
            A teoria só fixa com a prática. Durante a mentoria, você desenvolverá projetos reais que simulam desafios da indústria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-5 relative">
                <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-4 h-16">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase font-bold text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};