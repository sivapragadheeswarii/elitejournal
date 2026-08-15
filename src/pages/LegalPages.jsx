import React from 'react';

export const DisclaimerPage = () => (
  <div className="py-16 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-6 font-medium text-slate-700 text-sm">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">Legal Disclosure</span>
      <h1 className="text-3xl font-black text-[#0B192C] font-heading">Educational Disclaimer</h1>
      <p className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-slate-800 font-semibold leading-relaxed">
        “Elite Market Academy provides financial-market education for learning purposes only. Educational content should not be considered personalized investment advice, research advice or a recommendation to buy or sell any security. Trading and investing involve market risk, including the possible loss of capital. Past performance does not guarantee future results. Individuals should make financial decisions based on their own research, circumstances and risk tolerance.”
      </p>
      <p>
        Elite Market Academy is an independent financial education institution. We do NOT provide stock tips, buy/sell calls, advisory services, guaranteed profit models, or SEBI-registered portfolio management services. All chart examples, case studies, and scenarios are strictly for educational demonstration.
      </p>
    </div>
  </div>
);

export const RiskDisclosurePage = () => (
  <div className="py-16 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-6 font-medium text-slate-700 text-sm">
      <span className="text-xs font-bold text-rose-600 uppercase tracking-widest font-mono">Risk Warning</span>
      <h1 className="text-3xl font-black text-[#0B192C] font-heading">Risk Disclosure</h1>
      <p className="bg-rose-50 p-6 rounded-2xl border border-rose-200 text-rose-950 font-semibold leading-relaxed">
        Trading in financial markets, equities, intraday positions, futures, and options derivatives involves substantial risk of loss and is not suitable for every individual. High leverage and rapid market fluctuations can lead to total capital loss.
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-2">
        <li>Options trading involves time decay (Theta) and volatility exposure.</li>
        <li>Intraday trading exposes participants to rapid price swings and execution slippage.</li>
        <li>Capital preservation and strict risk management must be prioritized at all times.</li>
        <li>Learners should never trade with funds they cannot afford to lose.</li>
      </ul>
    </div>
  </div>
);

export const PrivacyPolicyPage = () => (
  <div className="py-16 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-6 font-medium text-slate-700 text-sm">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">Data Protection</span>
      <h1 className="text-3xl font-black text-[#0B192C] font-heading">Privacy Policy</h1>
      <p>
        Elite Market Academy values student privacy. We collect personal contact information (such as name, mobile number, and email address) strictly to provide requested course information, educational material, and student support.
      </p>
      <p>
        We do not sell, rent, or lease student information to third-party telemarketers or unauthorized organizations. All lead data is encrypted and securely processed.
      </p>
    </div>
  </div>
);

export const TermsPage = () => (
  <div className="py-16 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-6 font-medium text-slate-700 text-sm">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">Terms of Service</span>
      <h1 className="text-3xl font-black text-[#0B192C] font-heading">Terms & Conditions</h1>
      <p>
        By accessing the Elite Market Academy website, enrolling in educational courses, or utilizing learning resources, you agree to abide by our institutional terms. All course materials, video lectures, PDFs, and guides are proprietary intellectual property of Elite Market Academy.
      </p>
      <p>
        Unauthorized recording, redistribution, or resale of course materials is strictly prohibited.
      </p>
    </div>
  </div>
);

export const RefundPolicyPage = () => (
  <div className="py-16 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-6 font-medium text-slate-700 text-sm">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">Course Policies</span>
      <h1 className="text-3xl font-black text-[#0B192C] font-heading">Refund Policy</h1>
      <p>
        Elite Market Academy provides transparent educational terms. As digital educational materials, course modules, and live training sessions grant immediate access to proprietary knowledge, refund requests are evaluated according to our enrollment guidelines.
      </p>
      <p>
        For detailed course enrollment terms or specific queries, please contact info@elitemarketacademy.com prior to course registration.
      </p>
    </div>
  </div>
);
