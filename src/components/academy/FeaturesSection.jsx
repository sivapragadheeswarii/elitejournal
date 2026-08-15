import React from 'react';
import { Video, ShieldCheck, Zap, BarChart3, Users, Award, CheckCircle2, Lock } from 'lucide-react';

const FeaturesSection = () => {
  const FEATURES = [
    {
      icon: Video,
      title: '4K HD Video Classes',
      description: 'Stream 150+ hours of structured video lessons with lifetime access, multi-speed controls, and downloadable PDFs.',
    },
    {
      icon: BarChart3,
      title: 'Free Trading Journal App',
      description: 'Every Academy student receives a 1-year free pass to our automated PnL & analytics Trading Journal platform.',
    },
    {
      icon: Zap,
      title: 'Institutional Order Block Blueprint',
      description: 'Learn the exact liquidity concepts, fair value gaps, and kill zone timings used by institutional trading desks.',
    },
    {
      icon: Users,
      title: 'Private VIP Community',
      description: 'Collaborate with 12,500+ active traders, share chart setups, and receive daily pre-market level updates.',
    },
    {
      icon: Award,
      title: 'Prop Firm Challenge Prep',
      description: 'Dedicated video modules designed to help you pass FTMO, FundedNext, and 5%ers prop firm evaluations.',
    },
    {
      icon: ShieldCheck,
      title: 'Risk & Drawdown Rules',
      description: 'Master strict 1% risk rules, max daily loss limits, and psychological discipline to avoid emotional impulse trades.',
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-20 bg-[#07110D] relative border-b border-[#1F3A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Why Join Elite Academy</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight">
            Built for Traders Who Want <span className="text-emerald-400">Institutional Consistency</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Everything you need to stop guessing and start trading with high-probability precision.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0D1B15] border border-[#1F3A2E] hover:border-emerald-500/40 transition-all flex flex-col gap-3.5 sm:gap-4 shadow-xl group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <h3 className="text-sm sm:text-base font-black text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
