import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HeroIntro() {
  const canvasRef = useRef(null);

  // High-performance ambient particle canvas fallback if video is buffering or offline
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 210, 239, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 239, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00d2ef';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-[#05060b]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/og-image.jpg"
          className="w-full h-full object-cover opacity-35 filter brightness-90 contrast-110"
        >
          <source src="/intro.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Canvas Fallback for ambient glow */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

        {/* Radial Dark Overlay to keep text perfectly legible */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-gradient" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center justify-center pt-16">
        
        {/* Badge / Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>ENTERPRISE SOFTWARE & AI SYSTEMS</span>
        </motion.div>

        {/* AirDive Brand Logo - Scales / Fades in smoothly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-emerald-400/20 to-purple-500/20 p-1 border border-cyan-400/40 shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full bg-[#05060b] rounded-[14px] flex items-center justify-center">
              <img src="/logo.svg" alt="AirDive Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
          </div>
        </motion.div>

        {/* AirDive Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          AIRDIVE <span className="text-gradient-cyan">PRIVATE LIMITED</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-8"
        >
          Engineering high-performance software, custom artificial intelligence, and scalable cloud infrastructure for visionary modern enterprises.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToHome}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-[#05060b] bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-full overflow-hidden shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/45 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Explore AirDive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all duration-200"
          >
            Contact Engineering Team
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToHome}
      >
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
