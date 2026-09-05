import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, ShieldCheck, PieChart, Activity, BarChart2, CheckCircle2, Zap } from 'lucide-react';

/**
 * Real Market Candlestick Stream Visual Engine
 * Frameless & borderless streaming candlestick visualization floating seamlessly on page backgrounds.
 */
export const LiveRunningCandleChart = () => {
  const regimeRef = useRef({ type: 'BULL', stepsLeft: 7 });

  // Unified Candle Generator
  const createCandle = (openPrice, regimeType) => {
    let delta = 0;
    if (regimeType === 'BULL') {
      const isGreen = Math.random() < 0.80;
      const mag = Math.random() * 12 + 4;
      delta = isGreen ? mag : -mag * 0.4;
    } else if (regimeType === 'BEAR') {
      const isRed = Math.random() < 0.82;
      const mag = Math.random() * 14 + 5;
      delta = isRed ? -mag : mag * 0.35;
    } else {
      delta = (Math.random() - 0.49) * 6;
    }

    // Gentle mean-reversion nudge to keep chart swings centered
    const driftFromBase = openPrice - 24850;
    if (driftFromBase > 100) delta -= 4;
    if (driftFromBase < -100) delta += 4;

    const closePrice = Number((openPrice + delta).toFixed(2));
    const bodyMin = Math.min(openPrice, closePrice);
    const bodyMax = Math.max(openPrice, closePrice);
    const highWick = Math.random() * 4 + 1.2;
    const lowWick = Math.random() * 4 + 1.2;

    return {
      id: `c-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      open: openPrice,
      close: openPrice, // Starts forming from open
      targetClose: closePrice,
      high: bodyMax + highWick,
      low: bodyMin - lowWick,
    };
  };

  const getNextRegime = (currentType) => {
    if (currentType === 'BULL') {
      const type = Math.random() > 0.35 ? 'BEAR' : 'SIDEWAYS';
      const stepsLeft = Math.floor(Math.random() * 6) + 4;
      return { type, stepsLeft };
    } else if (currentType === 'BEAR') {
      const type = Math.random() > 0.35 ? 'BULL' : 'SIDEWAYS';
      const stepsLeft = Math.floor(Math.random() * 7) + 5;
      return { type, stepsLeft };
    } else {
      const type = Math.random() > 0.5 ? 'BULL' : 'BEAR';
      const stepsLeft = Math.floor(Math.random() * 5) + 3;
      return { type, stepsLeft };
    }
  };

  // Generate 58 realistic initial candles
  const generateInitialCandles = (count = 58) => {
    const list = [];
    let price = 24820;
    let currentRegime = { type: 'BULL', stepsLeft: 7 };

    for (let i = count; i >= 1; i--) {
      if (currentRegime.stepsLeft <= 0) {
        currentRegime = getNextRegime(currentRegime.type);
      }
      currentRegime.stepsLeft--;

      const candle = createCandle(price, currentRegime.type);
      // Historical candles are already finalized at targetClose
      candle.close = candle.targetClose;
      list.push(candle);
      price = candle.close;
    }

    regimeRef.current = currentRegime;
    return list;
  };

  const [candles, setCandles] = useState(() => generateInitialCandles(58));
  const [livePrice, setLivePrice] = useState(24850.50);
  const [priceChange, setPriceChange] = useState(148.20);

  // Dynamic price range calculation
  const newestIndex = candles.length - 1;
  const lows = candles.map((c) => c.low);
  const highs = candles.map((c) => c.high);
  const rawMin = Math.min(...lows);
  const rawMax = Math.max(...highs);
  const margin = Math.max(6, (rawMax - rawMin) * 0.05);
  const minP = rawMin - margin;
  const maxP = rawMax + margin;
  const range = maxP - minP || 1;

  // Converts price to SVG Y coordinate covering vertical viewport height
  const priceToY = (price) => {
    const minY = 194; // Bottom edge
    const maxY = 14;  // Top edge
    const ratio = (price - minP) / range;
    return minY - ratio * (minY - maxY);
  };

  // 1. Micro-tick loop: smoothly forms the active (rightmost) candle close price
  useEffect(() => {
    const tickInterval = setInterval(() => {
      setCandles((prev) => {
        if (!prev.length) return prev;
        const lastIdx = prev.length - 1;
        const last = prev[lastIdx];

        const diff = last.targetClose - last.close;
        if (Math.abs(diff) < 0.05) return prev;

        const step = diff * 0.35 + (Math.random() - 0.5) * 0.2;
        const newClose = Number((last.close + step).toFixed(2));
        setLivePrice(newClose);

        const updatedLast = {
          ...last,
          close: newClose,
          high: Math.max(last.high, newClose),
          low: Math.min(last.low, newClose),
        };

        const nextArr = [...prev];
        nextArr[lastIdx] = updatedLast;
        return nextArr;
      });
    }, 180);

    return () => clearInterval(tickInterval);
  }, []);

  // 2. Spawner loop: every 1.5s, appends 1 new candle atomically
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      let currentRegime = regimeRef.current;
      currentRegime.stepsLeft--;
      if (currentRegime.stepsLeft <= 0) {
        currentRegime = getNextRegime(currentRegime.type);
      }
      regimeRef.current = currentRegime;

      setCandles((prev) => {
        if (!prev.length) return prev;
        const lastCandle = prev[prev.length - 1];

        // Ensure previous candle is finalized at targetClose
        const finalizedLast = {
          ...lastCandle,
          close: lastCandle.targetClose,
        };

        const nextCandle = createCandle(finalizedLast.close, currentRegime.type);

        const updatedHistory = [...prev.slice(0, prev.length - 1), finalizedLast, nextCandle];
        return updatedHistory.length > 58 ? updatedHistory.slice(1) : updatedHistory;
      });
    }, 1500);

    return () => clearInterval(spawnInterval);
  }, []);

  // Spacing: step = 9.2px, width = 4.2px
  const candleStepX = 9.2;
  const startX = 14;
  const candleWidth = 4.2;

  return (
    <div className="w-full relative">
      {/* Header Info Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1F3A2E]/60 relative z-10 font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-200">LIVE CANDLE STREAM • NIFTY 50</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-black font-mono text-white">
            ₹{livePrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${priceChange >= 0 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}`}>
            {priceChange >= 0 ? `+${priceChange.toFixed(2)}` : priceChange.toFixed(2)}
          </span>
        </div>
      </div>

      {/* SVG High-Density Real Market Candlestick Viewport (Frameless) */}
      <div className="py-2 sm:py-3 relative z-10">
        <svg viewBox="0 0 580 210" className="w-full h-56 sm:h-64 overflow-visible">
          {/* Subtle horizontal grid lines */}
          <line x1="0" y1="35" x2="580" y2="35" stroke="#1E293B" strokeDasharray="3 3" opacity="0.3" />
          <line x1="0" y1="85" x2="580" y2="85" stroke="#1E293B" strokeDasharray="3 3" opacity="0.3" />
          <line x1="0" y1="135" x2="580" y2="135" stroke="#1E293B" strokeDasharray="3 3" opacity="0.3" />
          <line x1="0" y1="185" x2="580" y2="185" stroke="#1E293B" strokeDasharray="3 3" opacity="0.3" />

          {/* Render All High-Density Streamed Candlesticks */}
          {candles.map((c, idx) => {
            const cx = startX + idx * candleStepX;
            const isBull = c.close >= c.open;
            const openY = priceToY(c.open);
            const closeY = priceToY(c.close);
            const highY = priceToY(c.high);
            const lowY = priceToY(c.low);
            const topY = Math.min(openY, closeY);
            const bodyHeight = Math.max(2.0, Math.abs(openY - closeY));
            const isNewest = idx === newestIndex;

            // Solid vibrant trading terminal colors
            const candleColor = isBull ? '#00E676' : '#FF3B30';

            return (
              <g key={c.id || idx}>
                {/* Thin Wick line */}
                <line
                  x1={cx}
                  y1={highY}
                  x2={cx}
                  y2={lowY}
                  stroke={candleColor}
                  strokeWidth="1.1"
                />

                {/* Solid Candlestick body */}
                <rect
                  x={cx - candleWidth / 2}
                  y={topY}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={candleColor}
                  rx="0.3"
                  className={isNewest ? 'animate-pulse' : ''}
                />

                {/* Rightmost Active Candle Live Dynamic Price Line & Pulsing Dot */}
                {isNewest && (
                  <g transform={`translate(${cx}, ${closeY})`}>
                    <line
                      x1="-550"
                      y1="0"
                      x2="25"
                      y2="0"
                      stroke={candleColor}
                      strokeDasharray="2 2"
                      strokeWidth="1.2"
                      opacity="0.85"
                    />
                    <circle cx="0" cy="0" r="4.5" fill={candleColor} className="animate-ping opacity-90" />
                    <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

/**
 * Premium Candlestick Chart SVG Visual
 * Clean institutional presentation for trading education
 */
export const CandlestickChartVisual = () => {
  return (
    <div className="w-full rounded-2xl bg-[#0D1B15] border border-slate-700/80 p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden group">
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-financial-grid-dark opacity-40 pointer-events-none" />

      {/* Header Info */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1F3A2E] relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-slate-300">SYSTEMATIC ANALYSIS</span>
        </div>
        <span className="px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider">
          Risk:Reward = 1:2.5
        </span>
      </div>

      {/* Interactive Candlestick SVG Representation */}
      <div className="py-6 relative z-10">
        <svg viewBox="0 0 400 160" className="w-full h-36 overflow-visible">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldLineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="30" x2="400" y2="30" stroke="#1E293B" strokeDasharray="3 3" />
          <line x1="0" y1="70" x2="400" y2="70" stroke="#1E293B" strokeDasharray="3 3" />
          <line x1="0" y1="110" x2="400" y2="110" stroke="#1E293B" strokeDasharray="3 3" />
          <line x1="0" y1="150" x2="400" y2="150" stroke="#1E293B" strokeDasharray="3 3" />

          {/* Area fill under trendline */}
          <path d="M 20 120 Q 80 110, 130 85 T 240 60 T 380 25 L 380 150 L 20 150 Z" fill="url(#chartGradient)" />

          {/* Candlesticks (Green & Red institutional candles) */}
          {/* Candle 1 (Green) */}
          <line x1="40" y1="100" x2="40" y2="140" stroke="#34D399" strokeWidth="1.5" />
          <rect x="34" y="110" width="12" height="20" fill="#34D399" rx="1.5" />

          {/* Candle 2 (Red) */}
          <line x1="80" y1="90" x2="80" y2="130" stroke="#F87171" strokeWidth="1.5" />
          <rect x="74" y="98" width="12" height="22" fill="#F87171" rx="1.5" />

          {/* Candle 3 (Green) */}
          <line x1="120" y1="75" x2="120" y2="115" stroke="#34D399" strokeWidth="1.5" />
          <rect x="114" y="82" width="12" height="24" fill="#34D399" rx="1.5" />

          {/* Candle 4 (Green) */}
          <line x1="160" y1="65" x2="160" y2="105" stroke="#34D399" strokeWidth="1.5" />
          <rect x="154" y="70" width="12" height="25" fill="#34D399" rx="1.5" />

          {/* Candle 5 (Red pullback) */}
          <line x1="200" y1="60" x2="200" y2="95" stroke="#F87171" strokeWidth="1.5" />
          <rect x="194" y="68" width="12" height="18" fill="#F87171" rx="1.5" />

          {/* Candle 6 (Green breakout) */}
          <line x1="240" y1="40" x2="240" y2="85" stroke="#34D399" strokeWidth="1.5" />
          <rect x="234" y="48" width="12" height="28" fill="#34D399" rx="1.5" />

          {/* Candle 7 (Green expansion) */}
          <line x1="280" y1="30" x2="280" y2="70" stroke="#34D399" strokeWidth="1.5" />
          <rect x="274" y="36" width="12" height="26" fill="#34D399" rx="1.5" />

          {/* Candle 8 (Green peak) */}
          <line x1="320" y1="15" x2="320" y2="55" stroke="#34D399" strokeWidth="1.5" />
          <rect x="314" y="22" width="12" height="24" fill="#34D399" rx="1.5" />

          {/* Candle 9 (Doji / Consolidation) */}
          <line x1="360" y1="10" x2="360" y2="45" stroke="#F59E0B" strokeWidth="1.5" />
          <rect x="354" y="24" width="12" height="8" fill="#F59E0B" rx="1" />

          {/* Golden Trend Line Overlay */}
          <path
            d="M 20 120 Q 80 110, 130 85 T 240 60 T 380 25"
            fill="none"
            stroke="url(#goldLineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Breakout Target Marker */}
          <circle cx="380" cy="25" r="5" fill="#F59E0B" />
          <circle cx="380" cy="25" r="10" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      {/* Footer Metrics Strip */}
      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#1F3A2E] text-center relative z-10">
        <div className="p-2 rounded-lg bg-slate-900/60 border border-[#1F3A2E]">
          <span className="block text-[10px] font-mono text-slate-400 font-bold">ANALYSIS</span>
          <span className="text-xs font-bold text-emerald-400">Price Action</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-[#1F3A2E]">
          <span className="block text-[10px] font-mono text-slate-400 font-bold">DISCIPLINE</span>
          <span className="text-xs font-bold text-amber-400">Strict Stop-Loss</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-[#1F3A2E]">
          <span className="block text-[10px] font-mono text-slate-400 font-bold">SYSTEM</span>
          <span className="text-xs font-bold text-slate-200">Elite Tracking</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Interactive Live Curriculum Visual Engine for Courses Page Hero
 * Features 3 dynamic animated modes: Price Action Breakouts, Options Risk Sizing, and Journal Discipline
 */
export const CourseCurriculumAnimation = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-rotate tabs every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 0, label: 'Price Action', icon: TrendingUp, color: 'text-emerald-400', border: 'border-emerald-500/40' },
    { id: 1, label: 'Options Risk', icon: ShieldCheck, color: 'text-amber-400', border: 'border-amber-500/40' },
    { id: 2, label: 'Journal System', icon: Activity, color: 'text-emerald-400', border: 'border-cyan-500/40' },
  ];

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#030712] border border-amber-500/30 p-4 sm:p-5 text-white shadow-2xl relative overflow-hidden group">
      {/* Glow Effects */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1F3A2E] relative z-10 font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-200 uppercase">CURRICULUM ENGINE • EMA</span>
        </div>

        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono">
          INTERACTIVE MATRIX
        </span>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-3 relative z-10 font-mono">
        {tabs.map((t) => {
          const IconComp = t.icon;
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`p-2 rounded-xl text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                isActive
                  ? `bg-slate-800/90 text-white shadow-lg ${t.border}`
                  : 'bg-slate-900/60 text-slate-400 border-[#1F3A2E]/60 hover:bg-slate-800/40'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isActive ? t.color : 'text-slate-500'}`} />
              <span className="text-[10px] sm:text-xs font-bold tracking-tight">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Display Dynamic Animation Content Based on Active Tab */}
      <div className="py-2 relative z-10 min-h-[190px] flex items-center justify-center">
        
        {/* TAB 0: Animated Price Action Breakout Engine */}
        {activeTab === 0 && (
          <div className="w-full flex flex-col gap-2 animate-fade-in">
            <svg viewBox="0 0 450 150" className="w-full h-36 overflow-visible">
              <defs>
                <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E676" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="0" y1="30" x2="450" y2="30" stroke="#1E293B" strokeDasharray="3 3" opacity="0.4" />
              <line x1="0" y1="75" x2="450" y2="75" stroke="#1E293B" strokeDasharray="3 3" opacity="0.4" />
              <line x1="0" y1="120" x2="450" y2="120" stroke="#1E293B" strokeDasharray="3 3" opacity="0.4" />

              {/* Resistance & Support lines */}
              <line x1="0" y1="40" x2="450" y2="40" stroke="#F59E0B" strokeDasharray="4 4" strokeWidth="1.2" opacity="0.8" />
              <text x="5" y="35" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">RESISTANCE ₹25,100</text>

              <line x1="0" y1="125" x2="450" y2="125" stroke="#38BDF8" strokeDasharray="4 4" strokeWidth="1.2" opacity="0.6" />
              <text x="5" y="140" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="bold">SUPPORT ₹24,750</text>

              {/* Shaded Area under breakout */}
              <path d="M 20 120 Q 80 115, 140 90 T 260 85 T 350 35 L 430 20 L 430 140 L 20 140 Z" fill="url(#waveGrad)" />

              {/* Animated Main Trend Wave Path */}
              <path
                d="M 20 120 Q 80 115, 140 90 T 260 85 T 350 35 L 430 20"
                fill="none"
                stroke="#00E676"
                strokeWidth="2.8"
                strokeLinecap="round"
                className="animate-pulse"
              />

              {/* Breakout Pulse Marker */}
              <g transform="translate(350, 35)">
                <circle cx="0" cy="0" r="7" fill="#00E676" className="animate-ping opacity-75" />
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
              </g>

              {/* Breakout Callout Badge */}
              <g transform="translate(290, 5)">
                <rect x="0" y="0" width="130" height="24" rx="6" fill="#0D1B15" stroke="#00E676" strokeWidth="1" />
                <text x="65" y="16" fill="#00E676" fontSize="9.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  🚀 BREAKOUT CONFIRMED
                </text>
              </g>
            </svg>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 px-2 pt-1 border-t border-[#1F3A2E]">
              <span className="text-emerald-400 font-bold">Structure: Higher Highs & Lows</span>
              <span className="text-amber-400 font-bold">Target: +1.8% Expansion</span>
            </div>
          </div>
        )}

        {/* TAB 1: Animated Options Risk & Position Sizing Meter */}
        {activeTab === 1 && (
          <div className="w-full flex flex-col gap-3 animate-fade-in font-mono">
            <div className="grid grid-cols-2 gap-2">
              {/* Risk:Reward Gauge Box */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 flex flex-col gap-1.5">
                <span className="text-[10px] text-slate-400 font-bold uppercase">RISK : REWARD RATIO</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-amber-400">1 : 3.2</span>
                  <span className="text-[10px] text-emerald-400 font-bold">OPTIMAL</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden flex">
                  <div className="bg-rose-500 h-full w-[24%]" />
                  <div className="bg-emerald-500 h-full w-[76%]" />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 font-bold">
                  <span className="text-rose-400">Stop: -1.2%</span>
                  <span className="text-emerald-400">Target: +3.84%</span>
                </div>
              </div>

              {/* Win-Rate Probability Box */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex flex-col gap-1.5">
                <span className="text-[10px] text-slate-400 font-bold uppercase">WIN-RATE PROBABILITY</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-emerald-400">68.5%</span>
                  <span className="text-[10px] text-emerald-400 font-bold">HIGH PROB</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[68%]" />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 font-bold">
                  <span>Expectancy: Positive</span>
                </div>
              </div>
            </div>

            {/* Position Sizing Recommendation Bar */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-[#1F3A2E] flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold">Max Capital at Risk per Trade:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-black border border-emerald-500/30">
                1.5% MAX
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Animated Journal & Discipline System */}
        {activeTab === 2 && (
          <div className="w-full flex flex-col gap-2 animate-fade-in font-mono">
            {/* Live Journal Log Simulators */}
            <div className="space-y-1.5">
              <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-slate-200">NIFTY 24800 CALL</span>
                </div>
                <span className="font-black text-emerald-400">+₹14,250 (1:3.0)</span>
              </div>

              <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-bold text-slate-200">BANKNIFTY PUT HEDGE</span>
                </div>
                <span className="font-black text-emerald-400">+₹8,600 (1:2.4)</span>
              </div>

              <div className="p-2 rounded-xl bg-slate-900/90 border border-rose-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span className="font-bold text-slate-200">FINNIFTY BREAKOUT</span>
                </div>
                <span className="font-black text-rose-400">-₹2,100 (Controlled SL)</span>
              </div>
            </div>

            {/* Discipline Meter Strip */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between text-xs mt-1">
              <span className="text-emerald-400 font-extrabold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Rule Compliance Score:
              </span>
              <span className="font-black text-white px-2 py-0.5 rounded bg-cyan-500/20 border border-emerald-500/30">
                98 / 100
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Footer Indicators */}
      <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-[#1F3A2E]/80 text-center relative z-10 font-mono mt-1">
        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-[#1F3A2E]">
          <span className="block text-[8.5px] text-slate-400 font-bold">MODULE 1</span>
          <span className="text-[10.5px] font-extrabold text-emerald-400">Price Action</span>
        </div>
        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-[#1F3A2E]">
          <span className="block text-[8.5px] text-slate-400 font-bold">MODULE 2</span>
          <span className="text-[10.5px] font-extrabold text-amber-400">Risk Sizing</span>
        </div>
        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-[#1F3A2E]">
          <span className="block text-[8.5px] text-slate-400 font-bold">MODULE 3</span>
          <span className="text-[10.5px] font-extrabold text-emerald-400">Discipline</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 4-Monitor Institutional Live Trading Console Engine
 * Replaces static trading screen photos with an active 2x2 live animated multi-monitor setup
 */
export const MultiMonitorTradingConsole = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#030712] border border-amber-500/30 p-4 sm:p-5 text-white shadow-2xl relative overflow-hidden group">
      {/* Background Ambient Lighting */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

      {/* Terminal Main Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1F3A2E] relative z-10 font-mono mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-200 uppercase tracking-wide">
            EMA OPTIONS FLOW TERMINAL
          </span>
        </div>

        <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono">
          ● MONITOR 3 • OPTIONS FLOW
        </span>
      </div>

      {/* SINGLE MAIN MONITOR: MONITOR 3 — OPTIONS FLOW & INSTITUTIONAL HEATMAP */}
      <div className="p-3 sm:p-4 rounded-2xl bg-[#07110D] border border-[#1F3A2E] flex flex-col gap-3 relative overflow-hidden font-mono relative z-10">
        
        {/* Monitor Header */}
        <div className="flex items-center justify-between text-xs border-b border-[#1F3A2E]/80 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white">MONITOR 3 • OPTIONS FLOW & DERIVATIVES</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">NIFTY 24800 CE/PE</span>
          </div>
          <span className="text-emerald-400 font-black text-sm">PCR: 1.24 (Bullish)</span>
        </div>

        {/* Dynamic Animated Volume Bars Visual */}
        <div className="flex items-end justify-between h-36 sm:h-44 pt-4 px-2 gap-1.5 bg-[#030712]/80 rounded-xl p-3 border border-[#1F3A2E]/60">
          {[45, 62, 85, 30, 95, 70, 88, 40, 60, 100, 75, 90, 55, 80, 65, 92].map((val, idx) => (
            <div key={idx} className="flex-1 bg-slate-900/80 rounded-t h-full flex items-end">
              <div
                className={`w-full rounded-t transition-all duration-500 ${idx % 2 === 0 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]'}`}
                style={{ height: `${(val + (tick % 15)) % 100}%` }}
              />
            </div>
          ))}
        </div>

        {/* Live Call vs Put Volume Summary Strip */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex flex-col text-left">
            <span className="text-[9.5px] text-slate-400 font-bold uppercase">CALL VOLUME</span>
            <span className="text-xs sm:text-sm font-black text-emerald-400">1.42M (Buy Flow)</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-900/90 border border-rose-500/30 flex flex-col text-left">
            <span className="text-[9.5px] text-slate-400 font-bold uppercase">PUT VOLUME</span>
            <span className="text-xs sm:text-sm font-black text-rose-400">1.14M (Hedge Flow)</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-900/90 border border-amber-500/30 flex flex-col text-left">
            <span className="text-[9.5px] text-slate-400 font-bold uppercase">ORDER BIAS</span>
            <span className="text-xs sm:text-sm font-black text-amber-400">Institutional Long</span>
          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * Mini Feature Visual Cards for Pillars & Learning Categories
 */
export const RiskManagementGraphic = () => (
  <div className="p-4 rounded-xl bg-slate-900 text-white border border-[#1F3A2E] flex flex-col gap-2 font-mono text-xs">
    <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold">
      <span>POSITION SIZING</span>
      <span className="text-emerald-400">1% RISK MODEL</span>
    </div>
    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
      <div className="bg-emerald-400 h-full w-[25%]" title="Capital Risk Limit (1%)" />
      <div className="bg-amber-400 h-full w-[50%]" title="Target Reward (2.5%)" />
      <div className="bg-slate-700 h-full w-[25%]" />
    </div>
    <div className="flex justify-between text-[10px] text-slate-400">
      <span>Max Risk: 1% Capital</span>
      <span className="text-amber-400 font-bold">Target: 2.5% Return</span>
    </div>
  </div>
);

/**
 * Live Market Order Desk & Execution Terminal Visual Engine
 * High-fidelity animated market terminal featuring real-time candle stream, 
 * moving averages, order depth radar, and execution feeds.
 */
export const LiveMarketOrderDeskAnimation = () => {
  const [niftyPrice, setNiftyPrice] = useState(24856.40);
  const [bankNiftyPrice, setBankNiftyPrice] = useState(52345.10);
  const [vixPrice, setVixPrice] = useState(13.45);
  const [priceDirection, setPriceDirection] = useState('UP');

  // Streaming candles
  const [candles, setCandles] = useState([
    { open: 24780, high: 24810, low: 24770, close: 24805 },
    { open: 24805, high: 24825, low: 24795, close: 24820 },
    { open: 24820, high: 24815, low: 24785, close: 24790 },
    { open: 24790, high: 24835, low: 24788, close: 24830 },
    { open: 24830, high: 24850, low: 24820, close: 24845 },
    { open: 24845, high: 24840, low: 24810, close: 24815 },
    { open: 24815, high: 24865, low: 24810, close: 24860 },
    { open: 24860, high: 24880, low: 24840, close: 24856 },
  ]);

  // Rolling Order Feed Logs
  const [logs, setLogs] = useState([
    { id: 1, type: 'BUY', symbol: 'NIFTY 24850 CE', price: '₹142.50', status: 'EXECUTED', time: '10:42:01' },
    { id: 2, type: 'ALERT', symbol: 'PRICE BREAKOUT', price: '24,850 LEVEL', status: 'CONFIRMED', time: '10:42:05' },
    { id: 3, type: 'SELL', symbol: 'BANKNIFTY 52300 PE', price: '₹285.00', status: 'TARGET HIT', time: '10:42:12' },
  ]);

  // Tick-by-tick simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.46) * 4.5;
      setNiftyPrice((prev) => {
        const next = Number((prev + delta).toFixed(2));
        setPriceDirection(delta >= 0 ? 'UP' : 'DOWN');
        return next;
      });

      setBankNiftyPrice((prev) => Number((prev + delta * 2.1).toFixed(2)));
      setVixPrice((prev) => Number(Math.max(10, prev + (Math.random() - 0.5) * 0.1).toFixed(2)));

      // Periodically append new tick into latest candle
      setCandles((prev) => {
        const copy = [...prev];
        const last = { ...copy[copy.length - 1] };
        last.close = Number((last.close + delta).toFixed(2));
        if (last.close > last.high) last.high = last.close;
        if (last.close < last.low) last.low = last.close;
        copy[copy.length - 1] = last;

        // If candle moves too far, push next candle
        if (Math.random() < 0.25 && copy.length < 12) {
          const newOpen = last.close;
          copy.push({
            open: newOpen,
            high: newOpen + Math.random() * 8,
            low: newOpen - Math.random() * 8,
            close: newOpen + (Math.random() - 0.48) * 6,
          });
          if (copy.length > 10) copy.shift();
        }
        return copy;
      });

      // Periodically append new execution log
      if (Math.random() < 0.3) {
        const sampleLogs = [
          { type: 'BUY', symbol: 'NIFTY 24900 CE', price: '₹128.40', status: 'EXECUTED' },
          { type: 'RISK', symbol: 'STOP LOSS TRAILED', price: '₹135.00', status: 'ACTIVE' },
          { type: 'BUY', symbol: 'BANKNIFTY 52400 CE', price: '₹310.20', status: 'EXECUTED' },
          { type: 'ALERT', symbol: 'VOLUME SPIKE +35%', price: 'NIFTY FUT', status: 'CONFIRMED' },
        ];
        const randomLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
        const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });

        setLogs((prevLogs) => [
          { id: Date.now(), ...randomLog, time: timeStr },
          ...prevLogs.slice(0, 3),
        ]);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#030712] border border-amber-500/30 p-3.5 sm:p-5 text-white shadow-2xl relative overflow-hidden font-sans">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-financial-grid-dark opacity-25 pointer-events-none" />

      {/* Top Terminal Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1F3A2E] relative z-10 font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-200 tracking-wider">
            NSE REALTIME EXECUTION ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[9.5px] font-bold">
            LIVE • TICKSTREAM
          </span>
        </div>
      </div>

      {/* Market Overview Ticker Cards */}
      <div className="grid grid-cols-3 gap-2 my-3 relative z-10 font-mono">
        <div className="p-2 sm:p-2.5 rounded-xl bg-[#07110D] border border-[#1F3A2E] flex flex-col">
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold">NIFTY 50</span>
          <div className="flex items-center justify-between mt-0.5">
            <span className={`text-xs sm:text-sm font-black transition-colors ${priceDirection === 'UP' ? 'text-emerald-400' : 'text-rose-400'}`}>
              {niftyPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
            <span className="text-[9px] font-bold text-emerald-400">+0.75%</span>
          </div>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-[#07110D] border border-[#1F3A2E] flex flex-col">
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold">BANK NIFTY</span>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-xs sm:text-sm font-black text-emerald-400">
              {bankNiftyPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
            <span className="text-[9px] font-bold text-emerald-400">+0.60%</span>
          </div>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-[#07110D] border border-[#1F3A2E] flex flex-col">
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold">INDIA VIX</span>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-xs sm:text-sm font-black text-amber-400">
              {vixPrice.toFixed(2)}
            </span>
            <span className="text-[9px] font-bold text-emerald-400">-3.02%</span>
          </div>
        </div>
      </div>

      {/* Main SVG Candlestick & Moving Average Canvas */}
      <div className="relative w-full h-36 sm:h-44 bg-[#07110D] rounded-xl border border-[#1F3A2E]/90 p-2 overflow-hidden my-2 z-10">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 400 160" preserveAspectRatio="none">
          {/* Background Grid Lines */}
          <line x1="0" y1="40" x2="400" y2="40" stroke="#1E293B" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="0" y1="80" x2="400" y2="80" stroke="#1E293B" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="0" y1="120" x2="400" y2="120" stroke="#1E293B" strokeWidth="1" strokeDasharray="3,3" />

          {/* Resistance Level Line */}
          <line x1="0" y1="30" x2="400" y2="30" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.6" />
          <text x="330" y="24" fill="#F59E0B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            RESISTANCE 24880
          </text>

          {/* Support Level Line */}
          <line x1="0" y1="135" x2="400" y2="135" stroke="#00E676" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.6" />
          <text x="335" y="148" fill="#00E676" fontSize="9" fontWeight="bold" fontFamily="monospace">
            SUPPORT 24780
          </text>

          {/* Dynamic Moving Average Curve (EMA 20) */}
          <path
            d="M 10 120 Q 100 90, 200 65 T 400 35"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            opacity="0.85"
          />

          {/* Dynamic Moving Average Curve (EMA 50) */}
          <path
            d="M 10 135 Q 120 115, 230 85 T 400 55"
            fill="none"
            stroke="#A855F7"
            strokeWidth="1.5"
            strokeDasharray="5,3"
            opacity="0.7"
          />

          {/* SVG Streaming Candlesticks */}
          {candles.map((c, i) => {
            const x = 20 + i * 36;
            const isGreen = c.close >= c.open;
            const color = isGreen ? '#00E676' : '#FF5252';

            // Scaling helper to map price range 24750-24900 -> SVG height 150-10
            const mapY = (price) => 150 - ((price - 24760) / 130) * 130;

            const highY = mapY(c.high);
            const lowY = mapY(c.low);
            const openY = mapY(c.open);
            const closeY = mapY(c.close);
            const bodyY = Math.min(openY, closeY);
            const bodyH = Math.max(3, Math.abs(openY - closeY));

            return (
              <g key={i}>
                {/* Wick */}
                <line x1={x} y1={highY} x2={x} y2={lowY} stroke={color} strokeWidth="1.5" />
                {/* Body */}
                <rect
                  x={x - 8}
                  y={bodyY}
                  width="16"
                  height={bodyH}
                  fill={color}
                  rx="1.5"
                  opacity={i === candles.length - 1 ? '1' : '0.9'}
                />
              </g>
            );
          })}

          {/* Floating Current Live Price Tag */}
          <g transform={`translate(340, ${150 - ((niftyPrice - 24760) / 130) * 130 - 10})`}>
            <rect x="0" y="0" width="56" height="20" rx="4" fill="#00E676" />
            <text x="28" y="13" textAnchor="middle" fill="#030712" fontSize="9" fontWeight="900" fontFamily="monospace">
              {niftyPrice.toFixed(0)}
            </text>
          </g>
        </svg>
      </div>

      {/* Live Order Flow Execution Feed */}
      <div className="flex flex-col gap-1.5 mt-3 relative z-10 font-mono">
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold border-b border-[#1F3A2E] pb-1">
          <span>LIVE ORDER FLOW EXECUTION</span>
          <span className="text-emerald-400">INSTANT MATCHING</span>
        </div>

        <div className="flex flex-col gap-1 text-[10.5px]">
          {logs.map((log) => (
            <div
              key={log.id}
              className="p-1.5 rounded-lg bg-[#07110D] border border-[#1F3A2E]/90 flex items-center justify-between animate-fly-in"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`px-1.5 py-0.5 rounded text-[9px] font-black ${
                    log.type === 'BUY'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : log.type === 'SELL'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}
                >
                  {log.type}
                </span>
                <span className="font-bold text-slate-200">{log.symbol}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-amber-400 font-bold">{log.price}</span>
                <span className="text-[9px] text-emerald-400 font-bold">{log.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

