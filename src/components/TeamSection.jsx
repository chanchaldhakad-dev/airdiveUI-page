import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/airdiveData';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-wider text-[#0078d4] uppercase mb-3 block">
            AIRDIVE LEADERSHIP
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Meet the Core Team Behind <span className="text-[#0078d4]">AirDive</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Founders, project directors, and engineering leads directing software operations at AIRDIVE PRIVATE LIMITED.
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
              whileHover={{ y: -4 }}
              className="fluent-card p-8 rounded-xl flex flex-col items-center text-center justify-between group border border-slate-200"
            >
              <div className="flex flex-col items-center w-full">
                {/* Initial Avatar Badge */}
                <div className="w-20 h-20 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 group-hover:border-[#0078d4] transition-all shadow-xs">
                  <span className="font-display font-bold text-2xl text-[#0078d4] tracking-wider">
                    {member.initials}
                  </span>
                </div>

                {/* Tag */}
                <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mb-2">
                  {member.tag}
                </span>

                {/* Name */}
                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#0078d4] transition-colors mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-xs font-mono text-[#0078d4] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-semibold mt-1 mb-4">
                  {member.role}
                </span>

                {/* Bio */}
                <p className="text-slate-600 text-xs font-normal leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-slate-100 w-full">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-slate-100 text-slate-700 hover:text-[#0078d4] hover:bg-blue-50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-slate-100 text-slate-700 hover:text-[#0078d4] hover:bg-blue-50 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-slate-100 text-slate-700 hover:text-[#0078d4] hover:bg-blue-50 transition-colors"
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
