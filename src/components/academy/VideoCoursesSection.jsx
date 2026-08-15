import React, { useState } from 'react';
import { COURSES_DATA, CATEGORIES } from '../../data/coursesData';
import CourseCard from './CourseCard';
import { Video, Search, Filter, Sparkles } from 'lucide-react';

const VideoCoursesSection = ({ onSelectCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-12 sm:py-20 bg-[#07110D] relative border-b border-[#1F3A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          <div className="flex flex-col gap-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider w-max">
              <Video className="w-3.5 h-3.5" />
              <span>Video Academy Curriculum</span>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight">
              Institutional Trading <span className="text-emerald-400">Video Modules</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Explore step-by-step video courses taught by full-time proprietary traders. Watch free preview lessons instantly.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search video modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D1B15] border border-[#1F3A2E] text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer border active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-white border-emerald-400 shadow-md'
                  : 'bg-[#0D1B15] text-slate-400 border-[#1F3A2E] hover:text-white hover:bg-[#12231C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} />
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-12 text-center bg-[#0D1B15] border border-[#1F3A2E] rounded-3xl flex flex-col items-center justify-center gap-3">
            <Video className="w-10 h-10 text-slate-500" />
            <h3 className="text-base font-bold text-white">No Video Courses Found</h3>
            <p className="text-xs text-slate-400">Try adjusting your search filter or category selection.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default VideoCoursesSection;
