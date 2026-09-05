import React from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Smile,
  Target,
  Award,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  BookOpen,
  FileText,
} from 'lucide-react';
import SeoHead from '../components/common/SeoHead';

/* Dark Executive Hero Header */
const PageHero = ({ badge, title, subtitle }) => (
  <section className="relative py-12 sm:py-20 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] overflow-hidden">
    <div className="absolute inset-0 bg-[#07110D]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
    
    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-left w-full">
      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#F59E0B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#0D1B15] border border-[#F59E0B]/30 font-mono mb-4 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
        {badge}
      </span>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xs sm:text-base text-[#94A3B8] font-medium max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

const EPTSJournalLandingPage = ({ onOpenPortal }) => {
  const handleLaunchApp = () => {
    if (onOpenPortal) {
      onOpenPortal();
    } else {
      const url = import.meta.env.VITE_APP_URL || 'http://localhost:5173/';
      window.location.href = url;
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#07110D] min-h-screen font-sans text-[#E2E8F0]">
      <SeoHead
        title="EPTS Trading Journal System | Elite Market Academy"
        description="Comprehensive overview of EPTS Trading Journal System - Performance analytics, 10-point discipline scoring, 14+ emotion logs, strategy verification checklists, and daily risk management."
      />

      {/* 1. Page Hero Header */}
      <PageHero
        badge="TRADING JOURNAL WORKSPACE"
        title="EPTS Trading Journal System"
        subtitle="A professional stock market performance tracker, 10-point discipline engine, and psychological risk management workspace."
      />

      {/* 2. Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-left flex flex-col gap-6 sm:gap-8 font-medium text-[#E2E8F0] text-xs sm:text-sm w-full">
        
        {/* Callout Banner */}
        <div className="bg-[#0D1B15] p-6 sm:p-8 rounded-2xl border border-[#1F3A2E] shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs font-extrabold text-[#F59E0B] font-mono uppercase tracking-wider">
              SYSTEM OVERVIEW & FEATURES
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-heading">
              Ready to Access Your Trading Journal?
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-medium">
              Launch the live EPTS Journal portal to log trades, evaluate discipline scores, and analyze your performance metrics in real time.
            </p>
          </div>
          <button
            onClick={handleLaunchApp}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 shrink-0 cursor-pointer border border-[#F59E0B]"
          >
            <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span>Launch Journal Portal</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Section 1: What is EPTS Journal */}
        <div className="bg-[#0D1B15] p-6 sm:p-8 rounded-2xl border border-[#1F3A2E] shadow-2xl flex flex-col gap-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#1F3A2E]">
            <BookOpen className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              1. What is the EPTS Trading Journal?
            </h3>
          </div>
          <p className="text-[#94A3B8] leading-relaxed">
            The <strong className="text-white font-bold">Elite Performance Tracking System (EPTS) Journal</strong> is a specialized trading performance journal developed by Elite Market Academy. Built specifically for retail and professional stock market traders, EPTS Journal bridges the gap between technical trading strategies and human psychology.
          </p>
          <p className="text-[#94A3B8] leading-relaxed">
            Unlike basic spreadsheets, EPTS Journal calculates automated discipline ratings, enforces daily risk parameters, monitors emotional states at trade entry and exit, and provides comprehensive financial analytics to identify trading edges.
          </p>
        </div>

        {/* Section 2: Core Feature Modules */}
        <div className="bg-[#0D1B15] p-6 sm:p-8 rounded-2xl border border-[#1F3A2E] shadow-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#1F3A2E]">
            <FileText className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              2. Core Functional Modules & Engines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-xl bg-[#07110D] border border-[#1F3A2E]">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 font-heading">
                <TrendingUp className="w-4 h-4 text-[#F59E0B]" />
                Performance & P&L Analytics
              </h4>
              <p className="text-[#94A3B8] leading-relaxed text-xs">
                Tracks Gross P&L, Net P&L after custom brokerage formulas, overall win rate percentages, profit factor, and average risk-to-reward ratios.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-xl bg-[#07110D] border border-[#1F3A2E]">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 font-heading">
                <Award className="w-4 h-4 text-[#F59E0B]" />
                10-Point Discipline Scoring System
              </h4>
              <p className="text-[#94A3B8] leading-relaxed text-xs">
                Evaluates every logged trade on a 10-point scale. Point deductions are automatically applied for unmanaged risk or rule breaking.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-xl bg-[#07110D] border border-[#1F3A2E]">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 font-heading">
                <Smile className="w-4 h-4 text-purple-400" />
                Trade Psychology & Emotion Tracker
              </h4>
              <p className="text-[#94A3B8] leading-relaxed text-xs">
                Capture 14+ emotional mindset states (Confident, Patient, FOMO, Greed, Revenge) separately at trade entry and trade exit.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-xl bg-[#07110D] border border-[#1F3A2E]">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 font-heading">
                <Target className="w-4 h-4 text-emerald-400" />
                Strategy Playbook & Condition Checklist
              </h4>
              <p className="text-[#94A3B8] leading-relaxed text-xs">
                Build custom trading setups or select predefined academy strategies. Complete mandatory setup verification checkboxes.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-xl bg-[#07110D] border border-[#1F3A2E]">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 font-heading">
                <ShieldCheck className="w-4 h-4 text-rose-400" />
                Daily Expectation & Risk Guardrails
              </h4>
              <p className="text-[#94A3B8] leading-relaxed text-xs">
                Define daily capital allocation, maximum daily risk limits, and max trade counts with real-time risk alerts.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-xl bg-[#07110D] border border-[#1F3A2E]">
              <h4 className="text-sm font-extrabold text-white flex items-center gap-2 font-heading">
                <Layers className="w-4 h-4 text-teal-400" />
                Multi-Broker Account & Asset Portfolio
              </h4>
              <p className="text-[#94A3B8] leading-relaxed text-xs">
                Log Equity, Futures & Options, Commodity, Crypto, and Forex trades across multiple broker accounts in a unified workspace.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: 4-Step Usage Workflow */}
        <div className="bg-[#0D1B15] p-6 sm:p-8 rounded-2xl border border-[#1F3A2E] shadow-2xl flex flex-col gap-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#1F3A2E]">
            <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              3. Systematic 4-Step Trading Workflow
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-[#1F3A2E] bg-[#07110D] flex flex-col gap-1.5">
              <span className="text-xs font-extrabold text-[#F59E0B] font-mono">STEP 01</span>
              <h5 className="text-sm font-bold text-white">Set Daily Expectations</h5>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Input daily capital, maximum risk amount, and trade limit caps prior to market open.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#1F3A2E] bg-[#07110D] flex flex-col gap-1.5">
              <span className="text-xs font-extrabold text-[#F59E0B] font-mono">STEP 02</span>
              <h5 className="text-sm font-bold text-white">Log Mindset & Strategy</h5>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Select your entry mood state and verify technical setup conditions with interactive checkboxes.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#1F3A2E] bg-[#07110D] flex flex-col gap-1.5">
              <span className="text-xs font-extrabold text-[#F59E0B] font-mono">STEP 03</span>
              <h5 className="text-sm font-bold text-white">Execute & Log Trade</h5>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Record entry/exit price, quantity, stop-loss level, target prices, and brokerage value.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#1F3A2E] bg-[#07110D] flex flex-col gap-1.5">
              <span className="text-xs font-extrabold text-[#F59E0B] font-mono">STEP 04</span>
              <h5 className="text-sm font-bold text-white">Analyze Discipline Score</h5>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Review your automated 10-point discipline score, emotion-win-rate correlation, and P&L charts.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Bottom Launch CTA Card */}
        <div className="bg-[#0D1B15] text-white p-8 sm:p-10 rounded-2xl border border-[#F59E0B]/30 shadow-2xl flex flex-col items-center text-center gap-5 relative overflow-hidden">
          <div className="p-3.5 rounded-2xl bg-[#07110D] border border-[#F59E0B]/40 text-[#F59E0B]">
            <Zap className="w-6 h-6 text-[#F59E0B]" />
          </div>

          <div className="flex flex-col gap-2 max-w-lg">
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              Start Journaling Your Trades Today
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] font-medium leading-relaxed">
              Access the live EPTS Journal web application to track performance and build disciplined trading habits.
            </p>
          </div>

          <button
            onClick={handleLaunchApp}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer border border-[#F59E0B]"
          >
            <span>Enter EPTS Journal App Portal</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default EPTSJournalLandingPage;

