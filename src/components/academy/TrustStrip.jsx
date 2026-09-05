import React from 'react';
import { Award, ShieldCheck, BookOpen, Clock } from 'lucide-react';

const PROOF_POINTS = [
  {
    icon: Clock,
    title: '7+ Years Market Experience',
    desc: 'Deep observation of Indian & global market cycles',
  },
  {
    icon: Award,
    title: '5+ Years Trading & Investing',
    desc: 'Hands-on practical market participation',
  },
  {
    icon: BookOpen,
    title: 'Practical Market Learning',
    desc: 'Real chart setups & market structure focus',
  },
  {
    icon: ShieldCheck,
    title: 'Risk-First Approach',
    desc: 'Capital protection before return expectation',
  },
];

const TrustStrip = () => {
  return (
    <section className="py-6 sm:py-8 bg-[#0D1B15] border-b border-[#1F3A2E] text-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Desktop: 4 items horizontal row | Mobile: 1 col on <380px, 2x2 on xs, 4 on lg */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PROOF_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-3 sm:p-4 rounded-xl bg-[#07110D]/60 border border-[#1F3A2E] flex items-center gap-3 hover:border-[#F59E0B]/40 transition-all group touch-card cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[10.5px] sm:text-xs text-[#94A3B8] font-medium leading-normal mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustStrip;
