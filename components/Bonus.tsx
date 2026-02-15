import React from 'react';
import { Gift, BookOpen, Star, CheckCircle } from 'lucide-react';

export const Bonus = () => {
    return (
        <section className="py-10 bg-slate-900/50 border-t border-slate-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium text-sm mb-4">
                        <Gift className="w-4 h-4" />
                        <span className="uppercase tracking-wider">Bônus Exclusivo</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-3">
                        <span className="text-slate-100">Coleção </span>
                        <span className="gradient-text">Profissionalizante</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Além de todo o conteúdo da mentoria, você levará para casa nossa biblioteca completa de material didático.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Left */}
                    <div className="space-y-8">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <BookOpen className="text-purple-400 w-5 h-5" />
                                O que está incluído:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Lógica de Programação e Algoritmos",
                                    "Fundamentos de JavaScript, Python e Java",
                                    "Programação Orientada a Objetos",
                                    "Desenvolvimento Web Moderno (React, Node, etc.)",
                                    "Banco de Dados (SQL e NoSQL)",
                                    "Machine Learning e Data Science"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-6 rounded-2xl border border-purple-500/20">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500/20 p-3 rounded-lg">
                                    <Star className="w-6 h-6 text-purple-400 text-yellow-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Material 100% Apostilado</h4>
                                    <p className="text-slate-400 text-sm">
                                        Todo o conteúdo vem acompanhado de material didático em PDF de alta qualidade para você consultar quando quiser.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                            {/* Placeholder for the image - describing where to put it */}
                            <img
                                src="/bonus-collection.png"
                                alt="Coleção Profissionalizante - Livros e Apostilas"
                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/800x800/1e293b/cbd5e1?text=Imagem+da+Coleção+Aqui";
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6">
                                <p className="text-white font-medium">Formação Completa com Vídeo Aulas e Apostilas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
