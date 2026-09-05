import React from 'react';
import { Target, ShieldCheck, Compass, Eye, Heart, GraduationCap } from 'lucide-react';

const PILLARS = [
  {
    icon: Target,
    number: '01',
    title: 'Practical Learning',
    description: 'Connect concepts with real market context.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Risk-First Education',
    description: 'Understand risk before focusing on returns.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'Structured Framework',
    description: 'Follow a clear learning journey instead of random information.',
  },
  {
    icon: Eye,
    number: '04',
    title: 'Market Analysis',
    description: 'Learn how to observe and analyse market behaviour.',
  },
  {
    icon: Heart,
    number: '05',
    title: 'Trading Psychology',
    description: 'Understand discipline and emotional decision-making.',
  },
  {
    icon: GraduationCap,
    number: '06',
    title: 'Guided Learning',
    description: 'Learn through a structured educational approach.',
  },
];

const WhyEMA = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider">
            OUR ADVANTAGE
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Why Learn with Elite Market Academy?
          </h2>
          <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl">
            We prioritize structured market understanding, capital preservation, and decision-making discipline.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0D1B15] border border-[#1F3A2E] hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between gap-4 group hover:-translate-y-1 duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-[#07110D] text-[#F59E0B] font-mono text-xs font-black border border-[#1F3A2E]">
                    {p.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#07110D] border border-[#1F3A2E] text-[#94A3B8] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#F59E0B] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">
                    {p.description}
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

export default WhyEMA;
