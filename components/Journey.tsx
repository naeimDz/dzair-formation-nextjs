import React from 'react';
import { Reveal } from './Reveal';
import { JOURNEY_STEPS } from '../constants';

export const Journey: React.FC = () => {
    return (
        <section id="journey" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">مسار <span className="text-yellow-500">النجاح</span></h2>
                        <p className="text-slate-400">رحلتك من مبتدئ إلى مشغل محترف في 4 خطوات</p>
                    </Reveal>
                </div>

                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-1 bg-slate-800 transform translate-x-1/2 "></div>

                    <div className="space-y-12 md:space-y-0">
                        {JOURNEY_STEPS.map((step, index) => (
                            <div key={step.id} className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                                {/* Content Side */}
                                <div className="md:w-[45%] mb-6 md:mb-0">
                                    <Reveal animation={index % 2 === 0 ? 'slide-right' : 'fade-up'} delay={index * 100}>
                                        <div className={`bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-yellow-500/50 transition-all hover:-translate-y-2 duration-300 group relative overflow-hidden`}>
                                            {/* Glow Effect */}
                                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500/5  blur-3xl group-hover:bg-yellow-500/10 transition-all"></div>

                                            <div className="flex items-center gap-4 mb-3">
                                                <div className={`w-10 h-10 ${step.color} flex items-center justify-center text-white shadow-lg`}>
                                                    {step.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </Reveal>
                                </div>

                                {/* Center Point */}
                                <div className="hidden md:flex w-[10%] justify-center items-center relative">
                                    <div className={`w-12 h-12  border-4 border-slate-900 ${step.color} z-10 flex items-center justify-center text-white font-bold`}>
                                        {step.id}
                                    </div>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};