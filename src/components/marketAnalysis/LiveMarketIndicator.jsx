import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const LiveMarketIndicator = ({ lastUpdatedTime, isRefreshing, onRefresh }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 w-full max-w-full">
      {/* Live Market Dot Indicator */}
      <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700/90 text-[10px] sm:text-xs font-mono font-extrabold text-emerald-400 shadow-xl backdrop-blur-md max-w-full truncate">
        <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 items-center justify-center shrink-0">
          <motion.span
            animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
          />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 bg-emerald-500 shadow-sm shadow-emerald-400" />
        </span>
        <span className="tracking-wide text-emerald-400 shrink-0">Market Live</span>
        <span className="opacity-40 text-slate-500 shrink-0">|</span>
        <span className="font-semibold text-[9px] sm:text-[11px] text-slate-300 truncate">
          {isRefreshing ? 'Updating...' : `Updated ${lastUpdatedTime || 'just now'}`}
        </span>
      </div>

      {/* Refresh Action Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRefresh}
        disabled={isRefreshing}
        className="flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/90 text-[10px] sm:text-xs font-bold text-slate-200 transition-all cursor-pointer hover:border-amber-500/50 hover:shadow-lg active:scale-95 shadow-md shrink-0"
        title="Refresh Desk Data"
      >
        <RefreshCw className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isRefreshing ? 'animate-spin text-amber-400' : 'text-amber-400'}`} />
        <span>Refresh Desk</span>
      </motion.button>
    </div>
  );
};

export default LiveMarketIndicator;
