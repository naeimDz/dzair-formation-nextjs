import React from 'react';
import { HSE_POINTS } from '../constants';

const HSE: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Caution Strip Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#FACC15,#FACC15_20px,#000_20px,#000_40px)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-industrial-yellow font-bold tracking-widest uppercase text-sm">HSE & Discipline</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">سلامة العمل وأخلاقيات التشغيل</h2>
          <p className="text-gray-400 text-lg">
            لأن قيادة الآلات الثقيلة ليست مجرد تحريك مقابض. نحن نبني عقلية المشغل المحترف الذي يحمي نفسه، زملاءه، ومعدات الشركة.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {HSE_POINTS.map((point, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="mb-6 bg-industrial-yellow/20 w-16 h-16 rounded-full flex items-center justify-center text-industrial-yellow group-hover:scale-110 transition-transform duration-300">
                <point.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-industrial-yellow transition-colors">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HSE;