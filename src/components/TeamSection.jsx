import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/airdiveData';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 bg-[#ffffff] border-b border-[#d5d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-wider text-[#007185] uppercase mb-3 block">
            AIRDIVE LEADERSHIP
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f1111] mb-4">
            Meet the Core Team Behind <span className="text-[#007185]">AirDive</span>
          </h2>
          <p className="text-[#565959] text-sm sm:text-base font-normal">
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
              className="amazon-card p-8 rounded-lg flex flex-col items-center text-center justify-between group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Initial Avatar Badge */}
                <div className="w-20 h-20 rounded-lg bg-[#232f3e] border border-[#febd69]/50 flex items-center justify-center mb-6 group-hover:border-[#febd69] transition-all shadow-sm">
                  <span className="font-display font-bold text-2xl text-[#febd69] tracking-wider">
                    {member.initials}
                  </span>
                </div>

                {/* Tag */}
                <span className="text-[10px] font-mono tracking-wider text-[#565959] uppercase mb-2">
                  {member.tag}
                </span>

                {/* Name */}
                <h3 className="font-display font-bold text-xl text-[#0f1111] group-hover:text-[#007185] transition-colors mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-xs font-mono text-[#111827] bg-[#febd69] px-3 py-1 rounded font-bold mt-1 mb-4">
                  {member.role}
                </span>

                {/* Bio */}
                <p className="text-[#565959] text-xs font-normal leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-[#eaeded] w-full">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-[#eaeded] text-[#0f1111] hover:text-[#c7511f] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-[#eaeded] text-[#0f1111] hover:text-[#c7511f] transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-[#eaeded] text-[#0f1111] hover:text-[#c7511f] transition-colors"
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
