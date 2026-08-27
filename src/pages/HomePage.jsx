import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, ShieldCheck, CheckCircle2, ArrowRight, ArrowUpRight, GraduationCap, ChevronRight,
  TrendingUp, Target, AlertTriangle, Scale, ChevronDown, Layers, Sparkles,
  BarChart2, ShieldAlert, LineChart, Activity, Zap, Megaphone
} from 'lucide-react';
import { 
  BRAND, WHAT_IS_EMA, WHAT_YOU_WILL_LEARN_CATEGORIES, WHO_CAN_JOIN, 
  WHY_EMA_PILLARS, COURSES
} from '../data/emaData';
import FoundersNoteSection from '../components/academy/FoundersNoteSection';
import SeoHead from '../components/common/SeoHead';
import ScrollReveal from '../components/common/ScrollReveal';
import { getOrganizationSchema, getWebSiteSchema } from '../utils/seoSchemas';

import heroEmaCh from '../assets/hero_ema_chart.png';
import marketEducImg from '../assets/market_education_visual.png';
import riskAbstractImg from '../assets/risk_control_abstract.png';
import tradingJourneyImg from '../assets/trading_journey_visual.png';
import abstractFinanceBg from '../assets/abstract_finance_bg.png';

const HomePage = ({ onOpenEnquiry }) => {
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/announcement');
        const data = await response.json();
        if (isMounted && data.success && data.data && data.data.isActive) {
          setAnnouncement(data.data);
        }
      } catch (err) {
        console.error('Announcement fetch error:', err);
      }
    };
    fetchAnnouncement();
    return () => {
      isMounted = false;
    };
  }, []);

  const homeJsonLd = [
    getOrganizationSchema(),
    getWebSiteSchema()
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] text-slate-900 overflow-hidden">
      <SeoHead
        title="Elite Market Academy | Stock Market & Trading Education"
        description="Learn stock market trading, technical analysis, risk management and trading psychology with structured education from Elite Market Academy."
        keywords="Elite Market Academy, EMA, stock market trading education, technical analysis course, options trading, risk management, trading psychology, stock market education India"
        jsonLd={homeJsonLd}
      />

      {/* 1. HERO SECTION — [FUTURISTIC TRADING TERMINAL HERO - FULL VIEWPORT] */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-8 sm:pt-16 sm:pb-8 bg-[#050E1A] text-white overflow-hidden border-b border-slate-800">
        {/* Base abstract bg for texture */}
        <div className="absolute inset-0 bg-[#050E1A]">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover scale-105 blur-md opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A] via-[#0B192C]/95 to-[#050E1A]" />
        </div>
        {/* Glowing Radial Light Orbs */}
        <div className="absolute inset-0 bg-financial-grid-dark opacity-25 pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-blob-slow" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-blob-reverse" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10 my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 text-left animate-landing-up">
              
              {/* Live Signal Badge */}
              {/* Mobile View: Continuous Marquee Scrolling Badge */}
              <div className="flex sm:hidden items-center gap-2 px-3 py-1.5 rounded-full futuristic-glass-card text-amber-400 text-[10.5px] font-extrabold uppercase tracking-wider badge-3d cursor-default w-full max-w-[340px] overflow-hidden relative">
                <div className="flex items-center gap-1.5 shrink-0 bg-[#050E1A]/90 pr-1 z-10">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                </div>

                <div className="overflow-hidden w-full relative">
                  <div className="animate-marquee flex items-center whitespace-nowrap gap-6 text-[10.5px] font-extrabold tracking-wider">
                    <span>Professional Stock Market & Trading Academy</span>
                    <span className="text-amber-500/50">•</span>
                    <span>Professional Stock Market & Trading Academy</span>
                    <span className="text-amber-500/50">•</span>
                  </div>
                </div>
              </div>

              {/* Desktop View: Static Badge */}
              <div className="hidden sm:inline-flex items-center gap-3 px-4 py-2 rounded-full futuristic-glass-card text-amber-400 text-xs font-extrabold uppercase tracking-wider badge-3d cursor-default">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Professional Stock Market & Trading Academy</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] font-heading tracking-tight">
                Master the Markets. <br />
                <span className="gold-gradient-text animate-gradient-text">Trade with Discipline.</span> <br />
                <span className="text-slate-100">Protect Your Capital.</span>
              </h1>

              {/* Paragraph Copy */}
              <p className="text-xs sm:text-sm text-slate-200 font-semibold leading-relaxed max-w-xl p-3.5 sm:p-4 rounded-xl bg-[#0B192C]/80 border border-slate-700/60 shadow-lg backdrop-blur-md">
                {BRAND.heroCopy}
              </p>

              {/* DYNAMIC HIGH-VISIBILITY ADMIN ANNOUNCEMENT CARD */}
              {announcement && announcement.isActive && (
                <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0D1E16] via-[#0B192C] to-[#12231C] border border-amber-500/60 shadow-2xl shadow-amber-500/10 backdrop-blur-xl relative overflow-hidden group animate-bounce-subtle">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0 mt-0.5 sm:mt-0">
                        <Megaphone className="w-5 h-5 animate-pulse" />
                      </div>
                      
                      <div className="flex flex-col gap-1 text-left min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                          </span>
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-extrabold text-[10px] uppercase font-mono tracking-wider border border-amber-500/30">
                            {announcement.badgeText || 'UPCOMING BATCH'}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-extrabold text-slate-100 leading-snug">
                          {announcement.message}
                        </p>
                      </div>
                    </div>

                    {announcement.actionLink && (
                      <a
                        href={announcement.actionLink}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-md transition-all shrink-0 cursor-pointer active:scale-95 whitespace-nowrap"
                      >
                        <span>{announcement.actionText || 'Enroll Now'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm text-center shadow-lg shadow-amber-500/25 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer group animate-heartbeat"
                >
                  <span>{BRAND.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-400 text-amber-400 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 backdrop-blur-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 animate-starburst" />
                  <span>{BRAND.ctaSecondary}</span>
                </button>
              </div>



            </div>

            {/* Right Hero Column — 3D Glassmorphic Trading Terminal Showcase */}
            <div className="lg:col-span-5 relative animate-scale-in">
              
              {/* Outer Spinning Orbit Rings */}
              <div className="absolute -inset-6 rounded-full border border-amber-500/15 animate-spin-slow pointer-events-none hidden sm:block" />
              <div className="absolute -inset-12 rounded-full border border-cyan-500/10 animate-spin-slow-rev pointer-events-none hidden sm:block" />

              {/* Terminal Card Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden futuristic-glass-card shadow-2xl animate-ambient-float p-1.5">
                
                {/* Terminal Header Bar */}
                <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#050E1A]/90 border-b border-slate-800 flex items-center justify-between rounded-t-xl sm:rounded-t-2xl">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-1 sm:ml-2 font-mono text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">EMA TERMINAL v2.5</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] sm:text-[10px] font-bold">
                    <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-pulse" />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Main Visual Image Area */}
                <div className="relative overflow-hidden rounded-b-xl sm:rounded-b-2xl group">
                  <img 
                    src={heroEmaCh} 
                    alt="Elite Market Academy — Premium Candlestick Chart Trading Visual" 
                    className="w-full h-auto object-cover rounded-b-xl sm:rounded-b-2xl group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Scanning Grid Line */}
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent top-1/2 animate-shimmer" />

                  {/* Glass Card Overlay 1 — Top Right Signal Badge (Desktop only for clean mobile chart) */}
                  <div className="hidden sm:flex absolute top-4 right-4 p-3 rounded-2xl bg-[#0B192C]/90 border border-amber-500/40 backdrop-blur-md shadow-xl items-center gap-2 animate-float-particle">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Technical</span>
                      <span className="text-[11px] font-extrabold text-emerald-400 font-mono">+24.8% Discipline</span>
                    </div>
                  </div>

                  {/* Glass Card Overlay 2 — Bottom Left Shield Badge (Desktop only for clean mobile chart) */}
                  <div className="hidden sm:flex absolute bottom-16 left-4 p-3 rounded-2xl bg-[#0B192C]/90 border border-cyan-500/40 backdrop-blur-md shadow-xl items-center gap-2 animate-float-particle-alt">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Risk Control</span>
                      <span className="text-[11px] font-extrabold text-cyan-400 font-mono">1:3 Stop-Loss</span>
                    </div>
                  </div>

                  {/* Bottom Primary Badge Strip */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-950/95 border border-amber-500/30 backdrop-blur-md flex items-center justify-between shadow-xl animate-neon-glow">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shrink-0">
                        <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[8px] sm:text-[9px] font-mono font-bold text-amber-400 uppercase tracking-widest block truncate">ELITE MARKET ACADEMY</span>
                        <span className="text-[9.5px] sm:text-[11px] font-black text-white truncate block">NISM Standards</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[9px] sm:text-[10px] font-bold border border-emerald-500/30 shrink-0">
                      100% Practical
                    </span>
                  </div>

                </div>
              </div>

              {/* Glow Orbs behind terminal */}
              <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-amber-400/30 blur-md animate-float-particle" />
              <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-cyan-400/25 blur-md animate-float-particle-alt" />
            </div>

          </div>
        </div>

        {/* FINANCIAL CONTINUOUS MARQUEE TICKER STRIP */}
        <div className="mt-10 sm:mt-20 py-3 sm:py-3.5 bg-[#050E1A] border-y border-amber-500/20 overflow-hidden relative z-10">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap text-[11px] sm:text-xs font-mono font-bold text-slate-300">
            <span className="flex items-center gap-2 text-amber-400">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>NISM BENCHMARK CURRICULUM</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL TECHNICAL ANALYSIS</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CAPITAL PRESERVATION & RISK CONTROL</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-purple-400">
              <LineChart className="w-3.5 h-3.5" />
              <span>TRADING PSYCHOLOGY & DISCIPLINE</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>ZERO TIPS / ZERO SIGNALS POLICY</span>
            </span>
            <span className="text-slate-600">•</span>
            {/* Duplicate set for seamless continuous marquee loop */}
            <span className="flex items-center gap-2 text-amber-400">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>NISM BENCHMARK CURRICULUM</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL TECHNICAL ANALYSIS</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CAPITAL PRESERVATION & RISK CONTROL</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-purple-400">
              <LineChart className="w-3.5 h-3.5" />
              <span>TRADING PSYCHOLOGY & DISCIPLINE</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>ZERO TIPS / ZERO SIGNALS POLICY</span>
            </span>
          </div>
        </div>

      </section>

      {/* 2. ACADEMY OVERVIEW — [LIGHT SECTION 2] */}
      <section className="py-12 sm:py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image — Unique Trading Monitor Visual */}
            <ScrollReveal animation="slide-left" className="lg:col-span-5">
              <div className="relative parallax-image rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl tilt-hover overflow-hidden">
                <img 
                  src={marketEducImg} 
                  alt="Elite Market Academy — Professional Trading Monitor Workspace" 
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                />
                {/* Diagonal color overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#0B192C]/90 border border-amber-500/30 text-amber-400 font-mono text-[9px] sm:text-[10px] font-bold shadow-md backdrop-blur-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Elite Market Academy — Live Analysis
                </div>
              </div>
            </ScrollReveal>

            {/* Right Overview Text */}
            <ScrollReveal animation="slide-right" className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">
              <span className="text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200 font-mono shadow-2xs w-max">
                INSTITUTIONAL VISION
              </span>
              
              <h2 className="text-xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] font-heading tracking-tight leading-tight">
                {WHAT_IS_EMA.title}
              </h2>

              <div className="p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200 text-left flex flex-col gap-4 sm:gap-5 shadow-2xs">
                <p className="text-sm sm:text-xl font-bold text-[#0B192C] leading-relaxed border-l-4 border-amber-500 pl-3 sm:pl-4">
                  "{WHAT_IS_EMA.answer}"
                </p>
                <p className="hidden sm:block text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-3 sm:pt-4">
                  {WHAT_IS_EMA.approach}
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. CURRICULUM ROADMAP — [DARK SECTION 3] */}
      <section className="py-12 sm:py-24 bg-[#050E1A] text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-14 text-center relative z-10">
          
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900 border border-amber-500/30 font-mono shadow-2xs">
                CURRICULUM ROADMAP
              </span>
              <h2 className="text-xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
                What You Will Master at EMA
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl">
                A structured roadmap covering 5 essential pillars of professional financial market participation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 text-left">
            {WHAT_YOU_WILL_LEARN_CATEGORIES.map((cat, idx) => (
              <ScrollReveal key={cat.id} animation="fade-up" delay={idx * 100}>
                <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl dark-trading-card border border-slate-800 shadow-xl hover:border-amber-400/50 transition-all flex flex-col justify-between gap-5 sm:gap-6 group h-full">
                  <div className="flex flex-col gap-3.5 sm:gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-amber-500/10 text-amber-400 text-[9.5px] sm:text-[10px] font-black uppercase font-mono border border-amber-500/30">
                        0{idx + 1}
                      </span>
                      <BarChart2 className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-black text-white font-heading group-hover:text-amber-400 transition-colors">{cat.category}</h3>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{cat.description}</p>

                    <ul className="hidden sm:flex flex-col gap-2 pt-3 sm:pt-4 border-t border-slate-800">
                      {cat.topics.map((t, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/courses"
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-extrabold text-xs text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2 sm:mt-4"
                  >
                    <span>Explore Curriculum</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTHENTICITY COMMITMENT BANNER — [LIGHT SECTION 4] */}
      <section className="py-12 sm:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <ScrollReveal animation="slide-left" className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              
              <h2 className="text-xl sm:text-4xl font-black font-heading text-[#0B192C] tracking-tight leading-tight">
                Our Commitment to Authentic Financial Education
              </h2>

              <div className="p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 flex flex-col gap-5 sm:gap-6 shadow-2xs">
                <p className="text-sm sm:text-xl font-bold text-[#0B192C] leading-relaxed font-heading border-l-4 border-amber-500 pl-3 sm:pl-4">
                  "{BRAND.credibilityStatement}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-100">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-0.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-rose-600">❌ No Profit Guarantees</span>
                    <span className="text-[10px] text-slate-500 font-mono">Pure Skill Building</span>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-0.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-rose-600">❌ No Tips or Signals</span>
                    <span className="text-[10px] text-slate-500 font-mono">Independent Analysis</span>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-0.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-emerald-600">✓ Risk Awareness</span>
                    <span className="text-[10px] text-slate-500 font-mono">Capital Protection First</span>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-0.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-emerald-600">✓ Systematic Discipline</span>
                    <span className="text-[10px] text-slate-500 font-mono">Repeatable Execution</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Image — Unique Abstract Risk Shield Art */}
            <ScrollReveal animation="slide-right" className="lg:col-span-5">
              <div className="relative">
                {/* Morphing amber blob accent behind image */}
                <div className="absolute inset-8 bg-amber-400/10 animate-morph pointer-events-none -z-10" />
                <div className="relative parallax-image rounded-2xl sm:rounded-3xl border border-amber-200 shadow-xl tilt-hover overflow-hidden">
                  <img 
                    src={riskAbstractImg} 
                    alt="Elite Market Academy — Risk Management Abstract Shield Illustration" 
                    className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                  />
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/90 border border-amber-200 text-amber-700 font-mono text-[9.5px] sm:text-[10px] font-bold shadow-md backdrop-blur-sm">
                    🛡 Capital Protection First
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. TARGET AUDIENCE SECTION — [DARK SECTION 5 with abstract bg] */}
      <section className="relative py-12 sm:py-24 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover scale-105 blur-sm" />
          <div className="absolute inset-0 bg-[#0B192C]/92" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 relative z-10">
          
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-slate-900 border border-amber-500/30 font-mono">
                TARGET AUDIENCE
              </span>
              <h2 className="text-xl sm:text-4xl font-black text-white font-heading tracking-tight">
                Who Belongs at Elite Market Academy?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 text-left">
            {WHO_CAN_JOIN.map((p, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="relative p-3 sm:p-6 rounded-xl sm:rounded-2xl dark-trading-card border border-slate-800 shadow-md flex flex-col justify-between gap-2.5 hover:border-amber-400/60 transition-all duration-300 group h-full overflow-hidden">
                  
                  {/* Card Header: 01 badge & Arrow Icon */}
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-400 font-black text-[11px] sm:text-xs font-mono flex items-center justify-center shrink-0 border border-amber-500/30">
                      0{i + 1}
                    </span>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-900 text-slate-400 border border-slate-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h3 className="text-xs sm:text-lg font-black text-white font-heading leading-snug group-hover:text-amber-400 transition-colors">{p.title}</h3>
                    <p className="text-[10.5px] sm:text-xs text-slate-300 font-medium leading-normal sm:leading-relaxed">{p.desc}</p>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. 5 CORE PILLARS SECTION — [EXECUTIVE LIGHT SECTION 6] */}
      <section className="py-12 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12">
          
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-amber-50 border border-amber-200 font-mono">
                5 CORE PILLARS
              </span>
              <h2 className="text-xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
                Why Learn with Elite Market Academy?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 text-left">
            {WHY_EMA_PILLARS.map((p, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="relative p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between gap-2.5 h-full overflow-hidden">
                  
                  {/* Top Header Row: 01 Pill & Arrow Icon Button */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-[#0B192C] text-amber-400 text-[11px] sm:text-sm font-black font-mono border border-slate-800 shadow-xs">
                      {p.number}
                    </span>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-600 border border-amber-200/80 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h3 className="text-xs sm:text-lg font-black text-[#0B192C] font-heading group-hover:text-amber-600 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed font-medium">
                      {p.description}
                    </p>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FOUNDER'S NOTE & PHILOSOPHY — [ALTERNATING DARK/LIGHT SECTION 7] */}
      <div>
        <FoundersNoteSection showPhoto={false} sec1Theme="dark" sec2Theme="light" />
      </div>

      {/* 8. COURSES CATALOG SHOWCASE — [DARK SECTION 8] */}
      <section className="py-12 sm:py-24 bg-[#050E1A] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-14 text-center">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900 border border-amber-500/30 font-mono shadow-2xs">
                PROGRAMS & COURSES
              </span>
              <h2 className="text-xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
                Featured Stock Market Programs
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 text-left">
            {COURSES.map((course, idx) => (
              <ScrollReveal key={course.id} animation="fade-up" delay={idx * 100}>
                <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl dark-trading-card border border-slate-800 shadow-xl hover:border-amber-400/50 transition-all flex flex-col justify-between gap-5 sm:gap-6 group h-full">
                  <div className="flex flex-col gap-3.5 sm:gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-amber-500/10 text-amber-400 text-[9.5px] sm:text-[10px] font-black uppercase font-mono border border-amber-500/30">
                        {course.level}
                      </span>
                      <span className="text-xs text-slate-400 font-mono font-bold">{course.duration}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white font-heading group-hover:text-amber-400 transition-colors">{course.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">{course.shortDesc}</p>
                  </div>

                  <Link
                    to={`/courses/${course.slug}`}
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-extrabold text-xs text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2 sm:mt-4"
                  >
                    <span>Explore Program</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION — [LIGHT SECTION 9] */}
      <section className="relative py-12 sm:py-24 bg-white text-slate-900 text-center overflow-hidden border-t border-slate-200">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

        <ScrollReveal animation="scale-in">
          <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-5 sm:gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10.5px] sm:text-xs font-bold uppercase tracking-wider font-mono shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>START YOUR TRADING EDUCATION</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight leading-snug text-[#0B192C]">
              Your Market Journey Starts with <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Structured Knowledge & Discipline.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg leading-relaxed">
              Build your trading foundation. Master technical analysis. Learn risk management to protect your capital.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm text-center shadow-md active:scale-95 transition-all cursor-pointer"
              >
                Explore Courses Catalog
              </Link>

              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-[#0B192C] hover:bg-slate-800 border border-slate-800 text-amber-400 font-black text-xs sm:text-sm text-center shadow-md active:scale-95 transition-all cursor-pointer"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default HomePage;
