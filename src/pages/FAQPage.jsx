import React, { useState } from 'react';
import { AEO_FAQS } from '../data/emaData';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sun,
  Moon,
} from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import ScrollReveal from '../components/common/ScrollReveal';
import { getFaqSchema, getBreadcrumbSchema } from '../utils/seoSchemas';
import heroEmaCh from '../assets/hero_ema_chart.png';
import EnquiryModal from '../components/common/EnquiryModal';

const EXTENDED_FAQS = [
  ...AEO_FAQS,
  {
    category: 'Enrollment',
    question: 'What batch shift timings are available for student enrollment?',
    answer: 'We offer 2 flexible batch shifts to accommodate students and working professionals: Morning Shift (10:00 AM - 1:00 PM) and Evening Shift (6:00 PM - 9:00 PM). Students can select their preferred shift during course enrollment on the website.',
  },
  {
    category: 'Journal & App',
    question: 'Is the Trading Journal software included for free with course enrollment?',
    answer: 'Yes! All enrolled students receive 1-Year Free Access to our proprietary Trading Journal software upon admin approval of course payment. This allows you to track trades, monitor rule compliance, and audit drawdown statistics.',
  },
  {
    category: 'Enrollment',
    question: 'How does payment verification and UTR approval work?',
    answer: 'Students can scan the official UPI QR code on our enrollment page using GPay, PhonePe, or Paytm. After transferring the fee, submit the 12-digit UTR number and payment screenshot. Our admin team verifies and activates your access within 1-2 hours.',
  },
  {
    category: 'Curriculum',
    question: 'Does Elite Market Academy issue course completion certificates?',
    answer: 'Yes. Upon completing all course curriculum modules, practical trade setups, and risk management assignments, students receive an official Elite Market Academy Certificate of Completion.',
  },
  {
    category: 'Curriculum',
    question: 'Are the trading programs live sessions or pre-recorded modules?',
    answer: 'Our educational programs combine interactive live market mentorship sessions with structured, high-definition video lesson archives so you can revise key concepts at your own pace.',
  },
  {
    category: 'Risk & Rules',
    question: 'What is the academy’s policy on stock tips and profit guarantees?',
    answer: 'Elite Market Academy strictly DOES NOT provide stock tips, trade calls, or profit guarantees. We are a registered educational institution focused on teaching price action, technical analysis, position sizing, and risk control so you can trade independently.',
  },
];

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  const categories = ['All', 'Enrollment', 'Curriculum', 'Options & Derivatives', 'Risk & Rules', 'Journal & App'];

  const filteredFaqs = EXTENDED_FAQS.filter((faq) => {
    const matchesSearch =
      !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Enrollment' && (faq.category === 'Enrollment' || faq.question.toLowerCase().includes('enroll') || faq.question.toLowerCase().includes('begin'))) ||
      (selectedCategory === 'Curriculum' && (faq.category === 'Curriculum' || faq.question.toLowerCase().includes('learn') || faq.question.toLowerCase().includes('course'))) ||
      (selectedCategory === 'Options & Derivatives' && (faq.question.toLowerCase().includes('option') || faq.question.toLowerCase().includes('derivative'))) ||
      (selectedCategory === 'Risk & Rules' && (faq.category === 'Risk & Rules' || faq.question.toLowerCase().includes('risk') || faq.question.toLowerCase().includes('profit') || faq.question.toLowerCase().includes('guarantee'))) ||
      (selectedCategory === 'Journal & App' && (faq.category === 'Journal & App' || faq.question.toLowerCase().includes('journal') || faq.question.toLowerCase().includes('utr')));

    return matchesSearch && matchesCategory;
  });

  const faqJsonLd = [
    getFaqSchema(EXTENDED_FAQS),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ]),
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen text-slate-900 overflow-hidden">
      <SeoHead
        title="Stock Market Education FAQs | Elite Market Academy"
        description="Frequently asked questions about Elite Market Academy, stock market courses, technical analysis, options trading, batch shifts, risk management, and enrollment."
        keywords="Stock Market Course FAQ, Elite Market Academy FAQ, Stock Trading Questions, Learn Technical Analysis FAQ, EMA Batch Shifts"
        jsonLd={faqJsonLd}
      />

      {/* 1. Header — [FULL-VIEWPORT 12-COLUMN ULTRA-PREMIUM FAQ HERO] */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-8 sm:pt-14 sm:pb-10 bg-[#050E1A] text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[#050E1A]">
          <img src={heroEmaCh} alt="" aria-hidden="true" className="w-full h-full object-cover object-center scale-105 blur-md opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A] via-[#0B192C]/95 to-[#050E1A]" />
        </div>
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-blob-slow" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-blob-reverse" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10 text-left my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Header Column (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 animate-landing-up">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4.5 sm:py-2 rounded-full futuristic-glass-card text-amber-400 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest badge-3d shadow-xl w-max border border-amber-500/30">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-500"></span>
                </span>
                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                <span>SUPPORT & KNOWLEDGE BASE</span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-[1.15]">
                Frequently Asked <br className="hidden sm:inline" />
                <span className="gold-gradient-text animate-gradient-text">Questions</span>
              </h1>

              <p className="text-xs sm:text-base text-slate-100 font-semibold leading-relaxed p-4 sm:p-5 rounded-2xl bg-[#0B192C]/95 border border-slate-700/80 shadow-2xl backdrop-blur-md max-w-xl">
                Find instant answers to common questions about Elite Market Academy, our education curriculum, batch shift timings, risk policies, and student enrollment.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask a Question</span>
                </button>
                <a
                  href="https://wa.me/919443879989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>WhatsApp Support</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right Column (5 Cols) — Interactive Knowledge Hub Visual Engine */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <div className="w-full rounded-2xl sm:rounded-3xl bg-[#030712] border border-amber-500/30 p-4 sm:p-6 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 relative z-10 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-extrabold text-slate-200 uppercase">ACADEMY KNOWLEDGE TERMINAL</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    VERIFIED FAQS
                  </span>
                </div>

                {/* 4 Feature Cards Grid */}
                <div className="grid grid-cols-1 gap-2.5 my-4 relative z-10 font-sans">
                  
                  <div className="p-3 rounded-xl bg-[#050E1A] border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-xs font-extrabold text-white">NISM Standardized Curriculum</span>
                      <span className="text-[10.5px] text-slate-400 font-medium">Structured learning path for all skill levels</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#050E1A] border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-xs font-extrabold text-white">100% No Stock Tips / Signals</span>
                      <span className="text-[10.5px] text-slate-400 font-medium">Pure education & risk management principles</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#050E1A] border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-xs font-extrabold text-white">1-Year Free Trading Journal</span>
                      <span className="text-[10.5px] text-slate-400 font-medium">Included automatically with course enrollment</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#050E1A] border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-xs font-extrabold text-white">2 Flexible Batch Shifts</span>
                      <span className="text-[10.5px] text-slate-400 font-medium">Morning (10 AM - 1 PM) & Evening (6 PM - 9 PM)</span>
                    </div>
                  </div>

                </div>

                {/* Footer Callout */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-200 text-left text-xs font-medium flex items-center justify-between">
                  <span>Need specialized advice?</span>
                  <button
                    onClick={() => setIsEnquiryOpen(true)}
                    className="text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Enquire Now →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-center pt-2 animate-bounce cursor-pointer">
          <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400/90">SCROLL TO EXPLORE FAQS</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-amber-500/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 sm:h-2.5 rounded-full bg-amber-400" />
          </div>
        </div>
      </section>

      {/* 2. Accordion Container — Crisp Light Background */}
      <section className="py-12 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
          
          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none pb-4 mb-4 sm:mb-6 justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#0B192C] text-amber-400 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between pb-3 mb-4 text-xs font-bold text-slate-500 border-b border-slate-200">
            <span>Showing {filteredFaqs.length} FAQ Topics</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-amber-600 hover:underline font-extrabold cursor-pointer"
              >
                Clear Search Filter
              </button>
            )}
          </div>

          {/* Accordion Items */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">No matching FAQs found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
                Try searching for different keywords or clear your search query to see all questions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0B192C] text-amber-400 font-bold text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5 sm:gap-4 text-left">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 40}>
                    <div className={`rounded-2xl bg-white border transition-all duration-200 shadow-xs overflow-hidden ${
                      isOpen ? 'border-amber-500 ring-2 ring-amber-500/10' : 'border-slate-200/90 hover:border-amber-400'
                    }`}>
                      <button
                        onClick={() => toggle(idx)}
                        className="w-full p-4 sm:p-6 text-left font-black text-[#0B192C] font-heading text-xs sm:text-base flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <HelpCircle className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${isOpen ? 'text-amber-600' : 'text-slate-400'}`} />
                          <span className="leading-snug">{faq.question}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : ''}`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 bg-slate-50/50 animate-fly-in">
                          <p className="mt-2">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          {/* Bottom Help Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0B192C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl text-left">
            <div className="flex flex-col gap-1">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">STILL HAVE QUESTIONS?</span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">We’re Here to Guide Your Learning</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-lg">
                Our education advisors can help you choose the right course, understand batch timings, or guide you through enrollment.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md text-center cursor-pointer"
              >
                Request Course Info
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
  );
};

export default FAQPage;
