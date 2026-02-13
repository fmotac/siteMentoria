import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para transformar sua carreira?</h3>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        As vagas são limitadas para garantir a qualidade do acompanhamento individual. Garanta sua presença na próxima turma.
                    </p>
                    <div id="enroll" className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="https://www.asaas.com/c/bze9klap4k5mygrr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full sm:w-auto"
                        >
                            <Button size="lg" className="shadow-blue-500/50 animate-pulse-slow w-full sm:w-auto">
                                Sim! Quero Minha Vaga Agora
                            </Button>
                        </a>
                        <p className="text-xs text-slate-500 mt-2 sm:mt-0">
                            * Garantia incondicional de 7 dias
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
