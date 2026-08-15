import React from 'react';
import { PlayCircle, Clock, Star, Users, CheckCircle2, Lock, BookOpen, Sparkles } from 'lucide-react';

const CourseCard = ({ course, onSelectCourse }) => {
  return (
    <div className="bg-[#0D1B15]/90 border border-[#1F3A2E] hover:border-emerald-500/50 rounded-3xl overflow-hidden shadow-xl flex flex-col group transition-all duration-300 hover:-translate-y-1.5 glass-panel-hover">
      
      {/* Thumbnail Container */}
      <div className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer" onClick={() => onSelectCourse(course)}>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B15] via-black/20 to-transparent opacity-90" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-[#040A08]/90 backdrop-blur-md px-3 py-1 rounded-xl border border-[#1F3A2E] text-[10px] font-black text-emerald-400 uppercase tracking-wider">
          {course.category}
        </div>

        {/* Popular Tag */}
        {course.isPopular && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>POPULAR</span>
          </div>
        )}

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-emerald-500/90 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:scale-110 transition-transform">
            <PlayCircle className="w-8 h-8 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration & Level Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10.5px] font-bold text-slate-300">
          <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/10">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>{course.duration}</span>
          </div>

          <span className="bg-emerald-500/20 text-emerald-300 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30 text-[10px] font-black uppercase">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4 text-left">
        <div className="flex flex-col gap-2">
          
          {/* Instructor & Rating Row */}
          <div className="flex items-center justify-between text-xs text-slate-400">
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
            className="text-base font-black text-white hover:text-emerald-400 transition-colors line-clamp-2 leading-snug cursor-pointer"
          >
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-medium">
            {course.description}
          </p>
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-3 border-t border-[#1F3A2E] flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[11px]">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>{course.lessons.length} Video Lessons</span>
          </div>

          <button
            onClick={() => onSelectCourse(course)}
            className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
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
