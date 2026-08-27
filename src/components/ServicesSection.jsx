import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/airdiveData';
import { Globe, Smartphone, Layout, BrainCircuit, Code2, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Globe,
  Smartphone,
  Layout,
  BrainCircuit,
  Code2,
  Cloud
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 bg-[#0b0f17] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span>SERVICE PORTFOLIO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Enterprise IT & <span className="text-gradient-corporate">Software Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            End-to-end technology solutions engineered for reliability, security, and measurable enterprise value.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="corporate-card p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Bulleted Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Service 0{index + 1}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    Request Technical Proposal
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
