import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/airdiveData';
import { Globe, Smartphone, Layout, BrainCircuit, Code2, Glasses, ArrowLeft, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Globe,
  Smartphone,
  Layout,
  BrainCircuit,
  Code2,
  Glasses
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
    <section id="services" className="relative py-28 bg-[#0a0b10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-4">
              <span>OUR SERVICES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Software & Technology <span className="text-gradient-sky">Services</span>
            </h2>
          </div>

          {/* Controls */}
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

        {/* Horizontal Card Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="snap-start flex-shrink-0 w-[280px] sm:w-[350px] natural-card p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Service 0{index + 1}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
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
