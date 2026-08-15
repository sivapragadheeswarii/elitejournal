import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck, CheckCircle2, ArrowRight, Award, Compass, GraduationCap, ChevronRight, HelpCircle, Layers, TrendingUp } from 'lucide-react';
import { BRAND, COURSES, WHY_EMA_CARDS, LEARNING_JOURNEY_STAGES, LEARNING_HUB_ARTICLES, AEO_FAQS } from '../data/emaData';

const HomePage = ({ onOpenEnquiry }) => {
  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 bg-[#0B192C] text-white overflow-hidden bg-corporate-pattern border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-sm max-w-[calc(100vw-2.5rem)] sm:max-w-none overflow-hidden">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0 z-10" />
                <div className="overflow-hidden whitespace-nowrap relative flex-1 min-w-0">
                  <div className="inline-flex sm:hidden animate-marquee whitespace-nowrap">
                    <span className="pr-8">Professional Stock Market & Trading Education</span>
                    <span className="pr-8">Professional Stock Market & Trading Education</span>
                  </div>
                  <span className="hidden sm:inline">Professional Stock Market & Trading Education</span>
                </div>
              </div>

              <h1 className="text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight font-heading">
                Build Knowledge. <br className="hidden sm:inline" />
                <span className="text-amber-400">Master the Market.</span>
              </h1>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
                {BRAND.heroCopy}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-black text-xs sm:text-sm text-center shadow-lg shadow-amber-500/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </Link>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <span>Book a Free Consultation</span>
                </button>
              </div>

              {/* Trust Points */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-slate-800 text-xs text-slate-300 font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Structured Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Practical Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Risk Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Trading Psychology</span>
                </div>
              </div>

              <span className="text-[11px] sm:text-xs font-mono text-amber-400 font-extrabold tracking-wider">
                “{BRAND.supportStatement}”
              </span>

            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative w-full">
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col gap-5 sm:gap-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 sm:pb-4">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    FINANCIAL EDUCATION ACADEMY
                  </span>
                  <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 shrink-0" />
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <h3 className="text-lg sm:text-xl font-black text-white font-heading">
                    Structured Stock Market Learning
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Master price charts, candlestick patterns, option Greeks, position sizing, and emotional awareness through structured modules.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1 sm:pt-2">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col gap-0.5 sm:gap-1">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400">Focus Area</span>
                    <span className="text-xs sm:text-sm font-black text-amber-400">Risk First</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col gap-0.5 sm:gap-1">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400">Methodology</span>
                    <span className="text-xs sm:text-sm font-black text-emerald-400">Practical</span>
                  </div>
                </div>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3.5 rounded-xl bg-amber-500 text-[#0B192C] font-black text-xs text-center hover:bg-amber-400 transition-colors shadow-md active:scale-95 cursor-pointer"
                >
                  Request Course Information
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-5 sm:gap-6">
          <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
            Welcome to EMA
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
            Welcome to Elite Market Academy
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium text-left sm:text-center">
            Elite Market Academy is a professional financial-market education platform designed to help learners understand how the stock market works and develop a structured approach to market learning.
          </p>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium text-left sm:text-center">
            From stock market fundamentals and technical analysis to options education, risk management and trading psychology, EMA focuses on building knowledge and disciplined market habits rather than promoting unrealistic profit expectations.
          </p>
          <p className="text-xs sm:text-base text-slate-900 font-extrabold text-center">
            Our goal is simple: help you understand the market before you participate in it.
          </p>
          <Link
            to="/about"
            className="mt-2 px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs inline-flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            <span>Discover EMA</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. WHY EMA (6 CARDS) */}
      <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-100/60">
              Why EMA
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
              Why Learn with Elite Market Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
            {WHY_EMA_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col gap-3 sm:gap-4"
              >
                <span className="text-xl sm:text-2xl font-black text-amber-500 font-mono">{card.number}</span>
                <h3 className="text-base sm:text-lg font-black text-[#0B192C] font-heading">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COURSES CATALOG */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
              Curriculum
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
              Stock Market & Trading Courses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Build your market knowledge step by step with structured courses covering the essential concepts of investing and trading.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-5 sm:gap-6 hover:border-slate-400 transition-all shadow-sm"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#0B192C] text-amber-400 text-[10px] font-black uppercase tracking-wider">
                      {course.level}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-bold">{course.duration}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0B192C] font-heading">{course.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{course.shortDesc}</p>
                </div>

                <Link
                  to={`/courses/${course.slug}`}
                  className="w-full py-2.5 rounded-xl bg-white border border-slate-300 text-[#0B192C] hover:bg-[#0B192C] hover:text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Explore Course</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEARNING JOURNEY (7 STAGES) */}
      <section className="py-12 sm:py-20 bg-[#0B192C] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-slate-800">
              Progressive Roadmap
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Your Journey from Beginner to Confident Market Participant
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Market knowledge is built progressively. Follow a structured learning journey instead of trying to master everything at once.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 text-left">
            {LEARNING_JOURNEY_STAGES.map((s, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
                <span className="text-[10.5px] font-mono font-black text-amber-400">{s.stage}</span>
                <h4 className="text-sm sm:text-base font-black text-white font-heading">{s.title}</h4>
                <p className="text-xs text-slate-400 font-medium">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEARNING METHODOLOGY */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-50">
              Methodology
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
              Learn. Practice. Analyse. Improve.
            </h2>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2.5 sm:gap-3">
              <span className="text-sm sm:text-base font-black text-amber-600 font-heading uppercase">1. Learn</span>
              <p className="text-xs text-slate-600 font-medium">Understand the concept clearly before attempting to apply it.</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2.5 sm:gap-3">
              <span className="text-sm sm:text-base font-black text-amber-600 font-heading uppercase">2. Practice</span>
              <p className="text-xs text-slate-600 font-medium">Work through examples and practical scenarios.</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2.5 sm:gap-3">
              <span className="text-sm sm:text-base font-black text-amber-600 font-heading uppercase">3. Analyse</span>
              <p className="text-xs text-slate-600 font-medium">Observe how market behaviour relates to the concepts you have learned.</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2.5 sm:gap-3">
              <span className="text-sm sm:text-base font-black text-amber-600 font-heading uppercase">4. Improve</span>
              <p className="text-xs text-slate-600 font-medium">Review your understanding, identify mistakes and continuously develop your skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO IS EMA FOR? */}
      <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3">
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
              Who Can Learn with Elite Market Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-black text-[#0B192C] font-heading">Beginners</h3>
              <p className="text-xs text-slate-600 font-medium">Starting from zero? Build your stock market knowledge from the fundamentals.</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-black text-[#0B192C] font-heading">Aspiring Traders</h3>
              <p className="text-xs text-slate-600 font-medium">Develop a structured understanding of technical analysis, trading concepts and risk management.</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-black text-[#0B192C] font-heading">Working Professionals</h3>
              <p className="text-xs text-slate-600 font-medium">Build market knowledge through a structured learning approach that can fit around your schedule.</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-black text-[#0B192C] font-heading">Market Enthusiasts</h3>
              <p className="text-xs text-slate-600 font-medium">Deepen your understanding of financial markets and market terminology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREE LEARNING HUB */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-50">
              Free Resources
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
              Knowledge Before the Market
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Before making decisions in the market, understand the concepts behind them. Explore our free educational resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {LEARNING_HUB_ARTICLES.map((article) => (
              <div key={article.id} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-amber-600 uppercase font-mono">{article.category}</span>
                  <h3 className="text-sm sm:text-base font-black text-[#0B192C] font-heading">{article.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 font-medium">{article.directAnswer}</p>
                </div>
                <Link to={`/learning-hub/${article.slug}`} className="text-xs font-bold text-[#0B192C] hover:text-amber-600 flex items-center gap-1">
                  <span>Read Full Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div>
            <Link to="/learning-hub" className="px-6 py-3 rounded-xl bg-[#0B192C] text-amber-400 font-black text-xs inline-flex items-center gap-2 active:scale-95 transition-all">
              <span>Explore Learning Hub</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. AEO QUICK ANSWERS */}
      <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10 text-left">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3 text-center">
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
              Stock Market Questions Answered
            </h2>
          </div>

          <div className="flex flex-col gap-3.5 sm:gap-4">
            {AEO_FAQS.slice(0, 5).map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex flex-col gap-2 shadow-sm">
                <h3 className="text-xs sm:text-base font-black text-[#0B192C] font-heading flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FYERS PARTNERSHIP SECTION */}
      <section className="py-12 sm:py-16 bg-[#0B192C] text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-3.5 sm:gap-4">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-black text-white font-heading">
            Your Learning Journey. Your Market Access.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed font-medium">
            Elite Market Academy focuses on financial-market education. Where applicable, brokerage and account-related services may be provided through an authorized brokerage-partner ecosystem. Account opening, brokerage services and trading facilities are subject to the applicable terms, regulations and policies of the relevant service provider.
          </p>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-12 sm:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-5 sm:gap-6">
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-[#0B192C] font-heading tracking-tight">
            Your Market Journey Starts with Knowledge.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Build your foundation. Understand the market. Develop disciplined learning habits.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
            <Link
              to="/courses"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-black text-xs text-center shadow-md active:scale-95 transition-all"
            >
              Explore Courses
            </Link>
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs text-center shadow-md active:scale-95 transition-all cursor-pointer"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
