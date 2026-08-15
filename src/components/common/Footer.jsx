import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND, COURSES } from '../../data/emaData';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12 text-left">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-amber-500/30 flex items-center justify-center overflow-hidden p-1">
                <img src={logo} alt="Elite Market Academy Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white font-heading">
                  ELITE MARKET <span className="text-amber-400">ACADEMY</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-1 font-mono">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-medium">
              Elite Market Academy is a professional stock market and trading education platform designed to help learners understand financial market fundamentals, technical analysis, options education, risk management, and trading psychology.
            </p>

            <div className="flex flex-col gap-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-white font-heading uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About EMA</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/learning-hub" className="hover:text-white transition-colors">Learning Hub</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-white font-heading uppercase tracking-wider text-amber-400">
              Courses
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <Link to={`/courses/${course.slug}`} className="hover:text-white transition-colors line-clamp-1">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black text-white font-heading uppercase tracking-wider text-amber-400">
              Legal & Risk
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-semibold">
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link to="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Regulatory Legal Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-xs flex flex-col gap-3 leading-relaxed">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold uppercase text-[11px] tracking-wider">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Important Financial Education Disclaimer</span>
          </div>
          <p>
            Elite Market Academy provides financial-market education for learning purposes only. Educational content should not be considered personalized investment advice, research advice or a recommendation to buy or sell any security. Trading and investing involve market risk, including the possible loss of capital. Past performance does not guarantee future results. Individuals should make financial decisions based on their own research, circumstances and risk tolerance.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Elite Market Academy. All rights reserved.</span>
          <span className="font-semibold text-slate-400">Knowledge first. Discipline always.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
