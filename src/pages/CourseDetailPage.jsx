import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data/emaData';
import { COURSES_DATA } from '../data/coursesData';
import {
  CheckCircle2, ShieldAlert, ArrowLeft, Clock,
  ArrowRight, Sparkles, MessageSquare, BookOpen, Shield
} from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import { getCourseSchema, getBreadcrumbSchema } from '../utils/seoSchemas';
import { BRAND } from '../data/emaData';

const CourseDetailPage = ({ onOpenEnquiry }) => {
  const { slug } = useParams();

  const course = COURSES.find(
    (c) => c.slug === slug ||
           c.id === slug ||
           (slug === 'stock-market-basics' && c.id === 'stock-market-fundamentals')
  ) || COURSES_DATA.find(
    (c) => c.id === slug || c.slug === slug
  );

  // 404 Not Found
  if (!course) {
    return (
      <div className="py-24 bg-[#07110D] min-h-[70vh] flex flex-col items-center justify-center text-center px-4 text-white">
        <SeoHead
          title="Course Not Found | Elite Market Academy"
          description="The requested stock market course could not be found."
          noIndex={true}
        />
        <div className="max-w-md flex flex-col items-center gap-5">
          <span className="text-5xl font-extrabold text-[#F59E0B] font-mono">404</span>
          <h1 className="text-2xl font-extrabold font-heading text-white">Course Not Found</h1>
          <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">
            The course URL you opened does not exist or may have been updated. Please explore our full curriculum.
          </p>
          <Link
            to="/courses"
            className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] hover:brightness-110 text-slate-950 font-extrabold text-xs shadow-lg transition-all"
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

  const handleWhatsApp = () => {
    const cleanPhone = BRAND.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello Elite Market Academy! I am interested in the ${courseTitle} course. Can you share more details?`)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-[#07110D] text-[#E2E8F0] min-h-screen overflow-hidden selection:bg-[#F59E0B] selection:text-slate-950">
      <SeoHead
        title={course.seoTitle || `${courseTitle} | Elite Market Academy`}
        description={course.metaDesc || course.shortDesc || course.description}
        keywords={`${courseTitle}, learn ${courseTitle}, ${course.category} course, Elite Market Academy`}
        jsonLd={courseJsonLd}
      />

      {/* ── HERO: DARK ── */}
      <section className="pt-10 pb-14 sm:pt-16 sm:pb-20 bg-[#07110D] border-b border-[#1F3A2E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/8 rounded-full blur-[140px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1F3A2E 1px, transparent 1px), linear-gradient(90deg, #1F3A2E 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-5 text-left">
          {/* Breadcrumb */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-[#F59E0B] transition-colors w-max"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          {/* Level & Duration */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-0.5 rounded bg-[#0D1B15] text-[#F59E0B] font-mono text-[10px] font-extrabold border border-[#1F3A2E]">
              {course.level}
            </span>
            <span className="text-xs font-mono font-bold text-[#94A3B8] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              {course.duration}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            {courseTitle}
          </h1>

          <p className="text-xs sm:text-base text-[#94A3B8] font-medium leading-relaxed max-w-2xl">
            {courseIntro}
          </p>

          {/* Quick CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={onOpenEnquiry}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/20 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Demo Class</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3.5 rounded-xl bg-[#0D1B15] border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer hover:bg-[#12261E] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── MODULES: LIGHT ── */}
      <section className="py-12 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-8">

          {/* What You Will Learn */}
          {courseModules.length > 0 && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2E8F0]">
                <div className="w-8 h-8 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#07110D] font-heading tracking-tight">
                  What You Will Learn
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courseModules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#F59E0B] flex items-start gap-3 text-xs font-semibold text-[#07110D] transition-colors group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Who Is This Course For */}
          {whoFor && (
            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col gap-3">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#07110D] font-heading tracking-tight flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D97706]" />
                Who Is This Course For?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {whoFor}
              </p>
            </div>
          )}

          {/* Options Risk Disclaimer */}
          {(courseSlug === 'options-trading' || course.category === 'Options Trading') && (
            <div className="p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-xs flex flex-col gap-2 font-medium">
              <div className="flex items-center gap-2 font-extrabold uppercase text-[11px] tracking-wider text-[#D97706] font-mono">
                <ShieldAlert className="w-4 h-4" />
                <span>Options Derivative Risk Disclaimer</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Options derivatives involve significant financial risk and time decay. Understanding options mechanics, position sizing, and risk management is essential before participating in live trading.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ── ENROLL CTA: DARK ── */}
      <section className="py-14 sm:py-24 bg-[#07110D] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F59E0B]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1B15] border border-[#F59E0B]/30 flex flex-col items-center gap-5 shadow-2xl text-center">

            <span className="px-3.5 py-1 rounded-full bg-[#07110D] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider font-mono">
              START LEARNING
            </span>

            <h2 className="text-xl sm:text-3xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Start Your Learning Journey with{' '}
              <span className="text-[#F59E0B]">{courseTitle}</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] font-medium max-w-lg leading-relaxed">
              Attend a free demo class to understand our teaching approach, explore the curriculum, and see if this program is the right fit for your learning goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-[#F59E0B]/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-7 py-4 rounded-xl bg-[#0D1B15] border border-emerald-500/40 text-emerald-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-[#12261E] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp EMA</span>
              </button>
            </div>

            <p className="text-[10.5px] text-[#94A3B8] font-medium">
              No payment required • Educational demo • No guaranteed-return claims
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetailPage;
