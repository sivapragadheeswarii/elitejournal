import React from 'react';
import { BookOpen, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Learn the Concept',
    desc: 'Understand market mechanics, price action, candlestick structure, derivatives, and foundational terminology.',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Analyse the Market',
    desc: 'Evaluate price trends, support/resistance zones, volume confirmation, and market context objectively.',
    icon: LineChart,
  },
  {
    number: '03',
    title: 'Execute with Discipline',
    desc: 'Apply strict position sizing, stop-loss rules, risk-reward ratios, and emotional decision controls.',
    icon: ShieldCheck,
  },
];

const AboutEMAFramework = () => {
  return (
    <section id="about" className="py-14 sm:py-24 bg-[#F8FAFC] text-[#07110D] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[11px] font-extrabold uppercase tracking-wider shadow-2xs font-mono">
            EDUCATIONAL FRAMEWORK
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07110D] font-heading tracking-tight">
            What is Elite Market Academy?
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-3xl leading-relaxed">
            Elite Market Academy is a practical financial education academy focused on helping traders and investors understand the market through structured learning, market analysis and risk management.
          </p>
        </div>

        {/* 3 Step Process Cards (Light Cards with Gold Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F59E0B] transition-all flex flex-col justify-between gap-5 sm:gap-6 group relative shadow-sm hover:shadow-xl duration-300"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] font-mono text-sm font-extrabold">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-base sm:text-lg font-bold text-[#07110D] tracking-tight group-hover:text-[#D97706] transition-colors font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D97706] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutEMAFramework;
