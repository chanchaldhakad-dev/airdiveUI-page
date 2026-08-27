import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users, Shield, Layers, Code, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HeroIntro() {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-28 flex items-center justify-center overflow-hidden bg-[#fafafa] border-b border-zinc-200">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-human-dots opacity-70 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Human Studio Headline & CTAs */}
          <div className="lg:col-span-6 text-left">
            
            {/* Agency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>DIGITAL PRODUCT STUDIO & SOFTWARE ENGINEERING</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.15]"
            >
              We Design & Build <br />
              <span className="text-blue-600">Exceptional Software</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl"
            >
              AirDive is a technology studio. We partner with founders and companies to design, engineer, and ship web applications, mobile apps, and custom software products.
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToHome}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-xl shadow-sm transition-colors text-center"
              >
                View Services & Process
              </button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-200 text-xs text-zinc-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>UI/UX Product Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Mobile iOS & Android</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clean App / Product UI Showcase Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <div className="app-mockup-window bg-white w-full">
              
              {/* Browser Window Bar */}
              <div className="bg-zinc-100 px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-300 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-zinc-300 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-zinc-300 inline-block" />
                  <div className="ml-2 bg-white px-3 py-0.5 rounded-md border border-zinc-200 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-zinc-400" />
                    <span>app.airdive.co.in/dashboard</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                  LIVE APP DEMO
                </span>
              </div>

              {/* Mockup Dashboard Content */}
              <div className="p-6 bg-zinc-50/50 space-y-6">
                
                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="flex items-center justify-between text-zinc-500 mb-1">
                      <span className="text-[11px] font-medium">Active Users</span>
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="text-lg font-bold text-zinc-900">14,280</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1">↑ +18% this month</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="flex items-center justify-between text-zinc-500 mb-1">
                      <span className="text-[11px] font-medium">API Speed</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-lg font-bold text-zinc-900">12 ms</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1">Sub-second response</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="flex items-center justify-between text-zinc-500 mb-1">
                      <span className="text-[11px] font-medium">App Status</span>
                      <Shield className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                    <div className="text-lg font-bold text-zinc-900">100%</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1">All Systems Normal</div>
                  </div>
                </div>

                {/* Project Activity Preview Card */}
                <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display text-sm font-bold text-zinc-900">Active Engineering Projects</h4>
                    <span className="text-xs font-semibold text-blue-600">4 In Progress</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                          WA
                        </div>
                        <div>
                          <div className="font-semibold text-zinc-900">Web App Platform</div>
                          <div className="text-[10px] text-zinc-500">React • Node.js • Cloud</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 font-semibold">
                        Ready for QA
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                          MA
                        </div>
                        <div>
                          <div className="font-semibold text-zinc-900">Mobile iOS & Android App</div>
                          <div className="text-[10px] text-zinc-500">React Native • Firebase</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-100 text-blue-800 font-semibold">
                        Sprint 3 Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Bar of Mockup */}
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-200">
                  <span className="font-mono text-[11px]">AIRDIVE PRIVATE LIMITED</span>
                  <span className="font-semibold text-zinc-700 text-[11px]">Digital Product Studio</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
