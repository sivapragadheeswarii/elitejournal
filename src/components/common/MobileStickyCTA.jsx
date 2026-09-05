import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { BRAND } from '../../data/emaData';

const MobileStickyCTA = ({ onOpenDemo }) => {
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
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello Elite Market Academy! I would like to book a Free Demo Class.')}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+8px)] bg-[#07110D]/95 backdrop-blur-md border-t border-[#1F3A2E] shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <button
          onClick={scrollToDemo}
          className="py-3 px-3 rounded-xl min-h-[44px] bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer btn-shimmer animate-breathing-glow"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
          <span>Free Demo</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="py-3 px-3 rounded-xl min-h-[44px] bg-[#0D1B15] text-emerald-400 border border-emerald-500/40 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
