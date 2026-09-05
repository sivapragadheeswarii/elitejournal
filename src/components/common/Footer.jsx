import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { BRAND, COURSES } from '../../data/emaData';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#07110D] text-[#94A3B8] pt-12 sm:pt-16 pb-28 sm:pb-16 border-t border-[#1F3A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-12 text-left">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D1B15] border border-[#1F3A2E] flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                <img src={logo} alt="Elite Market Academy Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold text-white font-heading tracking-tight">
                  ELITE MARKET <span className="text-[#F59E0B]">ACADEMY</span>
                </span>
                <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest font-mono">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-md font-medium">
              Elite Market Academy is a structured stock market education academy focusing on market understanding, technical chart analysis, derivatives, position sizing, and trading psychology.
            </p>

            <div className="flex flex-col gap-2 text-xs text-[#94A3B8] font-medium pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span className="truncate">{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span>{BRAND.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span>{BRAND.phone}</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-6 sm:gap-8">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-extrabold text-[#F59E0B] uppercase tracking-widest font-mono">
                Navigation
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-[#94A3B8] font-semibold">
                <li><a href="/#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Home</a></li>
                <li><a href="/#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> About EMA</a></li>
                <li><a href="/#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Courses</a></li>
                <li><a href="/#learning" onClick={(e) => { e.preventDefault(); document.getElementById('learning')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Learning Hub</a></li>
                <li><a href="/#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> FAQ</a></li>
                <li><a href="/#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Contact</a></li>
              </ul>
            </div>

            {/* Courses */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-extrabold text-[#F59E0B] uppercase tracking-widest font-mono">
                Programs
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-[#94A3B8] font-semibold">
                {COURSES.slice(0, 5).map((course) => (
                  <li key={course.id}>
                    <a
                      href="/#courses"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#F59E0B]/70 shrink-0" />
                      <span className="truncate">{course.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-extrabold text-[#F59E0B] uppercase tracking-widest font-mono">
                Legal & Policy
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-[#94A3B8] font-semibold">
                <li><Link to="/disclaimer" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Disclaimer</Link></li>
                <li><Link to="/risk-disclosure" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Risk Disclosure</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Terms & Conditions</Link></li>
                <li><Link to="/refund-policy" className="hover:text-white transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#F59E0B]/70" /> Refund Policy</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Regulatory Risk Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-[#0D1B15] border border-[#1F3A2E] text-xs flex flex-col gap-2 leading-relaxed">
          <div className="flex items-center gap-2 text-[#F59E0B] font-extrabold uppercase text-[11px] font-mono">
            <ShieldAlert className="w-4 h-4 shrink-0 text-[#F59E0B]" />
            <span>Educational Risk & Anti-Guarantee Disclaimer</span>
          </div>
          <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">
            Elite Market Academy provides stock market education for informational and learning purposes only. Content taught should not be interpreted as investment advice, financial research, or recommendations to buy or sell securities. Trading financial instruments carries inherent risk, including total loss of capital. EMA does not offer profit-sharing, guaranteed return schemes, or trading signals.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#1F3A2E] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs text-[#94A3B8]">
          <span>© {new Date().getFullYear()} Elite Market Academy. All rights reserved.</span>
          <span className="font-semibold text-white font-mono">Knowledge Before the Market.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
