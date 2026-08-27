import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/airdiveData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Process', href: '#process' },
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Clients', href: '#clients' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (location.pathname === '/') {
        const sections = NAV_ITEMS.filter(item => !item.isRoute).map(item => item.href.substring(1));
        const current = sections.find(section => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, item) => {
    setMobileMenuOpen(false);
    if (item.isRoute) {
      return; // Handled by Link
    }

    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + item.href);
    } else {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05060b]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 p-0.5 border border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/10">
            <div className="w-full h-full bg-[#05060b] rounded-[10px] flex items-center justify-center overflow-hidden">
              <img src="/logo.svg" alt="AirDive Logo" className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              AIRDIVE
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase -mt-1 font-mono">
              PRIVATE LIMITED
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-950/40 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = item.isRoute
              ? location.pathname === item.href
              : location.pathname === '/' && activeSection === item.href.substring(1);

            if (item.isRoute) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions / CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: '#contact' })}
            className="relative inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-wide text-[#05060b] bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-full overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5">
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05060b]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-2 space-y-2 shadow-2xl animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            if (item.isRoute) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: '#contact' })}
              className="block w-full text-center py-3 rounded-xl text-sm font-bold text-[#05060b] bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/20"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
