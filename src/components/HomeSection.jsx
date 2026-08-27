import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Smartphone, Cloud, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HomeSection() {
  return (
    <section id="home" className="relative py-24 bg-[#ffffff] border-b border-[#d5d9d9]">
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
            <span className="text-xs font-mono font-bold tracking-wider text-[#007185] uppercase mb-3">
              ABOUT AIRDIVE PRIVATE LIMITED
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f1111] leading-tight mb-6">
              {COMPANY_INFO.heroHeading}
            </h2>

            <p className="text-[#565959] text-base sm:text-lg font-normal leading-relaxed mb-8">
              We partner with founders, business leaders, and product teams to turn software requirements into high-performing digital products. From custom web portals to mobile apps and cloud systems, we focus on code quality, security, and exceptional user experience.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="btn-amazon-primary px-6 py-3 text-xs flex items-center gap-2 shadow-sm"
              >
                <span>View Our Service Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#process"
                className="btn-amazon-secondary px-6 py-3 text-xs flex items-center gap-2"
              >
                Delivery Methodology
              </a>
            </div>
          </motion.div>

          {/* Right Column: Amazon-Style Feature Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 gap-4"
          >
            <div className="amazon-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-md bg-[#232f3e] text-[#febd69]">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-display font-bold text-[#0f1111] text-base">Custom Web Applications</h4>
                  <span className="text-[10px] font-bold text-[#007600] bg-[#007600]/10 px-2 py-0.5 rounded">VERIFIED</span>
                </div>
                <p className="text-[#565959] text-xs sm:text-sm leading-relaxed">Responsive web portals, customer platforms, and admin dashboards built with React, Next.js, and Node.js.</p>
              </div>
            </div>

            <div className="amazon-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-md bg-[#232f3e] text-[#febd69]">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-display font-bold text-[#0f1111] text-base">Mobile App Development</h4>
                  <span className="text-[10px] font-bold text-[#007185] bg-sky-50 px-2 py-0.5 rounded">CROSS-PLATFORM</span>
                </div>
                <p className="text-[#565959] text-xs sm:text-sm leading-relaxed">Cross-platform iOS and Android mobile apps engineered for fluid performance and offline data synchronization.</p>
              </div>
            </div>

            <div className="amazon-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-md bg-[#232f3e] text-[#febd69]">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-display font-bold text-[#0f1111] text-base">Cloud Infrastructure & APIs</h4>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">HIGH AVAILABILITY</span>
                </div>
                <p className="text-[#565959] text-xs sm:text-sm leading-relaxed">Scalable cloud servers, database setups, and custom API middleware configured for high availability.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
