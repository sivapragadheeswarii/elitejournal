import React from 'react';
import { HelpCircle, AlertTriangle, Compass, Brain, CheckCircle2 } from 'lucide-react';

const PROBLEMS = [
  {
    icon: HelpCircle,
    title: 'Following Random Tips',
    description: 'No independent decision-making framework.',
  },
  {
    icon: AlertTriangle,
    title: 'Trading Without Risk Management',
    description: 'Entering trades without defining risk.',
  },
  {
    icon: Compass,
    title: 'Strategy Without Market Context',
    description: 'Knowing a strategy but not knowing when to use it.',
  },
  {
    icon: Brain,
    title: 'Emotional Decision-Making',
    description: 'Fear, greed and revenge trading disrupt execution.',
  },
];

const ProblemSection = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-16">
          <span className="px-3 me-0 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider">
            THE REAL CHALLENGE
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight max-w-3xl">
            Why Do Most Beginners Struggle in the Market?
          </h2>
          <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl">
            Understanding the root causes of market inconsistencies is the first step toward building a disciplined framework.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROBLEMS.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#0D1B15] border border-[#1F3A2E] hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between gap-4 group hover:-translate-y-1 duration-300 shadow-lg"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-[#F59E0B] transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1F3A2E]/60 text-[10px] font-mono text-[#94A3B8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  <span>Common Pitfall</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Solution Statement Banner */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0D1B15] via-[#12261E] to-[#0D1B15] border border-[#F59E0B]/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-left shadow-xl">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/30 mt-0.5 sm:mt-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold text-[#F59E0B] uppercase tracking-wider block">THE EMA CORE PRINCIPLE</span>
              <h4 className="text-sm sm:text-lg font-extrabold text-white tracking-tight leading-snug">
                "The solution isn't more tips. It's better market understanding."
              </h4>
            </div>
          </div>
          <a
            href="#free-demo"
            className="w-full sm:w-auto text-center px-5 py-3 sm:py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D4AF37] text-slate-950 font-extrabold text-xs transition-all whitespace-nowrap shrink-0 shadow-md active:scale-95"
          >
            Learn Our Approach
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
