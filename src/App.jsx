import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import EnquiryModal from './components/common/EnquiryModal';
import PortalSplash from './components/common/PortalSplash';
import SeoHead from './components/common/SeoHead';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LearningHubPage from './pages/LearningHubPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import EnrollmentPage from './pages/EnrollmentPage';
import MarketAnalysisPage from './pages/MarketAnalysisPage';
import EPTSJournalLandingPage from './pages/EPTSJournalLandingPage';
import {
  DisclaimerPage,
  RiskDisclosurePage,
  PrivacyPolicyPage,
  TermsPage,
  RefundPolicyPage,
} from './pages/LegalPages';

// Scroll to top component on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Private / 404 No-Index Fallback Component
const NotFoundPage = () => (
  <div className="py-24 bg-white min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <SeoHead
      title="Page Not Found | Elite Market Academy"
      description="The page you are looking for does not exist or is a private route."
      noIndex={true}
    />
    <div className="max-w-md flex flex-col items-center gap-4">
      <span className="text-4xl font-black text-amber-500 font-mono">404</span>
      <h1 className="text-2xl font-black text-[#0B192C] font-heading">Page Not Found</h1>
      <p className="text-xs text-slate-600 font-medium leading-relaxed">
        The requested page does not exist, has been moved, or is restricted.
      </p>
      <Link
        to="/"
        className="mt-2 px-6 py-3 rounded-xl bg-[#0B192C] text-amber-400 font-black text-xs shadow-md hover:bg-[#1E3A8A] transition-all"
      >
        Return to Home Page
      </Link>
    </div>
  </div>
);

function AppContent() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleOpenEnquiry = () => setIsEnquiryOpen(true);
  const handleCloseEnquiry = () => setIsEnquiryOpen(false);

  const handleOpenPortal = () => setIsPortalOpen(true);
  const handleClosePortal = () => setIsPortalOpen(false);

  return (
    <div className="min-h-screen bg-[#050E1A] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <ScrollToTop />
      
      {/* Global Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />

      {/* Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/about" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/courses" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/courses/:slug" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/learning-hub" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/learning-hub/:slug" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/faq" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/contact" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/enrollment" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />
          <Route path="/market-analysis" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenPortal={handleOpenPortal} />} />

          {/* EPTS Journal Standalone Route */}
          <Route path="/epts-journal" element={<EPTSJournalLandingPage onOpenPortal={handleOpenPortal} />} />

          {/* Legal Pages */}
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/risk-disclosure" element={<RiskDisclosurePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />

          {/* Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Lead Generation Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />

      {/* EPTS Journal Portal Animated Loading Splash */}
      <PortalSplash isOpen={isPortalOpen} onClose={handleClosePortal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
