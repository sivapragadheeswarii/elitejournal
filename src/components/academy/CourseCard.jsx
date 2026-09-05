import React from 'react';
import { PlayCircle, Clock, Star, Users, CheckCircle2, Lock, BookOpen, Sparkles, ChevronRight } from 'lucide-react';

const CourseCard = ({ course, onSelectCourse }) => {
  return (
    <div className="bg-[#07110D] border-[#1F3A2E] overflow-hidden shadow-2xl flex flex-col group transition-all duration-300 hover:-translate-y-1.5 border border-[#1F3A2E] hover:border-amber-500/40">
      
      {/* Thumbnail Container */}
      <div className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer" onClick={() => onSelectCourse(course)}>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A] via-black/20 to-transparent opacity-90" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-[#0D1B15]/90 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-700 text-[10px] font-black text-amber-400 uppercase tracking-wider font-mono">
          {course.category}
        </div>

        {/* Popular Tag */}
        {course.isPopular && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1 font-mono">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>POPULAR</span>
          </div>
        )}

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 group-hover:scale-110 transition-transform">
            <PlayCircle className="w-8 h-8 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration & Level Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10.5px] font-bold text-slate-300 font-mono">
          <div className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 border border-slate-700">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>{course.duration}</span>
          </div>

          <span className="bg-amber-500/20 text-amber-300 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/30 text-[10px] font-black uppercase">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4 text-left">
        <div className="flex flex-col gap-2">
          
          {/* Instructor & Rating Row */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="font-bold text-amber-400 truncate">{course.instructor}</span>
            <div className="flex items-center gap-1 font-bold text-slate-200 shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
              <span className="text-[10px] text-slate-500">({course.reviewsCount})</span>
            </div>
          </div>

          {/* Course Title */}
          <h3
            onClick={() => onSelectCourse(course)}
            className="text-base font-black text-white hover:text-amber-400 transition-colors line-clamp-2 leading-snug cursor-pointer font-heading"
          >
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
            {course.description}
          </p>
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-3 border-t border-[#1F3A2E] flex items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[11px]">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>{course.lessons?.length || course.modulesCount} Lessons</span>
          </div>

          <button
            onClick={() => onSelectCourse(course)}
            className="px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <PlayCircle className="w-3.5 h-3.5 fill-current" />
            <span>Watch Class</span>
          </button>
        </div>

      </div>

    </div>
  );
};

export default CourseCard;
