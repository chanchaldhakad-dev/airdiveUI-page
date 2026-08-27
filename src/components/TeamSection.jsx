import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/airdiveData';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase mb-3 block">
            THE TEAM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
            Meet the Core Team Behind <span className="text-blue-600">AirDive</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal">
            Meet the founders, project directors, and engineers building software products at AIRDIVE PRIVATE LIMITED.
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
              className="human-card p-8 rounded-2xl flex flex-col items-center text-center justify-between group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Initial Avatar Badge */}
                <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 group-hover:border-blue-400 group-hover:bg-blue-100 transition-all duration-300 shadow-sm">
                  <span className="font-display font-bold text-2xl text-blue-700 tracking-wider">
                    {member.initials}
                  </span>
                </div>

                {/* Tag */}
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase mb-2">
                  {member.tag}
                </span>

                {/* Name */}
                <h3 className="font-display font-bold text-xl text-zinc-900 group-hover:text-blue-700 transition-colors mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mt-1 mb-4 font-semibold">
                  {member.role}
                </span>

                {/* Bio */}
                <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-zinc-100 w-full">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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
