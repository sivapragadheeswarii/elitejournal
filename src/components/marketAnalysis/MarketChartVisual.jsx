import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { Activity, CandlestickChart, LineChart as LineChartIcon } from 'lucide-react';

const MarketChartVisual = ({ item }) => {
  const [chartType, setChartType] = useState('candles');

  if (!item) return null;

  const { high, low, pivot, r1, r2, s1, s2, market } = item;

  const range = (high || 25500) - (low || 25200) || 300;
  const basePivot = pivot || 25350;

  const chartData = [
    { time: '09:15', price: low + range * 0.2, highVal: low + range * 0.28, lowVal: low + range * 0.15, type: 'bull' },
    { time: '09:45', price: low + range * 0.35, highVal: low + range * 0.42, lowVal: low + range * 0.22, type: 'bull' },
    { time: '10:15', price: low + range * 0.28, highVal: low + range * 0.38, lowVal: low + range * 0.25, type: 'bear' },
    { time: '10:45', price: basePivot, highVal: basePivot + range * 0.08, lowVal: basePivot - range * 0.05, type: 'bull' },
    { time: '11:15', price: basePivot + range * 0.12, highVal: basePivot + range * 0.18, lowVal: basePivot - range * 0.02, type: 'bull' },
    { time: '11:45', price: r1, highVal: r1 + range * 0.05, lowVal: basePivot + range * 0.05, type: 'bull' },
    { time: '12:15', price: r1 - range * 0.08, highVal: r1 + range * 0.02, lowVal: r1 - range * 0.12, type: 'bear' },
    { time: '12:45', price: basePivot + range * 0.05, highVal: r1 - range * 0.02, lowVal: basePivot - range * 0.02, type: 'bear' },
    { time: '13:15', price: s1 + range * 0.08, highVal: basePivot, lowVal: s1, type: 'bear' },
    { time: '13:45', price: basePivot, highVal: basePivot + range * 0.06, lowVal: s1 + range * 0.02, type: 'bull' },
    { time: '14:15', price: basePivot + range * 0.2, highVal: basePivot + range * 0.25, lowVal: basePivot - range * 0.02, type: 'bull' },
    { time: '14:45', price: r1 + range * 0.04, highVal: r1 + range * 0.1, lowVal: r1 - range * 0.05, type: 'bull' },
    { time: '15:15', price: (r1 + basePivot) / 2, highVal: r1 + range * 0.05, lowVal: basePivot + range * 0.08, type: 'bear' },
    { time: '15:30', price: r1, highVal: r1 + range * 0.08, lowVal: basePivot + range * 0.15, type: 'bull' },
  ];

  const minVal = Math.floor((s2 || low * 0.99) / 50) * 50;
  const maxVal = Math.ceil((r2 || high * 1.01) / 50) * 50;

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-6 transition-all shadow-xl text-slate-900 relative overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-2.5 mb-2.5 border-b border-slate-100">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 shadow-xs shrink-0">
            <Activity className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-600" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="text-xs sm:text-lg font-black tracking-tight font-heading text-[#0D1B15]">
                {market} Visual Chart
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[8.5px] sm:text-[10px] font-mono font-bold">
                LIVE DESK
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">
              Overlaid S/R levels & intraday price drawing
            </p>
          </div>
        </div>

        {/* Chart View Selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 sm:p-1 rounded-xl sm:rounded-2xl border border-slate-200 shrink-0 self-start xs:self-auto">
          <button
            onClick={() => setChartType('candles')}
            className={`px-2 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[9.5px] sm:text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
              chartType === 'candles'
                ? 'bg-[#0D1B15] text-amber-400 font-black shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CandlestickChart className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Candles</span>
          </button>

          <button
            onClick={() => setChartType('area')}
            className={`px-2 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[9.5px] sm:text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
              chartType === 'area'
                ? 'bg-[#0D1B15] text-amber-400 font-black shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LineChartIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Area Line</span>
          </button>
        </div>
      </div>

      {/* Main Visual Display Terminal Frame */}
      <div className="w-full h-52 sm:h-72 relative bg-[#07110D] p-1 sm:p-2.5 rounded-xl sm:rounded-2xl border border-[#1F3A2E] shadow-inner overflow-hidden">
        <AnimatePresence mode="wait">
          {chartType === 'area' ? (
            <motion.div
              key="area"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 15, right: 15, left: -15, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#64748B" fontSize={9} tickLine={false} />
                  <YAxis
                    domain={[minVal, maxVal]}
                    stroke="#64748B"
                    fontSize={9}
                    tickLine={false}
                    tickFormatter={(v) => `₹${v}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#07110D',
                      borderColor: '#F59E0B',
                      borderRadius: '0.5rem',
                      color: '#FFF',
                      fontSize: '10px',
                      fontFamily: 'monospace',
                    }}
                    formatter={(val) => [`₹${val.toLocaleString('en-IN')}`, 'Price']}
                  />

                  {r1 && (
                    <ReferenceLine
                      y={r1}
                      stroke="#F43F5E"
                      strokeDasharray="4 4"
                      label={{ value: `R1 ₹${r1}`, fill: '#F43F5E', fontSize: 8.5, position: 'right' }}
                    />
                  )}
                  {pivot && (
                    <ReferenceLine
                      y={pivot}
                      stroke="#F59E0B"
                      strokeDasharray="3 3"
                      label={{ value: `Pivot ₹${pivot}`, fill: '#F59E0B', fontSize: 8.5, position: 'right' }}
                    />
                  )}
                  {s1 && (
                    <ReferenceLine
                      y={s1}
                      stroke="#10B981"
                      strokeDasharray="4 4"
                      label={{ value: `S1 ₹${s1}`, fill: '#10B981', fontSize: 8.5, position: 'right' }}
                    />
                  )}

                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                    isAnimationActive={true}
                    animationDuration={1200}
                    animationEasing="ease-in-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          ) : (
            <motion.div
              key="candles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex items-end justify-between gap-1 px-1.5 sm:px-4 pt-4 pb-5 bg-slate-950/60 rounded-lg sm:rounded-xl border border-[#1F3A2E]/80 relative overflow-hidden"
            >
              {/* Level Overlay Lines */}
              <div className="absolute inset-0 pointer-events-none px-1.5 sm:px-4 py-4 flex flex-col justify-between opacity-35">
                <div className="border-b border-dashed border-rose-500 flex justify-between text-[8px] sm:text-[9px] font-mono text-rose-400">
                  <span>R1</span>
                  <span>₹{r1?.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-b border-dashed border-amber-500 flex justify-between text-[8px] sm:text-[9px] font-mono text-amber-400">
                  <span>Pivot</span>
                  <span>₹{pivot?.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-b border-dashed border-emerald-500 flex justify-between text-[8px] sm:text-[9px] font-mono text-emerald-400">
                  <span>S1</span>
                  <span>₹{s1?.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Candlesticks */}
              {chartData.map((candle, idx) => {
                const isBull = candle.type === 'bull';
                const bodyHeightPct = Math.max(15, (Math.abs(candle.highVal - candle.lowVal) / range) * 100);

                return (
                  <motion.div
                    key={candle.time}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.35, delay: idx * 0.04, ease: 'easeOut' }}
                    className="flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer"
                  >
                    <div
                      className={`w-[1.5px] sm:w-[2px] rounded-full transition-colors ${
                        isBull ? 'bg-emerald-400 group-hover:bg-emerald-300' : 'bg-rose-500 group-hover:bg-rose-400'
                      }`}
                      style={{ height: `${Math.min(95, bodyHeightPct + 20)}%` }}
                    />

                    <div
                      className={`w-full max-w-[7px] sm:max-w-[14px] rounded-xs sm:rounded-sm absolute transition-all shadow-md ${
                        isBull
                          ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 border border-emerald-300 shadow-emerald-950/40 group-hover:brightness-125'
                          : 'bg-gradient-to-t from-rose-700 to-rose-500 border border-rose-300 shadow-rose-950/40 group-hover:brightness-125'
                      }`}
                      style={{
                        height: `${Math.max(12, bodyHeightPct)}%`,
                        bottom: `${((candle.price - low) / range) * 70 + 10}%`,
                      }}
                    />

                    <div className="absolute -top-9 hidden group-hover:flex flex-col items-center bg-slate-900 border border-slate-700 px-1.5 py-0.5 rounded text-[8px] font-mono text-white z-20 whitespace-nowrap shadow-xl">
                      <span>
                        {candle.time}: ₹{Math.round(candle.price).toLocaleString('en-IN')}
                      </span>
                    </div>

                    <span className="text-[7.5px] sm:text-[9px] font-mono text-slate-500 mt-1 truncate">{candle.time}</span>
                  </motion.div>
                );
              })}

              <div className="absolute right-2 top-3 sm:right-4 sm:top-8 flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[8px] sm:text-[10px] font-mono font-bold animate-pulse">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Feed</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MarketChartVisual;
