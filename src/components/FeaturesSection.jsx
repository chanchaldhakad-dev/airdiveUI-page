import React from 'react';
import { motion } from 'framer-motion';
import { BENTO_FEATURES } from '../data/airdiveData';
import { Layout, Smartphone, Server, Sparkles, ShieldCheck, Palette } from 'lucide-react';

const ICON_MAP = {
  Layout,
  Smartphone,
  Server,
  Sparkles,
  ShieldCheck,
  Palette
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 bg-[#ffffff] border-b border-[#d5d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-wider text-[#007185] uppercase mb-3 block">
            CORE CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f1111] mb-4">
            Everything You Need to <span className="text-[#007185]">Ship Great Software</span>
          </h2>
          <p className="text-[#565959] text-sm sm:text-base font-normal">
            From initial product design and responsive web apps to cross-platform mobile tools and secure cloud hosting.
          </p>
        </div>

        {/* Amazon-Style Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_FEATURES.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Layout;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="amazon-card p-8 rounded-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-wider text-[#131921] bg-[#febd69] font-bold px-2.5 py-1 rounded uppercase">
                      {item.category}
                    </span>
                    <div className="p-3 rounded-md bg-[#232f3e] text-[#febd69] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-[#0f1111] mb-3 group-hover:text-[#007185] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#565959] text-xs sm:text-sm leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Badge Footer */}
                <div className="pt-4 border-t border-[#eaeded] flex items-center justify-between text-xs font-mono text-[#565959]">
                  <span className="text-[#007600] font-bold">{item.badge}</span>
                  <span className="text-[#007185] font-semibold">Verified Spec</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
