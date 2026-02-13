import React from 'react';
import { MessageSquareQuote } from 'lucide-react';

const videos = [
    "eMulgeByzNE",
    "tJSELxAo8hQ",
    "04vsVDRpUBg",
    "cB4MMPtHvXA",
    "Ly-TAP2FFKY",
    "-L80yyY0y7A",
    "DhRF_bEwHQ0"
];

export const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-slate-950 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-4">
                        <MessageSquareQuote size={16} />
                        O que dizem nossos alunos
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Histórias de <span className="gradient-text">Sucesso</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Veja como a mentoria transformou a carreira e os estudos de quem já passou por aqui.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((id, index) => (
                        <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-lg hover:border-blue-500/30 transition-all duration-300">
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title={`Depoimento ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
