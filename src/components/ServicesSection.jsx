import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/airdiveData';
import { Globe, Smartphone, Layout, Glasses, BrainCircuit, Code2, ArrowLeft, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Globe,
  Smartphone,
  Layout,
  Glasses,
  BrainCircuit,
  Code2
};

export default function ServicesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#05060b] border-b border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <span>OUR SERVICES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Full-Spectrum <span className="text-gradient-cyan">Engineering Solutions</span>
            </h2>
          </div>

          {/* Controls for Desktop Horizontal Scroll */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Container (Desktop) / Touch Scroll (Mobile) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="snap-start flex-shrink-0 w-[280px] sm:w-[360px] glass-card p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-cyan-400/40 group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>

                  {/* 1-2 Lines Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
                    Service 0{index + 1}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    Inquire
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
