import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Zap } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

const PivotCard = ({ pivotValue }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-amber-300 bg-white text-slate-900 flex flex-col items-center text-center justify-between shadow-xl shadow-amber-900/5 overflow-hidden cursor-pointer group"
    >
      {/* Subtle Breathing Pulse Ambient Ring */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-amber-400 pointer-events-none shadow-[inset_0_0_20px_rgba(245,158,11,0.1)]"
      />

      {/* Header */}
      <div className="flex items-center justify-between w-full pb-2 sm:pb-3 border-b border-amber-100 relative z-10">
        <div className="flex items-center gap-1.5">
          <div className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200 text-amber-600 shadow-xs shrink-0">
            <Compass className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 animate-spin-slow" />
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-extrabold text-amber-700 uppercase tracking-wider">
            Pivot Level
          </span>
        </div>
        <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-[8.5px] sm:text-[10px] font-mono font-black uppercase shrink-0">
          Key Level
        </span>
      </div>

      {/* Price Display */}
      <div className="my-2.5 sm:my-4 flex flex-col items-center relative z-10">
        <span className="text-[9px] sm:text-[11px] font-mono font-bold text-amber-700 uppercase tracking-widest">
          Pivot Point Price
        </span>
        <div className="text-lg xs:text-xl sm:text-3xl font-black font-mono tracking-tight text-amber-600 mt-0.5">
          <AnimatedNumber value={pivotValue} prefix="₹" duration={800} />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full pt-2 sm:pt-3 border-t border-amber-100 text-[9px] sm:text-[11px] font-mono text-slate-600 font-medium flex items-center justify-center gap-1 relative z-10">
        <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0" />
        <span className="truncate">Central Market Equilibrium Level</span>
      </div>
    </motion.div>
  );
};

export default PivotCard;
