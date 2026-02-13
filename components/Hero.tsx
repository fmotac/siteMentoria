import React from 'react';
import { ArrowRight, Code2, Rocket, BrainCircuit } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-20 pointer-events-none">
         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
         <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-4">
          <span className="font-roboto text-orange-400 font-bold uppercase tracking-wider text-lg md:text-2xl">
            MENTORIA DE PROGRAMAÇÃO
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Dos Fundamentos à <br />
          <span className="gradient-text">Inteligência Artificial</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          Uma jornada de mentoria transformadora. 10 encontros ao vivo, uma hora cada, só você e o professor. Dominando lógica, construindo APIs robustas e integrando IA. Sem atalhos, com profundidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.asaas.com/c/bze9klap4k5mygrr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg">
              Quero Garantir Minha Vaga
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <Button variant="outline" size="lg" onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Cronograma
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <Code2 className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="font-bold text-xl mb-2">JS + Python</h3>
            <p className="text-slate-400 text-sm">Aprenda as duas linguagens mais poderosas do mercado simultaneamente.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <BrainCircuit className="h-10 w-10 text-accent-400 mb-4" />
            <h3 className="font-bold text-xl mb-2">Integração com IA</h3>
            <p className="text-slate-400 text-sm">Vá além do básico: aprenda engenharia de prompts técnica e automação.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <Rocket className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="font-bold text-xl mb-2">Projetos Reais</h3>
            <p className="text-slate-400 text-sm">Saia com um portfólio completo: E-commerce, Agendamentos e muito mais.</p>
          </div>
        </div>
      </div>
    </div>
  );
};