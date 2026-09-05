import React from 'react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Karthik R.',
    role: 'Active Student',
    quote: 'The focus on risk management completely transformed how I view the market. Before EMA, I was jumping into trades based on random social media tips without any stop-loss rules.',
    highlight: 'Shifted from tips to systematic analysis',
  },
  {
    name: 'Santhosh M.',
    role: 'Options Learner',
    quote: 'Options concepts like Theta decay and IV crush were always confusing until I took this structured module. Now I understand option pricing math before placing any order.',
    highlight: 'Gained solid options math understanding',
  },
  {
    name: 'Venkatesh P.',
    role: 'Working Professional',
    quote: 'What sets Elite Market Academy apart is their strict stance against fake profit guarantees. They teach real chart reading, discipline, and capital preservation above all else.',
    highlight: 'Authentic & realistic market education',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#07110D] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[11px] font-extrabold uppercase tracking-wider font-mono">
            STUDENT FEEDBACK
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07110D] font-heading tracking-tight">
            What Our Learners Say
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-xl">
            Real feedback from learners who have built structured market discipline with Elite Market Academy.
          </p>
        </div>

        {/* Testimonials Grid (Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#F59E0B] transition-all flex flex-col justify-between gap-5 sm:gap-6 relative group shadow-2xs hover:shadow-xl text-left"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#CBD5E1] group-hover:text-[#D97706]/40 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-1">
                <span className="text-xs font-mono font-extrabold text-[#D97706] uppercase tracking-wide">
                  ✓ {rev.highlight}
                </span>
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold pt-1">
                  <span className="text-[#07110D] font-bold">{rev.name}</span>
                  <span>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
