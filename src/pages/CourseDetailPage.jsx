import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data/emaData';
import { CheckCircle2, ShieldAlert, ArrowLeft, BookOpen, Clock, Award } from 'lucide-react';

const CourseDetailPage = ({ onOpenEnquiry }) => {
  const { slug } = useParams();
  const course = COURSES.find((c) => c.slug === slug) || COURSES[0];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <Link to="/courses" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0B192C]">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Courses</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#0B192C] text-amber-400 text-xs font-black uppercase">
              {course.level}
            </span>
            <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> {course.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0B192C] font-heading">
            {course.title}
          </h1>

          <p className="text-base text-slate-700 leading-relaxed font-medium">
            {course.intro}
          </p>
        </div>

        {/* Modules List */}
        <div className="flex flex-col gap-6 pt-4">
          <h2 className="text-2xl font-black text-[#0B192C] font-heading border-b border-slate-200 pb-3">
            What You Will Learn
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {course.modules.map((mod, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who Is This Course For */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
          <h2 className="text-xl font-black text-[#0B192C] font-heading">
            Who Is This Course For?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            {course.whoIsItFor}
          </p>
        </div>

        {/* Options Derivative Warning Disclaimer if applicable */}
        {course.slug === 'options-trading' && (
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col gap-2 font-medium">
            <div className="flex items-center gap-2 font-extrabold uppercase text-[11px] tracking-wider text-amber-700">
              <ShieldAlert className="w-4 h-4" />
              <span>Options Derivative Risk Disclaimer</span>
            </div>
            <p>
              Options derivatives involve significant financial risk and time decay. Understanding options mechanics, position sizing, and risk management is essential before participating in live trading.
            </p>
          </div>
        )}

        {/* Enquire Action CTA */}
        <div className="p-8 rounded-3xl bg-[#0B192C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col text-left">
            <h3 className="text-xl font-black font-heading text-white">Start Your Learning Journey</h3>
            <p className="text-xs text-slate-300 font-medium">Get detailed syllabus and enquiry information for {course.title}.</p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-black text-xs shrink-0 cursor-pointer shadow-md"
          >
            Request Course Information
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailPage;
