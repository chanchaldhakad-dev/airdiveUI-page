import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/airdiveData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#0b0f17] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span>DELIVERY MODEL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Our 5-Stage <span className="text-gradient-corporate">Engineering Lifecycle</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
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
                    ? 'border-blue-500/60 bg-[#162034]'
                    : 'border-white/10'
                }`}
              >
                {/* Top Bar with Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-2xl font-bold transition-colors ${
                    isActive ? 'text-blue-400' : 'text-slate-500'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-blue-600/30 text-blue-400' : 'bg-white/5 text-slate-600'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Step Progress Line */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Stage 0{idx + 1}
                  </span>
                  <div className={`h-1 rounded-full transition-all duration-300 ${
                    isActive ? 'w-10 bg-blue-500' : 'w-3 bg-slate-800'
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
