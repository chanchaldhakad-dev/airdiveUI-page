import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../data/airdiveData';
import { Building2 } from 'lucide-react';

export default function ClientsSection() {
  return (
    <section id="clients" className="relative py-24 bg-[#fafafa] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase mb-3 block">
            DOMAINS & SECTORS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Software Solutions Across Industries
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
              className="human-card p-6 rounded-2xl flex flex-col items-center justify-center group cursor-pointer border border-zinc-200 hover:border-blue-400"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors mb-3">
                <Building2 className="w-5 h-5" />
              </div>

              <span className="font-display font-bold text-xs sm:text-sm text-zinc-800 group-hover:text-blue-700 tracking-wider transition-colors">
                {client.logoText}
              </span>

              <span className="text-[10px] font-mono text-zinc-500 mt-1">
                {client.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
