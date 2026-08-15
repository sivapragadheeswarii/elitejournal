import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronRight, PhoneCall } from 'lucide-react';
import { BRAND } from '../../data/emaData';
import logo from '../../assets/logo.png';

const Navbar = ({ onOpenEnquiry }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About EMA', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Learning Hub', path: '/learning-hub' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-md">
      
      {/* Top Banner */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-2 font-medium text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[9.5px] sm:text-[10px] tracking-wider uppercase shrink-0">
              Financial Education
            </span>
            <span className="hidden sm:inline text-slate-300 text-xs">“{BRAND.primaryMessage}”</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-[10px] sm:text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" /> SEBI Compliant Education
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-300">No Stock Tips • No Guaranteed Returns</span>
          </div>
        </div>
      </div>

      {/* Main Corporate Navbar */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 min-w-0">
            <img src={logo} alt="Elite Market Academy Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform shrink-0 drop-shadow-sm" />
            <div className="flex flex-col text-left min-w-0">
              <span className="text-base sm:text-xl font-black text-[#0B192C] tracking-tight font-heading flex items-center gap-1 leading-tight">
                ELITE MARKET <span className="text-amber-600">ACADEMY</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-widest uppercase -mt-0.5 font-mono truncate">
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-700">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-2 ${
                    isActive ? 'text-[#0B192C] border-b-2 border-amber-500 font-extrabold' : 'hover:text-[#0B192C]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer border border-amber-500/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition-colors shrink-0 active:scale-95"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-50 border-b border-slate-200 px-4 py-4 flex flex-col gap-2 shadow-inner animate-fade-in">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs sm:text-sm font-bold py-3 px-3 rounded-xl transition-all flex items-center justify-between ${
                    isActive ? 'bg-[#0B192C] text-amber-400 font-extrabold shadow-sm' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                </Link>
              );
            })}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full mt-2 py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs flex items-center justify-center gap-2 shadow-md border border-amber-500/30 active:scale-95 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request Course Information</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
