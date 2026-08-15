import React, { useState } from 'react';
import { FAQS } from '../../data/testimonialsData';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-12 sm:py-20 bg-[#0D1B15] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-emerald-400">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#07110D] border border-[#1F3A2E] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-white cursor-pointer hover:text-emerald-400 transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-300 font-medium leading-relaxed border-t border-[#1F3A2E]/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
