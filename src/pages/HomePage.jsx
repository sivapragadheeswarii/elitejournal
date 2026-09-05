import React from 'react';
import SeoHead from '../components/common/SeoHead';
import HeroSection from '../components/academy/HeroSection';
import TrustStrip from '../components/academy/TrustStrip';
import ProblemSection from '../components/academy/ProblemSection';
import AboutEMAFramework from '../components/academy/AboutEMAFramework';
import AudienceSection from '../components/academy/AudienceSection';
import WhatYouWillLearn from '../components/academy/WhatYouWillLearn';
import EMADifferentiation from '../components/academy/EMADifferentiation';
import LearningJourney from '../components/academy/LearningJourney';
import MentorSection from '../components/academy/MentorSection';
import ProgramsSection from '../components/academy/ProgramsSection';
import TestimonialsSection from '../components/academy/TestimonialsSection';
import FreeDemoSection from '../components/academy/FreeDemoSection';
import FAQSection from '../components/academy/FAQSection';
import FinalCTA from '../components/academy/FinalCTA';
import MobileStickyCTA from '../components/common/MobileStickyCTA';
import ScrollReveal from '../components/common/ScrollReveal';
import { getOrganizationSchema, getWebSiteSchema, getFaqSchema } from '../utils/seoSchemas';

const HomePage = ({ onOpenEnquiry, onOpenPortal }) => {
  const homeJsonLd = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getFaqSchema([
      { question: 'Is this course suitable for beginners?', answer: 'Yes, our programs start from ground zero, building market fundamentals step-by-step before moving into technical analysis, derivatives, and options.' },
      { question: 'Do I need previous trading experience?', answer: 'No prior experience is required. We cover market mechanics, order types, candlestick patterns, and risk management from the very basics.' },
      { question: 'Is the training online or offline?', answer: 'The training is delivered through interactive live online sessions, allowing you to learn from anywhere with flexible schedule options.' },
      { question: 'What will I learn in the course?', answer: 'You will learn market structure, technical price chart reading, equity derivatives, options pricing & Greeks, position sizing, risk management rules, and trading psychology.' },
      { question: 'Are classes live or recorded?', answer: 'We provide live interactive classes accompanied by structured recorded modules for continuous review and practice.' },
      { question: 'Will I receive doubt-clearing support?', answer: 'Yes, learners receive dedicated live Q&A interaction during sessions along with educational support for clarifying concepts.' },
      { question: 'Does EMA provide trading calls or tips?', answer: 'No. Elite Market Academy is strictly an educational platform. We focus on teaching independent chart analysis, risk control, and decision-making skills—never trade calls or tips.' },
      { question: 'Does the course guarantee profits?', answer: 'No. EMA is an educational platform. We focus on market knowledge, analysis, risk management and structured learning.' }
    ])
  ];

  return (
    <div className="flex flex-col w-full bg-[#07110D] text-[#E2E8F0] overflow-hidden selection:bg-[#F59E0B] selection:text-slate-950">
      
      {/* SEO Metadata */}
      <SeoHead
        title="Stock Market Course | Equity & Options Trading Training – Elite Market Academy"
        description="Learn equity, derivatives, options, technical analysis and risk management with Elite Market Academy's structured stock market course. Book a free demo class."
        keywords="Stock Market Course, Equity Trading Course, Options Trading Course, Technical Analysis Training, Risk Management, Trading Psychology, Elite Market Academy, EMA"
        jsonLd={homeJsonLd}
      />

      {/* 01. HERO SECTION (DARK) */}
      <HeroSection onOpenDemo={onOpenEnquiry} />

      {/* 02. TRUST / PROOF STRIP (DARK) */}
      <ScrollReveal animation="fade-up">
        <TrustStrip />
      </ScrollReveal>

      {/* 03. PROBLEM SECTION (DARK) */}
      <ScrollReveal animation="fade-up">
        <ProblemSection />
      </ScrollReveal>

      {/* 04. WHAT IS ELITE MARKET ACADEMY & 3-STEP FRAMEWORK (LIGHT) */}
      <ScrollReveal animation="fade-up">
        <AboutEMAFramework />
      </ScrollReveal>

      {/* 05. TARGET AUDIENCE (DARK) */}
      <ScrollReveal animation="fade-up">
        <AudienceSection />
      </ScrollReveal>

      {/* 06. WHAT YOU WILL LEARN - CURRICULUM (LIGHT) */}
      <ScrollReveal animation="fade-up">
        <WhatYouWillLearn />
      </ScrollReveal>

      {/* 07. HOW EMA TEACHES DIFFERENTLY & WHY LEARN WITH EMA (DARK) */}
      <ScrollReveal animation="fade-up">
        <EMADifferentiation />
      </ScrollReveal>

      {/* 08. LEARNING JOURNEY TIMELINE (LIGHT) */}
      <ScrollReveal animation="fade-up">
        <LearningJourney />
      </ScrollReveal>

      {/* 09. MEET YOUR MENTOR & ACADEMY PHILOSOPHY (DARK) */}
      <ScrollReveal animation="fade-up">
        <MentorSection />
      </ScrollReveal>

      {/* 10. STOCK MARKET COURSES & PROGRAMS (DARK) */}
      <ScrollReveal animation="fade-up">
        <ProgramsSection onOpenDemo={onOpenEnquiry} />
      </ScrollReveal>

      {/* 11. STUDENT LEARNING EXPERIENCES - TESTIMONIALS (LIGHT) */}
      <ScrollReveal animation="fade-up">
        <TestimonialsSection />
      </ScrollReveal>

      {/* 12. FREE DEMO CONVERSION FORM (DARK) */}
      <ScrollReveal animation="fade-up">
        <FreeDemoSection />
      </ScrollReveal>

      {/* 13. FREQUENTLY ASKED QUESTIONS (LIGHT) */}
      <ScrollReveal animation="fade-up">
        <FAQSection />
      </ScrollReveal>

      {/* 14. FINAL CALL TO ACTION (DARK) */}
      <ScrollReveal animation="scale-in">
        <FinalCTA onOpenDemo={onOpenEnquiry} />
      </ScrollReveal>

      {/* 15. MOBILE STICKY BOTTOM CTA BAR */}
      <MobileStickyCTA onOpenDemo={onOpenEnquiry} />

    </div>
  );
};

export default HomePage;
