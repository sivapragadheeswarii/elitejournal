import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, BookOpen, Activity, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../data/emaData';

const HeroSection = ({ onOpenDemo }) => {
  const scrollToDemo = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const demoEl = document.getElementById('contact');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById('learning') || document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center pt-8 pb-12 sm:pt-16 sm:pb-20 bg-[#07110D] text-[#E2E8F0] overflow-hidden border-b border-[#1F3A2E]/80">
      {/* Background Ambient Orbs & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0D261C]/50 via-[#07110D] to-[#07110D] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Financial Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1F3A2E 1px, transparent 1px), linear-gradient(90deg, #1F3A2E 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 sm:gap-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[10.5px] xs:text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-xs max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <BookOpen className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
              <span className="truncate">Stock Market Trading Course • Risk-First</span>
            </div>

            {/* Main SEO H1 (Cinzel Heading Font) */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-[1.2] tracking-tight">
              Master the Market with Knowledge, Discipline & a <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D4AF37] bg-clip-text text-transparent">Structured Approach</span>
            </h1>

            {/* Supporting Copy (Montserrat Body) */}
            <p className="text-xs sm:text-base text-[#94A3B8] font-medium leading-relaxed max-w-2xl">
              Practical Equity & Derivatives education designed to help traders understand market behaviour, manage risk and build independent decision-making skills.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={scrollToDemo}
                className="w-full sm:w-auto min-h-[46px] px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm text-center shadow-lg shadow-[#F59E0B]/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer btn-shimmer"
              >
                <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
                <span>Book Your Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToCurriculum}
                className="w-full sm:w-auto min-h-[46px] px-7 py-3.5 sm:py-4 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] border border-[#1F3A2E] text-[#E2E8F0] hover:text-white font-bold text-xs sm:text-sm text-center transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center"
              >
                Explore the Curriculum
              </button>
            </div>

            {/* Sub-strip below CTA */}
            <div className="pt-4 border-t border-[#1F3A2E]/60 w-full">
              <p className="text-[10.5px] sm:text-xs text-[#94A3B8] font-semibold flex flex-wrap items-center gap-x-2.5 gap-y-1 sm:gap-3">
                <span className="text-emerald-400 font-bold">Practical Learning</span>
                <span className="text-[#1F3A2E]">|</span>
                <span className="text-emerald-400 font-bold">Risk Management</span>
                <span className="text-[#1F3A2E]">|</span>
                <span className="text-emerald-400 font-bold">Market Analysis</span>
                <span className="text-[#1F3A2E]">|</span>
                <span className="text-emerald-400 font-bold">Trading Psychology</span>
              </p>
            </div>

          </div>

          {/* Right Column: Premium Trading Visual Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 w-full animate-mobile-float">
            {/* Subtle Metallic Card */}
            <div className="relative rounded-2xl bg-[#0D1B15] border border-[#1F3A2E] p-3.5 sm:p-6 shadow-2xl overflow-hidden group touch-card">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1F3A2E]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[10px] font-bold text-[#94A3B8]">MARKET ANALYSIS MODEL</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold border border-emerald-500/20">
                  STRUCTURED
                </span>
              </div>

              {/* Minimal Trading Visual - Candlestick & Risk Metrics */}
              <div className="py-6 flex flex-col gap-4">
                
                {/* Simulated Minimal Candlestick Grid */}
                <div className="h-32 sm:h-40 w-full bg-[#07110D] rounded-xl border border-[#1F3A2E]/60 p-3 relative flex items-end justify-between gap-2 overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-20">
                    <div className="border-b border-[#1F3A2E] w-full" />
                    <div className="border-b border-[#1F3A2E] w-full" />
                    <div className="border-b border-[#1F3A2E] w-full" />
                  </div>

                  {/* Candlesticks (Green & Red ONLY in actual chart context) */}
                  {[
                    { h: '45%', bull: true },
                    { h: '60%', bull: true },
                    { h: '40%', bull: false },
                    { h: '75%', bull: true },
                    { h: '55%', bull: false },
                    { h: '85%', bull: true },
                    { h: '70%', bull: true },
                    { h: '90%', bull: true },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full z-10">
                      <div 
                        className={`w-1.5 sm:w-2.5 rounded-xs transition-all ${
                          bar.bull ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                        style={{ height: bar.h }}
                      />
                    </div>
                  ))}
                </div>

                {/* Sub-metrics */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-lg bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-0.5">
                    <span className="text-[10px] text-[#94A3B8] font-bold font-mono uppercase">Risk-Reward Ratio</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#F59E0B] font-mono">1 : 2 Minimum</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-0.5">
                    <span className="text-[10px] text-[#94A3B8] font-bold font-mono uppercase">Position Sizing</span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-400 font-mono">1% Max Risk/Trade</span>
                  </div>
                </div>

              </div>

              {/* Bottom Shield Tagline */}
              <div className="pt-3 border-t border-[#1F3A2E] flex items-center justify-between text-[11px] font-semibold text-[#94A3B8]">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                  <span>Capital Protection Principle</span>
                </span>
                <span className="text-[#F59E0B] font-mono font-bold">EMA Framework</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
