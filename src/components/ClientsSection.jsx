import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../data/airdiveData';
import { Building2 } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section id="clients" className="relative py-24 bg-[#f3f4f6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-wider text-[#0078d4] uppercase mb-3 block">
            CLIENT VERTICALS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Software Engineering Solutions Across Industries
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
              whileHover={{ scale: 1.03 }}
              className="fluent-card p-6 rounded-xl flex flex-col items-center justify-center group cursor-pointer border border-slate-200 hover:border-[#0078d4]"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0078d4] flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors">
                <Building2 className="w-5 h-5" />
              </div>

              <span className="font-display font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#0078d4] tracking-wider transition-colors text-center">
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
