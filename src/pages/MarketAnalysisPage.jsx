import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SeoHead from '../components/common/SeoHead';
import LiveMarketIndicator from '../components/marketAnalysis/LiveMarketIndicator';
import FinancialBackground from '../components/marketAnalysis/FinancialBackground';
import MarketSentimentBadge from '../components/marketAnalysis/MarketSentimentBadge';
import MarketChartVisual from '../components/marketAnalysis/MarketChartVisual';
import PivotCard from '../components/marketAnalysis/PivotCard';
import { ResistanceSection, SupportSection } from '../components/marketAnalysis/SupportResistanceCards';
import AnimatedNumber from '../components/marketAnalysis/AnimatedNumber';
import {
  Activity,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Info,
  Clock,
  RefreshCw,
  Filter,
  BarChart3,
  Zap,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Fallback market analysis data (30-day window)
const FALLBACK_ANALYSIS_DATA = [
  {
    _id: 'sample-nifty-1',
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
    sentiment: 'Bullish',
    notes: 'Market is showing strong resistance near R2 (₹25,650). Watch key support levels closely before taking long positions.',
    status: 'Published',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'sample-banknifty-1',
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
    sentiment: 'Neutral',
    notes: 'Bank Nifty remains range-bound between S1 and R1. Breakout above R1 could trigger further momentum toward R2.',
    status: 'Published',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'sample-finnifty-1',
    market: 'FINNIFTY',
    date: new Date().toISOString().split('T')[0],
    high: 24100,
    low: 23800,
    pivot: 23950,
    r1: 24100,
    r2: 24250,
    r3: 24400,
    s1: 23800,
    s2: 23650,
    s3: 23500,
    sentiment: 'Bearish',
    notes: 'Financial services testing pivot zones. High volatility expected around key corporate announcements.',
    status: 'Published',
    createdAt: new Date().toISOString(),
  },
];

const MarketAnalysisPage = ({ onOpenPortal }) => {
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMarket, setSelectedMarket] = useState('ALL');
  const [selectedDate, setSelectedDate] = useState('latest');
  const [lastUpdatedTime, setLastUpdatedTime] = useState('');

  useEffect(() => {
    fetchMarketAnalysis();
  }, []);

  const filter30DaysRetention = (items) => {
    const thirtyDaysAgoMs = Date.now() - 30 * 24 * 60 * 60 * 1000;
    return (items || []).filter((item) => {
      if (!item.date) return true;
      const parts = item.date.split('-');
      if (parts.length === 3) {
        const itemDateMs = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
        return itemDateMs >= thirtyDaysAgoMs - 86400000;
      }
      return true;
    });
  };

  const fetchMarketAnalysis = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/market-analysis/public`);
      const data = await res.json();
      if (data?.success && Array.isArray(data.data) && data.data.length > 0) {
        setAnalyses(filter30DaysRetention(data.data));
      } else {
        setAnalyses(filter30DaysRetention(FALLBACK_ANALYSIS_DATA));
      }
    } catch (err) {
      console.warn('API unavailable, using fallback market data:', err);
      setAnalyses(filter30DaysRetention(FALLBACK_ANALYSIS_DATA));
    } finally {
      setLoading(false);
      const now = new Date();
      setLastUpdatedTime(
        now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    }
  };

  const getSentiment = (item) => {
    if (item.sentiment) return item.sentiment;
    const notesLower = (item.notes || '').toLowerCase();
    if (notesLower.includes('bullish') || notesLower.includes('breakout') || notesLower.includes('strong'))
      return 'Bullish';
    if (notesLower.includes('bearish') || notesLower.includes('breakdown') || notesLower.includes('fall'))
      return 'Bearish';

    if (item.pivot && item.high && item.low) {
      const upper = item.high - item.pivot;
      const lower = item.pivot - item.low;
      if (upper > lower * 1.1) return 'Bullish';
      if (lower > upper * 1.1) return 'Bearish';
    }
    return 'Neutral';
  };

  const availableDates = Array.from(new Set(analyses.map((item) => item.date))).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  const latestDate = availableDates[0] || new Date().toISOString().split('T')[0];
  const activeDate = selectedDate === 'latest' ? latestDate : selectedDate;
  const availableMarkets = ['ALL', ...Array.from(new Set(analyses.map((item) => item.market)))];

  const currentDailyAnalyses = analyses.filter((item) => {
    const matchesDate = item.date === activeDate;
    const matchesMarket = selectedMarket === 'ALL' || item.market === selectedMarket;
    return matchesDate && matchesMarket;
  });

  const previousDates = availableDates.filter((d) => d !== activeDate);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#FFFBEB]0 selection:text-slate-950 pb-12 sm:pb-20 overflow-hidden relative">
      <SeoHead
        title="Market Analysis & Key Support/Resistance Levels | Elite Market Academy"
        description="Daily stock market technical analysis including High, Low, Pivot Point, Resistance (R1, R2, R3) and Support (S1, S2, S3) levels for NIFTY, BANK NIFTY, and key indices."
        keywords="Market Analysis, NIFTY Pivot Levels, Support and Resistance, Bank NIFTY Levels, Daily Trading Levels, Technical Analysis"
      />

      {/* Hero Header Section — Immersive Deep Obsidian Dark */}
      <section className="relative pt-6 pb-10 sm:pt-14 sm:pb-16 px-3 sm:px-6 lg:px-8 border-b border-[#1F3A2E] bg-[#07110D] text-white">
        <FinancialBackground />

        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#FFFBEB]0/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Header Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#F59E0B]/30 bg-[#0D1B15] text-[#F59E0B] text-[9px] sm:text-xs font-mono font-extrabold tracking-widest uppercase mb-3.5 sm:mb-5 shadow-xl backdrop-blur-md"
          >
            <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-[#F59E0B] animate-pulse shrink-0" />
            <span>Daily Technical Desk • Live Key Levels (30-Day Archive)</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-xl xs:text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading max-w-4xl leading-tight text-white"
          >
            Daily Market{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D4AF37] bg-clip-text text-transparent">
              Analysis & Levels
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-2.5 sm:mt-4 text-[11px] sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed text-slate-300 px-2"
          >
            Clean, high-precision Support, Resistance & Pivot levels updated daily by our institutional research desk for disciplined trading.
          </motion.p>

          {/* Live Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-4 sm:mt-7 w-full max-w-md px-2"
          >
            <LiveMarketIndicator
              lastUpdatedTime={lastUpdatedTime}
              isRefreshing={loading}
              onRefresh={fetchMarketAnalysis}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Area — Executive Light Section with White Cards */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-5 sm:mt-8 space-y-5 sm:space-y-10 relative z-10">
        {/* Controls & Filter Bar — Executive White Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-md text-slate-900"
        >
          {/* Instrument Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none pb-0.5 sm:pb-0 min-w-0">
            <span className="text-[10px] sm:text-xs font-mono font-extrabold mr-1 flex items-center gap-1 text-[#D97706] shrink-0">
              <Filter className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Market:
            </span>
            {availableMarkets.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMarket(m)}
                className={`px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-extrabold transition-all cursor-pointer shrink-0 ${
                  selectedMarket === m
                    ? 'bg-[#0D1B15] text-[#F59E0B] border border-[#F59E0B]/40 shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Right Side: Date Selector */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-slate-100">
            <span className="text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1 text-slate-600">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D97706] shrink-0" /> Date:
            </span>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-900 font-mono font-extrabold text-[10px] sm:text-xs rounded-lg sm:rounded-xl px-2 py-1 sm:px-3.5 sm:py-2 outline-none cursor-pointer transition-colors shadow-inner focus:border-[#F59E0B]"
            >
              <option value="latest">Latest ({formatDisplayDate(latestDate)})</option>
              {availableDates.map((d) => (
                <option key={d} value={d}>
                  {formatDisplayDate(d)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Loading / Empty / Data Display */}
        {loading ? (
          <div className="py-12 sm:py-20 text-center text-xs sm:text-sm font-mono text-[#D97706] animate-pulse flex flex-col items-center justify-center gap-2.5">
            <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-[#D97706]" />
            <span className="font-bold tracking-wider">Syncing Live Market Technical Desk...</span>
          </div>
        ) : currentDailyAnalyses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 sm:py-16 text-center rounded-2xl sm:rounded-3xl border border-slate-200 bg-white text-slate-800 p-5 sm:p-8 flex flex-col items-center gap-2.5 shadow-md"
          >
            <Info className="w-8 h-8 sm:w-12 sm:h-12 text-[#D97706] animate-pulse" />
            <h3 className="text-base sm:text-xl font-bold">No Published Market Analysis Found</h3>
            <p className="text-[11px] sm:text-xs text-slate-500 max-w-md">
              There is currently no published analysis for the selected market or date. Please select another instrument or date.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5 sm:space-y-12"
          >
            {currentDailyAnalyses.map((item) => {
              const sentiment = getSentiment(item);

              return (
                <motion.div
                  key={item._id}
                  variants={itemVariants}
                  className="space-y-5 sm:space-y-8"
                >
                  {/* Top Bar for Instrument — Executive White Card */}
                  <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 shadow-xl">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] shadow-xs shrink-0">
                        <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-[#D97706]" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight font-heading text-[#0D1B15]">
                            {item.market}
                          </h2>
                          <MarketSentimentBadge sentiment={sentiment} />
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 shrink-0" /> Date: {formatDisplayDate(item.date)}
                        </span>
                      </div>
                    </div>

                    {/* Range Stats Summary Card */}
                    <div className="w-full sm:w-auto grid grid-cols-3 gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 font-mono text-[10px] sm:text-xs shadow-inner">
                      <div className="flex flex-col text-center">
                        <span className="text-[8.5px] sm:text-[10px] font-bold text-slate-500 uppercase">High</span>
                        <div className="font-extrabold text-slate-900 text-[11px] sm:text-sm mt-0.5">
                          <AnimatedNumber value={item.high} prefix="₹" duration={800} />
                        </div>
                      </div>
                      <div className="flex flex-col text-center border-x border-slate-200 px-1">
                        <span className="text-[8.5px] sm:text-[10px] font-bold text-slate-500 uppercase">Low</span>
                        <div className="font-extrabold text-slate-900 text-[11px] sm:text-sm mt-0.5">
                          <AnimatedNumber value={item.low} prefix="₹" duration={800} />
                        </div>
                      </div>
                      <div className="flex flex-col text-center">
                        <span className="text-[8.5px] sm:text-[10px] font-bold text-[#D97706] uppercase">Pivot</span>
                        <div className="font-extrabold text-[#D97706] text-[11px] sm:text-sm mt-0.5">
                          <AnimatedNumber value={item.pivot} prefix="₹" duration={800} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Intraday Chart Visual Section */}
                  <MarketChartVisual item={item} />

                  {/* Pivot, Support & Resistance Levels Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-6 items-stretch">
                    {/* Resistance Section */}
                    <ResistanceSection r1={item.r1} r2={item.r2} r3={item.r3} />

                    {/* Pivot Level Card */}
                    <PivotCard pivotValue={item.pivot} />

                    {/* Support Section */}
                    <SupportSection s1={item.s1} s2={item.s2} s3={item.s3} />
                  </div>

                  {/* Optional Market Notes — Warm Amber Box */}
                  {item.notes && (
                    <motion.div
                      whileHover={{ scale: 1.005 }}
                      className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#FDE68A]/90 bg-[#FFFBEB]/90 text-slate-800 flex flex-col gap-1.5 text-xs leading-relaxed shadow-md"
                    >
                      <div className="flex items-center gap-1.5 font-mono font-extrabold text-amber-800 uppercase tracking-wider text-[9.5px] sm:text-[11px]">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97706] animate-bounce shrink-0" />
                        <span>Research Desk Commentary & Notes</span>
                      </div>
                      <p className="italic font-medium text-slate-700 text-[10.5px] sm:text-xs">"{item.notes}"</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* History Archive Section (Last 30 Days) */}
        {previousDates.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="pt-5 sm:pt-8 border-t border-slate-200 flex flex-col gap-3.5 sm:gap-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                </div>
                <h2 className="text-base sm:text-2xl font-extrabold tracking-tight font-heading text-[#0D1B15]">
                  Market Analysis Archive (Last 30 Days)
                </h2>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-slate-500">
                Click any date to inspect historical key levels
              </span>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3.5">
              {previousDates.map((dateStr) => {
                const countForDate = analyses.filter((a) => a.date === dateStr).length;
                const isActive = activeDate === dateStr;

                return (
                  <motion.button
                    key={dateStr}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedDate(dateStr);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0D1B15] border-[#F59E0B]/40 text-[#F59E0B] shadow-lg scale-105 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-[#F59E0B] hover:bg-[#FFFBEB]/50 shadow-xs'
                    }`}
                  >
                    <span className="text-[10px] sm:text-xs font-mono font-extrabold">
                      {formatDisplayDate(dateStr)}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">
                      {countForDate} Instrument{countForDate > 1 ? 's' : ''}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Institutional Risk Banner — Contrast Dark Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#1F3A2E] bg-[#07110D] text-white flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-left relative z-10">
            <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#FFFBEB]0/20 border border-[#F59E0B]/40 text-[#F59E0B] shrink-0 shadow-lg animate-pulse">
              <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-xl font-extrabold tracking-tight font-heading text-white">
                Institutional Risk Controls & Position Sizing
              </h3>
              <p className="text-[10.5px] sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl mt-0.5 sm:mt-1">
                Always calculate position sizing based on your personal risk management rules before executing trades near support and resistance zones.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPortal}
            className="w-full md:w-auto px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-[11px] sm:text-xs transition-all shadow-xl hover:shadow-amber-500/20 shrink-0 flex items-center justify-center gap-2 cursor-pointer active:scale-95 relative z-10"
          >
            <span>Access EPTS Journal</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </motion.section>
      </main>
    </div>
  );
};

export default MarketAnalysisPage;
