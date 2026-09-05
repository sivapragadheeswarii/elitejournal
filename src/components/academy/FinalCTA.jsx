import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND } from '../../data/emaData';

const FinalCTA = ({ onOpenDemo }) => {
  const scrollToDemo = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const demoEl = document.getElementById('free-demo');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const cleanPhone = BRAND.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello Elite Market Academy! I am interested in learning more about your stock market programs.')}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-16 sm:py-28 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] relative overflow-hidden text-center">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F59E0B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center gap-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TAKE THE FIRST STEP</span>
        </div>

        <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
          Stop Trading Without Understanding the Market.
        </h2>

        <p className="text-xs xs:text-sm sm:text-base text-[#F59E0B] font-mono font-bold tracking-wide">
          Build Knowledge • Understand Risk • Develop a Framework
        </p>

        <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-xl leading-relaxed">
          Join Elite Market Academy to master technical analysis, options derivatives, and disciplined risk management.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
          <button
            onClick={scrollToDemo}
            className="w-full sm:w-auto min-h-[46px] px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm text-center shadow-lg shadow-[#F59E0B]/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer btn-shimmer"
          >
            <span>Book Your Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto min-h-[46px] px-8 py-3.5 sm:py-4 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] border border-emerald-500/40 text-emerald-400 font-bold text-xs sm:text-sm text-center transition-all cursor-pointer shadow-md active:scale-95 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp EMA</span>
          </button>
        </div>

        <p className="text-[11px] text-[#94A3B8] font-medium pt-2">
          Educational stock market academy • Zero profit guarantees • Capital protection focused
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;
