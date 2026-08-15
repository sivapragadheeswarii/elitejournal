import React from 'react';
import { TESTIMONIALS } from '../../data/testimonialsData';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';

const StudentReviewsSection = () => {
  return (
    <section id="reviews" className="py-12 sm:py-20 bg-[#07110D] relative border-b border-[#1F3A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Student Reviews</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight">
            Real Traders, Real <span className="text-emerald-400">Profit Growth</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Read success stories from students who mastered institutional price action video classes.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0D1B15] border border-[#1F3A2E] flex flex-col justify-between gap-4 sm:gap-5 shadow-xl relative group hover:border-emerald-500/40 transition-all"
            >
              <div className="flex flex-col gap-3">
                {/* Header User Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-[#1F3A2E] shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-white truncate">{review.name}</h4>
                      <span className="text-[10px] sm:text-[10.5px] text-slate-400 font-medium truncate">{review.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Profit Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-black w-max">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{review.profit}</span>
                </div>

                {/* Quote Comment */}
                <p className="text-xs text-slate-300 font-medium leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Course Taken Footer */}
              <div className="pt-3 border-t border-[#1F3A2E] text-[10px] sm:text-[10.5px] text-slate-400 font-extrabold flex items-center justify-between gap-2">
                <span className="shrink-0">Completed Course:</span>
                <span className="text-amber-400 truncate">{review.courseTaken}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentReviewsSection;
