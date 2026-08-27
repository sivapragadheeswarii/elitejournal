import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Activity, BarChart2, Zap, Sliders, ShieldCheck, 
  Target, Layers, Eye, RefreshCw, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

const INDICATORS = [
  { id: 'ema', name: 'EMA 20/50 Trend', color: 'text-amber-400', desc: 'Identifies dynamic support & trend direction' },
  { id: 'rsi', name: 'RSI Momentum', color: 'text-cyan-400', desc: 'Detects oversold/overbought momentum reversals' },
  { id: 'snr', name: 'Support & Resistance', color: 'text-emerald-400', desc: 'Key institutional key supply & demand zones' },
  { id: 'risk', name: 'Risk 1:2.5 Calculator', color: 'text-purple-400', desc: 'Calculates strict position sizing & max downside' },
];

const TradingTerminalDemo = () => {
  const [activeTab, setActiveTab] = useState('ema');
  const [livePrice, setLivePrice] = useState(24850.40);
  const [priceChange, setPriceChange] = useState(145.20);
  const [isBuySignal, setIsBuySignal] = useState(true);

  // Simulate real-time live price ticks
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 4.5;
      setLivePrice(prev => Number((prev + delta).toFixed(2)));
      setPriceChange(prev => Number((prev + delta * 0.5).toFixed(2)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-[#060E1A] border border-slate-700/80 shadow-2xl overflow-hidden relative text-white group">
      
      {/* Ambient Gradient Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

      {/* Terminal Top Bar */}
      <div className="px-4 py-3 bg-[#0B192C] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-extrabold text-amber-400 tracking-wider uppercase flex items-center gap-1.5 border-l border-slate-700 pl-3">
            <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            EMA PRO TERMINAL v3.4
          </span>
        </div>

        {/* Live Price Display */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-slate-400 font-bold">NIFTY 50 INDEX</span>
          <span className="text-base font-black text-white">{livePrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          <span className={`px-2 py-0.5 rounded font-bold text-[11px] flex items-center gap-1 ${priceChange >= 0 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}`}>
            {priceChange >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {priceChange >= 0 ? `+${priceChange.toFixed(2)}` : priceChange.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Indicator Selection Buttons */}
      <div className="p-3 bg-[#081324] border-b border-slate-800/90 flex flex-wrap gap-2 relative z-10">
        {INDICATORS.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setActiveTab(ind.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === ind.id
                ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-105'
                : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-700/80'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span>{ind.name}</span>
          </button>
        ))}
      </div>

      {/* Interactive Main Chart Visualizer Area */}
      <div className="p-5 sm:p-6 relative z-10 flex flex-col gap-4">
        
        {/* Dynamic Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Active View:</span>
            <span className="text-amber-400 font-bold uppercase">{INDICATORS.find(i => i.id === activeTab)?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[10px]">
              BULLISH STRUCTURE DETECTED
            </span>
            <span className="px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold text-[10px]">
              R:R 1:2.5
            </span>
          </div>
        </div>

        {/* SVG Animated Candlestick Chart */}
        <div className="relative h-48 sm:h-56 w-full rounded-xl bg-slate-950/80 border border-slate-800/90 p-2 overflow-hidden">
          <svg viewBox="0 0 500 200" className="w-full h-full">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="40" x2="500" y2="40" stroke="#1E293B" strokeDasharray="4 4" opacity="0.6" />
            <line x1="0" y1="90" x2="500" y2="90" stroke="#1E293B" strokeDasharray="4 4" opacity="0.6" />
            <line x1="0" y1="140" x2="500" y2="140" stroke="#1E293B" strokeDasharray="4 4" opacity="0.6" />

            {/* Support Zone Box */}
            <rect x="0" y="145" width="500" height="35" fill="#10B981" opacity="0.08" />
            <text x="10" y="165" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">Key Demand Zone (Support Level)</text>

            {/* Resistance Zone Box */}
            <rect x="0" y="20" width="500" height="30" fill="#EF4444" opacity="0.08" />
            <text x="10" y="38" fill="#EF4444" fontSize="10" fontFamily="monospace" fontWeight="bold">Supply Zone (Target Level)</text>

            {/* Area under curve */}
            <path d="M 20 150 L 60 135 L 100 145 L 150 110 L 200 120 L 260 80 L 320 95 L 390 50 L 460 35 L 460 180 L 20 180 Z" fill="url(#areaGrad)" />

            {/* Dynamic Candlesticks */}
            {/* C1 */}
            <line x1="40" y1="130" x2="40" y2="160" stroke="#10B981" strokeWidth="1.5" />
            <rect x="34" y="135" width="12" height="18" fill="#10B981" rx="1" />

            {/* C2 */}
            <line x1="80" y1="120" x2="80" y2="150" stroke="#EF4444" strokeWidth="1.5" />
            <rect x="74" y="125" width="12" height="20" fill="#EF4444" rx="1" />

            {/* C3 */}
            <line x1="120" y1="105" x2="120" y2="145" stroke="#10B981" strokeWidth="1.5" />
            <rect x="114" y="112" width="12" height="25" fill="#10B981" rx="1" />

            {/* C4 */}
            <line x1="160" y1="95" x2="160" y2="130" stroke="#10B981" strokeWidth="1.5" />
            <rect x="154" y="100" width="12" height="22" fill="#10B981" rx="1" />

            {/* C5 Pullback */}
            <line x1="200" y1="105" x2="200" y2="135" stroke="#EF4444" strokeWidth="1.5" />
            <rect x="194" y="110" width="12" height="18" fill="#EF4444" rx="1" />

            {/* C6 Breakout Candle */}
            <line x1="240" y1="70" x2="240" y2="115" stroke="#10B981" strokeWidth="1.5" />
            <rect x="234" y="78" width="12" height="32" fill="#10B981" rx="1" />

            {/* C7 */}
            <line x1="280" y1="65" x2="280" y2="95" stroke="#10B981" strokeWidth="1.5" />
            <rect x="274" y="72" width="12" height="18" fill="#10B981" rx="1" />

            {/* C8 Continuation */}
            <line x1="320" y1="50" x2="320" y2="85" stroke="#10B981" strokeWidth="1.5" />
            <rect x="314" y="58" width="12" height="24" fill="#10B981" rx="1" />

            {/* C9 Extension */}
            <line x1="360" y1="40" x2="360" y2="70" stroke="#10B981" strokeWidth="1.5" />
            <rect x="354" y="45" width="12" height="20" fill="#10B981" rx="1" />

            {/* C10 Target hit */}
            <line x1="400" y1="28" x2="400" y2="55" stroke="#10B981" strokeWidth="1.5" />
            <rect x="394" y="32" width="12" height="18" fill="#10B981" rx="1" />

            {/* C11 Live Candle */}
            <line x1="440" y1="22" x2="440" y2="48" stroke="#F59E0B" strokeWidth="2" />
            <rect x="434" y="26" width="12" height="16" fill="#F59E0B" rx="1" className="animate-pulse" />

            {/* EMA Trend Overlay Line */}
            <path
              d="M 20 150 L 60 135 L 100 145 L 150 110 L 200 120 L 260 80 L 320 95 L 390 50 L 440 32"
              fill="none"
              stroke="url(#goldLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Target Crosshair */}
            <circle cx="440" cy="32" r="4" fill="#F59E0B" className="animate-ping" />
            <circle cx="440" cy="32" r="4" fill="#F59E0B" />
          </svg>

          {/* Floating Buy Signal Box */}
          <div className="absolute top-4 right-4 bg-[#0B192C]/90 border border-emerald-500/50 p-2.5 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400 animate-bounce" />
            <div>
              <div className="text-[10px] text-slate-400 font-mono">SYSTEM ENTRY</div>
              <div className="text-xs font-bold text-emerald-400 font-mono">BREAKOUT CONFIRMED</div>
            </div>
          </div>
        </div>

        {/* Key Features Breakdown Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="block text-[10px] font-mono text-slate-400 font-bold">DISCIPLINE</span>
            <span className="text-xs font-black text-amber-400">Strict Stop Loss</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="block text-[10px] font-mono text-slate-400 font-bold">ANALYSIS</span>
            <span className="text-xs font-black text-emerald-400">Price Action</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="block text-[10px] font-mono text-slate-400 font-bold">RISK REWARD</span>
            <span className="text-xs font-black text-cyan-400">Minimum 1 : 2.5</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="block text-[10px] font-mono text-slate-400 font-bold">TRACKING</span>
            <span className="text-xs font-black text-slate-200">Journaled Trades</span>
          </div>
        </div>

      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2.5 bg-[#0B192C] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" /> NISM Compliant Technical Framework
        </span>
        <span className="hidden sm:inline text-amber-400 font-bold">
          Elite Market Academy Interactive Suite
        </span>
      </div>

    </div>
  );
};

export default TradingTerminalDemo;
