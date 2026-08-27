import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cloud, ShieldCheck, Activity, Cpu, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HeroIntro() {
  const [activeTab, setActiveTab] = useState('cloud');

  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-28 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-[#f3f4f6] border-b border-gray-200">
      
      {/* Subtle Microsoft Fluent Accent Waves */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#0078d4]/10 via-[#00a4ef]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Microsoft Fluent Intro */}
          <div className="lg:col-span-6 text-left">
            
            {/* AirDive Badge with Logo */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-slate-800 text-xs font-semibold mb-6 shadow-xs"
            >
              <img src="/logo.svg" alt="AirDive Logo" className="w-4 h-4 object-contain flex-shrink-0" />
              <span>AIRDIVE ENTERPRISE SOFTWARE & CLOUD ENGINEERING</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
            >
              Empowering Innovation with <br />
              <span className="text-[#0078d4]">Enterprise Software & AI</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl"
            >
              AIRDIVE PRIVATE LIMITED is a technology partner engineering high-availability web applications, mobile platforms, custom AI systems, and cloud infrastructure.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wide text-white bg-[#0078d4] hover:bg-[#005a9e] rounded-md shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-center"
              >
                Schedule Technical Call
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToHome}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md shadow-xs transition-colors text-center"
              >
                Explore Services & Stack
              </button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 text-xs text-slate-600 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7fba00] flex-shrink-0" />
                <span>SOC-2 & ISO Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#0078d4] flex-shrink-0" />
                <span>99.99% SLA Cloud Uptime</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Microsoft Fluent Interactive Architecture Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <div className="fluent-card p-1 overflow-hidden bg-white shadow-fluent-elevated border border-slate-200">
              
              {/* Window Header */}
              <div className="bg-slate-900 text-white px-4 py-3 rounded-t-lg flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" alt="AirDive Logo" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-mono text-slate-200 font-semibold">AirDive Cloud Hub v3.0</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="bg-slate-100 px-3 pt-2.5 flex items-center gap-2 border-b border-slate-200 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`px-3 py-1.5 rounded-t-md text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'cloud'
                      ? 'bg-white text-[#0078d4] border-t-2 border-t-[#0078d4] border-x border-slate-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5" />
                  Cloud Architecture
                </button>

                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-3 py-1.5 rounded-t-md text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'web'
                      ? 'bg-white text-[#0078d4] border-t-2 border-t-[#0078d4] border-x border-slate-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  Web Platform
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 rounded-t-md text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'ai'
                      ? 'bg-white text-[#0078d4] border-t-2 border-t-[#0078d4] border-x border-slate-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  AI RAG Pipeline
                </button>
              </div>

              {/* Tab Display Area */}
              <div className="p-6 bg-white min-h-[250px]">
                {activeTab === 'cloud' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-100 pb-2">
                      <span>Azure & AWS Cloud Mesh Status</span>
                      <span className="text-[#0078d4]">High Throughput</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">API Gateway Latency</span>
                        <span className="text-slate-900 font-extrabold text-base">11.4 ms</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">System Availability</span>
                        <span className="text-emerald-600 font-extrabold text-base">99.998%</span>
                      </div>
                    </div>

                    <div className="bg-slate-900 text-emerald-400 p-3 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed">
                      {`{ "region": "ap-south-1", "cluster": "k8s-prod-airdive", "security": "TLS 1.3 Audit Passed" }`}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'web' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-100 pb-2">
                      <span>React & Next.js Enterprise Frontend</span>
                      <span className="text-emerald-600">Lighthouse 99</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="font-semibold text-slate-900">First Contentful Paint (FCP)</span>
                        <span className="text-emerald-600 font-mono font-bold">0.4 s</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="font-semibold text-slate-900">Server Side Rendering (SSR)</span>
                        <span className="text-[#0078d4] font-mono font-bold">Enabled</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'ai' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 border-b border-slate-100 pb-2">
                      <span>Enterprise AI Assistant Pipeline</span>
                      <span className="text-purple-600">Private VPC</span>
                    </div>

                    <pre className="bg-slate-900 text-sky-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed">
{`const aiAgent = new AirDiveAI({
  model: "enterprise-rag-v4",
  securityMode: "zero-knowledge-vpc"
});`}
                    </pre>
                  </motion.div>
                )}
              </div>

              {/* Window Footer */}
              <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Cluster Online: ap-south-1 (India)
                </span>
                <span>AIRDIVE PRIVATE LIMITED</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
