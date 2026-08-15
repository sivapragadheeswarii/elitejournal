import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import EnquiryModal from './components/common/EnquiryModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LearningHubPage from './pages/LearningHubPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
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

function AppContent() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenEnquiry = () => setIsEnquiryOpen(true);
  const handleCloseEnquiry = () => setIsEnquiryOpen(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <ScrollToTop />
      
      {/* Global Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/courses/:slug" element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/learning-hub" element={<LearningHubPage />} />
          <Route path="/learning-hub/:slug" element={<ArticleDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Legal Pages */}
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/risk-disclosure" element={<RiskDisclosurePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Lead Generation Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />
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
