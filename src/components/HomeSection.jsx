import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Shield, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HomeSection() {
  return (
    <section id="home" className="relative py-24 bg-[#0a0b10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-4">
              <span>ABOUT AIRDIVE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              {COMPANY_INFO.heroHeading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
              We work closely with companies and founders to plan, build, and deploy production-grade software applications, mobile experiences, and secure cloud backends.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#0a0b10] bg-sky-400 hover:bg-sky-300 transition-all duration-200"
              >
                Our Core Services
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
              >
                How We Work
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            <div className="natural-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sky-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base mb-1">Fast & Reliable Backends</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Clean RESTful and GraphQL APIs engineered for fast query speeds and smooth data syncing.</p>
              </div>
            </div>

            <div className="natural-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base mb-1">Security & Best Practices</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Encrypted data layers, role-based user authentication, and regular automated backups.</p>
              </div>
            </div>

            <div className="natural-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base mb-1">Modern Web & Mobile Stack</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Building with React, Next.js, Node.js, Python, and cross-platform mobile frameworks.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
