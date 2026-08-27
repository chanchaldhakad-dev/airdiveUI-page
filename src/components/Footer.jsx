import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES } from '../data/airdiveData';
import { Twitter, Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Corporate Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 p-0.5 border border-sky-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <img src="/logo.svg" alt="AirDive Logo" className="w-6 h-6 object-contain" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">AIRDIVE</span>
                <span className="text-[9px] tracking-widest text-slate-400 uppercase -mt-1 font-mono">PRIVATE LIMITED</span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm">
              AIRDIVE PRIVATE LIMITED is a global enterprise software and technology engineering partner building high-availability web platforms, mobile apps, and cloud backend systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-sky-400 hover:bg-slate-700 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-sky-400 hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-sky-400 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-mono tracking-widest text-white uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Overview</a></li>
              <li><a href="#process" className="hover:text-sky-400 transition-colors">Methodology</a></li>
              <li><a href="#features" className="hover:text-sky-400 transition-colors">Capabilities</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Services</a></li>
              <li><Link to="/blog" className="hover:text-sky-400 transition-colors">Publications</Link></li>
              <li><a href="#clients" className="hover:text-sky-400 transition-colors">Domains</a></li>
              <li><a href="#team" className="hover:text-sky-400 transition-colors">Leadership</a></li>
              <li><a href="#faq" className="hover:text-sky-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-mono tracking-widest text-white uppercase">Services</h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-sky-400" />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-mono tracking-widest text-white uppercase">Corporate HQ</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-400 transition-colors">{COMPANY_INFO.email}</a>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phones.join(' / ')}</span>
              </p>
              <p className="flex items-start gap-2 pt-1 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {new Date().getFullYear()} AIRDIVE PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
