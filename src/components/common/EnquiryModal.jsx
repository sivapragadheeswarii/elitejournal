import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COURSES } from '../../data/emaData';

const EnquiryModal = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-xl max-h-[90vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0B192C] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
              Elite Market Academy
            </span>
            <h3 className="text-base sm:text-lg font-black font-heading">Request Course Information</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors active:scale-95"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-[#0B192C]">Thank You!</h4>
              <p className="text-sm text-slate-600 font-medium max-w-md">
                Our team will contact you with the requested course information shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#0B192C] text-amber-400 font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Interested Course</label>
                  <select
                    value={formData.interestedCourse}
                    onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
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
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
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
                  rows="2"
                  placeholder="Tell us what you would like to learn..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[10.5px] text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your privacy is protected. No spam.</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer border border-amber-500/30"
                >
                  <span>Submit Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default EnquiryModal;
