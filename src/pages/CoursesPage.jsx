import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/emaData';
import { ChevronRight, BookOpen, Clock, Layers, Sparkles, CheckCircle2, ArrowRight, GraduationCap, TrendingUp, Activity, ShieldCheck } from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import ScrollReveal from '../components/common/ScrollReveal';
import { getCourseSchema, getBreadcrumbSchema } from '../utils/seoSchemas';
import { MultiMonitorTradingConsole } from '../components/common/FinancialGraphics';

import heroEmaCh from '../assets/hero_ema_chart.png';
import marketEducImg from '../assets/market_education_visual.png';
import abstractFinanceBg from '../assets/abstract_finance_bg.png';

const CoursesPage = ({ onOpenEnquiry }) => {
  const coursesJsonLd = [
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Courses', url: '/courses' }
    ]),
    ...COURSES.map(getCourseSchema)
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen text-slate-900 overflow-hidden">
      <SeoHead
        title="Stock Market & Trading Courses | Elite Market Academy"
        description="Explore structured stock market and trading courses: Fundamentals, Technical Analysis, Options Trading, Intraday Trading, Risk Management, and Trading Psychology."
        keywords="Stock Market Courses India, Technical Analysis Course, Options Trading Course, Intraday Trading Training, Risk Management Trading, Elite Market Academy"
        jsonLd={coursesJsonLd}
      />
      
      {/* 1. Page Header — [ULTRA-PREMIUM FULL-SCREEN COURSES HERO] */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-8 sm:pt-16 sm:pb-10 bg-[#050E1A] text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[#050E1A]">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover object-center scale-105 blur-md opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A] via-[#0B192C]/95 to-[#050E1A]" />
        </div>
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-blob-slow" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-blob-reverse" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10 text-left my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Header Column */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 animate-landing-up">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4.5 sm:py-2.5 rounded-full futuristic-glass-card text-amber-400 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest badge-3d shadow-xl w-max border border-amber-500/30">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-500"></span>
                </span>
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>ACADEMY CURRICULUM</span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.15]">
                Stock Market & <br className="hidden sm:inline" />
                <span className="gold-gradient-text animate-gradient-text">Trading Programs</span>
              </h1>

              <p className="text-xs sm:text-base text-slate-100 font-semibold leading-relaxed p-4 sm:p-5 rounded-2xl bg-[#0B192C]/95 border border-slate-700/80 shadow-2xl backdrop-blur-md max-w-xl">
                Explore structured educational courses designed for beginners, intermediate learners, and aspiring traders.
              </p>

              {/* Quick Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-[10.5px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>Beginner to Advanced</span>
                </div>
                <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-amber-500/30 text-amber-400 text-[10.5px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>NISM Standards</span>
                </div>
              </div>
            </div>

            {/* Right Column — 4-Screen Institutional Live Multi-Monitor Terminal */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <MultiMonitorTradingConsole />
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-center pt-4 animate-bounce cursor-pointer">
          <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400/90">SCROLL TO VIEW ALL COURSES</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-amber-500/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 sm:h-2.5 rounded-full bg-amber-400" />
          </div>
        </div>

      </section>

      {/* 2. Courses Grid — [EXECUTIVE LIGHT SECTION 2] */}
      <section className="py-12 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 text-left">
            {COURSES.map((course, idx) => (
              <ScrollReveal key={course.id} animation="fade-up" delay={idx * 100}>
                <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xs tilt-hover border-reveal transition-all flex flex-col justify-between gap-5 sm:gap-6 group h-full">
                  <div className="flex flex-col gap-3.5 sm:gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-[#0B192C] text-amber-400 text-[9.5px] sm:text-[10px] font-black uppercase font-mono tracking-wider">
                        {course.level}
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-mono font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        {course.duration}
                      </span>
                    </div>

                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-amber-500 group-hover:text-slate-950">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <h2 className="text-lg sm:text-xl font-black text-[#0B192C] font-heading leading-snug group-hover:text-amber-600 transition-colors">
                      {course.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {course.shortDesc}
                    </p>

                    <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 font-semibold font-mono">
                      <span className="flex items-center gap-1 text-amber-700">
                        <Layers className="w-3.5 h-3.5" />
                        {course.modulesCount} Modules
                      </span>
                      <span className="truncate">Category: {course.category}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 sm:gap-3 pt-2">
                    <Link
                      to={`/courses/${course.slug}`}
                      className="w-full py-3 sm:py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs text-center transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer group-hover:shadow-md"
                    >
                      <span>Explore Course Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={onOpenEnquiry}
                      className="w-full py-2.5 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs text-center border border-slate-200 transition-all cursor-pointer"
                    >
                      Request Information
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRACTICAL WORKSPACE HIGHLIGHT — [DARK with abstract bg] */}
      <section className="relative py-12 sm:py-24 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover scale-105 blur-sm" />
          <div className="absolute inset-0 bg-[#050E1A]/92" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <ScrollReveal animation="slide-left" className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900 border border-amber-500/30 w-max font-mono shadow-2xs">
                PRACTICAL FRAMEWORK
              </span>

              <h2 className="text-xl sm:text-4xl font-black text-white font-heading tracking-tight leading-tight">
                Designed for Practical Skill Development
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Every course module at Elite Market Academy is structured to bridge the gap between theoretical market concepts and real-world trade execution with risk control.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl dark-trading-card flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-amber-400 font-bold text-xs font-mono">✓ Practical Charting</span>
                  <p className="text-xs text-slate-300">Live market pattern identification and multi-timeframe analysis.</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl dark-trading-card flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-emerald-400 font-bold text-xs font-mono">✓ Risk Control Calculator</span>
                  <p className="text-xs text-slate-300">Position sizing and risk-reward calculation framework.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-8 bg-amber-500/8 animate-morph-slow pointer-events-none -z-10 rounded-full" />
                <div className="relative parallax-image rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl bg-slate-900">
                  <img 
                    src={heroEmaCh} 
                    alt="Elite Market Academy — Practical Stock Market Chart Analysis" 
                    className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-950/90 border border-amber-500/30 text-amber-400 font-mono text-[9px] sm:text-[10px] font-bold shadow backdrop-blur-sm animate-neon-glow">
                    📈 Elite Market Academy — Chart Mastery
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION — [LIGHT SECTION 4] */}
      <section className="py-14 sm:py-28 bg-white text-slate-900 text-center border-t border-slate-200">
        <ScrollReveal animation="scale-in">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-5 sm:gap-6">
            <span className="text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-amber-50 border border-amber-200 font-mono">
              ENROLLMENT & CONSULTATION
            </span>

            <h2 className="text-xl sm:text-4xl font-black text-[#0B192C] font-heading leading-tight">
              Need Guidance Choosing the Right Program?
            </h2>

            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
              Connect with an education counselor to review course syllabus, prerequisites, and learning formats.
            </p>

            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer border border-amber-500/30 flex items-center justify-center gap-2"
            >
              <span>Request Education Counseling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default CoursesPage;
