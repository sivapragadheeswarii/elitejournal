import React from 'react';
import SeoHead from '../components/common/SeoHead';
import heroEmaCh from '../assets/hero_ema_chart.png';

/* Shared Compact Header for all Legal pages */
const LegalHero = ({ badge, title, subtitle }) => (
  <section className="relative py-8 sm:py-14 bg-[#050E1A] text-white border-b border-slate-800 overflow-hidden">
    <div className="absolute inset-0 bg-[#050E1A]">
      <img src={heroEmaCh} alt="" aria-hidden="true" className="w-full h-full object-cover object-center scale-105 blur-md opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A] via-[#0B192C]/95 to-[#050E1A]" />
    </div>
    <div className="absolute inset-0 bg-financial-grid-dark opacity-15 pointer-events-none" />
    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/8 rounded-full blur-3xl pointer-events-none animate-blob-slow" />
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 relative z-10 text-left w-full">
      <span className="inline-block text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-[#0B192C] border border-amber-500/30 font-mono mb-2.5 sm:mb-3 backdrop-blur-sm shadow-md">
        {badge}
      </span>
      <h1 className="text-xl xs:text-2xl sm:text-4xl font-black text-white font-heading tracking-tight leading-[1.15] mb-1.5 sm:mb-2">{title}</h1>
      {subtitle && <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  </section>
);

export const DisclaimerPage = () => (
  <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen overflow-hidden">
    <SeoHead
      title="Educational Disclaimer | Elite Market Academy"
      description="Read the official educational disclaimer for Elite Market Academy regarding stock market learning, non-advisory education, and financial risk awareness."
    />
    <LegalHero
      badge="Legal Disclosure"
      title="Educational Disclaimer"
      subtitle="Understanding the nature and scope of Elite Market Academy's educational services."
    />
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 py-6 sm:py-12 text-left flex flex-col gap-4 sm:gap-6 font-medium text-slate-700 text-xs sm:text-sm w-full">
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-800 font-semibold leading-relaxed shadow-2xs">
        "Elite Market Academy provides financial-market education for learning purposes only. Educational content should not be considered personalized investment advice, research advice or a recommendation to buy or sell any security. Trading and investing involve market risk, including the possible loss of capital. Past performance does not guarantee future results. Individuals should make financial decisions based on their own research, circumstances and risk tolerance."
      </p>
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-700 leading-relaxed shadow-2xs">
        Elite Market Academy is an independent financial education institution. We do NOT provide stock tips, buy/sell calls, advisory services, guaranteed profit models, or SEBI-registered portfolio management services. All chart examples, case studies, and scenarios are strictly for educational demonstration.
      </p>
    </div>
  </div>
);

export const RiskDisclosurePage = () => (
  <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen overflow-hidden">
    <SeoHead
      title="Risk Disclosure | Elite Market Academy"
      description="Important risk disclosure on stock market trading, equities, options derivatives, and leverage capital risk management."
    />
    <LegalHero
      badge="Risk Warning"
      title="Risk Disclosure"
      subtitle="Important information about the risks involved in financial market participation."
    />
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 py-6 sm:py-12 text-left flex flex-col gap-4 sm:gap-6 font-medium text-slate-700 text-xs sm:text-sm w-full">
      <p className="bg-rose-50 p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-rose-200 text-rose-950 font-semibold leading-relaxed shadow-2xs">
        Trading in financial markets, equities, intraday positions, futures, and options derivatives involves substantial risk of loss and is not suitable for every individual. High leverage and rapid market fluctuations can lead to total capital loss.
      </p>
      <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs flex flex-col gap-2.5 sm:gap-3">
        <h3 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">Key Risk Considerations:</h3>
        <ul className="list-disc pl-4 sm:pl-5 flex flex-col gap-2 text-xs sm:text-sm leading-relaxed">
          <li>Options trading involves time decay (Theta) and volatility exposure.</li>
          <li>Intraday trading exposes participants to rapid price swings and execution slippage.</li>
          <li>Capital preservation and strict risk management must be prioritized at all times.</li>
          <li>Learners should never trade with funds they cannot afford to lose.</li>
        </ul>
      </div>
    </div>
  </div>
);

export const PrivacyPolicyPage = () => (
  <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen overflow-hidden">
    <SeoHead
      title="Privacy Policy | Elite Market Academy"
      description="Privacy Policy detailing data collection, storage, and student information privacy practices at Elite Market Academy."
    />
    <LegalHero
      badge="Data Protection"
      title="Privacy Policy"
      subtitle="How Elite Market Academy collects, uses, and protects your personal information."
    />
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 py-6 sm:py-12 text-left flex flex-col gap-4 sm:gap-6 font-medium text-slate-700 text-xs sm:text-sm w-full">
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-800 leading-relaxed shadow-2xs">
        Elite Market Academy values student privacy. We collect personal contact information (such as name, mobile number, and email address) strictly to provide requested course information, educational material, and student support.
      </p>
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-700 leading-relaxed shadow-2xs">
        We do not sell, rent, or lease student information to third-party telemarketers or unauthorized organizations. All lead data is encrypted and securely processed.
      </p>
    </div>
  </div>
);

export const TermsPage = () => (
  <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen overflow-hidden">
    <SeoHead
      title="Terms of Service | Elite Market Academy"
      description="Terms and conditions governing course access, proprietary educational materials, and institutional policies at Elite Market Academy."
    />
    <LegalHero
      badge="Terms of Service"
      title="Terms & Conditions"
      subtitle="The institutional terms governing your access to Elite Market Academy's educational content."
    />
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 py-6 sm:py-12 text-left flex flex-col gap-4 sm:gap-6 font-medium text-slate-700 text-xs sm:text-sm w-full">
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-800 leading-relaxed shadow-2xs">
        By accessing the Elite Market Academy website, enrolling in educational courses, or utilizing learning resources, you agree to abide by our institutional terms. All course materials, video lectures, PDFs, and guides are proprietary intellectual property of Elite Market Academy.
      </p>
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-700 leading-relaxed shadow-2xs">
        Unauthorized recording, redistribution, or resale of course materials is strictly prohibited.
      </p>
    </div>
  </div>
);

export const RefundPolicyPage = () => (
  <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen overflow-hidden">
    <SeoHead
      title="Refund Policy | Elite Market Academy"
      description="Course refund policy and enrollment terms for Elite Market Academy."
    />
    <LegalHero
      badge="Course Policies"
      title="Refund Policy"
      subtitle="Transparent enrollment terms and refund guidelines at Elite Market Academy."
    />
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 py-6 sm:py-12 text-left flex flex-col gap-4 sm:gap-6 font-medium text-slate-700 text-xs sm:text-sm w-full">
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-800 leading-relaxed shadow-2xs">
        Elite Market Academy provides transparent educational terms. As digital educational materials, course modules, and live training sessions grant immediate access to proprietary knowledge, refund requests are evaluated according to our enrollment guidelines.
      </p>
      <p className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-700 leading-relaxed shadow-2xs">
        For detailed course enrollment terms or specific queries, please contact support@elitemarketacademy.in prior to course registration.
      </p>
    </div>
  </div>
);
