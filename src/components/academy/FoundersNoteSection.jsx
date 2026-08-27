import React from 'react';
import { 
  ShieldCheck, BookOpen, Target, Quote, 
  Layers, LineChart, ShieldAlert, RefreshCw, TrendingUp, Sparkles, AlertTriangle
} from 'lucide-react';
import founderImg from '../../assets/founder.jpeg';

import ScrollReveal from '../common/ScrollReveal';

const FoundersNoteSection = ({ showPhoto = true, theme = 'light', sec1Theme, sec2Theme }) => {
  const isDarkSec1 = (sec1Theme || theme) === 'dark';
  const isDarkSec2 = (sec2Theme || theme) === 'dark';

  const philosophySteps = [
    { step: '01', title: 'Learn', desc: 'Understand market fundamentals, structure & mechanics before risking capital.', icon: BookOpen },
    { step: '02', title: 'Analyse', desc: 'Study price action, technical indicators & risk parameters objectively.', icon: LineChart },
    { step: '03', title: 'Manage Risk', desc: 'Prioritise capital preservation, position sizing & emotional discipline.', icon: ShieldAlert },
    { step: '04', title: 'Improve', desc: 'Track trades with the Elite Performance Tracking System to fix mistakes.', icon: RefreshCw },
    { step: '05', title: 'Build Consistency', desc: 'Focus on a repeatable, disciplined process rather than daily profit chasing.', icon: TrendingUp },
  ];

  return (
    <>
      {/* SECTION 1: FOUNDER'S NOTE & GENESIS */}
      <section className={`py-12 sm:py-24 border-b relative overflow-hidden transition-colors ${
        isDarkSec1 
          ? 'bg-[#050E1A] border-slate-800 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}>
        {isDarkSec1 && <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal animation="fade-up">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3 mb-8 sm:mb-14">
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-mono inline-flex items-center gap-2 shadow-2xs ${
                isDarkSec1
                  ? 'bg-slate-900 border border-amber-500/30 text-amber-400'
                  : 'bg-amber-50 border border-amber-200 text-amber-800'
              }`}>
                <Sparkles className={`w-3.5 h-3.5 ${isDarkSec1 ? 'text-amber-400' : 'text-amber-600'}`} /> THE EMA GENESIS & FOUNDER'S VISION
              </span>
              <h2 className={`text-xl sm:text-5xl font-black font-heading tracking-tight max-w-4xl ${
                isDarkSec1 ? 'text-white' : 'text-[#0B192C]'
              }`}>
                Why Elite Market Academy Was Founded
              </h2>
              <p className={`text-xs sm:text-sm font-medium max-w-xl ${
                isDarkSec1 ? 'text-slate-300' : 'text-slate-600'
              }`}>
                A personal message on authentic education, risk control, and responsible market participation.
              </p>
            </div>
          </ScrollReveal>

          <div className={showPhoto ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start' : 'max-w-4xl mx-auto'}>

            {/* LEFT - PHOTO */}
            {showPhoto && (
              <ScrollReveal animation="slide-left" className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
                  <div className="w-full aspect-[4/5] relative overflow-hidden">
                    <img 
                      src={founderImg} 
                      alt="Saravana Kumar, B.E. - Founder of Elite Market Academy and SDS Technologies" 
                      loading="lazy"
                      width="400"
                      height="500"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A] via-[#050E1A]/40 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col gap-1.5 sm:gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider w-max font-mono">
                        <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> NISM Certified
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black font-heading text-white">Saravana Kumar, B.E.</h3>
                      <p className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">Founder – Elite Market Academy</p>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-slate-300">Founder – SDS Technologies</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* RIGHT - MERGED CONTENT */}
            <ScrollReveal animation="slide-right" className={`${showPhoto ? 'lg:col-span-7' : 'w-full'} flex flex-col gap-4 sm:gap-6`}>
              <div className={`p-5 sm:p-10 rounded-2xl sm:rounded-3xl border flex flex-col gap-5 sm:gap-6 shadow-sm ${
                isDarkSec1 ? 'bg-[#0B192C] border-slate-800 text-white' : 'bg-[#F8FAFC] border-slate-200 text-slate-900'
              }`}>

                {/* Quote Box */}
                <div className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border flex items-start gap-3 sm:gap-4 shadow-sm ${
                  isDarkSec1 ? 'bg-[#050E1A] border-amber-500/40 text-white' : 'bg-white border-amber-300 text-slate-900'
                }`}>
                  <div className={`p-2.5 sm:p-3 rounded-xl border shrink-0 ${
                    isDarkSec1 ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest font-mono block mb-0.5 sm:mb-1 ${
                      isDarkSec1 ? 'text-amber-400' : 'text-amber-700'
                    }`}>FOUNDER'S RATIONALE</span>
                    <h3 className={`text-base sm:text-xl font-black font-heading ${
                      isDarkSec1 ? 'text-white' : 'text-[#0B192C]'
                    }`}>
                      "Why did I start Elite Market Academy?"
                    </h3>
                  </div>
                </div>

                {/* Merged Message & Rationale Body */}
                <div className={`space-y-3.5 sm:space-y-4 text-xs sm:text-sm leading-relaxed font-medium ${
                  isDarkSec1 ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <p className={`font-semibold text-xs sm:text-base ${isDarkSec1 ? 'text-white' : 'text-[#0B192C]'}`}>
                    Elite Market Academy was founded by <strong className={isDarkSec1 ? 'text-white' : 'text-[#0B192C]'}>Saravana Kumar, B.E.</strong> (Founder of SDS Technologies) to bridge the gap between speculative trading and structured market education. Combining enterprise software engineering principles with NISM-certified standards, EMA provides a systematic, transparent, and technology-driven learning ecosystem.
                  </p>

                  <div className={`p-3.5 sm:p-4 rounded-xl border-l-4 font-bold text-xs sm:text-sm ${
                    isDarkSec1 ? 'bg-amber-500/15 border-amber-500 text-amber-200' : 'bg-amber-50 border-amber-500 text-amber-900'
                  }`}>
                    Trading is a professional discipline—not a shortcut to wealth. Real progress requires structured knowledge, objective analysis, and strict risk control.
                  </div>

                  <p>
                    Instead of stock tips or unrealistic promises, EMA equips learners with analytical chart-reading skills, disciplined risk management frameworks, and our proprietary <strong className={isDarkSec1 ? 'text-amber-400' : 'text-amber-700'}>Elite Performance Tracking System</strong> to foster responsible, long-term market participation.
                  </p>

                  {/* Embedded Mission & Vision Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                    <div className={`p-4 sm:p-4.5 rounded-xl border flex flex-col gap-1.5 shadow-2xs ${
                      isDarkSec1 ? 'bg-[#050E1A] border-slate-800' : 'bg-white border-slate-200'
                    }`}>
                      <div className={`flex items-center gap-2 font-black text-xs font-heading ${
                        isDarkSec1 ? 'text-amber-400' : 'text-amber-700'
                      }`}>
                        <Target className="w-3.5 h-3.5" />
                        <span>OUR MISSION</span>
                      </div>
                      <p className={`text-[11px] sm:text-xs leading-relaxed ${isDarkSec1 ? 'text-slate-300' : 'text-slate-600'}`}>
                        To make financial-market education structured, practical, and accessible for learners building genuine capability.
                      </p>
                    </div>

                    <div className={`p-4 sm:p-4.5 rounded-xl border flex flex-col gap-1.5 shadow-2xs ${
                      isDarkSec1 ? 'bg-[#050E1A] border-slate-800' : 'bg-white border-slate-200'
                    }`}>
                      <div className={`flex items-center gap-2 font-black text-xs font-heading ${
                        isDarkSec1 ? 'text-amber-400' : 'text-amber-700'
                      }`}>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>OUR VISION</span>
                      </div>
                      <p className={`text-[11px] sm:text-xs leading-relaxed ${isDarkSec1 ? 'text-slate-300' : 'text-slate-600'}`}>
                        To build India's most trusted stock market academy focused on risk control, discipline, and systematic trading.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sign-off */}
                <div className={`pt-4 sm:pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 ${
                  isDarkSec1 ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div className="flex flex-col">
                    <span className={`text-[10px] sm:text-[11px] font-medium italic ${isDarkSec1 ? 'text-slate-400' : 'text-slate-500'}`}>Sincerely & Warm regards,</span>
                    <h4 className={`text-sm sm:text-base font-black font-heading ${isDarkSec1 ? 'text-white' : 'text-[#0B192C]'}`}>Saravana Kumar, B.E.</h4>
                    <p className={`text-[11px] sm:text-xs font-bold font-mono ${isDarkSec1 ? 'text-amber-400' : 'text-amber-700'}`}>Founder – Elite Market Academy</p>
                    <p className={`text-[10px] sm:text-[11px] font-semibold ${isDarkSec1 ? 'text-slate-400' : 'text-slate-500'}`}>NISM Certified | Founder – SDS Technologies</p>
                  </div>
                </div>

              </div>

              {/* Disclaimer Note */}
              <div className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border flex items-start gap-2.5 sm:gap-3 text-xs font-medium ${
                isDarkSec1 ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${isDarkSec1 ? 'text-amber-400' : 'text-amber-600'}`} />
                <p className="text-[11px] sm:text-xs">
                  <strong>Disclaimer:</strong> Elite Market Academy provides educational and informational content and does not guarantee profits or returns. Stock market trading carries risk. Trade responsibly after thorough analysis.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SECTION 2: GUIDING PHILOSOPHY & 5-STEP PATHWAY */}
      <section className={`py-12 sm:py-24 border-b relative overflow-hidden transition-colors ${
        isDarkSec2
          ? 'bg-[#050E1A] text-white border-slate-800'
          : 'bg-white text-slate-900 border-slate-200'
      }`}>
        {isDarkSec2 && <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-8 sm:gap-12">

          {/* Core Motto Card */}
          <ScrollReveal animation="scale-in">
            <div className={`p-6 sm:p-12 rounded-2xl sm:rounded-3xl border flex flex-col gap-3 sm:gap-5 text-center max-w-4xl mx-auto w-full ${
              isDarkSec2
                ? 'bg-[#0B192C] border-slate-800 shadow-xl text-white'
                : 'bg-[#F8FAFC] border-slate-200 shadow-sm text-slate-900'
            }`}>
              <span className={`text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-widest font-mono ${
                isDarkSec2 ? 'text-amber-400' : 'text-amber-700'
              }`}>
                THE EMA GUIDING PRINCIPLE
              </span>
              <blockquote className={`text-xl sm:text-4xl font-black font-heading leading-tight ${
                isDarkSec2 ? 'text-white' : 'text-[#0B192C]'
              }`}>
                “Decrease Your Losses. Build Consistency.”
              </blockquote>
              <p className={`text-xs sm:text-sm font-medium leading-relaxed pt-3 sm:pt-4 border-t max-w-2xl mx-auto ${
                isDarkSec2 ? 'text-slate-300 border-slate-800' : 'text-slate-600 border-slate-200'
              }`}>
                <strong>What does consistency mean?</strong> Consistency does not mean making profits every day. It means developing a repeatable process, controlling risk, learning from mistakes, and continuously improving.
              </p>
            </div>
          </ScrollReveal>

          {/* 5 Steps Pathway */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className={`flex items-center justify-between border-b pb-3 sm:pb-4 ${
              isDarkSec2 ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <span className={`flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider font-mono ${
                isDarkSec2 ? 'text-amber-400' : 'text-amber-700'
              }`}>
                <Layers className={`w-4 h-4 ${isDarkSec2 ? 'text-amber-400' : 'text-amber-600'}`} /> THE 5-STEP LEARNING PATHWAY
              </span>
              <span className={`text-xs font-semibold hidden sm:inline font-mono ${
                isDarkSec2 ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Structured & Progressive Education
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4">
              {philosophySteps.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <ScrollReveal key={item.step} animation="fade-up" delay={idx * 100}>
                    <div className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border flex flex-col gap-2 sm:gap-3 group transition-all h-full ${
                      isDarkSec2
                        ? 'bg-slate-900/90 border-slate-800 hover:border-amber-400 shadow-lg hover:shadow-amber-500/10 text-white'
                        : 'bg-[#F8FAFC] border-slate-200/90 hover:border-amber-400/80 shadow-sm text-slate-900'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] sm:text-xs font-black font-mono ${
                          isDarkSec2 ? 'text-amber-400' : 'text-amber-700'
                        }`}>{item.step}</span>
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border ${
                          isDarkSec2
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          <IconComp className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-black font-heading transition-colors leading-snug ${
                        isDarkSec2 ? 'text-white group-hover:text-amber-400' : 'text-[#0B192C] group-hover:text-amber-700'
                      }`}>{item.title}</h4>
                      <p className={`text-[10.5px] sm:text-xs font-medium leading-normal sm:leading-relaxed ${
                        isDarkSec2 ? 'text-slate-300' : 'text-slate-600'
                      }`}>{item.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Key Statement */}
          <ScrollReveal animation="fade-up">
            <div className={`p-4 sm:p-6 rounded-2xl border flex items-center gap-3 sm:gap-4 ${
              isDarkSec2
                ? 'bg-slate-900/90 border-amber-500/30 text-white shadow-xl'
                : 'bg-amber-50 border-amber-200 text-amber-950 shadow-sm'
            }`}>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                isDarkSec2
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  : 'bg-amber-100 text-amber-700 border-amber-200'
              }`}>
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className={`text-xs sm:text-sm font-medium leading-relaxed italic ${
                isDarkSec2 ? 'text-slate-200' : 'text-amber-950 font-semibold'
              }`}>
                "Our goal is not to promise profits. Our goal is to help learners develop the knowledge, discipline and risk-management mindset required to participate in the markets responsibly."
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
};

export default FoundersNoteSection;
