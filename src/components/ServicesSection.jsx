import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/airdiveData';
import { Globe, Smartphone, Layout, BrainCircuit, Code2, Cloud, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

const ICON_MAP = {
  Globe,
  Smartphone,
  Layout,
  BrainCircuit,
  Code2,
  Cloud
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
    <section id="services" className="relative py-28 bg-[#fafafa] border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase mb-3 block">
              OUR SERVICES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              End-to-End <span className="text-blue-600">Software Services</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 Services Grid / Horizontal Swipe */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="snap-start flex-shrink-0 w-[85vw] max-w-[320px] sm:w-[350px] human-card p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-zinc-100 mb-6">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">
                    Service 0{index + 1}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    Inquire Project
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
