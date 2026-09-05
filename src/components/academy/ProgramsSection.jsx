import React from 'react';
import { Clock, Video, MessageCircle, ArrowRight, Star, Check, Users } from 'lucide-react';
import { COURSES } from '../../data/emaData';

// Enrich each course with conversion info
const COURSE_EXTRAS = {
  'market-fundamentals': {
    outcome: 'Build complete market foundation & understand order mechanics',
    mode: 'Live Interactive',
    support: 'Live Q&A Sessions',
    popular: false,
  },
  'technical-analysis': {
    outcome: 'Read price charts, trends & market structure independently',
    mode: 'Live Interactive',
    support: 'Live Q&A + Recordings',
    popular: true,
  },
  'options-trading': {
    outcome: 'Understand option pricing, Greeks, premium decay & risk control',
    mode: 'Live Interactive',
    support: 'Live Q&A + Recordings',
    popular: true,
  },
  'advanced-derivatives': {
    outcome: 'Master complex derivatives strategies with full risk awareness',
    mode: 'Live Interactive',
    support: 'Live Q&A + Recordings',
    popular: false,
  },
  'trading-psychology': {
    outcome: 'Build disciplined, repeatable decision-making habits',
    mode: 'Live Interactive',
    support: 'Live Q&A Sessions',
    popular: false,
  },
};

const ProgramsSection = ({ onOpenDemo }) => {
  const handleSelectCourse = () => {
    const demoEl = document.getElementById('free-demo');
    if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-14 sm:py-24 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider font-mono">
            STRUCTURED PROGRAMS
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Stock Market Courses & Programs
          </h2>
          <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl">
            Choose a structured learning track suited to your experience level and learning objectives.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {COURSES.map((course) => {
            const extra = COURSE_EXTRAS[course.id] || {};
            const isPopular = extra.popular || false;

            return (
              <div
                key={course.id}
                className={`p-5 sm:p-7 rounded-2xl bg-[#0D1B15] border transition-all flex flex-col justify-between gap-5 relative group shadow-xl hover:-translate-y-1 duration-300 text-left ${
                  isPopular
                    ? 'border-[#F59E0B]/60 shadow-[#F59E0B]/5'
                    : 'border-[#1F3A2E] hover:border-[#F59E0B]/40'
                }`}
              >
                {/* Popular Tag */}
                {isPopular && (
                  <div className="absolute -top-3 right-4 sm:right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-slate-950 font-extrabold text-[9.5px] sm:text-[10px] uppercase font-mono tracking-wider shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  {/* Level Badge & Duration */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-[#07110D] text-[#F59E0B] font-mono text-[10px] font-extrabold border border-[#1F3A2E]">
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#94A3B8] font-mono font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#F59E0B] transition-colors leading-snug font-heading">
                    {course.title}
                  </h3>

                  {/* Learning Outcome */}
                  {extra.outcome && (
                    <p className="text-xs text-[#94A3B8] font-medium leading-relaxed border-l-2 border-[#F59E0B]/40 pl-3">
                      {extra.outcome}
                    </p>
                  )}

                  {/* Course Details */}
                  <div className="pt-3 border-t border-[#1F3A2E] flex flex-col gap-2 text-xs text-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><span className="text-[#94A3B8]">Mode:</span> {extra.mode || 'Live Interactive'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><span className="text-[#94A3B8]">Support:</span> {extra.support || 'Live Q&A Sessions'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Focus: Risk Control & Structured Analysis</span>
                    </div>
                  </div>
                </div>

                {/* View Curriculum CTA */}
                <button
                  onClick={handleSelectCourse}
                  className={`w-full py-3 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 border shadow-md cursor-pointer active:scale-95 ${
                    isPopular
                      ? 'bg-[#F59E0B] hover:bg-[#D4AF37] text-slate-950 border-[#F59E0B]'
                      : 'bg-[#07110D] hover:bg-[#F59E0B] text-[#F59E0B] hover:text-slate-950 border-[#1F3A2E] hover:border-[#F59E0B]'
                  }`}
                >
                  <span>View Curriculum & Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
