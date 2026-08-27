import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Smartphone, Cloud } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HomeSection() {
  return (
    <section id="home" className="relative py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase mb-3">
              ABOUT AIRDIVE
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-6">
              {COMPANY_INFO.heroHeading}
            </h2>

            <p className="text-zinc-600 text-base sm:text-lg font-normal leading-relaxed mb-8">
              We partner with founders, business leaders, and product teams to turn ideas into high-performing software products. From custom web portals to mobile apps and cloud systems, we focus on code quality, speed, and great user experience.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
              >
                Our Core Services
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-medium tracking-wide text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-300 transition-colors"
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
            className="lg:col-span-6 grid grid-cols-1 gap-4"
          >
            <div className="human-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900 text-base mb-1">Custom Web Applications</h4>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">Responsive web portals, customer platforms, and admin dashboards built with React and Next.js.</p>
              </div>
            </div>

            <div className="human-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900 text-base mb-1">Mobile App Development</h4>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">Cross-platform iOS and Android mobile apps engineered for fluid performance and offline access.</p>
              </div>
            </div>

            <div className="human-card p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-600">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900 text-base mb-1">Cloud Infrastructure & APIs</h4>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">Scalable cloud servers, database setups, and custom API middleware configured for high uptime.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
