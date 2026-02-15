import React from 'react';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

export const Instructor: React.FC = () => {
    return (
        <section className="py-10 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center">

                        {/* Image Section */}
                        <div className="lg:w-1/3 w-full p-8 lg:p-12">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-slate-700">
                                    <img
                                        src="/flavio-mota.jpg"
                                        alt="Professor Flávio Mota"
                                        className="w-full h-auto object-cover aspect-square lg:aspect-auto"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/600x600/1e293b/cbd5e1?text=Flávio+Mota";
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-4">
                                        <p className="text-white font-bold text-xl">Flávio Mota</p>
                                        <p className="text-blue-400 text-sm">Professor e Mentor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-2/3 w-full p-8 lg:p-12 lg:pl-0">
                            <div className="mb-6">
                                <span className="text-blue-500 font-bold tracking-wider uppercase text-sm flex items-center gap-2 mb-2">
                                    <GraduationCap size={18} />
                                    Quem será seu mentor?
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Conheça o <span className="gradient-text">Professor</span>
                                </h2>
                            </div>

                            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                                <p>
                                    Profissional com <strong>20 anos de experiência</strong> em Tecnologia da Informação, atuando na educação técnica e profissionalizante, com foco em gestão acadêmica, desenvolvimento curricular e criação de conteúdos educacionais na área de Tecnologia.
                                </p>
                                <p>
                                    Atuo na estruturação e coordenação de cursos técnicos, incluindo definição de matrizes curriculares, elaboração de planos de ensino, produção de materiais didáticos, videoaulas e conteúdos digitais, além da gestão de docentes e ambientes virtuais de aprendizagem (LMS).
                                </p>
                                <p>
                                    Minha base técnica em <strong>Engenharia de Software e Engenharia de Dados</strong> sustenta a construção de currículos atualizados, práticos e alinhados às demandas do mercado, contribuindo para a formação de profissionais qualificados e preparados para a empregabilidade.
                                </p>
                                <p>
                                    Experiência voltada à inovação educacional, qualidade acadêmica e fortalecimento de programas técnicos e profissionalizantes em instituições de ensino.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <Briefcase className="text-blue-400" size={24} />
                                    <span className="text-sm font-medium">20+ Anos de Experiência</span>
                                </div>
                                <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                    <Award className="text-purple-400" size={24} />
                                    <span className="text-sm font-medium">Engenheiro de Software & Dados</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
