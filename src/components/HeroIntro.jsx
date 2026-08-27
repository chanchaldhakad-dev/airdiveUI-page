import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Shield, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HeroIntro() {
  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0a0b10] border-b border-white/10">
      
      {/* Background Video Layer with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/og-image.jpg"
          className="w-full h-full object-cover opacity-25 filter brightness-90 contrast-105"
        >
          <source src="/intro.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Grid Background Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Linear Dark Gradient to keep text crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b10]/80 via-[#0a0b10]/95 to-[#0a0b10]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center justify-center pt-16">
        
        {/* Natural Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SOFTWARE ENGINEERING & CLOUD SOLUTIONS</span>
        </motion.div>

        {/* AirDive Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 p-1 border border-white/15 shadow-2xl">
            <div className="w-full h-full bg-[#0d0f18] rounded-[14px] flex items-center justify-center">
              <img src="/logo.svg" alt="AirDive Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          AIRDIVE <span className="text-gradient-sky">PRIVATE LIMITED</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-10"
        >
          Building reliable web applications, mobile apps, custom business software, and cloud infrastructure for modern companies.
        </motion.p>

        {/* Dual Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToHome}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-[#0a0b10] bg-sky-400 hover:bg-sky-300 rounded-full shadow-lg transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              Explore Our Capabilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={scrollToHome}
      >
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-sky-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
