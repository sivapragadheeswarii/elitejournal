import React from 'react';
import { UserCheck, TrendingUp, Layers, PieChart } from 'lucide-react';

const AUDIENCES = [
  {
    icon: UserCheck,
    badge: '01',
    title: 'Complete Beginners',
    description: 'Starting from market fundamentals.',
    benefit: 'Master core market concepts, orders, exchanges, and chart mechanics from ground zero.',
  },
  {
    icon: TrendingUp,
    badge: '02',
    title: 'Active Traders',
    description: 'Wanting more structure and discipline.',
    benefit: 'Eliminate emotional decisions and replace impulsive setups with repeatable technical rules.',
  },
  {
    icon: Layers,
    badge: '03',
    title: 'Options Learners',
    description: 'Wanting to understand premiums, Greeks and risk.',
    benefit: 'Learn option pricing, Greeks, Theta decay, volatility, and strict options risk control.',
  },
  {
    icon: PieChart,
    badge: '04',
    title: 'Investors',
    description: 'Looking to strengthen market analysis.',
    benefit: 'Use technical chart timing and market cycles to optimize portfolio entries and exits.',
  },
];

const AudienceSection = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#0D1B15] text-[#E2E8F0] border-b border-[#1F3A2E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-16">
          <span className="px-3 py-1 rounded-full bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider">
            TARGET AUDIENCE
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Who Is This Stock Market Course For?
          </h2>
          <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl">
            Designed for learners seeking disciplined, practical market understanding rather than shortcuts or tips.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#0D1B15] border border-[#1F3A2E] hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between gap-4 group hover:-translate-y-1 duration-300 shadow-lg text-left"
              >
                <div className="flex flex-col gap-3 text-left">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#07110D] text-[#94A3B8] font-mono text-[10px] font-bold border border-[#1F3A2E]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#F59E0B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E2E8F0] font-semibold leading-relaxed italic">
                    "{item.description}"
                  </p>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed pt-2 border-t border-[#1F3A2E]/60">
                    {item.benefit}
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

export default AudienceSection;
