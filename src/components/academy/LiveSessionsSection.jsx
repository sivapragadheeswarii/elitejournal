import React from 'react';
import { Radio, Calendar, Clock, Video, CheckCircle2, ArrowRight, ShieldCheck, Users } from 'lucide-react';

const LiveSessionsSection = () => {
  const SESSIONS = [
    {
      day: 'Every Sunday 11:00 AM',
      title: 'Weekly Institutional Outlook & Key Levels',
      instructor: 'Siva (Chief Analyst)',
      type: 'Live Stream & Q&A',
    },
    {
      day: 'Wednesdays 02:30 PM',
      title: 'London & NY Overlap Scalping Breakdown',
      instructor: 'Alex Mercer',
      type: 'Live Orderflow Analysis',
    },
    {
      day: 'Monthly Expiry Day',
      title: '0DTE Index Options Expiry Trading Webinar',
      instructor: 'Elena Rostova',
      type: 'Live Trade Execution',
    },
  ];

  return (
    <section id="live-sessions" className="py-12 sm:py-20 bg-[#0D1B15] relative border-b border-[#1F3A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-black uppercase tracking-wider w-max">
              <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
              <span>Interactive Live Trading Webinars</span>
            </div>

            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight">
              Watch Mentors Trade <span className="text-emerald-400">Live Markets</span> in Real Time
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Video lessons are great, but watching professional traders analyze live order flow, set stop losses, and handle market volatility live is priceless.
            </p>

            <div className="flex flex-col gap-2.5 sm:gap-3 text-xs text-slate-200 font-bold">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live Q&A: Ask questions directly during the video stream</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recorded HD Replays uploaded within 1 hour</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Exclusive Discord Voice Room Access for VIP Students</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span>Reserve Seat for Next Live Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Schedule Cards */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
            {SESSIONS.map((session, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#07110D] border border-[#1F3A2E] hover:border-emerald-500/40 transition-all flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-4 shadow-lg group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Video className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9.5px] sm:text-[10px] font-black text-amber-400 uppercase tracking-widest flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {session.day}
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-white mt-0.5">{session.title}</h3>
                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium">Instructor: {session.instructor}</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-xl bg-slate-800 text-slate-300 text-[10px] sm:text-[10.5px] font-extrabold border border-slate-700 shrink-0">
                  {session.type}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveSessionsSection;
