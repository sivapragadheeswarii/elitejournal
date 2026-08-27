import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data/emaData';
import { COURSES_DATA } from '../data/coursesData';
import { CheckCircle2, ShieldAlert, ArrowLeft, Clock } from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import { getCourseSchema, getBreadcrumbSchema } from '../utils/seoSchemas';

const CourseDetailPage = ({ onOpenEnquiry }) => {
  const { slug } = useParams();

  // Dynamic course lookup: matches by slug, id, or alias (e.g. stock-market-basics)
  const course = COURSES.find(
    (c) => c.slug === slug || 
           c.id === slug || 
           (slug === 'stock-market-basics' && c.id === 'stock-market-fundamentals')
  ) || COURSES_DATA.find(
    (c) => c.id === slug || 
           c.slug === slug
  );

  // 404 Course Not Found Fallback if URL slug is invalid
  if (!course) {
    return (
      <div className="py-24 bg-[#050E1A] min-h-[70vh] flex flex-col items-center justify-center text-center px-4 text-white">
        <SeoHead
          title="Course Not Found | Elite Market Academy"
          description="The requested stock market course could not be found."
          noIndex={true}
        />
        <div className="max-w-md flex flex-col items-center gap-4">
          <span className="text-4xl font-black text-amber-500 font-mono">404</span>
          <h1 className="text-2xl font-black font-heading text-white">Course Not Found</h1>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            The course URL you opened does not exist or may have been updated. Please check the link or explore our full curriculum.
          </p>
          <Link
            to="/courses"
            className="mt-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg transition-all"
          >
            Explore All Courses
          </Link>
        </div>
      </div>
    );
  }

  const courseTitle = course.title;
  const courseSlug = course.slug || course.id;
  const courseIntro = course.intro || course.description;
  const courseModules = course.modules || course.lessons?.map((l) => typeof l === 'string' ? l : l.title) || [];
  const whoFor = course.whoIsItFor || course.description;

  const courseJsonLd = [
    getCourseSchema(course),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Courses', url: '/courses' },
      { name: courseTitle, url: `/courses/${courseSlug}` }
    ])
  ];

  return (
    <div className="py-16 bg-white min-h-screen text-slate-900">
      <SeoHead
        title={course.seoTitle || `${courseTitle} | Elite Market Academy`}
        description={course.metaDesc || course.shortDesc || course.description}
        keywords={`${courseTitle}, learn ${courseTitle}, ${course.category} course, Elite Market Academy`}
        jsonLd={courseJsonLd}
      />

      <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <Link to="/courses" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0B192C] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Courses</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#0B192C] text-amber-400 text-xs font-black uppercase tracking-wider font-mono">
              {course.level}
            </span>
            <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> {course.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0B192C] font-heading tracking-tight leading-tight">
            {courseTitle}
          </h1>

          <p className="text-base text-slate-700 leading-relaxed font-medium">
            {courseIntro}
          </p>
        </div>

        {/* Modules List */}
        <div className="flex flex-col gap-6 pt-4">
          <h2 className="text-2xl font-black text-[#0B192C] font-heading border-b border-slate-200 pb-3">
            What You Will Learn
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {courseModules.map((mod, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who Is This Course For */}
        {whoFor && (
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
            <h2 className="text-xl font-black text-[#0B192C] font-heading">
              Who Is This Course For?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {whoFor}
            </p>
          </div>
        )}

        {/* Options Derivative Warning Disclaimer if applicable */}
        {(courseSlug === 'options-trading' || course.category === 'Options Trading') && (
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col gap-2 font-medium">
            <div className="flex items-center gap-2 font-extrabold uppercase text-[11px] tracking-wider text-amber-700 font-mono">
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
            <p className="text-xs text-slate-300 font-medium">Get detailed syllabus and enquiry information for {courseTitle}.</p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B192C] font-black text-xs shrink-0 cursor-pointer shadow-md transition-all active:scale-95"
          >
            Request Course Information
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailPage;
