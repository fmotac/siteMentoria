import {
  Brain,
  Code2,
  Users,
  GraduationCap,
  Cpu,
  TrendingUp,
  Bot,
  Briefcase,
  Rocket
} from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: "1. Aprendizado Assistido (Mão na Massa)",
      desc: "Diferente de cursos gravados passivos, a mentoria foca no \"aprender fazendo\". O aluno é guiado através de desafios técnicos e cadernos de exercícios que simulam problemas reais, garantindo que o conhecimento saia da teoria e vá para a prática imediata.",
      color: "blue"
    },
    {
      icon: <Users size={24} />,
      title: "2. Suporte Individualizado e Humanizado",
      desc: "Um dos maiores pilares é o suporte ativo para tirar dúvidas. O aluno não fica travado em um erro de sintaxe por dias; existe um ecossistema de apoio (via comunidade ou canais diretos) para garantir a continuidade do aprendizado.",
      color: "purple"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "3. Professor Especialista com Vivência de Mercado",
      desc: "As aulas não são ministradas apenas por instrutores, mas por profissionais que atuam na linha de frente do mercado de tecnologia. Isso traz \"macetes\" de código, boas práticas de arquitetura e insights que não estão nos livros.",
      color: "green"
    },
    {
      icon: <Cpu size={24} />,
      title: "4. Foco em Engenharia de Software (Além do Código)",
      desc: "A mentoria não ensina apenas a digitar comandos. Ela aborda a Análise de Sistemas, ensinando o aluno a planejar a lógica, desenhar diagramas e entender requisitos antes de começar a codificar — uma habilidade rara em juniores.",
      color: "orange"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "5. Currículo Progressivo \"Zero ao Full Stack\"",
      desc: "A estrutura é desenhada para construir uma base sólida. Começa na lógica pura, passa por Orientação a Objetos, Bancos de Dados, até chegar no Frontend e Backend integrados, garantindo que não haja \"buracos\" no conhecimento.",
      color: "pink"
    },
    {
      icon: <Bot size={24} />,
      title: "6. Preparação para a Era da Inteligência Artificial",
      desc: "O programa já nasce integrado com as novas demandas do mercado, ensinando como utilizar ferramentas modernas e IA para aumentar a produtividade do desenvolvedor, em vez de apenas competir com elas.",
      color: "indigo"
    },
    {
      icon: <Briefcase size={24} />,
      title: "7. Mentoria de Carreira e Soft Skills",
      desc: "Além do código, o programa foca na postura profissional. Isso inclui como se portar em entrevistas, como construir um portfólio que chame a atenção de recrutadores e como desenvolver a comunicação técnica necessária para trabalhar em equipe.",
      color: "cyan"
    },
    {
      icon: <Rocket size={24} />,
      title: "8. Projetos Reais para Portfólio Profissional",
      desc: "Ao final do cronograma, o aluno terá desenvolvido projetos completos (como sistemas de cadastro e aplicações integradas com API) que servem como prova de competência técnica para o mercado de trabalho.",
      color: "red"
    }
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-400",
    purple: "bg-purple-500/10 text-purple-400",
    green: "bg-green-500/10 text-green-400",
    orange: "bg-orange-500/10 text-orange-400",
    pink: "bg-pink-500/10 text-pink-400",
    indigo: "bg-indigo-500/10 text-indigo-400",
    cyan: "bg-cyan-500/10 text-cyan-400",
    red: "bg-red-500/10 text-red-400"
  };

  return (
    <section className="py-10 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Diferenciais da Mentoria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-all group">
              <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color]} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl text-white mb-3 leading-tight">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};