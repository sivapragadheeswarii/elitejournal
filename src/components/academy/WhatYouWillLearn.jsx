import React from 'react';
import { BookOpen, BarChart2, Layers, Cpu, ShieldCheck, HeartHandshake, ChevronRight } from 'lucide-react';

const MODULES = [
  {
    icon: BookOpen,
    title: 'Market Foundations',
    description: 'Understand the basics of financial markets, market structure and essential terminology.',
    tag: 'FUNDAMENTALS',
  },
  {
    icon: BarChart2,
    title: 'Technical Analysis',
    description: 'Learn structured approaches to reading price behaviour, trends and market structure.',
    tag: 'ANALYSIS',
  },
  {
    icon: Layers,
    title: 'Equity & Derivatives',
    description: 'Understand equity markets and derivatives with practical market context.',
    tag: 'EQUITY & FUTURES',
  },
  {
    icon: Cpu,
    title: 'Options & Greeks',
    description: 'Build an understanding of options concepts and the role of Greeks.',
    tag: 'OPTIONS MATH',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Learn how to identify, manage and control trading risk.',
    tag: 'CAPITAL CONTROL',
  },
  {
    icon: HeartHandshake,
    title: 'Trading Psychology',
    description: 'Develop discipline and understand the emotional side of decision-making.',
    tag: 'DISCIPLINE',
  },
];

const WhatYouWillLearn = () => {
  return (
    <section id="learning" className="py-16 sm:py-24 bg-[#FFFFFF] text-[#07110D] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[11px] font-extrabold uppercase tracking-wider font-mono">
            CORE MASTERY
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07110D] font-heading tracking-tight">
            What You Will Learn
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-xl">
            A comprehensive, step-by-step educational curriculum designed to build complete analytical capability.
          </p>
        </div>

        {/* 6 Cards Grid (Light Mode with Gold Accents) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MODULES.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#F59E0B] transition-all flex flex-col justify-between gap-5 sm:gap-6 group hover:-translate-y-1 duration-300 shadow-2xs hover:shadow-xl text-left"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#D97706] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-[#FFFBEB] text-[#D97706] font-mono text-[10px] font-extrabold border border-[#FDE68A]">
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#07110D] tracking-tight group-hover:text-[#D97706] transition-colors font-heading">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <a
                  href="#free-demo"
                  className="pt-4 border-t border-[#E2E8F0] text-xs font-bold text-[#D97706] hover:text-[#B45309] flex items-center justify-between group-hover:translate-x-0.5 transition-transform min-h-[38px]"
                >
                  <span>Learn More →</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatYouWillLearn;
