import React from 'react';
import { Check, Sparkles, Crown, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const PricingSection = () => {
  const PLANS = [
    {
      name: 'Starter Explorer',
      badge: 'Free Access',
      price: '₹0',
      period: 'Forever Free',
      description: 'Ideal for beginners exploring institutional trading video lessons.',
      isPopular: false,
      features: [
        '3 Free Video Lesson Previews',
        'Basic Trading Community Access',
        'Weekly Market Newsletter',
        'Standard Quality Video Player',
      ],
      buttonText: 'Start Free Preview',
      buttonLink: '#courses',
      buttonStyle: 'bg-[#07110D] border border-[#1F3A2E] text-slate-200 hover:bg-[#12231C]',
    },
    {
      name: 'Pro Trader Academy',
      badge: '🔥 Most Popular',
      price: '₹2,999',
      period: 'per year (Regular ₹4,999)',
      description: 'Complete video curriculum + 1-Year Free Pro Trading Journal access.',
      isPopular: true,
      features: [
        'All 150+ HD Video Lessons (4K Quality)',
        '1-Year FREE Pro Trading Journal App Pass',
        'Weekly Live Market Analysis Webinars',
        'Institutional Order Block Cheat Sheet PDF',
        'Verified Student Certificate of Completion',
        '24/7 Discord Trader Community Access',
      ],
      buttonText: 'Enroll in Pro Academy',
      buttonLink: '#courses',
      buttonStyle: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-xl shadow-emerald-500/25',
    },
    {
      name: 'Elite VIP Mentorship',
      badge: 'Lifetime Access',
      price: '₹5,999',
      period: 'One-Time Lifetime Payment',
      description: 'For traders seeking 1-on-1 mentorship and lifetime journal access.',
      isPopular: false,
      features: [
        'Everything in Pro Trader Academy',
        'LIFETIME Unlimited Video Access',
        'LIFETIME Pro Trading Journal App Access',
        '1-on-1 Trade Review Sessions with Siva',
        'Private VIP Discord Voice Channel',
        'Prop Firm Challenge Passing Strategy',
      ],
      buttonText: 'Join VIP Mentorship',
      buttonLink: '#courses',
      buttonStyle: 'bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-white',
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-[#0D1B15] relative border-b border-[#1F3A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Academy Enrollment Plans</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight">
            Invest in Your <span className="text-emerald-400">Trading Future</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            1-Year Free Trial included with all non-admin registrations. Simple, transparent pricing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 text-left items-stretch">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between gap-5 sm:gap-6 relative transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#122A20] via-[#0D1B15] to-[#07110D] border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-100 lg:-translate-y-2'
                  : 'bg-[#07110D] border border-[#1F3A2E] shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-black text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 sm:px-4 py-1 rounded-full shadow-lg flex items-center gap-1 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" /> {plan.badge}
                </div>
              )}

              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-black text-white">{plan.name}</span>
                  {!plan.isPopular && (
                    <span className="text-[9.5px] sm:text-[10px] font-extrabold text-amber-400 uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2.5xl sm:text-4xl font-black text-white tracking-tight">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                </div>

                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  {plan.description}
                </p>

                <div className="h-px bg-[#1F3A2E]" />

                {/* Features List */}
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <a
                href={plan.buttonLink}
                className={`w-full py-3 sm:py-3.5 rounded-2xl font-black text-xs text-center transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 mt-2 ${plan.buttonStyle}`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
