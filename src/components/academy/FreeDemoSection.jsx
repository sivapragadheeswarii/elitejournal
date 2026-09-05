import React, { useState, useEffect } from 'react';
import { Sparkles, Send, CheckCircle2, ShieldCheck, PhoneCall, Loader2 } from 'lucide-react';
import { BRAND } from '../../data/emaData';

const FreeDemoSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    experienceLevel: 'Beginner',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleSelectLevel = (e) => {
      if (e.detail) {
        setFormData((prev) => ({ ...prev, experienceLevel: e.detail }));
      }
    };
    window.addEventListener('select-ema-level', handleSelectLevel);
    return () => window.removeEventListener('select-ema-level', handleSelectLevel);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.whatsappNumber.trim() || formData.whatsappNumber.length < 10) {
      setErrorMsg('Please enter a valid WhatsApp number (minimum 10 digits).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate API form submission / WhatsApp redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Construct WhatsApp message URL
      const text = encodeURIComponent(
        `Hello Elite Market Academy!\nI would like to book a FREE Demo Class.\n\nName: ${formData.fullName}\nWhatsApp: ${formData.whatsappNumber}\nExperience Level: ${formData.experienceLevel}`
      );
      const cleanPhone = BRAND.phone.replace(/[^0-9]/g, '');
      const waUrl = `https://wa.me/${cleanPhone}?text=${text}`;

      // Open WhatsApp in new tab after 1 second
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);
    }, 800);
  };

  return (
    <section id="free-demo" className="py-14 sm:py-24 bg-[#07110D] text-[#E2E8F0] border-b border-[#1F3A2E] relative overflow-hidden">
      {/* Target anchor for contact */}
      <div id="contact" className="absolute -top-10" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F59E0B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B15] border border-[#1F3A2E] text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider w-max">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FREE DEMO CLASS</span>
            </div>

            <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Experience the Teaching Before You Decide.
            </h2>

            <p className="text-xs sm:text-base text-[#94A3B8] font-medium leading-relaxed">
              Attend a Free Demo Class to understand our teaching approach, explore the curriculum and see whether EMA is the right fit for your learning goals.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#0D1B15] border border-[#1F3A2E]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#E2E8F0] leading-snug">
                  100% Free Educational Session (No Obligations)
                </span>
              </div>
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#0D1B15] border border-[#1F3A2E]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#E2E8F0] leading-snug">
                  Understand How We Teach Chart Analysis & Risk Management
                </span>
              </div>
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#0D1B15] border border-[#1F3A2E]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#E2E8F0] leading-snug">
                  No Profit Guarantees • No Trading Tips • Pure Education
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 w-full">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0D1B15] border border-[#F59E0B]/40 shadow-2xl relative">
              
              <div className="flex flex-col gap-1 mb-5 sm:mb-6 text-left">
                <h3 className="text-base sm:text-2xl font-extrabold text-white font-heading tracking-tight">
                  Attend a Free Demo Class
                </h3>
                <p className="text-xs text-[#94A3B8] font-medium">
                  Fill in your details below to reserve your spot.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-[#07110D] border border-emerald-500/40 text-center flex flex-col items-center gap-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Demo Seat Reserved!</h4>
                  <p className="text-xs text-[#94A3B8] max-w-sm">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Opening WhatsApp to connect with our educational support team...
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 px-4 py-2 rounded-xl bg-[#1F3A2E] text-xs font-mono text-[#F59E0B]"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#E2E8F0] tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="px-4 py-3 rounded-xl bg-[#07110D] border border-[#1F3A2E] focus:border-[#F59E0B] text-white text-xs sm:text-sm font-medium outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#E2E8F0] tracking-wide">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      required
                      className="px-4 py-3 rounded-xl bg-[#07110D] border border-[#1F3A2E] focus:border-[#F59E0B] text-white text-xs sm:text-sm font-medium outline-none transition-colors"
                    />
                  </div>

                  {/* Experience Level */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#E2E8F0] tracking-wide">
                      Program Level / Experience
                    </label>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-[#07110D] border border-[#1F3A2E] focus:border-[#F59E0B] text-white text-xs sm:text-sm font-medium outline-none transition-colors"
                    >
                      <option value="Beginner">Beginner Level (Zero Market Experience)</option>
                      <option value="Intermediate">Intermediate Level (Knows Basics / Chart Reading)</option>
                      <option value="Advanced">Advanced Level (Options / Active Trader)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#F59E0B]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Reserving Your Seat...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Book My Free Demo</span>
                      </>
                    )}
                  </button>

                  {/* Anti-Scam Disclaimer Note */}
                  <p className="text-[10.5px] text-[#94A3B8] text-center font-medium leading-normal pt-2">
                    No payment required • Educational demo • No guaranteed-return claims.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeDemoSection;
