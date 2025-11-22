import React from 'react';
import { Shield, Zap, Globe, Clock, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

export const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-black text-white">
                            لماذا <span className="text-amber-500">المحاكاة؟</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-slate-400 max-w-lg">
                            تجاوز طرق التدريب التقليدية. نحن نستخدم التكنولوجيا لتقليل التكلفة، زيادة الأمان، وتسريع عملية التعلم.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Main Large Card */}
                    <Reveal className="md:col-span-2 row-span-2">
                        <div className="h-full bg-slate-950 rounded-3xl p-8 border border-slate-800 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Shield size={200} />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6 text-slate-900 shadow-lg shadow-amber-500/20">
                                        <Shield size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">أمان بنسبة 100%</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                        في الواقع، خطأ واحد قد يكلف الملايين أو الأرواح. في المحاكي، الخطأ هو مجرد فرصة للتعلم.
                                        تدرب على المناورات الخطرة دون أي قلق.
                                    </p>
                                </div>
                                <div className="mt-8 inline-flex gap-2">
                                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold">صفر حوادث</span>
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold">بيئة مراقبة</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Secondary Cards */}
                    <Reveal delay={100} className="h-full">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-slate-700 h-full hover:border-amber-500/50 transition-colors">
                            <Zap className="text-amber-400 mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2">تكرار غير محدود</h3>
                            <p className="text-slate-400 text-sm">أعد المحاولة مئات المرات دون استهلاك قطرة وقود واحدة.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={200} className="h-full">
                        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                            <Globe className="text-blue-400 mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2">كل الظروف الجوية</h3>
                            <p className="text-slate-400 text-sm">مطر، ضباب، ليل، رياح. نحن نصنع الطقس الذي تتدرب فيه.</p>
                        </div>
                    </Reveal>

                    {/* Wide Card */}
                    <Reveal delay={300} className="md:col-span-3">
                        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <TrendingUp className="text-green-400" />
                                    نتائج مثبتة
                                </h3>
                                <p className="text-slate-400">
                                    تشير الدراسات إلى أن المتدربين الذين يبدأون بالمحاكاة يكتسبون المهارات أسرع بـ 50% من التدريب التقليدي فقط.
                                </p>
                            </div>
                            <div className="flex gap-8 text-center border-t md:border-t-0 md:border-r border-slate-700 pt-6 md:pt-0 md:pr-6">
                                <div>
                                    <div className="text-3xl font-black text-white">50%</div>
                                    <div className="text-xs text-slate-400 uppercase">وقت أقل</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white">30%</div>
                                    <div className="text-xs text-slate-400 uppercase">تركيز أعلى</div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
};