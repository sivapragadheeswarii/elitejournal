import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { BRAND, COURSES } from '../../data/emaData';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-10 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-left">
        
        {/* Top Institutional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 sm:gap-8 lg:gap-12">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5 sm:gap-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                <img src={logo} alt="Elite Market Academy Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-white font-heading tracking-tight">
                  ELITE MARKET <span className="text-amber-400">ACADEMY</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5 font-mono">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            {/* Paragraph copy (Hidden on mobile to keep footer compact & clean) */}
            <p className="hidden sm:block text-xs text-slate-400 leading-relaxed max-w-md font-medium">
              Elite Market Academy is a professional stock market and trading education platform designed to help learners understand financial market fundamentals, technical analysis, options education, risk management, and trading psychology.
            </p>

            {/* Compact Contact Badges */}
            <div className="flex flex-col sm:flex-col gap-2 text-xs text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BRAND.email}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BRAND.phone}</span>
              </div>
            </div>
          </div>

          {/* Links Section: 2 Columns on Mobile, 3 Columns on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-6 sm:gap-8">
            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[11px] sm:text-xs font-extrabold text-amber-400 uppercase tracking-widest font-mono">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-slate-400 font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> About EMA</Link></li>
                <li><Link to="/courses" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Courses</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Contact Us</Link></li>
                {/* Desktop-only secondary links */}
                <li className="hidden sm:block"><Link to="/enrollment" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Enrollment</Link></li>
                <li className="hidden sm:block"><Link to="/learning-hub" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Learning Hub</Link></li>
                <li className="hidden sm:block"><Link to="/faq" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> FAQ</Link></li>
              </ul>
            </div>

            {/* Educational Courses (Top 3 on mobile, all on desktop) */}
            <div className="flex flex-col gap-3 col-span-1 md:col-span-1">
              <h4 className="text-[11px] sm:text-xs font-extrabold text-amber-400 uppercase tracking-widest font-mono">
                Courses
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-slate-400 font-semibold">
                {COURSES.slice(0, 3).map((course) => (
                  <li key={course.id}>
                    <Link to={`/courses/${course.slug}`} className="hover:text-white transition-colors line-clamp-1 flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-amber-500/70 shrink-0" />
                      <span className="truncate">{course.title}</span>
                    </Link>
                  </li>
                ))}
                {/* Remaining courses hidden on mobile */}
                {COURSES.slice(3).map((course) => (
                  <li key={course.id} className="hidden sm:block">
                    <Link to={`/courses/${course.slug}`} className="hover:text-white transition-colors line-clamp-1 flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-amber-500/70 shrink-0" />
                      <span className="truncate">{course.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] sm:text-xs font-extrabold text-amber-400 uppercase tracking-widest font-mono">
                Legal & Risk
              </h4>
              <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-2 text-xs text-slate-400 font-semibold">
                <li><Link to="/disclaimer" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Disclaimer</Link></li>
                <li><Link to="/risk-disclosure" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Risk Disclosure</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Terms & Conditions</Link></li>
                <li className="hidden sm:block"><Link to="/refund-policy" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-amber-500/70" /> Refund Policy</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Regulatory Legal Disclaimer Box (Compact on Mobile) */}
        <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs flex flex-col gap-2 sm:gap-2.5 leading-relaxed">
          <div className="flex items-center gap-1.5 text-amber-400 font-extrabold uppercase text-[10px] sm:text-[11px] tracking-wider font-mono">
            <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Important Financial Education Disclaimer</span>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-300 font-medium leading-normal sm:leading-relaxed">
            Elite Market Academy provides financial-market education for learning purposes only. Educational content should not be considered personalized investment advice, research advice or a recommendation to buy or sell any security. Trading and investing involve market risk, including the possible loss of capital.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-4 sm:pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-500 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Elite Market Academy. All rights reserved.</span>
          <span className="font-semibold text-slate-400">Knowledge first. Discipline always.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
