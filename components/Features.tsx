import React from 'react';
import { Brain, Layers, ShieldCheck, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Diferenciais da Mentoria: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Construindo o Desenvolvedor do Futuro
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Não é apenas mais um curso de cópia de código. Nossa metodologia foca na construção do "músculo" de resolução de problemas.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Lógica Antes de Sintaxe</h4>
                  <p className="text-slate-400 text-sm">Priorizamos o pensamento computacional. Aprenda a resolver o problema antes de escrever uma linha de código.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">JS + Python Simultaneamente</h4>
                  <p className="text-slate-400 text-sm">Uma abordagem única que amplia suas habilidades para Full Stack, Data Science e Automação.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Sem IA nos Fundamentos</h4>
                  <p className="text-slate-400 text-sm">Proibimos IA no início para garantir que você desenvolva raciocínio crítico. A IA entra depois, como amplificadora.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Análise de Sistemas Profissional</h4>
                  <p className="text-slate-400 text-sm">Aprenda a levantar requisitos, criar casos de uso e diagramas ER. Evite o retrabalho aprendendo a planejar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 blur-lg opacity-30"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Brain size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-4">A Regra de Ouro</h3>
              <p className="text-slate-300 italic mb-6">
                "Você deve planejar a lógica com pseudocódigo ANTES de codificar em uma linguagem real."
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-700/50 font-mono text-sm shadow-inner">
                  <div className="flex gap-2 mb-2 border-b border-slate-700 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-purple-400">function</span> <span className="text-blue-400">masterSoftwareEng</span>() {'{'}
                  <br/>
                  &nbsp;&nbsp;<span className="text-slate-500">// 1. Entender o Problema</span>
                  <br/>
                  &nbsp;&nbsp;<span className="text-yellow-300">criarAlgoritmo()</span>;
                  <br/>
                  &nbsp;&nbsp;<span className="text-slate-500">// 2. Implementar</span>
                  <br/>
                  &nbsp;&nbsp;<span className="text-blue-300">codificar(Stack.JS_PYTHON)</span>;
                  <br/>
                  &nbsp;&nbsp;<span className="text-slate-500">// 3. Otimizar</span>
                  <br/>
                  &nbsp;&nbsp;<span className="text-green-300">integrarIA()</span>;
                  <br/>
                  {'}'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};