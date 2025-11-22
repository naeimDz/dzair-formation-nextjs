import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="py-20 bg-industrial-dark relative border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline"
              >
                {/* Simple counter simulation for demo purposes */}
                <span>{stat.value}</span>
                <span className="text-industrial-yellow text-3xl ml-1">{stat.suffix}</span>
              </motion.div>
              <p className="text-gray-400 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;