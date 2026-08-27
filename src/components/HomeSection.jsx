import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Shield, Globe2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HomeSection() {
  return (
    <section id="home" className="relative py-24 bg-[#05060b] overflow-hidden border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Concise Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <span>AIRDIVE DIGITAL CORE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              {COMPANY_INFO.heroHeading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
              We empower modern enterprises with high-frequency backend architectures, intelligent AI agents, and immersive 3D digital interfaces that drive measurable growth.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#05060b] bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all duration-200"
              >
                Discover Our Services
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
              >
                Our 5-Step Process
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Feature Grid Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base mb-1">High-Frequency APIs</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Sub-millisecond query execution and zero-latency backend microservices.</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base mb-1">Enterprise Security</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Multi-stage code audits, automated CI/CD pipelines, and zero-trust cloud setups.</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base mb-1">Global Scale</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Auto-scaling cloud infrastructure built to handle millions of active requests.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
