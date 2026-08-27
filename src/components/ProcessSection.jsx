import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/airdiveData';
import { CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono mb-4">
            <span>DELIVERY MODEL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Our 5-Stage <span className="text-gradient-corporate">Engineering Lifecycle</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            A structured, transparent delivery pipeline ensuring code quality, security compliance, and long-term cloud stability.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative corporate-card p-6 rounded-2xl cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-sky-500 bg-sky-50/50 shadow-md'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Top Bar with Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-2xl font-bold transition-colors ${
                    isActive ? 'text-sky-600' : 'text-slate-400'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Step Progress Line */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Stage 0{idx + 1}
                  </span>
                  <div className={`h-1 rounded-full transition-all duration-300 ${
                    isActive ? 'w-10 bg-sky-600' : 'w-3 bg-slate-200'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
