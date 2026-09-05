import React from 'react';
import { ChevronRight } from 'lucide-react';

const STAGES = [
  {
    step: '01',
    title: 'Foundation',
    desc: 'Learn market fundamentals.',
  },
  {
    step: '02',
    title: 'Analysis',
    desc: 'Understand charts and market behaviour.',
  },
  {
    step: '03',
    title: 'Strategy',
    desc: 'Learn structured trading approaches.',
  },
  {
    step: '04',
    title: 'Risk',
    desc: 'Manage capital and position risk.',
  },
  {
    step: '05',
    title: 'Discipline',
    desc: 'Develop repeatable execution.',
  },
];

const LearningJourney = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] text-[#07110D] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[11px] font-extrabold uppercase tracking-wider font-mono">
            PROGRESSION PATHWAY
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07110D] font-heading tracking-tight">
            Your Learning Journey
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-xl">
            A clear 5-stage educational progression designed to move you from foundational basics to independent market analysis.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline | Mobile: Vertical Cards */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-[#E2E8F0] -translate-y-6 z-0" />

          {STAGES.map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F59E0B] transition-all flex flex-col justify-between gap-4 relative z-10 group shadow-sm hover:shadow-xl duration-300 text-left"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] font-mono text-sm font-extrabold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {st.step}
                </div>

                <h3 className="text-base font-bold text-[#07110D] tracking-tight group-hover:text-[#D97706] transition-colors font-heading">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0] text-[10px] font-mono font-bold text-[#D97706]">
                Stage {i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Layout */}
        <div className="flex lg:hidden flex-col gap-3 sm:gap-4">
          {STAGES.map((st, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] flex items-start gap-3.5 sm:gap-4 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] font-mono text-sm font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                {st.step}
              </div>
              <div className="flex flex-col text-left gap-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#07110D] font-heading tracking-tight">
                    {st.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-[#FFFBEB] text-[10px] font-mono font-bold text-[#D97706] border border-[#FDE68A] shrink-0">
                    Stage {i + 1}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;
