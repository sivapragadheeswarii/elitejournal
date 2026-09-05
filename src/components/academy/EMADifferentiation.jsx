import React from 'react';
import { XCircle, CheckCircle2, Target, ShieldCheck, Compass, Eye, Heart, GraduationCap } from 'lucide-react';

const COMPARISONS = [
  {
    typical: 'Random Tips & Signal Groups',
    ema: 'Independent Chart Analysis',
  },
  {
    typical: 'Isolated Strategy without Context',
    ema: 'Strategy + Live Market Context',
  },
  {
    typical: 'Over-focus on Profit & Quick Return Claims',
    ema: 'Risk-First Thinking & Capital Protection',
  },
  {
    typical: 'Copy-pasting Trade Calls',
    ema: 'Structured Decision Framework',
  },
  {
    typical: 'Expecting Instant Overnight Mastery',
    ema: 'Structured, Progressive Learning Journey',
  },
];

const PILLARS = [
  {
    icon: Target,
    title: 'Practical Learning',
    description: 'Concepts connected to real market context.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk-First Education',
    description: 'Risk management before aggressive strategy execution.',
  },
  {
    icon: Compass,
    title: 'Structured Framework',
    description: 'A process instead of random trading decisions.',
  },
  {
    icon: Eye,
    title: 'Market Analysis',
    description: 'Understand market behaviour rather than blindly following calls.',
  },
  {
    icon: Heart,
    title: 'Trading Psychology',
    description: 'Build disciplined decision-making habits.',
  },
  {
    icon: GraduationCap,
    title: 'Guided Learning',
    description: 'Structured progression and learner support.',
  },
];

const EMADifferentiation = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#0D1B15] text-[#E2E8F0] border-b border-[#1F3A2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-16 sm:gap-20">
        
        {/* PART 1: COMPARISON UI */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider font-mono">
            HOW EMA TEACHES DIFFERENTLY
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight max-w-3xl">
            Don't Learn What to Trade. <span className="text-[#F59E0B]">Learn How to Think.</span>
          </h2>
          <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl">
            Compare the conventional "get-rich-quick" mindset with Elite Market Academy's structured, independent framework.
          </p>

          {/* Comparison Table */}
          <div className="w-full max-w-4xl mt-6 rounded-2xl bg-[#07110D] border border-[#1F3A2E] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 p-3 sm:p-5 bg-[#0D1B15] border-b border-[#1F3A2E] font-heading font-extrabold text-[11px] sm:text-sm text-center">
              <div className="text-rose-400 uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5">
                <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">TYPICAL APPROACH</span>
              </div>
              <div className="text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 border-l border-[#1F3A2E]">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">EMA APPROACH</span>
              </div>
            </div>

            <div className="divide-y divide-[#1F3A2E]">
              {COMPARISONS.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 p-3 sm:p-5 text-[11px] sm:text-sm font-medium text-left">
                  <div className="text-[#94A3B8] flex items-start sm:items-center gap-1.5 sm:gap-2 pr-2 sm:pr-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1 sm:mt-0" />
                    <span className="leading-snug">{row.typical}</span>
                  </div>
                  <div className="text-white font-semibold flex items-start sm:items-center gap-1.5 sm:gap-2 pl-2.5 sm:pl-4 border-l border-[#1F3A2E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1 sm:mt-0" />
                    <span className="text-emerald-300 leading-snug">{row.ema}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 sm:p-4 bg-[#0D1B15] border-t border-[#1F3A2E] text-center text-[11px] sm:text-xs font-mono text-[#F59E0B]">
              Independent Thinking • Risk Control • Structured Education
            </div>
          </div>
        </div>

        {/* PART 2: CONSOLIDATED WHY LEARN WITH EMA (6 PILLARS) */}
        <div className="flex flex-col items-center text-center gap-8 pt-6 border-t border-[#1F3A2E]/60">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              Why Learn with Elite Market Academy?
            </h2>
            <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl">
              Six foundational pillars built around capital preservation and repeatable trading discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-2xl bg-[#07110D] border border-[#1F3A2E] hover:border-[#F59E0B]/50 transition-all flex flex-col gap-3 text-left group hover:-translate-y-1 duration-300 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#F59E0B] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EMADifferentiation;
