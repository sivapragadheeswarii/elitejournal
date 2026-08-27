import React, { useState, useEffect } from 'react';
import { Play, Sparkles, ShieldCheck, CheckCircle2, TrendingUp, Users, Video, Star, Award, Zap, ArrowRight, Megaphone } from 'lucide-react';
import { STATS } from '../../data/coursesData';
import HeroChartPreview from './HeroChartPreview';

const HeroSection = ({ onOpenVideo }) => {
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/announcement');
        const data = await response.json();
        if (isMounted && data.success && data.data && data.data.isActive) {
          setAnnouncement(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch announcement:', err);
      }
    };

    fetchAnnouncement();
    return () => {
      isMounted = false;
    };
  }, []);

  const getAnnouncementStyle = (type) => {
    switch (type) {
      case 'emerald':
        return {
          bg: 'from-emerald-500/25 via-emerald-500/15 to-transparent',
          border: 'border-emerald-500/50',
          text: 'text-emerald-300',
          badgeBg: 'bg-emerald-500/20 text-emerald-300',
          dot: 'bg-emerald-400',
          ping: 'bg-emerald-400',
        };
      case 'cyan':
        return {
          bg: 'from-cyan-500/25 via-cyan-500/15 to-transparent',
          border: 'border-cyan-500/50',
          text: 'text-cyan-300',
          badgeBg: 'bg-cyan-500/20 text-cyan-300',
          dot: 'bg-cyan-400',
          ping: 'bg-cyan-400',
        };
      case 'rose':
        return {
          bg: 'from-rose-500/25 via-rose-500/15 to-transparent',
          border: 'border-rose-500/50',
          text: 'text-rose-300',
          badgeBg: 'bg-rose-500/20 text-rose-300',
          dot: 'bg-rose-400',
          ping: 'bg-rose-400',
        };
      case 'amber':
      default:
        return {
          bg: 'from-amber-500/25 via-amber-500/15 to-transparent',
          border: 'border-amber-500/50',
          text: 'text-amber-300',
          badgeBg: 'bg-amber-500/20 text-amber-300',
          dot: 'bg-amber-400',
          ping: 'bg-amber-400',
        };
    }
  };

  const style = announcement ? getAnnouncementStyle(announcement.type) : null;

  return (
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden bg-[#030705] bg-radial-grid">
      
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-60 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-left">
            
            {/* Headline */}
            <h1 className="text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight font-heading">
              Trade Like Institutions with <br className="hidden sm:inline" />
              <span className="text-emerald-glow">Smart Money Video Classes</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
              Stop getting trapped by retail stop-hunts. Learn order blocks, fair value gaps, and liquidity sweeps through <span className="text-emerald-400 font-extrabold">150+ HD video lessons</span>, weekly live webinars, and automated trade journaling.
            </p>

            {/* DYNAMIC HIGH-VISIBILITY ADMIN ANNOUNCEMENT CARD */}
            {announcement && announcement.isActive && (
              <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0D1E16] via-[#050E1A] to-[#12231C] border border-amber-500/60 shadow-2xl shadow-amber-500/10 backdrop-blur-xl relative overflow-hidden group animate-bounce-subtle my-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0 mt-0.5 sm:mt-0">
                      <Megaphone className="w-5 h-5 animate-pulse" />
                    </div>
                    
                    <div className="flex flex-col gap-1 text-left min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                        </span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-extrabold text-[10px] uppercase font-mono tracking-wider border border-amber-500/30">
                          {announcement.badgeText || 'UPCOMING BATCH'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-extrabold text-slate-100 leading-snug">
                        {announcement.message}
                      </p>
                    </div>
                  </div>

                  {announcement.actionLink && (
                    <a
                      href={announcement.actionLink}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-md transition-all shrink-0 cursor-pointer active:scale-95 whitespace-nowrap"
                    >
                      <span>{announcement.actionText || 'Enroll Now'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#courses"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs sm:text-sm text-center shadow-xl shadow-emerald-500/25 transition-all active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Browse Video Curriculum</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>

              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-[#0D1B15] hover:bg-[#12231C] border border-[#1F3A2E] hover:border-amber-500/40 text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center gap-3 transition-all cursor-pointer shadow-xl group active:scale-95"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Free Lesson (4K)</span>
              </button>
            </div>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#1F3A2E]/80 text-xs text-slate-300 font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">150+ HD Video Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Weekly Sunday Webinar</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1 justify-center sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Free 1-Yr Trading Journal</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Tech Interactive Video Terminal */}
          <div className="lg:col-span-5 w-full">
            <HeroChartPreview onOpenVideo={onOpenVideo} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
