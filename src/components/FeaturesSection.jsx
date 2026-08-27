import React from 'react';
import { motion } from 'framer-motion';
import { BENTO_FEATURES } from '../data/airdiveData';
import { Server, Cpu, BrainCircuit, Smartphone, ShieldCheck, Layout, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Server,
  Cpu,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
  Layout
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 bg-[#0b0f17] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Engineering Excellence & <span className="text-gradient-corporate">Standards</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Modular software architecture, sub-second latency APIs, strict cybersecurity audits, and scalable cloud deployments.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_FEATURES.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Server;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="corporate-card p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-blue-400 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-full uppercase">
                      {item.category}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-emerald-400 font-semibold">{item.metric}</span>
                  <span className="text-slate-500">{item.tag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
