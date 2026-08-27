import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/airdiveData';
import { Award, Layers, Users, Zap } from 'lucide-react';

const ICONS = [Layers, Users, Zap, Award];

function AnimatedCounter({ targetNumber, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = targetNumber;
    const totalFrames = duration * 60;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(start + (end - start) * progress);
      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  return (
    <section className="relative py-20 bg-[#05060b] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComp = ICONS[idx % ICONS.length];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl text-center flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 border border-white/10"
              >
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  <AnimatedCounter targetNumber={item.number} suffix={item.suffix} />
                </div>

                <h4 className="font-display font-semibold text-sm sm:text-base text-slate-200 mb-1">
                  {item.label}
                </h4>

                <p className="text-slate-400 text-xs font-light max-w-[200px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
