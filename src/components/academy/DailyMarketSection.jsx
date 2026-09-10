import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Compass,
  Calendar,
  RefreshCw,
  Zap,
  ArrowRight,
  Sparkles,
  BarChart2,
  Clock,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const FALLBACK_ANALYSIS_DATA = [
  {
    _id: 'sample-nifty',
    market: 'NIFTY 50',
    date: new Date().toISOString().split('T')[0],
    high: 25500,
    low: 25200,
    pivot: 25350,
    r1: 25500,
    r2: 25650,
    r3: 25800,
    s1: 25200,
    s2: 25050,
    s3: 24900,
    notes: 'Market is showing strong resistance near R2. Watch key support levels closely before taking positions.',
    status: 'Published',
  },
  {
    _id: 'sample-banknifty',
    market: 'BANK NIFTY',
    date: new Date().toISOString().split('T')[0],
    high: 53800,
    low: 53100,
    pivot: 53450,
    r1: 53800,
    r2: 54150,
    r3: 54500,
    s1: 53100,
    s2: 52750,
    s3: 52400,
    notes: 'Bank Nifty remains range-bound between S1 and R1. Breakout above R1 targets R2.',
    status: 'Published',
  },
];

const DailyMarketSection = () => {
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMarket, setSelectedMarket] = useState('');
  const [lastRefreshed, setLastRefreshed] = useState('');

  const fetchPublicAnalyses = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/market-analysis/public?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });
      const data = await res.json();
      if (data?.success && Array.isArray(data.data) && data.data.length > 0) {
        setAnalyses(data.data);
        if (!selectedMarket || !data.data.find((item) => item.market === selectedMarket)) {
          setSelectedMarket(data.data[0].market);
        }
      } else {
        setAnalyses(FALLBACK_ANALYSIS_DATA);
        if (!selectedMarket) setSelectedMarket(FALLBACK_ANALYSIS_DATA[0].market);
      }
    } catch (err) {
      console.warn('API sync warning, using cached/fallback technical desk:', err);
      setAnalyses(FALLBACK_ANALYSIS_DATA);
      if (!selectedMarket) setSelectedMarket(FALLBACK_ANALYSIS_DATA[0].market);
    } finally {
      setLoading(false);
      const now = new Date();
      setLastRefreshed(
        now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    }
  };

  useEffect(() => {
    fetchPublicAnalyses();

    // Re-fetch automatically when window/tab is focused (e.g. switching back from Admin Dashboard)
    const handleFocus = () => fetchPublicAnalyses();
    window.addEventListener('focus', handleFocus);

    // Auto-sync every 60 seconds
    const interval = setInterval(fetchPublicAnalyses, 60000);

    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(interval);
    };
  }, []);

  // Distinct markets list
  const markets = Array.from(new Set(analyses.map((a) => a.market)));

  // Active analysis item
  const activeItem = analyses.find((a) => a.market === selectedMarket) || analyses[0];

  // Helper for sentiment calculation
  const getSentiment = (item) => {
    if (!item) return 'Neutral';
    const notesLower = (item.notes || '').toLowerCase();
    if (notesLower.includes('bullish') || notesLower.includes('breakout') || notesLower.includes('strong')) {
      return 'Bullish';
    }
    if (notesLower.includes('bearish') || notesLower.includes('breakdown') || notesLower.includes('fall')) {
      return 'Bearish';
    }
    if (item.pivot && item.high && item.low) {
      const upper = item.high - item.pivot;
      const lower = item.pivot - item.low;
      if (upper > lower * 1.1) return 'Bullish';
      if (lower > upper * 1.1) return 'Bearish';
    }
    return 'Neutral';
  };

  const sentiment = getSentiment(activeItem);

  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="market-analysis" className="py-14 sm:py-20 bg-[#07110D] relative overflow-hidden border-t border-[#1F3A2E]">
      {/* Background ambient gradient blurs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 sm:pb-10 border-b border-[#1F3A2E]">
          <div className="flex flex-col gap-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest w-fit">
              <Activity className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
              <span>LIVE TECHNICAL DESK</span>
            </div>
            
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Daily Market <span className="text-[#F59E0B]">Analysis & Key Levels</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-[#94A3B8] font-medium leading-relaxed">
              Institutional Support, Resistance & Central Pivot levels updated daily directly from our Trading Desk.
            </p>
          </div>

          {/* Quick Refresh & Full Desk Link */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={fetchPublicAnalyses}
              disabled={loading}
              className="p-2.5 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] border border-[#1F3A2E] text-[#94A3B8] hover:text-[#F59E0B] transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center"
              title="Refresh Live Levels"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#F59E0B]' : ''}`} />
            </button>

            <Link
              to="/market-analysis"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-[#F59E0B]/20 active:scale-95 whitespace-nowrap"
            >
              <span>Full Analysis Desk</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </Link>
          </div>
        </div>

        {/* Instrument Tabs */}
        {markets.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto py-5 scrollbar-none">
            {markets.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMarket(m)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold font-mono transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  selectedMarket === m
                    ? 'bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-slate-950 shadow-lg shadow-[#F59E0B]/20 scale-105'
                    : 'bg-[#0D1B15] text-[#94A3B8] hover:text-white border border-[#1F3A2E] hover:border-[#F59E0B]/40'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>{m}</span>
              </button>
            ))}
          </div>
        )}

        {/* Active Analysis Panel */}
        {activeItem ? (
          <div className="mt-2 flex flex-col gap-6">
            
            {/* Instrument Info Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0D1B15] border border-[#1F3A2E] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B]">
                  <Activity className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-extrabold text-white font-heading">
                      {activeItem.market}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase border flex items-center gap-1 ${
                        sentiment === 'Bullish'
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                          : sentiment === 'Bearish'
                          ? 'bg-rose-500/15 border-rose-500/40 text-rose-400'
                          : 'bg-amber-500/15 border-amber-500/40 text-[#F59E0B]'
                      }`}
                    >
                      {sentiment === 'Bullish' && <TrendingUp className="w-3 h-3" />}
                      {sentiment === 'Bearish' && <TrendingDown className="w-3 h-3" />}
                      <span>{sentiment}</span>
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3 h-3 text-[#F59E0B]" />
                    <span>Session Date: {formatDisplayDate(activeItem.date)}</span>
                    {lastRefreshed && <span className="text-slate-500">• Synced at {lastRefreshed}</span>}
                  </span>
                </div>
              </div>

              {/* Day High, Low, Pivot */}
              <div className="grid grid-cols-3 gap-2 px-3 py-2 rounded-xl bg-[#07110D] border border-[#1F3A2E] font-mono text-center shrink-0">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">HIGH</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">₹{activeItem.high?.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex flex-col border-x border-[#1F3A2E] px-2.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">LOW</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">₹{activeItem.low?.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-[#F59E0B] uppercase">PIVOT</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#F59E0B]">₹{activeItem.pivot?.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* 3-Column Levels Matrix: Resistance, Pivot Equilibrium, Support */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
              
              {/* Resistance Card (Supply Zones) */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0D1B15] border border-rose-500/30 flex flex-col gap-3.5 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-rose-500/20">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/40">
                      <ArrowUpRight className="w-4 h-4 text-rose-400" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-rose-400 uppercase tracking-wide">
                      Resistance (Supply)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400/70 uppercase">Upper Ceilings</span>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { label: 'R3', value: activeItem.r3, desc: 'Maximum Target Limit' },
                    { label: 'R2', value: activeItem.r2, desc: 'Secondary Resistance' },
                    { label: 'R1', value: activeItem.r1, desc: 'Primary Resistance' },
                  ].map((lvl) => (
                    <div
                      key={lvl.label}
                      className="p-2.5 sm:p-3 rounded-xl bg-[#07110D] border border-rose-500/20 flex items-center justify-between font-mono"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-extrabold text-[10px] border border-rose-500/40">
                          {lvl.label}
                        </span>
                        <span className="text-[11px] text-slate-400 hidden xs:inline">{lvl.desc}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold text-rose-400">
                        ₹{lvl.value ? lvl.value.toLocaleString('en-IN') : '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Pivot Card */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0D1B15] border-2 border-[#F59E0B]/50 flex flex-col justify-between text-center shadow-xl shadow-[#F59E0B]/10 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-[#F59E0B]/30">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40">
                      <Compass className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[#F59E0B] uppercase tracking-wide">
                      Central Pivot
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 text-[9px] font-mono font-extrabold uppercase">
                    Equilibrium
                  </span>
                </div>

                <div className="my-5 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    DAILY PIVOT POINT
                  </span>
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-black font-mono text-[#F59E0B] mt-1 tracking-tight">
                    ₹{activeItem.pivot ? activeItem.pivot.toLocaleString('en-IN') : '—'}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium mt-1">
                    Baseline decision level between buyers & sellers
                  </span>
                </div>

                <div className="pt-3 border-t border-[#1F3A2E] flex items-center justify-center gap-1 text-[11px] text-[#F59E0B] font-mono">
                  <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Institutional Baseline</span>
                </div>
              </div>

              {/* Support Card (Demand Zones) */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#0D1B15] border border-emerald-500/30 flex flex-col gap-3.5 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      <ArrowDownRight className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-wide">
                      Support (Demand)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/70 uppercase">Lower Floors</span>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { label: 'S1', value: activeItem.s1, desc: 'Primary Support Line' },
                    { label: 'S2', value: activeItem.s2, desc: 'Secondary Support Floor' },
                    { label: 'S3', value: activeItem.s3, desc: 'Maximum Cushion Floor' },
                  ].map((lvl) => (
                    <div
                      key={lvl.label}
                      className="p-2.5 sm:p-3 rounded-xl bg-[#07110D] border border-emerald-500/20 flex items-center justify-between font-mono"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px] border border-emerald-500/40">
                          {lvl.label}
                        </span>
                        <span className="text-[11px] text-slate-400 hidden xs:inline">{lvl.desc}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-400">
                        ₹{lvl.value ? lvl.value.toLocaleString('en-IN') : '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Commentary Notes (if provided by admin) */}
            {activeItem.notes && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0D1B15] border border-[#F59E0B]/30 flex items-start gap-3 shadow-md">
                <div className="p-2 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono font-extrabold text-[#F59E0B] uppercase tracking-wider">
                    Desk Commentary & Observations
                  </span>
                  <p className="text-xs sm:text-sm text-[#E2E8F0] font-medium leading-relaxed mt-1 italic">
                    "{activeItem.notes}"
                  </p>
                </div>
              </div>
            )}

          </div>
        ) : (
          <div className="py-12 text-center text-slate-400 font-mono text-xs">
            No published market analysis available for today.
          </div>
        )}

      </div>
    </section>
  );
};

export default DailyMarketSection;
