import React from 'react';
import { AlertTriangle, CheckCircle2, Fuel, ShieldCheck, TrendingUp, Clock } from 'lucide-react';

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-dark-lighter relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Problem Side (Traditional) */}
                    <div className="space-y-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
                        <div className="inline-block p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-300">
                            التكوين التقليدي <br />
                            <span className="text-red-500 decoration-red-500/30 underline decoration-wavy">مكلف وخطير</span>
                        </h2>
                        <ul className="space-y-6">
                            {[
                                { icon: AlertTriangle, text: 'مخاطر عالية للحوادث أثناء التدريب الأولي', color: 'text-red-500' },
                                { icon: Fuel, text: 'تكاليف باهظة للوقود واستهلاك الآلات', color: 'text-red-500' },
                                { icon: Clock, text: 'ساعات تجريب محدودة بسبب ندرة العتاد', color: 'text-red-500' }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <item.icon className={`w-6 h-6 ${item.color} mt-1`} />
                                    <span className="text-zinc-400 text-lg">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Side (Simulation) */}
                    <div className="glass-panel p-8 md:p-12 rounded-3xl border-primary/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="relative z-10 space-y-8">
                            <div className="inline-block p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                الحل مع مدرستنا <br />
                                <span className="text-primary glow-text">أمان وكفاءة قصوى</span>
                            </h2>

                            <ul className="space-y-6">
                                {[
                                    { icon: ShieldCheck, text: 'بيئة تدريب آمنة 100% خالية من المخاطر' },
                                    { icon: TrendingUp, text: 'تقييم دقيق للأداء بالذكاء الاصطناعي' },
                                    { icon: CheckCircle2, text: 'سيناريوهات متعددة (مطر، ليل، أعطال)' }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="bg-primary/20 p-1 ">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-white text-lg font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">70%</div>
                                    <div className="text-xs text-zinc-400">توفير تكلفة</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">+20%</div>
                                    <div className="text-xs text-zinc-400">سرعة تعلم</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">0</div>
                                    <div className="text-xs text-zinc-400">حوادث</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}