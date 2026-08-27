import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShoppingBag, MapPin, Search, ChevronDown } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Overview', href: '#home' },
  { label: 'Methodology', href: '#process' },
  { label: 'Capabilities', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Blog & Articles', href: '/blog', isRoute: true },
  { label: 'Client Domains', href: '#clients' },
  { label: 'Leadership', href: '#team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
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
      return;
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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      
      {/* Amazon Top Header Bar (#131921) */}
      <div className="bg-[#131921] text-white py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Amazon-Style AirDive Logo */}
          <Link to="/" className="flex items-center gap-2 group focus:outline-none flex-shrink-0">
            <div className="w-9 h-9 rounded-md bg-[#232f3e] p-1 border border-[#febd69]/40 group-hover:border-[#febd69] transition-all flex items-center justify-center">
              <img src="/logo.svg" alt="AirDive Logo" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-[#febd69] transition-colors">
                  AIRDIVE
                </span>
                <span className="text-[#febd69] text-xs font-bold font-mono">.in</span>
              </div>
              <span className="text-[9px] tracking-widest text-slate-400 uppercase -mt-1 font-mono">
                PRIVATE LIMITED
              </span>
            </div>
          </Link>

          {/* Amazon Location / HQ Pill (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-slate-300 border border-slate-700/60 rounded-md px-3 py-1.5 hover:border-slate-500 cursor-pointer">
            <MapPin className="w-4 h-4 text-[#febd69]" />
            <div className="flex flex-col text-[11px] leading-tight">
              <span className="text-slate-400 text-[10px]">Deliver to</span>
              <span className="font-bold text-white">India (HQ Shivpuri)</span>
            </div>
          </div>

          {/* Amazon Search / Quick Nav Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xl items-center bg-white rounded-md overflow-hidden border-2 border-transparent focus-within:border-[#ff9900]">
            <span className="bg-slate-100 text-slate-700 text-xs px-3 py-2 font-medium border-r border-slate-300 flex items-center gap-1 cursor-pointer">
              All Services
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </span>
            <input
              type="text"
              placeholder="Search AirDive services, tech stack, enterprise software..."
              className="flex-1 px-3 py-2 text-xs text-[#0f1111] placeholder-slate-500 focus:outline-none"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] text-[#111827] px-4 py-2 flex items-center justify-center transition-colors">
              <Search className="w-4 h-4 font-bold" />
            </button>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: '#contact' })}
              className="btn-amazon-primary px-4 sm:px-5 py-2 text-xs flex items-center gap-1.5 shadow-md active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-[#232f3e] border border-slate-700 text-white hover:text-[#febd69] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Amazon Sub-Header Bar (#232f3e) */}
      <div className="hidden lg:block bg-[#232f3e] text-slate-200 py-1.5 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium">
          <nav className="flex items-center gap-6 overflow-x-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = item.isRoute
                ? location.pathname === item.href
                : location.pathname === '/' && activeSection === item.href.substring(1);

              if (item.isRoute) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`transition-colors whitespace-nowrap ${
                      isActive ? 'text-[#febd69] font-bold underline underline-offset-4' : 'text-slate-200 hover:text-[#febd69]'
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
                  className={`transition-colors whitespace-nowrap ${
                    isActive ? 'text-[#febd69] font-bold underline underline-offset-4' : 'text-slate-200 hover:text-[#febd69]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 text-[#febd69] font-mono text-[11px] font-bold">
            <span>AIRDIVE ENTERPRISE DEALS</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131921] text-white border-b border-slate-700 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {NAV_ITEMS.map((item) => {
            if (item.isRoute) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#232f3e] hover:text-[#febd69] transition-colors"
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
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#232f3e] hover:text-[#febd69] transition-colors"
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: '#contact' })}
              className="block w-full text-center py-2.5 rounded-md text-sm font-bold text-[#111827] bg-[#febd69] shadow-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
