import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronRight, MessageSquare, Sparkles, LogIn } from 'lucide-react';
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

  const scrollToDemo = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const demoEl = document.getElementById('free-demo');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const cleanPhone = BRAND.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello Elite Market Academy! I would like to book a Free Demo Class.')}`;
    window.open(waUrl, '_blank');
  };

  const NAV_LINKS = [
    { name: 'Home', targetId: 'home' },
    { name: 'About EMA', targetId: 'about' },
    { name: 'Courses', targetId: 'courses' },
    { name: 'Learning Hub', targetId: 'learning' },
    { name: 'FAQ', targetId: 'faq' },
    { name: 'Contact', targetId: 'contact' },
  ];

  const handleNavClick = (targetId) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-xl">
      {/* Top Institutional Sub-Header Bar */}
      <div className="bg-[#07110D] text-[#94A3B8] text-xs py-1.5 px-3 sm:px-6 border-b border-[#1F3A2E]/80 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 font-medium whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 rounded bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] font-extrabold text-[9px] uppercase tracking-wider shrink-0">
              STOCK MARKET EDUCATION
            </span>
            <span className="hidden sm:inline text-[#94A3B8] text-[11px] font-mono truncate max-w-md">
              “Knowledge Before Market Participation”
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-[#94A3B8] font-mono shrink-0">
            <span className="hidden xs:flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" /> Capital Protection Focus
            </span>
            <span className="hidden md:inline text-[#1F3A2E]">|</span>
            <span className="hidden md:inline text-[#E2E8F0] font-semibold">Zero Tips • Zero Profits Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main Executive Dark Navigation Header */}
      <nav className={`w-full transition-all duration-200 border-b border-[#1F3A2E] relative z-50 ${isScrolled ? 'bg-[#07110D]/95 backdrop-blur-md shadow-2xl' : 'bg-[#07110D]'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Brand Logo */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 sm:gap-3 group shrink-0 text-left cursor-pointer min-w-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#0D1B15] border border-[#1F3A2E] flex items-center justify-center p-1 sm:p-1.5 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <img src={logo} alt="Elite Market Academy Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs xs:text-sm sm:text-lg font-extrabold text-white tracking-tight font-heading leading-tight truncate">
                ELITE MARKET <span className="text-[#F59E0B]">ACADEMY</span>
              </span>
              <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase font-mono truncate">
                {BRAND.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 font-medium">
            {NAV_LINKS.map((link) => (
              <button
                key={link.targetId}
                onClick={() => handleNavClick(link.targetId)}
                className="px-3 py-2 rounded-lg text-xs font-bold text-[#94A3B8] hover:text-white hover:bg-[#0D1B15] transition-all relative whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={scrollToDemo}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs transition-all shadow-md shadow-[#F59E0B]/20 active:scale-95 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Free Demo</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] border border-emerald-500/40 text-emerald-400 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </button>

            {onOpenPortal && (
              <button
                onClick={onOpenPortal}
                className="px-3.5 py-2.5 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] border border-[#1F3A2E] text-[#E2E8F0] font-bold text-xs transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>EPTS Journal</span>
              </button>
            )}
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 rounded-xl bg-[#0D1B15] border border-[#1F3A2E] text-[#E2E8F0] transition-colors shrink-0 active:scale-95 flex items-center justify-center min-w-[42px] min-h-[42px]"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#07110D] border-b border-[#1F3A2E] px-4 py-4 flex flex-col gap-2 shadow-2xl animate-fade-up border-t border-[#1F3A2E]">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#1F3A2E] px-1">
              <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest">
                ACADEMY DIRECTORY
              </span>
              <span className="px-2 py-0.5 rounded bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-[9.5px] font-mono font-extrabold">
                EMA NAVIGATION
              </span>
            </div>

            <div className="flex flex-col gap-1 pt-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.targetId}
                  onClick={() => handleNavClick(link.targetId)}
                  className="text-xs font-bold py-3 px-3.5 rounded-xl transition-all flex items-center justify-between text-[#E2E8F0] hover:bg-[#0D1B15] text-left cursor-pointer"
                >
                  <span className="tracking-wide">{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#1F3A2E] mt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToDemo();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Book Free Demo Class</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleWhatsApp();
                }}
                className="w-full py-3 rounded-xl bg-[#0D1B15] border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp EMA</span>
              </button>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
