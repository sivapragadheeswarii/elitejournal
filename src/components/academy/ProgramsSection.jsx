import React from 'react';
import { Clock, Video, MessageCircle, ArrowRight, Star, Sparkles, Shield } from 'lucide-react';
import { COURSES } from '../../data/emaData';

const ProgramsSection = ({ onOpenDemo }) => {
  const handleSelectLevel = (levelTitle) => {
    // Notify the Free Demo form to preselect this level
    window.dispatchEvent(new CustomEvent('select-ema-level', { detail: levelTitle }));

    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const demoEl = document.getElementById('free-demo') || document.getElementById('contact');
      if (demoEl) {
        demoEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="courses" className="py-14 sm:py-24 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ONE COMPREHENSIVE PROGRAM • 3 TAILORED LEVELS</span>
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight max-w-3xl">
            One Structured Program.{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D4AF37] bg-clip-text text-transparent">
              Tailored to Your Level.
            </span>
          </h2>
        </div>

        {/* 3 Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {COURSES.map((course, idx) => {
            const isPopular = course.popular || course.id === 'intermediate';

            return (
              <div
                key={course.id}
                className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0D1B15] border transition-all flex flex-col justify-between gap-6 relative group shadow-xl hover:-translate-y-1.5 duration-300 text-left touch-card ${
                  isPopular
                    ? 'border-[#F59E0B] shadow-[#F59E0B]/10 ring-1 ring-[#F59E0B]/30'
                    : 'border-[#1F3A2E] hover:border-[#F59E0B]/50'
                }`}
              >
                {/* Popular Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-slate-950 font-extrabold text-[10px] uppercase font-mono tracking-wider shadow-lg flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-slate-950" />
                    MOST POPULAR TRACK
                  </div>
                )}

                <div className="flex flex-col gap-5">
                  {/* Top Meta: Level Tag & Duration */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-extrabold tracking-wider border ${
                      isPopular
                        ? 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/40'
                        : 'bg-[#07110D] text-emerald-400 border-[#1F3A2E]'
                    }`}>
                      LEVEL 0{idx + 1} • {course.level.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Level Title & Tagline */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading group-hover:text-[#F59E0B] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F59E0B] font-mono leading-snug">
                      {course.tagline || `Tailored for ${course.level} Learners`}
                    </p>
                  </div>

                  {/* Syllabus Suitability Description */}
                  <p className="text-xs sm:text-[13px] text-[#94A3B8] font-medium leading-relaxed">
                    {course.shortDesc}
                  </p>

                  {/* Program Delivery Info */}
                  <div className="pt-3 border-t border-[#1F3A2E]/60 flex flex-col gap-2 text-xs text-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><span className="text-[#94A3B8]">Delivery:</span> Live Interactive Sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><span className="text-[#94A3B8]">Mentorship:</span> 1-on-1 Q&A + Live Guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><span className="text-[#94A3B8]">Focus:</span> Capital Safety & Risk Control</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => handleSelectLevel(course.title)}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 border shadow-md cursor-pointer active:scale-95 btn-shimmer ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] hover:brightness-110 text-slate-950 border-[#F59E0B]'
                      : 'bg-[#07110D] hover:bg-[#F59E0B] text-[#F59E0B] hover:text-slate-950 border-[#1F3A2E] hover:border-[#F59E0B]'
                  }`}
                >
                  <span>Select {course.title} & Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Advisory / Free Demo Assessment Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0D1B15] via-[#11241C] to-[#0D1B15] border border-[#1F3A2E] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider font-mono justify-center md:justify-start">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Level Guidance</span>
            </div>
            <h4 className="text-base sm:text-xl font-bold text-white font-heading">
              Not sure which level suits your experience?
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Attend our Free Demo Class. Our mentor will evaluate your background, trading experience, and learning goals to recommend the right level for you.
            </p>
          </div>
          <button
            onClick={() => handleSelectLevel('Beginner')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg cursor-pointer active:scale-95 shrink-0 btn-shimmer"
          >
            <span>Attend Free Demo Class</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
