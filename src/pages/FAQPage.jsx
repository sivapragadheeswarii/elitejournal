import React from 'react';
import { AEO_FAQS } from '../data/emaData';
import { HelpCircle } from 'lucide-react';

const FAQPage = () => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-10">
        
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Support & Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B192C] font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Find answers to common questions about Elite Market Academy, our education programs, policies, and risk disclosures.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {AEO_FAQS.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <h3 className="text-base font-black text-[#0B192C] font-heading flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQPage;
