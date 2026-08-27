import React from 'react';
import { motion } from 'framer-motion';
import { BENTO_FEATURES } from '../data/airdiveData';
import { Sparkles, Cpu, Box, Bot, CloudLightning, Layers, ArrowUpRight } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  Cpu,
  Box,
  Bot,
  CloudLightning,
  Layers
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 bg-[#05060b] border-b border-white/5 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <span>CAPABILITIES & INFRASTRUCTURE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Designed for <span className="text-gradient-cyan">Maximum Impact</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Combining cutting-edge artificial intelligence, high-throughput cloud architecture, and immersive 3D technology.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {BENTO_FEATURES.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative glass-card p-8 rounded-3xl overflow-hidden ${item.span} flex flex-col justify-between hover:scale-[1.01] transition-all duration-300`}
              >
                {/* Subtle Gradient Backlight */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                      {item.category}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
