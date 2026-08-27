import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/airdiveData';
import { Linkedin, Twitter, Github, User, ShieldCheck } from 'lucide-react';

export default function TeamSection() {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const gradients = [
    'from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/40 text-cyan-400',
    'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/40 text-emerald-400',
    'from-purple-500/20 via-indigo-500/10 to-transparent border-purple-500/40 text-purple-400',
    'from-blue-500/20 via-cyan-500/10 to-transparent border-blue-500/40 text-blue-400'
  ];

  return (
    <section id="team" className="relative py-28 bg-[#05060b] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEADERSHIP & ENGINEERING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Meet Our <span className="text-gradient-cyan">Core Team</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Passionate tech leaders, software architects, and engineers driving digital transformation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => {
            const grad = gradients[idx % gradients.length];
            const initials = getInitials(member.name);

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/10 flex flex-col items-center text-center justify-between"
              >
                {/* Initial Badge / Avatar Circle */}
                <div className="flex flex-col items-center w-full">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${grad} p-1 border shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-[#090b11] rounded-full flex items-center justify-center">
                      <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                        {initials}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full mt-1">
                    {member.role}
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-white/5 w-full">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                    aria-label="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
