import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroImage: React.FC = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Image Background with Zoom Animation */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-transparent z-10" />
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop"
                    alt="Industrial Cockpit"
                    className="w-full h-full object-cover opacity-60"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 mb-6 backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                        <span className="text-sm font-semibold tracking-wide">
                            التسجيلات مفتوحة لدورة جانفي 2026
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight max-w-5xl mb-6">
                        تكوين احترافي في <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">سياقة وتشغيل</span> الآلات الثقيلة
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        المدرسة الجزائرية الأولى المتخصصة في التكوين بالمحاكاة للآلات الثقيلة.
                        <br className="hidden md:block" />
                        تدريب آمن، تكنولوجيا متطورة، مع التدريب الميداني، وشهادة معترف بها.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-industrial-yellow text-industrial-dark font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all"
                        >
                            سجل اللآن
                        </motion.button>
                        <button className="px-8 py-4 bg-transparent border-2 border-slate-500 hover:border-white text-white text-lg font-bold rounded-xl transition-all hover:bg-slate-800/50 backdrop-blur-sm">
                            اكتشف التخصصات
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ChevronDown size={40} className="opacity-70" />
            </motion.div>
        </div>
    );
};

export default HeroImage;
