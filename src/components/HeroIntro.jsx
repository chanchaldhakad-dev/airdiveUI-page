import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Server, ShieldCheck, Activity, CheckCircle2, Copy } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

export default function HeroIntro() {
  const [activeTab, setActiveTab] = useState('api');
  const [copied, setCopied] = useState(false);

  const scrollToHome = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const apiSnippet = `{
  "status": "200 OK",
  "system": "AirDive Cloud Gateway v2.4",
  "latency_ms": 11.4,
  "nodes_active": [
    "ap-south-1 (Mumbai)",
    "us-east-1 (N. Virginia)",
    "eu-central-1 (Frankfurt)"
  ],
  "security_audit": "PASSED (TLS 1.3, SOC-2)",
  "active_services": ["Web API", "Mobile Gateway", "AI Agent Pipeline"]
}`;

  const aiSnippet = `// AirDive Enterprise AI Pipeline
const aiPipeline = new AirDiveAI({
  model: "enterprise-rag-v4",
  securityMode: "zero-knowledge-vpc",
  maxLatency: "150ms"
});

const result = await aiPipeline.execute({
  query: "Analyze enterprise Q3 compliance specs",
  sourceDocuments: ["s3://airdive-internal-docs/specs.pdf"]
});`;

  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200">
      
      {/* Background Video Layer with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/og-image.jpg"
          className="w-full h-full object-cover opacity-[0.06] filter grayscale"
        >
          <source src="/intro.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Light Corporate Grid Overlay */}
        <div className="absolute inset-0 bg-corporate-grid opacity-60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-6 text-left">
            
            {/* Enterprise Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-mono mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AIRDIVE SYSTEM ONLINE • SLA 99.99%</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
            >
              Enterprise Software <br />
              <span className="text-gradient-corporate">& IT Engineering</span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl"
            >
              AIRDIVE PRIVATE LIMITED is a global technology partner building high-availability web applications, mobile platforms, custom AI workflows, and cloud backend infrastructure.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Schedule Technical Call
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToHome}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-sm transition-colors"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Trust Metrics Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 pt-4 border-t border-slate-200 text-xs font-mono text-slate-600"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SOC-2 & ISO Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-600" />
                <span>High-Frequency Infrastructure</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive System Terminal / Dashboard Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="terminal-window p-1">
              
              {/* Window Header */}
              <div className="bg-[#1e293b] px-4 py-3 rounded-t-[10px] flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  <span className="text-xs font-mono text-slate-300 ml-2">airdive-gateway-v2.4</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="bg-[#0f172a] px-4 pt-3 flex items-center gap-2 border-b border-slate-800">
                <button
                  onClick={() => setActiveTab('api')}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                    activeTab === 'api'
                      ? 'bg-[#1e293b] text-sky-400 border-t border-x border-slate-700 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  Cloud API Output
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                    activeTab === 'ai'
                      ? 'bg-[#1e293b] text-sky-400 border-t border-x border-slate-700 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  AI Pipeline Code
                </button>

                <button
                  onClick={() => setActiveTab('status')}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                    activeTab === 'status'
                      ? 'bg-[#1e293b] text-sky-400 border-t border-x border-slate-700 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  Server Health
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-5 font-mono text-xs text-slate-300 min-h-[260px] bg-[#090d16]">
                {activeTab === 'api' && (
                  <div>
                    <div className="flex items-center justify-between mb-3 text-slate-400 text-[11px]">
                      <span>GET /api/v2/system/health HTTP/1.1</span>
                      <button
                        onClick={() => handleCopyCode(apiSnippet)}
                        className="flex items-center gap-1 hover:text-white transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
                      </button>
                    </div>
                    <pre className="text-emerald-400 leading-relaxed overflow-x-auto">
                      {apiSnippet}
                    </pre>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div>
                    <div className="flex items-center justify-between mb-3 text-slate-400 text-[11px]">
                      <span>airdive-ai-agent.ts</span>
                      <button
                        onClick={() => handleCopyCode(aiSnippet)}
                        className="flex items-center gap-1 hover:text-white transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                      </button>
                    </div>
                    <pre className="text-sky-300 leading-relaxed overflow-x-auto">
                      {aiSnippet}
                    </pre>
                  </div>
                )}

                {activeTab === 'status' && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="flex justify-between mb-1 text-slate-400 text-xs">
                        <span>CPU Core Utilization</span>
                        <span className="text-emerald-400">14.2% (Optimal)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[14%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-slate-400 text-xs">
                        <span>Memory Allocation (Redis Cluster)</span>
                        <span className="text-sky-400">2.1 GB / 16 GB</span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-400 rounded-full w-[22%]" />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-4 text-[11px]">
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block">Total Requests Today</span>
                        <span className="text-white font-bold text-sm">1,248,930</span>
                      </div>
                      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block">System Uptime</span>
                        <span className="text-emerald-400 font-bold text-sm">99.998%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-[#0f172a] px-4 py-2 rounded-b-[10px] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Cluster Region: ap-south-1 (India)
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
