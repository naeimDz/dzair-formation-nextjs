import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, ArrowLeft } from 'lucide-react';

const AudienceSplit: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'students' | 'companies' | null>(null);

  return (
    <section className="h-[80vh] flex flex-col md:flex-row overflow-hidden bg-black">
      {/* Students Side */}
      <motion.div 
        className="relative flex-1 cursor-pointer border-b md:border-b-0 md:border-l border-gray-700 group overflow-hidden"
        onMouseEnter={() => setHoveredSide('students')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ flex: hoveredSide === 'students' ? 1.5 : hoveredSide === 'companies' ? 0.7 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors z-10"></div>
        <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1000&auto=format&fit=crop" alt="Student" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
        
        <div className="relative z-20 h-full flex flex-col justify-center p-12 text-white">
          <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <GraduationCap />
          </div>
          <h3 className="text-4xl font-bold mb-4">للمتدربين</h3>
          <p className="text-lg text-gray-200 max-w-md mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
            تدخل بلا خبرة... تخرج مستعد لميدان العمل. احصل على مهنة مطلوبة وراتب محترم.
          </p>
          <button className="flex items-center gap-2 text-blue-400 font-bold group-hover:translate-x-[-10px] transition-transform">
            سجل الآن <ArrowLeft size={20} />
          </button>
        </div>
      </motion.div>

      {/* Companies Side */}
      <motion.div 
        className="relative flex-1 cursor-pointer group overflow-hidden"
        onMouseEnter={() => setHoveredSide('companies')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ flex: hoveredSide === 'companies' ? 1.5 : hoveredSide === 'students' ? 0.7 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-orange-900/20 group-hover:bg-orange-900/40 transition-colors z-10"></div>
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop" alt="Construction Site" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />

        <div className="relative z-20 h-full flex flex-col justify-center p-12 text-white">
          <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <Building2 />
          </div>
          <h3 className="text-4xl font-bold mb-4">للشركات</h3>
          <p className="text-lg text-gray-200 max-w-md mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
            اختبارات تقييم قبل التوظيف (Pre-Hiring Assessment) وتدريب مستمر لطواقمكم لرفع الكفاءة وتقليل الحوادث.
          </p>
          <button className="flex items-center gap-2 text-orange-400 font-bold group-hover:translate-x-[-10px] transition-transform">
            شراكة أعمال <ArrowLeft size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default AudienceSplit;