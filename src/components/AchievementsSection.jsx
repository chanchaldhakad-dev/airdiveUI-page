import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/airdiveData';
import { Award, Layers, Users, ShieldCheck } from 'lucide-react';

const ICONS = [Layers, Users, Award, ShieldCheck];

function AnimatedCounter({ targetNumber, suffix, duration = 1.8 }) {
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
    <section className="relative py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComp = ICONS[idx % ICONS.length];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="fluent-card p-6 sm:p-8 rounded-xl text-center flex flex-col items-center justify-center border border-slate-200"
              >
                <div className="p-3 rounded-lg bg-blue-50 text-[#0078d4] mb-4">
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                  <AnimatedCounter targetNumber={item.number} suffix={item.suffix} />
                </div>

                <h4 className="font-display font-bold text-sm sm:text-base text-slate-800 mb-1">
                  {item.label}
                </h4>

                <p className="text-slate-500 text-xs font-normal max-w-[200px]">
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
