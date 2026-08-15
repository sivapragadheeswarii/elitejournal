import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/emaData';
import { ChevronRight, BookOpen } from 'lucide-react';

const CoursesPage = ({ onOpenEnquiry }) => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12 text-left">
        
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Academy Curriculum
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B192C] font-heading">
            Stock Market & Trading Courses
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-2xl">
            Explore structured educational courses designed for beginners, intermediate learners, and aspiring traders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#0B192C] text-amber-400 text-[10px] font-black uppercase">
                    {course.level}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">{course.duration}</span>
                </div>

                <h2 className="text-xl font-black text-[#0B192C] font-heading">{course.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{course.shortDesc}</p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{course.modulesCount} Learning Modules</span>
                  <span>Category: {course.category}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  to={`/courses/${course.slug}`}
                  className="w-full py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Course Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                >
                  Request Course Information
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoursesPage;
