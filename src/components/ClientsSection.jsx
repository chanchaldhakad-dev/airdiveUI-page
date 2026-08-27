import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../data/airdiveData';
import { Building2, ShieldCheck } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section id="clients" className="relative py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENTERPRISE DOMAINS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Industry Solutions & Technical Verticals
          </h2>
        </div>

        {/* Client Verticals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="corporate-card p-6 rounded-2xl flex flex-col items-center justify-center group cursor-pointer border border-slate-200 hover:border-sky-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-sky-600 transition-colors mb-3">
                <Building2 className="w-5 h-5" />
              </div>

              <span className="font-display font-bold text-xs sm:text-sm text-slate-800 group-hover:text-sky-700 tracking-wider transition-colors">
                {client.logoText}
              </span>

              <span className="text-[10px] font-mono text-slate-500 mt-1">
                {client.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
