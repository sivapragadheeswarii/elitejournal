import React, { useState } from 'react';
import { BRAND, COURSES } from '../data/emaData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    tradingExperience: 'Beginner (0-6 months)',
    interestedCourse: 'Stock Market Fundamentals',
    preferredContact: 'WhatsApp',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12 text-left">
        
        {/* Header */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Get in Touch
          </span>
          <h1 className="text-2xl sm:text-5xl font-black text-[#0B192C] font-heading">
            Contact Elite Market Academy
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl">
            Have questions about our financial market education programs? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0B192C] text-white flex flex-col gap-5 sm:gap-6 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-black font-heading text-white">Academy Information</h2>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Our educational support team is available to answer course enquiries and assist you in selecting the right learning path.
              </p>

              <div className="flex flex-col gap-4 text-xs text-slate-200 font-medium pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Location</span>
                    <span className="font-semibold text-white">{BRAND.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Email Support</span>
                    <span className="font-semibold text-white">{BRAND.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Phone Enquiry</span>
                    <span className="font-semibold text-white">{BRAND.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Knowledge First. Discipline Always.</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B192C]">Thank You!</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md">
                  Our team will contact you with the requested course information.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0B192C] text-amber-400 font-bold text-xs"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 text-left">
                <h2 className="text-xl sm:text-2xl font-black text-[#0B192C] font-heading">
                  Request Course Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-700">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-700">Interested Course</label>
                    <select
                      value={formData.interestedCourse}
                      onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-700">Trading Experience</label>
                    <select
                      value={formData.tradingExperience}
                      onChange={(e) => setFormData({ ...formData, tradingExperience: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                    >
                      <option value="Beginner (0-6 months)">Beginner (0-6 months)</option>
                      <option value="Intermediate (6-2 years)">Intermediate (6-2 years)</option>
                      <option value="Experienced (2+ years)">Experienced (2+ years)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-700">Preferred Contact Method</label>
                    <select
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Message / Questions (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us what you would like to learn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Course Information</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
