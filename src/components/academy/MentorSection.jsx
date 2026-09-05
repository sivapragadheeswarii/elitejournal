import React from 'react';
import { ShieldCheck, Award, GraduationCap, CheckCircle2, User } from 'lucide-react';
import { BRAND } from '../../data/emaData';
import founderImg from '../../assets/founder.jpeg';

const MentorSection = () => {
  return (
    <section id="mentor" className="py-16 sm:py-24 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider font-mono">
            AUTHORITY & TRUST
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Learn From Market Experience
          </h2>
          <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl">
            Learn directly from active market participants committed to practical education over hype.
          </p>
        </div>

        {/* Mentor Card Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0D1B15] border border-[#1F3A2E] p-4 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Founder Photo & Proof Badges */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#F59E0B]/40 shadow-xl group">
                <img
                  src={founderImg}
                  alt="Saravana Kumar - Founder & Lead Mentor Elite Market Academy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07110D]/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-base sm:text-lg font-extrabold text-white font-heading tracking-tight">
                  Saravana Kumar, B.E.
                </h3>
                <span className="text-xs font-mono text-[#F59E0B] font-bold">
                  Founder & Lead Educator
                </span>
                <span className="text-[11px] text-[#94A3B8] font-medium mt-0.5">
                  NISM Certified Educator • SDS Tech Founder
                </span>
              </div>

              {/* Experience Badges */}
              <div className="grid grid-cols-2 gap-2 w-full pt-2">
                <div className="p-2.5 rounded-xl bg-[#07110D] border border-[#1F3A2E] flex flex-col items-center text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-[#F59E0B] font-mono">7+ Years</span>
                  <span className="text-[9.5px] text-[#94A3B8] font-medium">Market Experience</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#07110D] border border-[#1F3A2E] flex flex-col items-center text-center">
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-400 font-mono">5+ Years</span>
                  <span className="text-[9.5px] text-[#94A3B8] font-medium">Trading & Investing</span>
                </div>
              </div>
            </div>

            {/* Mentor Philosophy Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider w-max font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>TEACHING PHILOSOPHY</span>
              </div>

              {/* Philosophy Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#07110D] border-l-4 border-[#F59E0B] border-y border-r border-[#1F3A2E]">
                <p className="text-sm sm:text-lg font-bold text-white font-heading leading-relaxed italic">
                  "Our objective isn't to give learners the next trade. It's to help them understand how to analyse the market independently."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] font-medium leading-relaxed">
                Elite Market Academy was established to bridge the gap between textbook theory and real-world market execution. We eliminate reliance on signals, focusing instead on disciplined risk management, market context, and structured technical analysis.
              </p>

              {/* Key Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#1F3A2E]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>NISM Benchmark Concepts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Capital Preservation Rules</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Practical Live Chart Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Zero Signals / Zero Tips Policy</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorSection;
