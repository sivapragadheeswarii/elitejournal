import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const MarketSentimentBadge = ({ sentiment = 'Bullish' }) => {
  const normalized = (sentiment || 'Bullish').toLowerCase();

  let config = {
    label: 'Bullish',
    icon: TrendingUp,
    dotBg: 'bg-emerald-500',
    badgeBg: 'bg-emerald-950/70 border-emerald-500/40 text-emerald-400 shadow-emerald-950/40',
  };

  if (normalized.includes('bear')) {
    config = {
      label: 'Bearish',
      icon: TrendingDown,
      dotBg: 'bg-rose-500',
      badgeBg: 'bg-rose-950/70 border-rose-500/40 text-rose-400 shadow-rose-950/40',
    };
  } else if (normalized.includes('neutr') || normalized.includes('range')) {
    config = {
      label: 'Neutral',
      icon: Minus,
      dotBg: 'bg-amber-500',
      badgeBg: 'bg-amber-950/70 border-amber-500/40 text-amber-400 shadow-amber-950/40',
    };
  }

  const IconComponent = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border text-[9.5px] sm:text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-xs backdrop-blur-md transition-all shrink-0 ${config.badgeBg}`}
    >
      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 items-center justify-center shrink-0">
        <motion.span
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute inline-flex h-full w-full rounded-full ${config.dotBg}`}
        />
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 ${config.dotBg}`} />
      </span>
      <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
      <span>{config.label}</span>
    </div>
  );
};

export default MarketSentimentBadge;
