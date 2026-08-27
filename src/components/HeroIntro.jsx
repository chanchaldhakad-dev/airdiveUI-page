import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, TrendingUp, Users, Sparkles, Box, Code } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HeroIntro() {
  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-36 sm:pt-40 pb-20 sm:pb-28 flex items-center justify-center bg-[#eaeded] border-b border-[#d5d9d9]">
      
      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Amazon Hero Banner Card */}
          <div className="lg:col-span-7 text-left">
            
            {/* Amazon Choice Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#232f3e] text-white text-xs font-mono mb-6 shadow-sm"
            >
              <span className="bg-[#febd69] text-[#111827] text-[10px] font-bold px-2 py-0.5 rounded">
                AIRDIVE CHOICE
              </span>
              <span>ENTERPRISE IT & SOFTWARE SOLUTIONS</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1111] mb-6 leading-[1.15]"
            >
              Engineering High-Performance <br />
              <span className="text-[#007185]">Software & AI Platforms</span>
            </motion.h1>

            {/* Amazon Rating Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6 text-xs text-[#0f1111]"
            >
              <div className="flex items-center text-[#ff9900]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-bold">4.9 out of 5</span>
              <span className="text-[#565959]">(50+ Enterprise Projects Shipped)</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[#0f1111] text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl"
            >
              AIRDIVE PRIVATE LIMITED is a global enterprise technology partner building web applications, mobile platforms, custom artificial intelligence, and cloud backend infrastructure.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <a
                href="#contact"
                className="btn-amazon-primary px-8 py-3.5 text-sm flex items-center justify-center gap-2 text-center"
              >
                <span>Start a Project Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToHome}
                className="btn-amazon-secondary px-7 py-3.5 text-sm flex items-center justify-center gap-2 text-center"
              >
                Explore AirDive Services
              </button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#d5d9d9] text-xs text-[#565959]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007600] flex-shrink-0" />
                <span className="text-[#0f1111] font-semibold">SOC-2 Security Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#007185] flex-shrink-0" />
                <span className="text-[#0f1111] font-semibold">99.99% SLA Uptime</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Amazon-Style Product Showcase Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {/* Amazon Card 1 */}
            <div className="amazon-card p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#007185] uppercase tracking-wider font-mono">
                  FEATURED CATEGORY
                </span>
                <span className="bg-[#007600]/10 text-[#007600] text-[10px] font-bold px-2 py-0.5 rounded">
                  BEST SELLER
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#0f1111] mb-1">
                Enterprise Web Platforms
              </h3>
              <p className="text-xs text-[#565959] leading-relaxed mb-3">
                High-performance React & Next.js applications engineered for speed, SEO, and fast database queries.
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#eaeded]">
                <span className="text-[#0f1111] font-bold">Fast 2-Week Sprint Delivery</span>
                <a href="#services" className="amazon-link">Learn More ›</a>
              </div>
            </div>

            {/* Amazon Card 2 */}
            <div className="amazon-card p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#007185] uppercase tracking-wider font-mono">
                  MOBILE ENGINEERING
                </span>
                <span className="bg-[#febd69]/30 text-[#111827] text-[10px] font-bold px-2 py-0.5 rounded">
                  TOP RATED
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#0f1111] mb-1">
                iOS & Android Mobile Apps
              </h3>
              <p className="text-xs text-[#565959] leading-relaxed mb-3">
                Cross-platform mobile apps with native UI performance, offline data sync, and instant push alerts.
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#eaeded]">
                <span className="text-[#0f1111] font-bold">iOS & Android Deployment</span>
                <a href="#services" className="amazon-link">Learn More ›</a>
              </div>
            </div>

            {/* Amazon Card 3 */}
            <div className="amazon-card p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#007185] uppercase tracking-wider font-mono">
                  CLOUD & AI
                </span>
                <span className="bg-[#232f3e] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  HIGH SPEED
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#0f1111] mb-1">
                Cloud APIs & AI Solutions
              </h3>
              <p className="text-xs text-[#565959] leading-relaxed mb-3">
                Custom API middleware, automated AI workflows, and cloud database architecture.
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#eaeded]">
                <span className="text-[#0f1111] font-bold">Sub-Second Responses</span>
                <a href="#services" className="amazon-link">Learn More ›</a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
