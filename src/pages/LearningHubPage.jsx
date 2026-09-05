import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LEARNING_HUB_ARTICLES } from '../data/emaData';
import { BookOpen, Search, ChevronRight, Sparkles, GraduationCap, ArrowRight, X } from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import ScrollReveal from '../components/common/ScrollReveal';
import { getBreadcrumbSchema, getArticleSchema } from '../utils/seoSchemas';
import heroEmaCh from '../assets/hero_ema_chart.png';
import abstractFinanceBg from '../assets/abstract_finance_bg.png';
import tradingJourneyImg from '../assets/trading_journey_visual.png';
import learningHubHeroImg from '../assets/learning_hub_hero_3d.png';

const LearningHubPage = () => {
  const [search, setSearch] = useState('');

  const filtered = LEARNING_HUB_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.directAnswer.toLowerCase().includes(search.toLowerCase())
  );

  const hubJsonLd = [
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Learning Hub', url: '/learning-hub' }
    ]),
    ...LEARNING_HUB_ARTICLES.map(getArticleSchema)
  ];

  return (
    <div className="flex flex-col w-full bg-[#07110D] text-[#E2E8F0] overflow-hidden selection:bg-[#F59E0B] selection:text-slate-950">
      <SeoHead
        title="Stock Market Learning Hub & Educational Guides | Elite Market Academy"
        description="Structured, question-based educational guides explaining core stock market concepts, technical analysis, options derivatives, and risk management."
        keywords="Stock Market Knowledge Base, Learn Technical Analysis, What is Stock Market, Learn Options Trading, Risk Management Rules, Elite Market Academy"
        jsonLd={hubJsonLd}
      />
      
      {/* 1. Header — [ULTRA-PREMIUM FULL VIEWPORT LEARNING HUB HERO] */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-8 sm:pt-16 sm:pb-10 bg-[#07110D] text-white border-b border-[#1F3A2E] overflow-hidden">
        <div className="absolute inset-0 bg-[#07110D]">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover object-center scale-105 blur-md opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07110D] via-[#0D1B15]/95 to-[#07110D]" />
        </div>
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#FFFBEB]0/15 rounded-full blur-[140px] pointer-events-none " />
        
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 text-left relative z-10 my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Header Column */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 ">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4.5 sm:py-2.5 rounded-full text-[#F59E0B] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-xl w-max border border-[#F59E0B]/30">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#FFFBEB]0"></span>
                </span>
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0" />
                <span>KNOWLEDGE REPOSITORY</span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.15]">
                Trading & <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D4AF37] bg-clip-text text-transparent ">Market Learning Hub</span>
              </h1>

              <p className="text-xs sm:text-base text-slate-100 font-semibold leading-relaxed p-4 sm:p-5 rounded-2xl bg-[#0D1B15]/95 border border-[#F59E0B]/30 shadow-2xl backdrop-blur-md max-w-xl">
                Explore structured, question-based educational guides explaining core stock market and trading concepts.
              </p>
            </div>

            {/* Right Column — Frameless Luxury Institutional Graphic */}
            <div className="lg:col-span-5 ">
              <div className="relative group">
                
                {/* Ambient Glow Backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* Frameless Graphic Container */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#F59E0B]/30 shadow-2xl bg-[#07110D]">
                  <img
                    src={learningHubHeroImg}
                    alt="EMA Institutional Trading Education & Knowledge Repository"
                    className="w-full h-[320px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/20 to-transparent" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#07110D]/90 border border-[#F59E0B]/40 text-[#F59E0B] text-[10px] sm:text-xs font-mono font-bold backdrop-blur-md shadow-xl">
                      <GraduationCap className="w-3.5 h-3.5" />
                      EMA KNOWLEDGE REPOSITORY
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-mono font-bold backdrop-blur-md shadow-xl">
                      12+ NISM GUIDES
                    </span>
                  </div>

                  {/* Bottom Floating Featured Article Card */}
                  <Link 
                    to="/learning-hub/what-is-technical-analysis-in-stock-market-trading"
                    className="absolute inset-x-4 bottom-4 p-3.5 sm:p-4 rounded-2xl bg-[#0D1B15]/95 border border-[#F59E0B]/40 backdrop-blur-xl flex flex-col gap-1.5 text-left shadow-2xl hover:border-[#F59E0B] transition-all cursor-pointer group/link"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#F59E0B]">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                        FEATURED LEARNING GUIDE
                      </span>
                      <span className="text-slate-400">4 MIN READ</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-white font-heading group-hover/link:text-[#F59E0B] transition-colors">
                      What is Technical Analysis in Stock Market Trading?
                    </h3>
                    <p className="text-[11px] text-slate-300 font-medium line-clamp-1">
                      Understanding price action, chart patterns, and technical indicators.
                    </p>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-center pt-4 animate-bounce cursor-pointer">
          <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400/90">SCROLL TO READ GUIDES</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-[#F59E0B]/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 sm:h-2.5 rounded-full bg-amber-400" />
          </div>
        </div>

      </section>

      {/* 2. Articles Grid — [EXECUTIVE LIGHT SECTION 2] */}
      <section className="py-12 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 text-left">
            {filtered.map((article, idx) => (
              <ScrollReveal key={article.id} animation="fade-up" delay={idx * 100}>
                <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between gap-5 sm:gap-6 group hover:border-[#F59E0B] hover:shadow-xl transition-all h-full">
                  <div className="flex flex-col gap-3.5 sm:gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-[#0D1B15] text-[#F59E0B] text-[9.5px] sm:text-[10px] font-extrabold uppercase font-mono tracking-wider">
                        {article.category}
                      </span>
                      <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-[#D97706] transition-colors shrink-0" />
                    </div>

                    <h2 className="text-base sm:text-lg font-extrabold text-[#0D1B15] font-heading leading-snug group-hover:text-[#D97706] transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
                      {article.directAnswer}
                    </p>
                  </div>

                  <Link
                    to={`/learning-hub/${article.slug}`}
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-[#0D1B15] hover:text-white text-[#0D1B15] font-extrabold text-xs text-center transition-all flex items-center justify-center gap-2 mt-2 sm:mt-4"
                  >
                    <span>Read Full Guide</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 sm:py-16 flex flex-col items-center gap-3">
              <Search className="w-7 h-7 sm:w-8 sm:h-8 text-slate-400" />
              <p className="text-xs sm:text-sm font-medium text-slate-600">No articles found for "{search}"</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default LearningHubPage;
