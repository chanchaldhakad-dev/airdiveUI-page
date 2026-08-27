import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, ShieldCheck, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HomeSection() {
  return (
    <section id="home" className="relative py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Executive Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono mb-4">
              <span>COMPANY OVERVIEW</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              {COMPANY_INFO.heroHeading}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              AIRDIVE PRIVATE LIMITED partners with growing businesses and global enterprises to architect, engineer, and deploy mission-critical web applications, mobile platforms, and high-frequency backend API infrastructures.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold tracking-wide text-white bg-sky-600 hover:bg-sky-700 shadow-sm transition-all"
              >
                Our Service Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-medium tracking-wide text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-colors"
              >
                Delivery Methodology
              </a>
            </div>
          </motion.div>

          {/* Right Column: Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            <div className="corporate-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-slate-900 text-base mb-1">High-Throughput Architectures</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Microservices engineered for high concurrency, low latency, and continuous uptime.</p>
              </div>
            </div>

            <div className="corporate-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-slate-900 text-base mb-1">Security & Compliance</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Encrypted data layers, role-based access control, and continuous vulnerability monitoring.</p>
              </div>
            </div>

            <div className="corporate-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-slate-900 text-base mb-1">Full-Stack Technology Suite</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Mastery across React, Node.js, Python, AWS/GCP, Docker, and Mobile App stacks.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
