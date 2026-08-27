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
    <section id="services" className="relative py-28 bg-[#eaeded] border-b border-[#d5d9d9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#007185] uppercase mb-3 block">
              AIRDIVE SERVICE CATALOG
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f1111]">
              Enterprise IT & <span className="text-[#007185]">Software Services</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="btn-amazon-secondary p-3 rounded-md text-[#0f1111] transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="btn-amazon-secondary p-3 rounded-md text-[#0f1111] transition-all shadow-sm active:scale-95"
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
                className="snap-start flex-shrink-0 w-[85vw] max-w-[320px] sm:w-[350px] amazon-card p-8 rounded-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-md bg-[#232f3e] text-[#febd69] flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f1111] mb-3 group-hover:text-[#007185] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-[#565959] text-xs sm:text-sm leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-[#eaeded] mb-6">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#0f1111]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#007600] flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eaeded] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#565959] uppercase">
                    Service 0{index + 1}
                  </span>
                  <a
                    href="#contact"
                    className="btn-amazon-primary px-4 py-2 text-xs flex items-center gap-1 shadow-sm"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
