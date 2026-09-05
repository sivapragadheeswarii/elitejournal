import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  ShieldCheck,
  Smile,
  Target,
  Award,
  Layers,
  ArrowRight,
  X,
  Zap,
  CheckCircle2,
  BookOpen,
  FileText,
  Sparkles,
} from 'lucide-react';
import logo from '../../assets/logo.png';

const PortalSplash = ({ isOpen, onClose, destinationUrl }) => {
  if (!isOpen) return null;

  const handleEnterDashboard = () => {
    const url = destinationUrl || import.meta.env.VITE_APP_URL || 'http://localhost:5173/';
    window.location.href = url;
  };

  const MODULES = [
    {
      icon: TrendingUp,
      title: 'Performance & P&L Analytics',
      desc: 'Track Gross vs Net P&L, custom brokerage calculations, win rate %, profit factor, and equity curve growth.',
      badgeColor: 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30',
    },
    {
      icon: Award,
      title: '10-Point Discipline Score Engine',
      desc: 'Automated semi-circular rating gauge that evaluates rule compliance, risk limits, and emotional control per trade.',
      badgeColor: 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30',
    },
    {
      icon: Smile,
      title: 'Trade Psychology & Emotion Logs',
      desc: 'Log 14+ emotional states (Confident, Patient, FOMO, Greed, Revenge, Frustrated) separately at trade entry and exit.',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
    {
      icon: Target,
      title: 'Strategy Setup Verification',
      desc: 'Select predefined academy strategies or custom playbooks and complete pre-trade rule verification checklists.',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      icon: ShieldCheck,
      title: 'Daily Risk Guardrails',
      desc: 'Input daily capital limits, max trade counts, and single-trade risk alerts to prevent overtrading.',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    },
    {
      icon: Layers,
      title: 'Multi-Asset & Broker Sync',
      desc: 'Manage Equity, F&O, Crypto & Forex trades across Zerodha, AngelOne, Upstox, and global brokers.',
      badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-[#07110D]/95 backdrop-blur-xl text-[#E2E8F0] flex flex-col justify-between p-4 sm:p-8 overflow-y-auto select-none font-sans"
      >
        {/* Ambient Radial Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-r from-[#F59E0B]/10 via-[#10B981]/10 to-[#D4AF37]/10 rounded-full blur-[180px] pointer-events-none" />

        {/* Top Header Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto w-full flex items-center justify-between gap-4 pb-4 border-b border-[#1F3A2E]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0D1B15] border border-[#1F3A2E] flex items-center justify-center p-1.5 shadow-md shrink-0">
              <img src={logo} alt="EMA Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-extrabold text-white font-heading tracking-tight">
                EPTS TRADING JOURNAL
              </span>
              <span className="text-[9.5px] font-mono text-[#F59E0B] font-extrabold uppercase tracking-wider">
                Elite Performance Tracking System
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleEnterDashboard}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#F59E0B]/20 active:scale-95 whitespace-nowrap"
            >
              <span>Enter App</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] text-[#94A3B8] hover:text-white border border-[#1F3A2E] transition-colors cursor-pointer"
              title="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto w-full my-auto py-6 sm:py-8 flex flex-col gap-6 sm:gap-8 text-left">
          
          {/* Logo & Header Title */}
          <div className="flex flex-col items-center text-center gap-3 py-2">
            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-[#0D1B15] border-2 border-[#F59E0B]/40 flex items-center justify-center p-3 shadow-2xl shadow-[#F59E0B]/20 relative">
                <img
                  src={logo}
                  alt="EPTS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="px-3.5 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-extrabold uppercase tracking-wider font-mono">
                PRO TRADING WORKSPACE
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                EPTS Trading Journal
              </h1>
              <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-md leading-relaxed">
                Track your trades, master discipline & unlock your true trading edge.
              </p>
            </motion.div>
          </div>

          {/* Section 1: Overview Card */}
          <div className="bg-[#0D1B15] border-l-4 border-[#F59E0B] border-y border-r border-[#1F3A2E] rounded-2xl p-5 sm:p-7 flex flex-col gap-3 shadow-2xl">
            <div className="flex items-center gap-2 pb-2 border-b border-[#1F3A2E] text-[#F59E0B] font-extrabold text-xs sm:text-sm font-heading">
              <BookOpen className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>SYSTEM DESCRIPTION & PURPOSE</span>
            </div>
            <p className="text-xs sm:text-sm text-[#E2E8F0] font-medium leading-relaxed">
              The <strong className="text-white font-bold">EPTS Trading Journal</strong> is a specialized performance tracking platform created by Elite Market Academy to enforce systematic trading discipline, eliminate emotional trading errors, and maintain strict risk parameters.
            </p>
          </div>

          {/* Section 2: Core Feature Cards Grid */}
          <div className="bg-[#0D1B15] border border-[#1F3A2E] rounded-2xl p-5 sm:p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#1F3A2E]">
              <div className="flex items-center gap-2.5 text-[#F59E0B] font-extrabold text-xs sm:text-sm font-heading">
                <FileText className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>INCLUDED MODULES & CORE CAPABILITIES</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase">
                6 KEY ENGINES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MODULES.map((mod, idx) => {
                const IconComponent = mod.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-[#07110D] border border-[#1F3A2E] hover:border-[#F59E0B]/40 transition-all flex items-start gap-3.5 group shadow-sm"
                  >
                    <div className={`p-2 rounded-lg border shrink-0 ${mod.badgeColor}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#F59E0B] transition-colors font-heading tracking-tight">
                        {mod.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#94A3B8] font-medium leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="relative z-10 max-w-md mx-auto w-full flex flex-col items-center gap-2.5 pt-4 border-t border-[#1F3A2E] text-center">
          <button
            onClick={handleEnterDashboard}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-xl shadow-[#F59E0B]/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-[#F59E0B]"
          >
            <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span>Proceed to Journal Dashboard</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <span className="text-[11px] font-medium text-[#94A3B8]">
            From <strong className="text-white">Elite Market Academy</strong> • <span className="text-[#F59E0B] font-mono font-bold">EPTS v2.0</span>
          </span>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};

export default PortalSplash;

