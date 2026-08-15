import React from 'react';
import { Play, TrendingUp, ShieldCheck, Zap, Activity, Eye, Award, CheckCircle2, Lock } from 'lucide-react';

const HeroChartPreview = ({ onOpenVideo }) => {
  return (
    <div className="relative w-full">
      
      {/* Floating Profit Notification Card 1 (Top Right) */}
      <div className="absolute -top-7 -right-4 z-30 bg-[#0D1B15]/95 backdrop-blur-2xl border border-emerald-500/50 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-float-smooth hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Institutional Setup</span>
          <span className="text-xs font-black text-emerald-400">+₹48,200 (1:4.2 R:R Order Block)</span>
        </div>
      </div>

      {/* Floating Card 2 (Bottom Left) */}
      <div className="absolute -bottom-6 -left-4 z-30 bg-[#0D1B15]/95 backdrop-blur-2xl border border-amber-500/50 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-float-smooth hidden sm:flex" style={{ animationDelay: '2.5s' }}>
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Verified Win Rate</span>
          <span className="text-xs font-black text-amber-400">78.4% Community Average</span>
        </div>
      </div>

      {/* Main Terminal Frame */}
      <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#1F3A2E] via-[#0D1B15] to-[#040A08] border border-[#1F3A2E] shadow-2xl overflow-hidden glass-card-pro emerald-glow-lg">
        
        {/* Terminal Header */}
        <div className="bg-[#040A08] px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-2 border border-[#1F3A2E] mb-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono-code text-slate-400 font-bold ml-1 sm:ml-2 truncate max-w-[130px] xs:max-w-none">
              NIFTY50_5M_ORDERFLOW
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[9.5px] sm:text-[10.5px] font-bold">
            <span className="text-emerald-400 font-mono-code flex items-center gap-1">
              <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> 24,850.40 (+1.45%)
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 uppercase text-[8.5px] sm:text-[9.5px]">
              Institutional Buy Zone
            </span>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-[#1F3A2E] group cursor-pointer" onClick={onOpenVideo}>
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
            alt="Price Action Video Class"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Chart Overlay Annotations */}
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 flex flex-col gap-1 sm:gap-1.5 pointer-events-none z-10">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-emerald-500/30 border border-emerald-400 text-emerald-300 font-mono-code text-[9px] sm:text-[10px] font-extrabold backdrop-blur-md w-max">
              + Bullish Order Block (OB)
            </span>
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-amber-500/30 border border-amber-400 text-amber-300 font-mono-code text-[9px] sm:text-[10px] font-extrabold backdrop-blur-md w-max">
              ⚡ Fair Value Gap (FVG)
            </span>
          </div>

          {/* Big Glowing Play Button */}
          <div className="absolute inset-0 m-auto w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/60 hover:scale-110 transition-all z-20 group/play">
            <Play className="w-6 h-6 sm:w-9 sm:h-9 fill-current ml-0.5 group-hover/play:scale-110 transition-transform" />
          </div>

          {/* Bottom Bar inside Video */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-white text-xs z-10 gap-2">
            <div className="flex flex-col text-left min-w-0">
              <span className="font-black text-xs sm:text-sm text-white drop-shadow-md truncate">Lesson 1: Liquidity Sweep</span>
              <span className="text-[9.5px] sm:text-[10px] text-emerald-300 font-bold flex items-center gap-1">
                <Eye className="w-3 h-3" /> 22:15 Mins • 4K HDR Video
              </span>
            </div>

            <button className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-500 text-white text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-wider shadow-lg hover:bg-emerald-400 transition-colors shrink-0">
              Watch Class
            </button>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="p-3 sm:p-3.5 bg-[#040A08] rounded-2xl mt-3 border border-[#1F3A2E] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 text-left min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-black text-white truncate">Siva (Chief Analyst)</span>
              <span className="text-[9.5px] sm:text-[10px] text-slate-400 font-medium truncate">Institutional Research</span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-extrabold text-emerald-400 block font-mono-code">150+ HD Videos</span>
            <span className="text-[9.5px] sm:text-[10px] text-slate-400">Instant Access</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroChartPreview;
