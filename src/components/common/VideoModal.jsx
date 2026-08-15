import React, { useState } from 'react';
import { X, Play, Pause, Volume2, ShieldCheck, Clock, CheckCircle2, Lock, Sparkles, BookOpen } from 'lucide-react';

const VideoModal = ({ course, initialLesson, onClose }) => {
  const [activeLesson, setActiveLesson] = useState(initialLesson || course.lessons[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-[#0D1B15] border border-[#1F3A2E] rounded-2xl sm:rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col lg:flex-row my-auto max-h-[92vh]">
        
        {/* Left Column: Video Player Area */}
        <div className="flex-1 flex flex-col bg-black/60 relative">
          
          {/* Top Bar inside Video Player */}
          <div className="p-4 flex items-center justify-between border-b border-[#1F3A2E]/50 bg-[#07110D]/80">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/20">
                {course.category}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                {activeLesson ? activeLesson.title : course.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors cursor-pointer lg:hidden"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* HTML5 Video Player Container */}
          <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
            {activeLesson?.isFreePreview || activeLesson === course.lessons[0] ? (
              <video
                key={activeLesson.id}
                src={course.videoUrl}
                controls
                autoPlay={isPlaying}
                className="w-full h-full object-cover"
                poster={course.thumbnail}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Lock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-black text-white">Enroll to Unlock Full Video</h4>
                  <p className="text-xs text-slate-400 max-w-sm mt-1">
                    This advanced trading lesson is part of the premium Academy bundle. Enroll now to get lifetime video access!
                  </p>
                </div>
                <a
                  href="#pricing"
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs shadow-lg shadow-emerald-500/25 transition-all"
                >
                  Enroll in Academy Now
                </a>
              </div>
            )}
          </div>

          {/* Video Meta Information Below Player */}
          <div className="p-4 flex flex-col gap-2 bg-[#0D1B15] border-t border-[#1F3A2E]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm sm:text-base font-black text-white">{course.title}</h2>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {course.instructor}
              </span>
            </div>
            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>

        {/* Right Column: Lessons Playlist & Curriculum */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-[#1F3A2E] bg-[#07110D] flex flex-col max-h-[350px] lg:max-h-none overflow-hidden">
          
          <div className="p-4 border-b border-[#1F3A2E] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                Course Syllabus ({course.lessons.length} Lessons)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors cursor-pointer hidden lg:block"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Lessons List */}
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
            {course.lessons.map((lesson, idx) => {
              const isActive = activeLesson?.id === lesson.id;
              const canPlay = lesson.isFreePreview || idx === 0;

              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setActiveLesson(lesson);
                    setIsPlaying(true);
                  }}
                  className={`w-full p-3 rounded-xl text-left flex items-start gap-3 transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                      : 'bg-[#0D1B15] border-[#1F3A2E] hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-extrabold ${
                    isActive
                      ? 'bg-emerald-500 text-white'
                      : canPlay
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {canPlay ? <Play className="w-3.5 h-3.5 fill-current ml-0.5" /> : <Lock className="w-3.5 h-3.5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold truncate">{lesson.title}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {lesson.duration}
                      </span>
                      {canPlay ? (
                        <span className="text-[9.5px] font-extrabold text-emerald-400 uppercase tracking-wider">
                          Free Preview
                        </span>
                      ) : (
                        <span className="text-[9.5px] font-bold text-amber-400 uppercase tracking-wider">
                          Pro Only
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Modal Footer Call to Action */}
          <div className="p-3 border-t border-[#1F3A2E] bg-[#0D1B15]">
            <a
              href="#pricing"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all"
            >
              <span>Get Full Academy Access</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoModal;
