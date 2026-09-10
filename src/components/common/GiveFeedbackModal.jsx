import React, { useState } from 'react';
import { X, Send, CheckCircle2, Star, Sparkles } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const GiveFeedbackModal = ({ isOpen, onClose, onFeedbackAdded }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    highlight: '',
    quote: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch(`${API_BASE}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data?.success) {
        setSubmitted(true);
        if (onFeedbackAdded) {
          onFeedbackAdded(data.data);
        }
      } else {
        setErrorMsg(data.message || 'Failed to submit feedback. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to connect to server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    setFormData({
      name: '',
      role: '',
      rating: 5,
      highlight: '',
      quote: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-[#0D1B15] px-4 sm:px-6 py-4 text-white flex items-center justify-between shrink-0 border-b border-[#1F3A2E]">
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-xs font-bold text-[#F59E0B] uppercase tracking-widest font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Learner Testimonial
            </span>
            <h3 className="text-base sm:text-lg font-black font-heading text-white">
              Share Your Feedback
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors active:scale-95 cursor-pointer"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-[#0D1B15]">Thank You For Your Feedback!</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-sm leading-relaxed">
                Your feedback has been added directly to the Learners Say section. We appreciate your review!
              </p>
              <button
                onClick={handleClose}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#0D1B15] text-[#F59E0B] hover:bg-[#12261E] font-extrabold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              
              {/* Star Rating Selector */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60">
                <label className="text-xs font-bold text-slate-700">Overall Experience Rating *</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 text-2xl transition-transform hover:scale-125 cursor-pointer focus:outline-none"
                      title={`${star} Star${star > 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          (hoveredStar || formData.rating) >= star
                            ? 'text-[#F59E0B] fill-[#F59E0B]'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono font-bold text-[#D97706] ml-2">
                    {formData.rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Name & Role Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karthik R."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0D1B15] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700">Program / Role (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Options Learner, Active Student"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0D1B15] outline-none"
                  />
                </div>
              </div>

              {/* Key Takeaway / Highlight */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-700">
                  Key Takeaway / Highlight (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shifted from tips to systematic analysis"
                  value={formData.highlight}
                  onChange={(e) => setFormData({ ...formData, highlight: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0D1B15] outline-none"
                />
              </div>

              {/* Review Quote Text */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-700">Your Feedback / Review *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us about how the mentorship, risk management, or technical analysis helped your trading journey..."
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0D1B15] outline-none resize-none leading-relaxed"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 rounded-xl bg-[#0D1B15] hover:bg-[#12261E] text-[#F59E0B] font-extrabold text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer border border-[#F59E0B]/30 active:scale-95 ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{loading ? 'Submitting...' : 'Submit Feedback'}</span>
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

export default GiveFeedbackModal;
