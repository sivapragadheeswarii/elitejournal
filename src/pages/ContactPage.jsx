import React, { useState } from 'react';
import { BRAND, COURSES } from '../data/emaData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

import SeoHead from '../components/common/SeoHead';
import ScrollReveal from '../components/common/ScrollReveal';
import { getBreadcrumbSchema, getOrganizationSchema } from '../utils/seoSchemas';
import abstractFinanceBg from '../assets/abstract_finance_bg.png';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    tradingExperience: 'Beginner (0-6 months)',
    interestedCourse: 'Beginner Level',
    preferredContact: 'WhatsApp',
    message: '',
  });

  const contactJsonLd = [
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' }
    ])
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to submit form.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { Icon: MapPin, label: 'Location', value: BRAND.location },
    { Icon: Mail, label: 'Email Support', value: BRAND.email },
    { Icon: Phone, label: 'Phone Enquiry', value: BRAND.phone },
  ];

  return (
    <div className="flex flex-col w-full bg-[#07110D] text-[#E2E8F0] overflow-hidden selection:bg-[#F59E0B] selection:text-slate-950">
      <SeoHead
        title="Contact Elite Market Academy | Trading Education Enquiry"
        description="Get in touch with Elite Market Academy for course syllabus, enrollment details, and stock market education counselor support in Chennai, India."
        keywords="Contact Elite Market Academy, Stock Market Course Enquiry, Trading Education Support, EMA Contact"
        jsonLd={contactJsonLd}
      />
      
      {/* 1. Header — [ULTRA-PREMIUM FULL VIEWPORT CONTACT HERO] */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-8 sm:pt-16 sm:pb-10 bg-[#07110D] text-white border-b border-[#1F3A2E] overflow-hidden">
        <div className="absolute inset-0 bg-[#07110D]">
          <img src={abstractFinanceBg} alt="" aria-hidden="true" className="w-full h-full object-cover object-center scale-105 blur-md opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07110D] via-[#0D1B15]/95 to-[#07110D]" />
        </div>
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#FFFBEB]0/15 rounded-full blur-[140px] pointer-events-none " />
        
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 text-center flex flex-col items-center gap-4 sm:gap-6 relative z-10 my-auto w-full">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4.5 sm:py-2 rounded-full text-[#F59E0B] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-xl w-max border border-[#F59E0B]/30">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#FFFBEB]0"></span>
            </span>
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.15]">
            Contact <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D4AF37] bg-clip-text text-transparent ">Elite Market Academy</span>
          </h1>

          <p className="text-xs sm:text-base text-slate-100 font-semibold leading-relaxed p-4 sm:p-5 rounded-2xl bg-[#0D1B15]/95 border border-[#1F3A2E] shadow-2xl backdrop-blur-md max-w-2xl">
            Have questions about our financial market education programs, batch shifts, or 1-year free trading journal access? Reach out to our academic support team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-[10.5px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>15-Min Response SLA</span>
            </div>
            <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-[#F59E0B]/30 text-[#F59E0B] text-[10.5px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0" />
              <span>Direct Counselor Access</span>
            </div>
            <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-[10.5px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Morning & Evening Shifts</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-center pt-4 animate-bounce cursor-pointer">
          <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400/90">SCROLL TO SUBMIT ENQUIRY</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-[#F59E0B]/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 sm:h-2.5 rounded-full bg-amber-400" />
          </div>
        </div>

      </section>

      {/* 2. Contact Content — [EXECUTIVE LIGHT SECTION] */}
      <section className="py-12 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start text-left">

            {/* Info Sidebar */}
            <ScrollReveal animation="slide-left" className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col gap-5 sm:gap-6">
                <div className="flex flex-col gap-1.5 sm:gap-2 border-b border-slate-100 pb-3.5 sm:pb-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0D1B15] font-heading">
                    Academy Information
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Our educational support team is available to answer course enquiries and assist you in selecting the right learning path.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5 pt-1 sm:pt-2">
                  {contactItems.map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-[#D97706] uppercase tracking-wider font-mono">
                          {label}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#0D1B15] truncate">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 sm:pt-6 border-t border-slate-100 flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Knowledge First. Discipline Always.</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal animation="slide-right" className="lg:col-span-7">
              <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-3.5 sm:gap-4 py-8 sm:py-12 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D1B15] font-heading">
                      Thank You!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md">
                      Our team will contact you with the requested course information.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors mt-2 cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0D1B15] font-heading">
                      Request Course Information
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase font-mono">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase font-mono">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter 10-digit mobile number"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase font-mono">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase font-mono">Program Level</label>
                        <select
                          value={formData.interestedCourse}
                          onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#F59E0B] transition-all cursor-pointer"
                        >
                          {COURSES.map((c) => <option key={c.id} value={`${c.title} Level`}>{c.title} Level</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase font-mono">Trading Experience</label>
                        <select
                          value={formData.tradingExperience}
                          onChange={(e) => setFormData({ ...formData, tradingExperience: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#F59E0B] transition-all cursor-pointer"
                        >
                          <option value="Beginner (0-6 months)">Beginner (0-6 months)</option>
                          <option value="Intermediate (6-2 years)">Intermediate (6-2 years)</option>
                          <option value="Experienced (2+ years)">Experienced (2+ years)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase font-mono">Preferred Contact Method</label>
                        <select
                          value={formData.preferredContact}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#F59E0B] transition-all cursor-pointer"
                        >
                          <option value="WhatsApp">WhatsApp</option>
                          <option value="Phone Call">Phone Call</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase font-mono">Message / Questions (Optional)</label>
                      <textarea
                        rows="3"
                        placeholder="Tell us what you would like to learn..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition-all resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-3.5 sm:py-4 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] text-[#F59E0B] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer mt-1 border border-[#F59E0B]/30 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <span>{loading ? 'Sending Message...' : 'Request Course Information'}</span>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
