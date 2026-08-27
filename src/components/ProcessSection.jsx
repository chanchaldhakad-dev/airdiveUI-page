import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/airdiveData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#05060b] border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <span>METHODOLOGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Our 5-Step <span className="text-gradient-cyan">Engineering Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            A battle-tested development framework designed for speed, security, and continuous enterprise growth.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-cyan-400/60 bg-slate-900/80 shadow-xl shadow-cyan-500/15 -translate-y-2'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Bar with Step Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`font-mono text-3xl font-extrabold transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-600'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-cyan-400/20 text-cyan-400' : 'bg-white/5 text-slate-500'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Active Indicator Line at Card Bottom */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    Step {idx + 1} of 5
                  </span>
                  <div className={`h-1 rounded-full transition-all duration-500 ${
                    isActive ? 'w-12 bg-gradient-to-r from-cyan-400 to-emerald-400' : 'w-4 bg-slate-800'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Process Progress Track Bar */}
        <div className="mt-12 max-w-4xl mx-auto hidden sm:block">
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-full"
              animate={{ width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
