import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/airdiveData';
import { Linkedin, Twitter, Github, Users, ShieldCheck } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 bg-[#0b0f17] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>EXECUTIVE LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Leadership & <span className="text-gradient-corporate">Core Engineering</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Meet the executives and senior engineering leads directing enterprise strategy and software operations at AIRDIVE PRIVATE LIMITED.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="corporate-card p-8 rounded-2xl flex flex-col items-center text-center justify-between group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Initial Badge */}
                <div className="w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:border-blue-400/50 group-hover:bg-blue-600/20 transition-all duration-300">
                  <span className="font-display font-bold text-2xl text-blue-400 tracking-wider">
                    {member.initials}
                  </span>
                </div>

                {/* Tag */}
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">
                  {member.titleTag}
                </span>

                {/* Name */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-blue-300 transition-colors mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-full mt-1 mb-4">
                  {member.role}
                </span>

                {/* Bio */}
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-white/5 w-full">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
