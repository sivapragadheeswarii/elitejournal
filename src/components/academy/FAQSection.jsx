import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

const AUDIT_FAQS = [
  {
    question: 'Is this course suitable for beginners?',
    answer: 'Yes, our programs start from ground zero, building market fundamentals step-by-step before moving into technical analysis, derivatives, and options.',
  },
  {
    question: 'Do I need previous trading experience?',
    answer: 'No prior experience is required. We cover market mechanics, order types, candlestick patterns, and risk management from the very basics.',
  },
  {
    question: 'Is the training online or offline?',
    answer: 'The training is delivered through interactive live online sessions, allowing you to learn from anywhere with flexible schedule options.',
  },
  {
    question: 'What will I learn in the course?',
    answer: 'You will learn market structure, technical price chart reading, equity derivatives, options pricing & Greeks, position sizing, risk management rules, and trading psychology.',
  },
  {
    question: 'Are classes live or recorded?',
    answer: 'We provide live interactive classes accompanied by structured recorded modules for continuous review and practice.',
  },
  {
    question: 'Will I receive doubt-clearing support?',
    answer: 'Yes, learners receive dedicated live Q&A interaction during sessions along with educational support for clarifying concepts.',
  },
  {
    question: 'Does EMA provide trading calls or tips?',
    answer: 'No. Elite Market Academy is strictly an educational platform. We focus on teaching independent chart analysis, risk control, and decision-making skills—never trade calls or tips.',
  },
  {
    question: 'Does the course guarantee profits?',
    answer: 'No. EMA is an educational platform. We focus on market knowledge, analysis, risk management and structured learning.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#07110D] border-b border-[#E2E8F0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[11px] font-extrabold uppercase tracking-wider font-mono">
            TRANSPARENCY & CLARITY
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07110D] font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-xl">
            Honest answers to common questions about stock market education, risk management, and learning with EMA.
          </p>
        </div>

        {/* Accordion Container (Light Mode) */}
        <div className="flex flex-col gap-4">
          {AUDIT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isAntiCallOrProfit = idx === 6 || idx === 7;

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border overflow-hidden transition-all duration-300 shadow-2xs hover:shadow-md ${
                  isAntiCallOrProfit ? 'border-[#FDE68A]' : 'border-[#E2E8F0]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`w-full p-4 sm:p-6 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer transition-colors ${
                    isAntiCallOrProfit ? 'hover:bg-[#FFFBEB]/50' : 'hover:bg-slate-50/80'
                  }`}
                >
                  <span className="text-xs sm:text-base font-bold text-[#07110D] tracking-tight flex items-start sm:items-center gap-2.5 sm:gap-3 font-heading leading-snug">
                    {isAntiCallOrProfit ? (
                      <ShieldAlert className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5 sm:mt-0" />
                    ) : (
                      <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5 sm:mt-0" />
                    )}
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#D97706] transition-transform duration-300 shrink-0 mt-0.5 sm:mt-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-[#E2E8F0] animate-fade-in text-left">
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
