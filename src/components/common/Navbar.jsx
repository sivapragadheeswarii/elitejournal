import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronRight, PhoneCall, LogIn } from 'lucide-react';
import { BRAND } from '../../data/emaData';
import logo from '../../assets/logo.png';

const Navbar = ({ onOpenEnquiry, onOpenPortal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About EMA', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Enrollment', path: '/enrollment' },
    { name: 'Market Analysis', path: '/market-analysis' },
    { name: 'Learning Hub', path: '/learning-hub' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-md">
      {/* Institutional Sub-Header Bar */}
      <div className="bg-[#091526] text-slate-300 text-xs py-1.5 px-2.5 sm:px-4 border-b border-slate-800/80 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2 font-medium whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-400 font-extrabold text-[8.5px] xs:text-[9.5px] tracking-wider uppercase shrink-0">
              Financial Education
            </span>
            <span className="hidden sm:inline text-slate-300 text-[11px] font-mono truncate max-w-md">
              “{BRAND.primaryMessage}”
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[9px] xs:text-[11px] text-slate-400 font-mono shrink-0">
            <span className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> NISM Compliant Standard
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-300">Pure Discipline • Zero Tips</span>
          </div>
        </div>
      </div>


      {/* Main Clean Executive Navigation Header */}
      <nav className={`w-full transition-all duration-200 border-b border-slate-200/90 relative z-50 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <img src={logo} alt="Elite Market Academy Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-base sm:text-xl font-black text-[#0B192C] tracking-tight font-heading leading-tight">
                ELITE MARKET <span className="text-amber-600">ACADEMY</span>
              </span>
              <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider uppercase font-mono truncate">
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-bold transition-all relative whitespace-nowrap ${
                    isActive 
                      ? 'text-[#0B192C] bg-slate-100/90 font-black' 
                      : 'text-slate-600 hover:text-[#0B192C] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-3.5 xl:px-4 py-2 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-bold text-xs transition-all shadow-xs hover:shadow active:scale-95 flex items-center gap-1.5 border border-amber-500/30 cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>

            <button
              onClick={onOpenPortal}
              className="px-3.5 xl:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs transition-all shadow-xs hover:shadow active:scale-95 flex items-center gap-1.5 border border-amber-400/50 cursor-pointer whitespace-nowrap"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>EPTS Journal</span>
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-colors shrink-0 active:scale-95"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200/90 px-4 py-4 flex flex-col gap-2 shadow-2xl animate-fade-up border-t border-slate-100">
            
            {/* Drawer Header Badge */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 px-1">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                ACADEMY DIRECTORY
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-600 text-[9.5px] font-mono font-extrabold">
                EMA NAVIGATION
              </span>
            </div>

            {/* Nav Link Items */}
            <div className="flex flex-col gap-1.5 pt-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xs font-bold py-3 px-3.5 rounded-xl transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#0B192C] text-amber-400 font-extrabold shadow-md border-l-4 border-amber-400' 
                        : 'text-slate-800 hover:bg-slate-100/80 active:bg-slate-200/80'
                    }`}
                  >
                    <span className="tracking-wide">{link.name}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-400 translate-x-0.5' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Call To Action Buttons */}
            <div className="pt-2 border-t border-slate-100 mt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs flex items-center justify-center gap-2 shadow-md border border-amber-500/30 active:scale-98 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Request Course Information</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-md border border-amber-400 active:scale-98 transition-all cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>EPTS Journal</span>
              </button>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
