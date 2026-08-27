import React, { useState } from 'react';
import { ShieldAlert, Calculator, DollarSign, ArrowUpRight, CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';

const RiskCalculatorWidget = () => {
  const [capital, setCapital] = useState(500000); // 5 Lakhs default
  const [riskPercent, setRiskPercent] = useState(1); // 1% risk default
  const [entryPrice, setEntryPrice] = useState(2500);
  const [stopLoss, setStopLoss] = useState(2450); // 50 points stop loss

  // Risk Calculations
  const stopLossPoints = Math.max(1, entryPrice - stopLoss);
  const maxRiskAmount = (capital * (riskPercent / 100));
  const positionQuantity = Math.max(1, Math.floor(maxRiskAmount / stopLossPoints));
  const totalPositionValue = positionQuantity * entryPrice;
  const targetPrice = entryPrice + (stopLossPoints * 2.5); // 1:2.5 Risk/Reward Target
  const potentialProfit = positionQuantity * (stopLossPoints * 2.5);

  return (
    <div className="w-full rounded-3xl bg-[#0B192C] text-white border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
      
      {/* Background Grids & Ambient Glow */}
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 font-extrabold uppercase tracking-widest block">EMA INTERACTIVE TOOL</span>
              <h3 className="text-xl font-black text-white font-heading">Position Sizing & Risk Simulator</h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-slate-300 w-max">
            1:2.5 Risk-to-Reward Rule
          </span>
        </div>

        {/* Interactive Controls & Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Input Area */}
          <div className="lg:col-span-7 flex flex-col gap-5 bg-slate-900/80 p-5 sm:p-6 rounded-2xl border border-slate-800">
            
            {/* Capital Input */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <label className="text-slate-300 font-bold">Total Trading Capital (₹)</label>
                <span className="text-amber-400 font-extrabold text-sm">₹{capital.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>₹50K</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* Risk Percentage Input */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <label className="text-slate-300 font-bold">Max Risk Per Trade (%)</label>
                <span className="text-amber-400 font-extrabold text-sm">{riskPercent}% Capital</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-emerald-400">0.5% (Conservative)</span>
                <span className="text-amber-400">1.0% (EMA Standard)</span>
                <span className="text-rose-400">3.0% (Aggressive Max)</span>
              </div>
            </div>

            {/* Entry & Stop Loss Price Inputs */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-mono font-bold">Entry Price (₹)</label>
                <input
                  type="number"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 text-white font-mono text-sm border border-slate-700 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-mono font-bold">Stop Loss Price (₹)</label>
                <input
                  type="number"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 text-white font-mono text-sm border border-slate-700 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

          </div>

          {/* Results Output Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Position Size Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0B192C] border border-amber-500/30 flex flex-col gap-3 shadow-xl relative overflow-hidden">
              <div className="flex justify-between items-center text-xs font-mono border-b border-slate-800 pb-2">
                <span className="text-slate-400 font-bold">CALCULATED POSITION</span>
                <span className="text-amber-400 font-black">EMA RISK ENGINE</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">ALLOWED RISK</span>
                  <span className="text-xl font-black text-rose-400 font-mono">₹{maxRiskAmount.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">POSITION QUANTITY</span>
                  <span className="text-xl font-black text-amber-400 font-mono">{positionQuantity} Shares</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-3">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">TARGET PRICE (1:2.5)</span>
                  <span className="text-base font-black text-emerald-400 font-mono">₹{targetPrice.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">POTENTIAL PROFIT</span>
                  <span className="text-base font-black text-emerald-400 font-mono">+₹{potentialProfit.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Educational Insight Box */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3 text-xs text-slate-300 font-medium">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p>
                <strong>The Discipline Factor:</strong> Notice how entering with a predefined stop loss guarantees your risk is capped at <strong>₹{maxRiskAmount.toLocaleString('en-IN')}</strong>, preserving 99% of your capital for future setups.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default RiskCalculatorWidget;
