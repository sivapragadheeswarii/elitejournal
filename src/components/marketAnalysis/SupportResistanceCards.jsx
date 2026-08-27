import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export const ResistanceSection = ({ r1, r2, r3 }) => {
  const levels = [
    { label: 'R1', value: r1, desc: 'Primary Resistance Line' },
    { label: 'R2', value: r2, desc: 'Secondary Resistance Level' },
    { label: 'R3', value: r3, desc: 'Maximum Target Limit' },
  ];

  return (
    <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-rose-200 bg-white text-slate-900 flex flex-col gap-2.5 sm:gap-4 shadow-lg shadow-rose-900/5">
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-rose-100">
        <div className="flex items-center gap-1.5 sm:gap-2 text-rose-600 font-mono font-black text-[10px] sm:text-xs uppercase tracking-wider">
          <div className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-rose-50 border border-rose-200 text-rose-600 shrink-0">
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-rose-600" />
          </div>
          <span>Resistance Levels (Supply)</span>
        </div>
        <span className="text-[8.5px] sm:text-[10px] font-mono text-rose-600/70 font-bold shrink-0">Upper Limits</span>
      </div>

      <div className="grid grid-cols-1 gap-1.5 sm:gap-2.5">
        {levels.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -2, scale: 1.01, boxShadow: '0 4px 15px rgba(225, 29, 72, 0.12)' }}
            transition={{ duration: 0.2 }}
            className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-rose-200/80 bg-rose-50/60 text-slate-900 flex items-center justify-between font-mono transition-all cursor-pointer hover:border-rose-400 hover:bg-rose-50"
          >
            <div className="flex items-center gap-2 min-w-0 pr-1.5">
              <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl bg-rose-100 text-rose-700 font-black text-[9.5px] sm:text-xs border border-rose-300 shrink-0">
                {item.label}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium truncate">
                {item.desc}
              </span>
            </div>

            <div className="text-[11px] sm:text-base font-black text-rose-600 font-mono shrink-0">
              <AnimatedNumber value={item.value} prefix="₹" duration={800} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SupportSection = ({ s1, s2, s3 }) => {
  const levels = [
    { label: 'S1', value: s1, desc: 'Primary Support Line' },
    { label: 'S2', value: s2, desc: 'Secondary Support Floor' },
    { label: 'S3', value: s3, desc: 'Maximum Cushion Floor' },
  ];

  return (
    <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-emerald-200 bg-white text-slate-900 flex flex-col gap-2.5 sm:gap-4 shadow-lg shadow-emerald-900/5">
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-emerald-100">
        <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600 font-mono font-black text-[10px] sm:text-xs uppercase tracking-wider">
          <div className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
            <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
          </div>
          <span>Support Levels (Demand)</span>
        </div>
        <span className="text-[8.5px] sm:text-[10px] font-mono text-emerald-600/70 font-bold shrink-0">Lower Bounds</span>
      </div>

      <div className="grid grid-cols-1 gap-1.5 sm:gap-2.5">
        {levels.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -2, scale: 1.01, boxShadow: '0 4px 15px rgba(16, 185, 129, 0.12)' }}
            transition={{ duration: 0.2 }}
            className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-emerald-200/80 bg-emerald-50/60 text-slate-900 flex items-center justify-between font-mono transition-all cursor-pointer hover:border-emerald-400 hover:bg-emerald-50"
          >
            <div className="flex items-center gap-2 min-w-0 pr-1.5">
              <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl bg-emerald-100 text-emerald-700 font-black text-[9.5px] sm:text-xs border border-emerald-300 shrink-0">
                {item.label}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium truncate">
                {item.desc}
              </span>
            </div>

            <div className="text-[11px] sm:text-base font-black text-emerald-600 font-mono shrink-0">
              <AnimatedNumber value={item.value} prefix="₹" duration={800} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
