import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/emaData';
import {
  BookOpen, Clock, Layers, Sparkles, CheckCircle2,
  ArrowRight, GraduationCap, ShieldCheck, Video, MessageCircle, Star
} from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import { getCourseSchema, getBreadcrumbSchema } from '../utils/seoSchemas';

// Per-course enrichment matching ProgramsSection.jsx
const COURSE_EXTRAS = {
  'beginner': {
    outcome: 'Build complete market foundation & understand order mechanics',
    mode: 'Live Interactive',
    support: '1-on-1 Guidance + Live Q&A',
    popular: false,
  },
  'intermediate': {
    outcome: 'Read price charts, trends & market structure independently',
    mode: 'Live Interactive',
    support: 'Live Market Cases + Recordings',
    popular: true,
  },
  'advanced': {
    outcome: 'Master options pricing, Greeks, premium decay & risk control',
    mode: 'Live Interactive',
    support: 'Advanced Mentorship + Trade Reviews',
    popular: false,
  },
};

const CoursesPage = ({ onOpenEnquiry }) => {
  const coursesJsonLd = [
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Courses', url: '/courses' }
    ]),
    ...COURSES.map(getCourseSchema)
  ];

  const scrollToDemo = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      window.location.href = '/#free-demo';
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#07110D] text-[#E2E8F0] overflow-hidden selection:bg-[#F59E0B] selection:text-slate-950">
      <SeoHead
        title="Stock Market & Trading Courses | Elite Market Academy"
        description="Explore structured stock market and trading courses: Fundamentals, Technical Analysis, Options Trading, Risk Management, and Trading Psychology. Book a free demo."
        keywords="Stock Market Courses India, Technical Analysis Course, Options Trading Course, Risk Management Trading, Elite Market Academy"
        jsonLd={coursesJsonLd}
      />

      {/* ── HERO: DARK ── */}
      <section className="relative py-16 sm:py-28 bg-[#07110D] text-white border-b border-[#1F3A2E] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F59E0B]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-[120px] pointer-events-none" />
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1F3A2E 1px, transparent 1px), linear-gradient(90deg, #1F3A2E 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Structured Programs</span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.18]">
              Stock Market{' '}
              <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D4AF37] bg-clip-text text-transparent">
                Courses & Programs
              </span>
            </h1>

            <p className="text-xs sm:text-base text-[#94A3B8] font-medium leading-relaxed max-w-xl">
              Structured educational courses designed for beginners, intermediate learners, and aspiring traders focusing on risk management and independent market analysis.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-2.5 pt-1">
              <div className="px-3.5 py-1.5 rounded-xl bg-[#0D1B15] border border-emerald-500/30 text-emerald-400 text-[10.5px] font-mono font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Beginner to Advanced</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#0D1B15] border border-[#F59E0B]/30 text-[#F59E0B] text-[10.5px] font-mono font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Risk-First Approach</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#0D1B15] border border-[#F59E0B]/30 text-[#F59E0B] text-[10.5px] font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>NISM Standards</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COURSES GRID: LIGHT ── */}
      <section className="py-12 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Label */}
          <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-14">
            <span className="px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[11px] font-extrabold uppercase tracking-wider font-mono">
              ONE PROGRAM • 3 TAILORED LEVELS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07110D] font-heading tracking-tight">
              One Structured Program. Tailored to Your Level.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg">
              We offer one comprehensive flagship mentorship program with a customized syllabus tailored to your experience: Beginner, Intermediate, or Advanced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {COURSES.map((course) => {
              const extra = COURSE_EXTRAS[course.id] || {};
              const isPopular = extra.popular || false;

              return (
                <div
                  key={course.id}
                  className={`p-6 sm:p-7 rounded-2xl bg-white border transition-all flex flex-col justify-between gap-5 relative group hover:-translate-y-1 duration-300 shadow-2xs hover:shadow-xl ${
                    isPopular
                      ? 'border-[#F59E0B]/50 shadow-[#F59E0B]/5'
                      : 'border-[#E2E8F0] hover:border-[#F59E0B]'
                  }`}
                >
                  {/* Most Popular Tag */}
                  {isPopular && (
                    <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-slate-950 font-extrabold text-[10px] uppercase font-mono tracking-wider shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-950" />
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    {/* Level */}
                    <div className="flex items-center">
                      <span className="px-2.5 py-0.5 rounded bg-[#07110D] text-[#F59E0B] font-mono text-[10px] font-extrabold">
                        {course.level}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>

                    {/* Course Title */}
                    <h2 className="text-base sm:text-lg font-bold text-[#07110D] font-heading tracking-tight leading-snug group-hover:text-[#D97706] transition-colors">
                      {course.title}
                    </h2>

                    {/* Outcome */}
                    {extra.outcome && (
                      <p className="text-xs text-slate-600 font-medium leading-relaxed border-l-2 border-[#F59E0B]/50 pl-3">
                        {extra.outcome}
                      </p>
                    )}

                    {/* Meta Info */}
                    <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <Video className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span><span className="text-slate-400">Mode:</span> {extra.mode || 'Live Interactive'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span><span className="text-slate-400">Support:</span> {extra.support || 'Live Q&A Sessions'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                        <span><span className="text-slate-400">Modules:</span> {course.modulesCount}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-2.5 pt-1">
                    <Link
                      to={`/courses/${course.slug}`}
                      className={`w-full py-3 rounded-xl font-extrabold text-xs text-center flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 ${
                        isPopular
                          ? 'bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-slate-950 hover:brightness-110'
                          : 'bg-[#07110D] hover:bg-[#F59E0B] text-[#F59E0B] hover:text-slate-950 border border-[#E2E8F0] hover:border-[#F59E0B]'
                      }`}
                    >
                      <span>View Curriculum</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={scrollToDemo}
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-all cursor-pointer"
                    >
                      Book Free Demo
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRACTICAL FRAMEWORK: DARK ── */}
      <section className="py-14 sm:py-24 bg-[#0D1B15] text-[#E2E8F0] border-b border-[#1F3A2E] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#F59E0B]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left Content */}
            <div className="flex flex-col gap-5 text-left">
              <span className="px-3 py-1 rounded-full bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider w-max font-mono">
                PRACTICAL FRAMEWORK
              </span>

              <h2 className="text-xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Designed for Practical Skill Development
              </h2>

              <p className="text-xs sm:text-sm text-[#94A3B8] font-medium leading-relaxed">
                Every course module at Elite Market Academy bridges the gap between theoretical market concepts and real-world execution with risk control.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-2">
                  <span className="text-[#F59E0B] font-bold text-xs font-mono">✓ Practical Charting</span>
                  <p className="text-xs text-[#94A3B8]">Live market pattern identification and multi-timeframe analysis.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-2">
                  <span className="text-emerald-400 font-bold text-xs font-mono">✓ Risk Control Rules</span>
                  <p className="text-xs text-[#94A3B8]">Position sizing and risk-reward calculation framework.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-2">
                  <span className="text-[#F59E0B] font-bold text-xs font-mono">✓ Zero Tips Policy</span>
                  <p className="text-xs text-[#94A3B8]">We teach analysis. No signals. No trade calls. Ever.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-2">
                  <span className="text-emerald-400 font-bold text-xs font-mono">✓ Trading Psychology</span>
                  <p className="text-xs text-[#94A3B8]">Discipline and emotional decision-making frameworks.</p>
                </div>
              </div>
            </div>

            {/* Right: Stats Card */}
            <div className="p-8 rounded-3xl bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase">EMA Core Principle</span>
                  <p className="text-[11px] text-[#94A3B8] font-medium">Risk first. Always.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base font-bold text-white font-heading leading-relaxed border-l-4 border-[#F59E0B] pl-4 italic">
                "Our objective isn't to give learners the next trade. It's to help them understand how to analyse the market independently."
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#1F3A2E]">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-extrabold text-[#F59E0B] font-mono">7+ Years</span>
                  <span className="text-[10px] text-[#94A3B8] font-medium">Market Experience</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-extrabold text-emerald-400 font-mono">5+ Years</span>
                  <span className="text-[10px] text-[#94A3B8] font-medium">Trading & Investing</span>
                </div>
              </div>

              <button
                onClick={scrollToDemo}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/20 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Your Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA: DARK ── */}
      <section className="py-16 sm:py-24 bg-[#07110D] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F59E0B]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center gap-5">
          <span className="px-3 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider font-mono">
            TAKE THE FIRST STEP
          </span>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Need Guidance Choosing the Right Program?
          </h2>

          <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl leading-relaxed">
            Attend a free demo class to explore the curriculum, understand our teaching approach, and see whether EMA is the right fit for your learning goals.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={scrollToDemo}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-[#F59E0B]/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Your Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/"
              className="px-7 py-4 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] border border-[#1F3A2E] text-[#E2E8F0] font-bold text-xs sm:text-sm text-center transition-all"
            >
              Back to Home
            </Link>
          </div>

          <p className="text-[11px] text-[#94A3B8] font-medium pt-1">
            Educational stock market academy • Zero profit guarantees • Risk management focused
          </p>
        </div>
      </section>

    </div>
  );
};

export default CoursesPage;
