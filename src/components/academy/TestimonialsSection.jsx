import React, { useState, useEffect } from 'react';
import { Quote, Star, MessageSquarePlus, Sparkles, MessageCircle } from 'lucide-react';
import GiveFeedbackModal from '../common/GiveFeedbackModal';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const TestimonialsSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch(`${API_BASE}/feedback?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });
      const data = await res.json();
      if (data?.success && Array.isArray(data.data)) {
        setFeedbacks(data.data);
      } else {
        setFeedbacks([]);
      }
    } catch (err) {
      console.warn('API error fetching feedbacks:', err);
      setFeedbacks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();

    const handleFocus = () => fetchFeedbacks();
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleFeedbackAdded = (newFeedback) => {
    if (newFeedback) {
      setFeedbacks((prev) => [newFeedback, ...prev]);
    }
    fetchFeedbacks();
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#07110D] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header with Title and "Give Feedback" CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-slate-100">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2.5 max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] text-[11px] font-extrabold uppercase tracking-wider font-mono w-fit">
              STUDENT FEEDBACK
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07110D] font-heading tracking-tight leading-tight">
              What Our Learners Say
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
              Real feedback from learners who have built structured market discipline with Elite Market Academy.
            </p>
          </div>

          {/* Give Feedback Action Button */}
          <div className="flex items-center justify-center md:justify-end shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] hover:brightness-110 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#F59E0B]/20 active:scale-95 flex items-center gap-2 cursor-pointer btn-shimmer"
            >
              <MessageSquarePlus className="w-4 h-4 text-slate-950" />
              <span>Give Feedback</span>
            </button>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="py-16 text-center text-xs font-mono text-slate-400 flex flex-col items-center justify-center gap-2">
            <div className="w-6 h-6 border-2 border-[#D97706] border-t-transparent rounded-full animate-spin" />
            <span>Loading verified student feedback...</span>
          </div>
        ) : feedbacks.length === 0 ? (
          /* Empty State when no feedback in database */
          <div className="py-14 sm:py-20 px-6 rounded-3xl bg-[#F8FAFC] border border-dashed border-slate-300 text-center flex flex-col items-center justify-center gap-3.5 max-w-xl mx-auto shadow-xs">
            <div className="p-3.5 rounded-2xl bg-amber-50 text-[#D97706] border border-amber-200">
              <MessageCircle className="w-8 h-8 text-[#D97706]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 font-heading">
              No Learner Feedback Yet
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md font-medium leading-relaxed">
              Have you learned with Elite Market Academy? Be the first to share your learning experience and trading transformation!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-2 px-6 py-2.5 rounded-xl bg-[#0D1B15] text-[#F59E0B] hover:bg-[#12261E] font-extrabold text-xs transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Share Your Feedback</span>
            </button>
          </div>
        ) : (
          /* Dynamic Testimonials Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {feedbacks.map((rev) => {
              const ratingCount = Math.min(Math.max(Number(rev.rating) || 5, 1), 5);
              return (
                <div
                  key={rev._id || rev.id}
                  className="p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#F59E0B] transition-all flex flex-col justify-between gap-5 sm:gap-6 relative group shadow-2xs hover:shadow-xl text-left"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        {[...Array(ratingCount)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-[#CBD5E1] group-hover:text-[#D97706]/40 transition-colors shrink-0" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                      "{rev.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-1.5">
                    {rev.highlight && (
                      <span className="text-xs font-mono font-extrabold text-[#D97706] uppercase tracking-wide truncate">
                        ✓ {rev.highlight}
                      </span>
                    )}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-semibold pt-1">
                      <span className="text-[#07110D] font-bold truncate max-w-[55%]">
                        {rev.name}
                      </span>
                      <span className="truncate max-w-[42%] text-right">
                        {rev.role || 'Active Student'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Give Feedback Modal */}
        <GiveFeedbackModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onFeedbackAdded={handleFeedbackAdded}
        />

      </div>
    </section>
  );
};

export default TestimonialsSection;
