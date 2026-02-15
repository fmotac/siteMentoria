import React from 'react';
import { Video, Users, CheckCircle, FileCode, Award, Clock, Headphones, Rocket } from 'lucide-react';
import { Button } from './Button';

const deliverables = [
  {
    icon: Clock,
    title: "10 Horas Ao Vivo",
    description: "10 encontros de uma hora cada, só você e o professor. Interação real, tire dúvidas na hora e participe de discussões técnicas profundas.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: Video,
    title: "Gravações e Vídeo aulas",
    description: "Acesso completo ao curso com todas as aulas gravadas por 1 ano. Revise quando quiser, no seu próprio ritmo, quantas vezes precisar.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: FileCode,
    title: "Material, Apostilas & Código",
    description: "Acesso a todos os slides, resumos em PDF e repositórios de código dos projetos desenvolvidos durante a mentoria.",
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  {
    icon: Headphones,
    title: "Suporte & Review",
    description: "Não travamos seu aprendizado. Tire dúvidas durante a semana e receba feedback nos desafios de código.",
    color: "text-pink-400",
    bg: "bg-pink-400/10"
  },
  {
    icon: Award,
    title: "Certificado de Conclusão",
    description: "Ao final da jornada, receba um certificado comprovando sua formação em Lógica, Full Stack e Integração com IA.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  {
    icon: Rocket,
    title: "Pacote Completo",
    description: "10 encontros ao vivo com especialista (1h), gravações completas, 6 meses de suporte via WhatsApp, 12 meses de acesso, coleção de ebooks ADS e certificado incluso.",
    color: "text-green-400",
    bg: "bg-green-400/10"
  }
];

export const Deliverables: React.FC = () => {
  return (
    <section id="deliverables" className="py-10 bg-slate-900 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-2">
            <CheckCircle size={16} />
            Tudo Incluso
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            O Que Você Recebe ao <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Entrar na Mentoria
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Um pacote completo desenhado para acelerar sua carreira, sem "pegadinhas" ou custos extras. Você foca em aprender, nós cuidamos do resto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
              <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};