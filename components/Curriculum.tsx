import React from 'react';
import { ModuleItem } from '../types';
import { 
  Terminal, 
  Repeat, 
  Database, 
  Box, 
  FileSearch, 
  Server, 
  HardDrive, 
  Layout, 
  Bot, 
  Rocket 
} from 'lucide-react';

const modules: ModuleItem[] = [
  {
    id: 1,
    title: "Encontro 1: Fundamentos & Lógica",
    description: "Pensamento computacional antes de tudo. Entenda algoritmos, variáveis e condicionais. Regra de Ouro: Planejar a lógica com pseudocódigo antes de codificar.",
    tags: ["VS Code", "Lógica", "Setup"],
    icon: Terminal
  },
  {
    id: 2,
    title: "Encontro 2: Controle & Funções",
    description: "Domine Loops e Funções. Aprenda a modularizar código e o princípio DRY (Don't Repeat Yourself). Projetos práticos como Gerador de Tabuada e Fibonacci.",
    tags: ["Loops", "Functions", "Clean Code"],
    icon: Repeat
  },
  {
    id: 3,
    title: "Encontro 3: Estruturas de Dados",
    description: "Organizando o caos. Arrays avançados (Map, Filter, Reduce), Objetos e JSON como linguagem universal. Projeto: Sistema de Cadastro de Alunos.",
    tags: ["Arrays", "Objects", "JSON"],
    icon: Database
  },
  {
    id: 4,
    title: "Encontro 4: Orientação a Objetos (POO)",
    description: "Os 4 Pilares da POO: Encapsulamento, Herança, Polimorfismo e Abstração. Modele o mundo real em código com Classes e Instâncias.",
    tags: ["Classes", "POO", "Herança"],
    icon: Box
  },
  {
    id: 5,
    title: "Encontro 5: Análise de Sistemas",
    description: "Planejar antes de codificar. Requisitos Funcionais e Não-Funcionais, Casos de Uso, Histórias de Usuário e Diagramas ER (Entidade-Relacionamento).",
    tags: ["Modelagem", "Requisitos", "Diagramas"],
    icon: FileSearch
  },
  {
    id: 6,
    title: "Encontro 6: Backend & APIs",
    description: "O cérebro da aplicação. Arquitetura Cliente-Servidor, Protocolo HTTP e construção de APIs RESTful robustas. Métodos GET, POST, PUT, DELETE.",
    tags: ["Node.js", "Python", "REST", "HTTP"],
    icon: Server
  },
  {
    id: 7,
    title: "Encontro 7: Banco de Dados",
    description: "Persistência de dados. SQL vs NoSQL. Queries essenciais (SELECT, JOINs), Transações ACID e uso de ORMs para abstração.",
    tags: ["SQL", "ORM", "Transações"],
    icon: HardDrive
  },
  {
    id: 8,
    title: "Encontro 8: Frontend & Integração",
    description: "A interface do usuário. HTML Semântico, CSS Flexbox/Grid e Manipulação do DOM. Consumo de APIs com Fetch e acessibilidade.",
    tags: ["HTML/CSS", "DOM", "Fetch API"],
    icon: Layout
  },
  {
    id: 9,
    title: "Encontro 9: IA & Engenharia de Prompts",
    description: "IA técnica. Use a IA para debugging, code review e refatoração. Aprenda a escrever prompts técnicos eficazes para gerar código de qualidade.",
    tags: ["Prompt Engineering", "Debugging", "Code Review"],
    icon: Bot
  },
  {
    id: 10,
    title: "Encontro 10: Projeto Final Integrado",
    description: "Do requisito ao deploy. Apresentação do projeto completo Full Stack: Banco de dados, Backend API e Frontend. Review final e roadmap de carreira.",
    tags: ["Full Stack", "Deploy", "Carreira"],
    icon: Rocket
  }
];

export const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Estrutura do <span className="text-blue-500">Programa</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            10 encontros ao vivo, desenhados progressivamente para levar você do zero à engenharia de software profissional.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-8 md:space-y-0">
            {modules.map((module, index) => {
              const Icon = module.icon || Terminal;
              const isEven = index % 2 === 0;

              return (
                <div key={module.id} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 p-4">
                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition-colors shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                          <Icon size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-white">{module.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {module.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {module.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-700 text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-4 border-blue-600 z-10 hidden md:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};