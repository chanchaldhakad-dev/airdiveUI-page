import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Smartphone, Cloud } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HomeSection() {
  return (
    <section id="home" className="relative py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-mono font-bold tracking-wider text-[#0078d4] uppercase mb-3">
              ABOUT AIRDIVE PRIVATE LIMITED
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              {COMPANY_INFO.heroHeading}
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8">
              We partner with founders, business leaders, and enterprise product teams to turn software specifications into high-performing digital products. From custom web portals to mobile apps and cloud backend systems, we focus on code quality, security compliance, and user experience.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold tracking-wide text-white bg-[#0078d4] hover:bg-[#005a9e] shadow-sm transition-all"
              >
                Our Service Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold tracking-wide text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                Delivery Methodology
              </a>
            </div>
          </motion.div>

          {/* Right Column: Microsoft Fluent Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 gap-4"
          >
            <motion.div
              whileHover={{ y: -3 }}
              className="fluent-card p-6 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-blue-50 text-[#0078d4]">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base mb-1">Custom Web Applications</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Responsive web portals, customer platforms, and admin dashboards built with React, Next.js, and Node.js.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="fluent-card p-6 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base mb-1">Mobile App Development</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Cross-platform iOS and Android mobile apps engineered for fluid performance and offline data synchronization.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="fluent-card p-6 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base mb-1">Cloud Infrastructure & APIs</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Scalable cloud servers, database setups, and custom API middleware configured for high availability.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
