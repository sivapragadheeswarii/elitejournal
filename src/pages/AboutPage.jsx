import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, BookOpen, CheckCircle2, ArrowRight, 
  Sparkles, Building2, Cpu, Scale, Lock
} from 'lucide-react';
import FoundersNoteSection from '../components/academy/FoundersNoteSection';
import SeoHead from '../components/common/SeoHead';
import ScrollReveal from '../components/common/ScrollReveal';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/seoSchemas';
import { LiveRunningCandleChart } from '../components/common/FinancialGraphics';

import heroEmaCh from '../assets/hero_ema_chart.png';
import riskAbstractImg from '../assets/risk_control_abstract.png';
import tradingJourneyImg from '../assets/trading_journey_visual.png';
import abstractFinanceBg from '../assets/abstract_finance_bg.png';

const AboutPage = ({ onOpenEnquiry }) => {
  const aboutJsonLd = [
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About EMA', url: '/about' }
    ])
  ];

  const coreValues = [
    {
      icon: BookOpen,
      title: 'Authentic Education First',
      desc: 'We prioritize fundamental understanding and technical analysis over shortcut signals or unverified tips.'
    },
    {
      icon: ShieldCheck,
      title: 'Strict Risk Control',
      desc: 'Position sizing, stop-loss discipline, and capital preservation are embedded into every single module.'
    },
    {
      icon: Cpu,
      title: 'Systematic Tracking',
      desc: 'Using the Elite Performance Tracking System, learners objectively record, review, and fix trading mistakes.'
    },
    {
      icon: Scale,
      title: 'Responsible Participation',
      desc: 'We promote realistic expectations, emotional maturity, and long-term skill development in financial markets.'
    }
  ];

  const comparisonData = [
    {
      myth: 'Expecting quick money and overnight wealth in trading',
      emaWay: 'Treating trading as a serious, disciplined professional skill',
      icon: Lock
    },
    {
      myth: 'Relying blindly on stock tips, telegram calls, or hype',
      emaWay: 'Learning independent technical analysis and chart reading',
      icon: BookOpen
    },
    {
      myth: 'Ignoring downside risk and over-leveraging trades',
      emaWay: 'Strict risk management, position sizing, and stop-loss rules',
      icon: ShieldCheck
    },
    {
      myth: 'Repeating emotional mistakes without tracking performance',
      emaWay: 'Systematic trade journaling with Elite Performance Tracking',
      icon: Cpu
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen text-slate-900 overflow-hidden">
      <SeoHead
        title="About Elite Market Academy | Structured Stock Market Education"
        description="Learn about Elite Market Academy (EMA), founded by Saravana Kumar, B.E. (Founder of SDS Technologies). NISM certified stock market education focused on technical analysis, risk control, and discipline."
        keywords="About Elite Market Academy, Saravana Kumar, SDS Technologies, NISM certified stock market course, stock market academy India, trading discipline, risk management"
        jsonLd={aboutJsonLd}
      />
      
      {/* 1. ABOUT HERO SECTION — [ULTRA-PREMIUM FULL VIEWPORT HERO] */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-8 sm:pt-16 sm:pb-10 bg-[#050E1A] text-white overflow-hidden border-b border-slate-800">
        {/* Background texture with gradient overlay */}
        <div className="absolute inset-0 bg-[#050E1A]">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover object-center scale-105 blur-md opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A] via-[#0B192C]/95 to-[#050E1A]" />
        </div>
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-blob-slow" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-blob-reverse" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10 my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            
            {/* Left Header Column */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 animate-landing-up">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4.5 sm:py-2 rounded-full futuristic-glass-card text-amber-400 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest badge-3d shadow-xl w-max border border-amber-500/30">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-500"></span>
                </span>
                <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>ABOUT ELITE MARKET ACADEMY</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] font-heading tracking-tight">
                Empowering Traders Through <br className="hidden sm:inline" />
                <span className="gold-gradient-text animate-gradient-text">Authentic Education & Discipline</span>
              </h1>

              {/* Paragraph copy */}
              <p className="text-xs sm:text-base text-slate-100 font-semibold leading-relaxed p-4 sm:p-5 rounded-2xl bg-[#0B192C]/95 border border-slate-700/80 shadow-2xl backdrop-blur-md max-w-xl">
                Elite Market Academy (EMA) was created with a simple philosophy: meaningful market participation begins with meaningful market knowledge. We combine technology, NISM-certified standards, and systematic performance tracking to build responsible traders.
              </p>

              {/* Credibility Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs font-mono font-bold text-slate-100 shadow-md backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NISM Standards</span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs font-mono font-bold text-slate-100 shadow-md backdrop-blur-md">
                  <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>SDS Tech Engine</span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono font-bold text-slate-100 shadow-md backdrop-blur-md">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Practical Focus</span>
                </div>
              </div>
            </div>

            {/* Right Column — Live Running Candlestick Chart Showcase */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <LiveRunningCandleChart />
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-center pt-4 animate-bounce cursor-pointer">
          <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400/90">SCROLL TO DISCOVER OUR MISSION</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-amber-500/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 sm:h-2.5 rounded-full bg-amber-400" />
          </div>
        </div>

      </section>

      {/* 2. THE EMA GENESIS & FOUNDER'S NOTE — [MERGED UNIFIED SECTION] */}
      <div>
        <FoundersNoteSection showPhoto={true} sec1Theme="light" sec2Theme="dark" />
      </div>

      {/* 3. CORE VALUES & PILLARS — [LIGHT SECTION 3] */}
      <section className="py-12 sm:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center relative z-10">
          
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200 font-mono shadow-2xs">
                OUR CORE VALUES
              </span>
              <h2 className="text-xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
                What Defines Elite Market Academy
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-amber-400 transition-all flex flex-col gap-2.5 sm:gap-3 group h-full">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-[#0B192C] font-heading group-hover:text-amber-700 transition-colors">{value.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{value.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. THE EMA APPROACH VS COMMON MYTHS — [DARK SECTION 4 with abstract bg] */}
      <section className="relative py-12 sm:py-24 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover scale-105 blur-sm" />
          <div className="absolute inset-0 bg-[#0B192C]/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center relative z-10">
          
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900 border border-amber-500/30 font-mono">
                RESPONSIBLE LEARNING
              </span>
              <h2 className="text-xl sm:text-4xl font-black text-white font-heading tracking-tight">
                How We Differ From Common Market Practices
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left max-w-5xl mx-auto">
            {comparisonData.map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="p-5 sm:p-6 rounded-2xl dark-trading-card border border-slate-800 shadow-xl flex flex-col gap-3.5 sm:gap-4 hover:border-amber-400/50 transition-all h-full">
                  <div className="flex flex-col gap-1.5 border-b border-slate-800 pb-2.5 sm:pb-3">
                    <span className="text-[10px] sm:text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Common Market Misconception
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300">{item.myth}</p>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      The EMA Structured Approach
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white">{item.emaWay}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION & ENQUIRY — [LIGHT SECTION 7] */}
      <section className="py-14 sm:py-28 bg-white text-slate-900 border-t border-slate-200">
        <ScrollReveal animation="scale-in">
          <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10.5px] sm:text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
              <span>START YOUR LEARNING JOURNEY</span>
            </div>

            <h2 className="text-xl sm:text-4xl font-black text-[#0B192C] font-heading leading-tight">
              Ready to Learn the Stock Market Responsibly?
            </h2>

            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
              Explore our structured courses or connect with our education counselors to understand our systematic learning programs.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                to="/courses"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer border border-amber-500/30"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Speak with a Counselor</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default AboutPage;
