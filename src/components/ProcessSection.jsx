import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/airdiveData';
import { CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#eaeded] border-b border-[#d5d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-wider text-[#007185] uppercase mb-3 block">
            AIRDIVE DELIVERY MODEL
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f1111] mb-4">
            Our 5-Stage <span className="text-[#007185]">Development Lifecycle</span>
          </h2>
          <p className="text-[#565959] text-sm sm:text-base font-normal">
            A transparent, collaborative approach from initial planning through design, engineering, and long-term support.
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
                className={`relative amazon-card p-6 rounded-lg cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-[#007185] bg-white shadow-md'
                    : 'border-[#d5d9d9] bg-white'
                }`}
              >
                {/* Top Bar with Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-2xl font-bold transition-colors ${
                    isActive ? 'text-[#007185]' : 'text-[#565959]'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${
                    isActive ? 'bg-[#febd69] text-[#111827]' : 'bg-[#eaeded] text-[#565959]'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-base font-bold text-[#0f1111] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#565959] text-xs leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Step Progress Line */}
                <div className="mt-8 pt-4 border-t border-[#eaeded] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#565959] uppercase">
                    Stage 0{idx + 1}
                  </span>
                  <div className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-10 bg-[#febd69]' : 'w-3 bg-[#d5d9d9]'
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
