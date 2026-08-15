import React from 'react';
import { BRAND } from '../data/emaData';

const AboutPage = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-10">
        
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            About EMA
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B192C] font-heading">
            About Elite Market Academy
          </h1>
        </div>

        <div className="flex flex-col gap-6 text-sm text-slate-700 leading-relaxed font-medium">
          <p className="text-base text-slate-800 font-semibold">
            Elite Market Academy was created with a simple philosophy: meaningful market participation begins with meaningful market knowledge.
          </p>
          <p>
            The stock market can appear complex when approached without a structured learning path. EMA aims to simplify important financial-market concepts and present them in a progressive, practical and understandable format.
          </p>
          <p>
            Our educational approach covers market fundamentals, technical analysis, options education, intraday trading concepts, risk management and trading psychology.
          </p>
          <p>
            We believe that education should encourage understanding, discipline and informed decision-making—not unrealistic expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
            <h2 className="text-xl font-black text-[#0B192C] font-heading">Our Mission</h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              To make financial-market education more structured, understandable and accessible for learners who want to develop genuine market knowledge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
            <h2 className="text-xl font-black text-[#0B192C] font-heading">Our Vision</h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              To build a trusted financial education brand that encourages knowledge, discipline and responsible market learning.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
