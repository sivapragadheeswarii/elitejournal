import React from 'react';
import { TrendingUp, TrendingDown, Activity, Sparkles } from 'lucide-react';

const TICKER_DATA = [
  { symbol: 'NIFTY 50', price: '24,850.40', change: '+0.82%', isUp: true },
  { symbol: 'BANK NIFTY', price: '52,140.10', change: '+1.15%', isUp: true },
  { symbol: 'SENSEX', price: '81,420.50', change: '+0.74%', isUp: true },
  { symbol: 'RELIANCE', price: '₹3,020.00', change: '+1.40%', isUp: true },
  { symbol: 'TCS', price: '₹4,210.00', change: '+0.90%', isUp: true },
  { symbol: 'HDFC BANK', price: '₹1,640.50', change: '-0.35%', isUp: false },
  { symbol: 'INFY', price: '₹1,890.00', change: '+1.65%', isUp: true },
  { symbol: 'BTC/USD', price: '$96,400.00', change: '+2.80%', isUp: true },
  { symbol: 'GOLD (24K)', price: '₹78,500/10g', change: '+0.45%', isUp: true },
  { symbol: 'NASDAQ', price: '18,920.00', change: '+1.10%', isUp: true },
  { symbol: 'EUR/USD', price: '1.0845', change: '-0.12%', isUp: false },
  { symbol: 'ICICI BANK', price: '₹1,245.00', change: '+1.05%', isUp: true },
];

const MarketTickerBar = () => {
  // Duplicate for seamless infinite loop marquee
  const items = [...TICKER_DATA, ...TICKER_DATA];

  return (
    <div className="w-full bg-[#050E1A] text-slate-300 text-xs py-2 border-b border-slate-800/80 overflow-hidden relative z-50 select-none">
      <div className="flex items-center">
        
        {/* Live Badge */}
        <div className="shrink-0 bg-[#0B192C] px-3 py-0.5 border-r border-slate-800 text-[10px] font-black text-amber-400 font-mono tracking-wider flex items-center gap-1.5 z-20 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>MARKET TICKER</span>
        </div>

        {/* Marquee Track */}
        <div className="overflow-hidden whitespace-nowrap flex items-center w-full">
          <div className="inline-flex items-center gap-6 animate-ticker hover:[animation-play-state:paused] cursor-pointer">
            {items.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 font-mono text-[11px] hover:text-white transition-colors"
              >
                <span className="text-slate-400 font-bold">{item.symbol}</span>
                <span className="text-slate-200 font-semibold">{item.price}</span>
                <span
                  className={`inline-flex items-center gap-0.5 font-bold px-1.5 py-0.2 rounded text-[10px] ${
                    item.isUp
                      ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40'
                      : 'text-rose-400 bg-rose-950/40 border border-rose-800/40'
                  }`}
                >
                  {item.isUp ? (
                    <TrendingUp className="w-3 h-3 shrink-0" />
                  ) : (
                    <TrendingDown className="w-3 h-3 shrink-0" />
                  )}
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MarketTickerBar;
