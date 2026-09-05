import React from 'react';
import { Users, GraduationCap, Award, ShieldCheck, TrendingUp, BarChart2 } from 'lucide-react';

const STATS = [
  {
    icon: Users,
    value: '5,000+',
    label: 'Aspiring Traders Educated',
    sub: 'Across Equity & Derivatives',
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/50'
  },
  {
    icon: GraduationCap,
    value: '15+',
    label: 'Structured Modules',
    sub: 'From Basics to Advanced Price Action',
    color: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/50'
  },
  {
    icon: ShieldCheck,
    value: '1 : 2.5',
    label: 'Risk-to-Reward Model',
    sub: 'Institutional Risk Discipline',
    color: 'text-emerald-400',
    borderColor: 'hover:border-cyan-500/50'
  },
  {
    icon: Award,
    value: '100%',
    label: 'SEBI & NISM Standard',
    sub: 'Pure Skill & Zero Tips Policy',
    color: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50'
  }
];

const TradingStatsCounter = () => {
  return (
    <div className="w-full bg-[#07110D] border-y border-[#1F3A2E]/90 py-12 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-financial-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-32 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-[#0D1B15]/80 border border-[#1F3A2E] transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${stat.borderColor} flex flex-col gap-3 group`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-slate-900 border border-[#1F3A2E] flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">
                    METRIC 0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${stat.color}`}>
                    {stat.value}
                  </h4>
                  <span className="text-sm font-extrabold text-white font-heading">
                    {stat.label}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {stat.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TradingStatsCounter;
