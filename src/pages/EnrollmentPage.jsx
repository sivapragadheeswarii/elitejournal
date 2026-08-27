import React, { useState, useEffect } from 'react';
import {
  QrCode,
  Copy,
  Check,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Upload,
  Clock,
} from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import ScrollReveal from '../components/common/ScrollReveal';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/seoSchemas';

const EnrollmentPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [copiedUpi, setCopiedUpi] = useState(false);

  // 3-Step Flow State: 1 = Student Form Only, 2 = Payment Details & QR Code, 3 = Confirmation & Screenshot
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedCourse: '',
    preferredSession: 'Morning Shift',
    amount: '',
    transactionId: '',
    paymentDate: new Date().toISOString().split('T')[0],
    message: '',
    paymentScreenshotUrl: '',
  });

  const [screenshotFile, setScreenshotFile] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState('');

  const enrollmentJsonLd = [
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Enrollment', url: '/enrollment' },
    ]),
  ];

  // Fetch active courses managed by admin
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoadingCourses(true);
    try {
      const res = await fetch('http://localhost:5000/api/enrollments/courses');
      const data = await res.json();
      if (data.success && data.data.length > 0) {
        setCourses(data.data);
        const first = data.data[0];
        setSelectedCourse(first);
        setFormData((prev) => ({
          ...prev,
          selectedCourse: first.courseName,
          amount: first.fee,
        }));
      }
    } catch (err) {
      console.error('Failed to load enrollment courses:', err);
    } finally {
      setLoadingCourses(false);
    }
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setFormData((prev) => ({
      ...prev,
      selectedCourse: course.courseName,
      amount: course.fee,
    }));
  };

  const handleCopyUpi = (upiId) => {
    if (!upiId) return;
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  // STEP 1 Validation -> Proceed to Step 2 Payment Details
  const handleStep1Submit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Email Address is required.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Phone Number is required.');
      return;
    }
    if (!selectedCourse) {
      setErrorMsg('Please select a course.');
      return;
    }

    setCurrentStep(2);
    window.scrollTo({ top: 250, behavior: 'smooth' });
  };

  // Screenshot Selection & Validation
  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setErrorMsg('Invalid file format. Please upload JPG, JPEG, PNG, or WebP.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('File size exceeds 5MB limit. Please choose a smaller image.');
      return;
    }

    setErrorMsg('');
    setScreenshotFile(file);
    setScreenshotPreview(URL.createObjectURL(file));
  };

  // STEP 3 Final Payment Submission
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.transactionId.trim()) {
      setErrorMsg('Transaction ID / UTR Number is required.');
      return;
    }

    if (!screenshotFile && !formData.paymentScreenshotUrl) {
      setErrorMsg('Payment Screenshot is required.');
      return;
    }

    setSubmitting(true);

    try {
      let imageUrl = formData.paymentScreenshotUrl;

      // Upload screenshot to Cloudinary via backend endpoint
      if (screenshotFile) {
        setUploadingImage(true);
        const uploadForm = new FormData();
        uploadForm.append('paymentScreenshot', screenshotFile);

        const uploadRes = await fetch('http://localhost:5000/api/enrollments/upload-screenshot', {
          method: 'POST',
          body: uploadForm,
        });

        const uploadData = await uploadRes.json();
        setUploadingImage(false);

        if (uploadData.success && uploadData.paymentScreenshotUrl) {
          imageUrl = uploadData.paymentScreenshotUrl;
        } else {
          throw new Error(uploadData.message || 'Failed to upload payment screenshot.');
        }
      }

      // Submit enrollment record to DB (Status: Pending)
      const payload = {
        ...formData,
        paymentScreenshotUrl: imageUrl,
      };

      const response = await fetch('http://localhost:5000/api/enrollments/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Failed to submit payment verification request.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg(err.message || 'Failed to submit payment. Please check your connection.');
    } finally {
      setSubmitting(false);
      setUploadingImage(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] min-h-screen text-slate-900 overflow-hidden">
      <SeoHead
        title="Course Enrollment | Elite Market Academy"
        description="Official course enrollment page for Elite Market Academy. Submit student details, complete QR payment, and verify UTR for 1-year Trading Journal access."
        keywords="Elite Market Academy enrollment, course fee, stock market trading course payment, EMA course enrollment"
        jsonLd={enrollmentJsonLd}
      />

      {/* 1. Header Hero */}
      <section className="bg-[#050E1A] text-white py-6 sm:py-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050E1A] via-[#0B192C] to-[#050E1A]" />
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-3 sm:px-6 relative z-10 text-center">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[9px] sm:text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>OFFICIAL STUDENT ADMISSIONS</span>
            </div>

            <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-[1.15]">
              Course <span className="gold-gradient-text">Enrollment & Payment</span>
            </h1>

            <p className="text-[11px] sm:text-base text-slate-300 max-w-xl font-medium leading-relaxed px-1">
              Fill in your student details to register. Enrolled students receive 1-Year Free Access to the Trading Journal upon admin approval.
            </p>

            {/* 3-Step Progress Bar Indicator — Mobile Optimized */}
            <div className="flex items-center justify-between gap-1 sm:gap-4 max-w-md sm:max-w-lg w-full mt-3.5 sm:mt-6 px-1">
              {/* Step 1 */}
              <div
                onClick={() => !submitted && setCurrentStep(1)}
                className={`flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  currentStep === 1
                    ? 'bg-amber-500 text-slate-950 font-black ring-2 sm:ring-4 ring-amber-500/20 shadow-md'
                    : currentStep > 1
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/20 flex items-center justify-center font-mono text-[9px] sm:text-[11px]">1</span>
                <span>Details</span>
              </div>

              <div className={`h-0.5 flex-1 min-w-[12px] sm:max-w-[40px] ${currentStep > 1 ? 'bg-emerald-500' : 'bg-slate-800'}`} />

              {/* Step 2 */}
              <div
                onClick={() => !submitted && formData.fullName && setCurrentStep(2)}
                className={`flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  currentStep === 2
                    ? 'bg-amber-500 text-slate-950 font-black ring-2 sm:ring-4 ring-amber-500/20 shadow-md'
                    : currentStep > 2
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/20 flex items-center justify-center font-mono text-[9px] sm:text-[11px]">2</span>
                <span>Payment</span>
              </div>

              <div className={`h-0.5 flex-1 min-w-[12px] sm:max-w-[40px] ${currentStep > 2 ? 'bg-emerald-500' : 'bg-slate-800'}`} />

              {/* Step 3 */}
              <div
                className={`flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all shrink-0 ${
                  currentStep === 3
                    ? 'bg-amber-500 text-slate-950 font-black ring-2 sm:ring-4 ring-amber-500/20 shadow-md'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/20 flex items-center justify-center font-mono text-[9px] sm:text-[11px]">3</span>
                <span>Verify</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Container */}
      <section className="py-5 sm:py-14 px-3 sm:px-6 max-w-3xl mx-auto w-full">
        {loadingCourses ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-20 gap-2.5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-3 sm:border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Loading Available Courses...
            </span>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-10 sm:py-16 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-xs">
            <HelpCircle className="w-8 h-8 sm:w-12 sm:h-12 text-slate-400 mx-auto mb-2.5" />
            <h3 className="text-sm sm:text-lg font-bold text-slate-900">No Active Enrollment Courses</h3>
            <p className="text-[11px] sm:text-xs text-slate-500 max-w-md mx-auto mt-1">
              Enrollment options are currently being updated by the academy administration. Please check back shortly.
            </p>
          </div>
        ) : submitted ? (
          /* SUCCESS CONFIRMATION SCREEN */
          <ScrollReveal animation="fade-in">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-10 shadow-xl flex flex-col items-center text-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
                <Clock className="w-8 h-8 sm:w-11 sm:h-11" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-100 text-amber-800 text-[9.5px] sm:text-xs font-mono font-bold rounded-full w-max mx-auto border border-amber-300">
                  STATUS: PENDING VERIFICATION
                </span>
                <h2 className="text-xl sm:text-3xl font-black text-[#0B192C] font-heading mt-1">
                  Payment Submitted Successfully!
                </h2>
                <p className="text-[11px] sm:text-sm text-slate-600 font-medium leading-relaxed max-w-md mx-auto mt-0.5">
                  Your payment details and UTR number are currently under verification by the academy admin team.
                </p>
              </div>

              <div className="w-full p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200/80 text-left flex flex-col gap-2 my-1">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Important Note on Course & Journal Access:</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed font-medium">
                  Your course enrollment and <strong>1-Year Free Access to the Trading Journal</strong> will be activated automatically once the Admin verifies your UTR number and approves your payment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setScreenshotFile(null);
                    setScreenshotPreview('');
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      selectedCourse: selectedCourse?.courseName || '',
                      amount: selectedCourse?.fee || '',
                      transactionId: '',
                      paymentDate: new Date().toISOString().split('T')[0],
                      message: '',
                      paymentScreenshotUrl: '',
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0B192C] text-amber-400 font-bold text-[11px] sm:text-xs hover:bg-[#1E3A8A] transition-all cursor-pointer shadow-md text-center"
                >
                  Submit Another Enrollment
                </button>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-xl">
            
            {/* ================================================== */}
            {/* STEP 1: ENROLLMENT FORM ONLY */}
            {/* ================================================== */}
            {currentStep === 1 && (
              <ScrollReveal animation="slide-up">
                <form onSubmit={handleStep1Submit} className="flex flex-col gap-4 sm:gap-5 text-left">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0B192C] text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center font-mono shrink-0">
                        1
                      </div>
                      <div>
                        <h2 className="text-base sm:text-xl font-black text-[#0B192C] font-heading">
                          Student Registration Form
                        </h2>
                        <p className="text-[10.5px] sm:text-xs text-slate-500 font-medium">
                          Enter your student information to proceed to payment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Course / Program & Batch Shift Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Select Course / Program *</label>
                      <select
                        required
                        value={selectedCourse?._id || ''}
                        onChange={(e) => {
                          const found = courses.find((c) => c._id === e.target.value);
                          if (found) handleSelectCourse(found);
                        }}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 sm:px-3.5 sm:py-3 text-[11px] sm:text-xs font-bold text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none cursor-pointer"
                      >
                        {courses.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.courseName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Select Batch Shift / Session *</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredSession: 'Morning Shift' })}
                          className={`px-3 py-2.5 rounded-xl border text-[10.5px] sm:text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            formData.preferredSession === 'Morning Shift'
                              ? 'bg-[#0B192C] text-amber-400 border-[#0B192C] shadow-sm ring-2 ring-amber-400/20'
                              : 'bg-slate-50 text-slate-600 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <span>☀️ Morning Shift</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredSession: 'Evening Shift' })}
                          className={`px-3 py-2.5 rounded-xl border text-[10.5px] sm:text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            formData.preferredSession === 'Evening Shift'
                              ? 'bg-[#0B192C] text-amber-400 border-[#0B192C] shadow-sm ring-2 ring-amber-400/20'
                              : 'bg-slate-50 text-slate-600 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <span>🌙 Evening Shift</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Student Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="student@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Optional Remarks</label>
                      <input
                        type="text"
                        placeholder="Any additional notes..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[11px] sm:text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[11px] sm:text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-[11px] sm:text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Payment</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </form>
              </ScrollReveal>
            )}

            {/* ================================================== */}
            {/* STEP 2: PAYMENT DETAILS & QR CODE SCREEN */}
            {/* ================================================== */}
            {currentStep === 2 && selectedCourse && (
              <ScrollReveal animation="slide-up">
                <div className="flex flex-col gap-5 sm:gap-6 text-left">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0B192C] text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center font-mono shrink-0">
                        2
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-base sm:text-xl font-black text-[#0B192C] font-heading truncate">
                          Payment Details & QR Code
                        </h2>
                        <p className="text-[10.5px] sm:text-xs text-slate-500 font-medium truncate">
                          Scan the QR code with GPay, PhonePe, or Paytm to complete payment.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-[10px] sm:text-xs transition-all flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Edit</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
                    
                    {/* Dynamic QR Code */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-inner">
                      <div className="relative p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                        <img
                          src={selectedCourse.qrCode}
                          alt={`${selectedCourse.courseName} Payment QR Code`}
                          className="w-36 h-36 sm:w-48 sm:h-48 object-contain rounded-lg"
                        />
                      </div>
                      <span className="text-[10.5px] sm:text-xs font-mono text-slate-600 mt-2 font-bold flex items-center gap-1.5 text-center">
                        <QrCode className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Scan with GPay / PhonePe / Paytm</span>
                      </span>
                    </div>

                    {/* Payment Fee & UPI Info */}
                    <div className="sm:col-span-7 flex flex-col gap-3 sm:gap-4">
                      
                      <div className="flex flex-col gap-0.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-slate-500 uppercase">Selected Program</span>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900">{selectedCourse.courseName}</span>
                      </div>

                      <div className="flex flex-col gap-0.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                        <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-emerald-700 uppercase">Total Fee Amount</span>
                        <span className="text-xl sm:text-2xl font-black text-emerald-700">
                          ₹{selectedCourse.fee?.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Official UPI ID */}
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 uppercase">Official UPI ID</span>
                        <div className="flex items-center gap-1.5">
                          <input
                            type="text"
                            readOnly
                            value={selectedCourse.upiId}
                            className="flex-1 bg-slate-100 border border-slate-300 rounded-xl px-2.5 py-2 text-[11px] sm:text-xs font-mono font-bold text-slate-900 outline-none select-all truncate"
                          />
                          <button
                            type="button"
                            onClick={() => handleCopyUpi(selectedCourse.upiId)}
                            className="px-2.5 py-2 rounded-xl bg-[#0B192C] text-amber-400 hover:bg-[#1E3A8A] text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 shrink-0 cursor-pointer"
                          >
                            {copiedUpi ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy UPI</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Payment Instructions */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-800 text-[11px] sm:text-xs font-medium leading-relaxed">
                    <span className="font-extrabold text-amber-900 block mb-0.5">
                      Payment Instructions:
                    </span>
                    Scan the QR code and complete the payment. After completing payment, click <strong>"I Have Paid"</strong> to upload screenshot and enter UTR.
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] sm:text-xs transition-all cursor-pointer text-center"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-[11px] sm:text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>I Have Paid</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            )}

            {/* ================================================== */}
            {/* STEP 3: CONFIRMATION (UTR & SCREENSHOT) */}
            {/* ================================================== */}
            {currentStep === 3 && (
              <ScrollReveal animation="slide-up">
                <form onSubmit={handleFinalSubmit} className="flex flex-col gap-4 sm:gap-5 text-left">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#0B192C] text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center font-mono shrink-0">
                        3
                      </div>
                      <div>
                        <h2 className="text-base sm:text-xl font-black text-[#0B192C] font-heading">
                          Payment Verification & Submission
                        </h2>
                        <p className="text-[10.5px] sm:text-xs text-slate-500 font-medium">
                          Enter your UTR number and upload payment screenshot for admin verification.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Summary Box — Mobile Responsive Grid */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 text-[10.5px] sm:text-xs">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase block">Student</span>
                      <span className="font-extrabold text-slate-900 truncate block">{formData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase block">Course</span>
                      <span className="font-extrabold text-amber-600 truncate block">{selectedCourse?.courseName}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase block">Session Shift</span>
                      <span className="font-extrabold text-blue-600 truncate block">{formData.preferredSession}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase block">Fee Amount</span>
                      <span className="font-black text-emerald-700 block">₹{selectedCourse?.fee?.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase block">Journal Access</span>
                      <span className="font-extrabold text-emerald-600 block">1 Year Free</span>
                    </div>
                  </div>

                  {/* UTR Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Transaction ID / UTR Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 4235XXXXXXXX or 12-digit UTR Number"
                      value={formData.transactionId}
                      onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-[11px] sm:text-xs font-mono font-bold text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none"
                    />
                  </div>

                  {/* Screenshot File Upload */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-extrabold text-slate-800">Upload Payment Screenshot *</label>
                    
                    <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-center bg-slate-50 transition-colors flex flex-col items-center justify-center gap-1.5 cursor-pointer relative">
                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handleScreenshotChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />

                      {screenshotPreview ? (
                        <div className="flex flex-col items-center gap-1.5">
                          <img
                            src={screenshotPreview}
                            alt="Payment Screenshot Preview"
                            className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-lg sm:rounded-xl border bg-white p-1 shadow-xs"
                          />
                          <span className="text-[11px] sm:text-xs font-bold text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Screenshot selected ({screenshotFile?.name})
                          </span>
                          <span className="text-[9.5px] text-slate-400">Click or drag to replace image</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1 py-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                            <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                            Click to upload or drag screenshot file
                          </span>
                          <span className="text-[9.5px] sm:text-[10.5px] font-mono text-slate-500">
                            Supported: JPG, JPEG, PNG, WebP (Max 5MB)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 sm:p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[11px] sm:text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] sm:text-xs transition-all cursor-pointer text-center"
                    >
                      ← Back to Payment
                    </button>

                    <button
                      type="submit"
                      disabled={submitting || uploadingImage}
                      className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-[#0B192C] hover:bg-[#1E3A8A] text-amber-400 font-black text-[11px] sm:text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                        submitting || uploadingImage ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      <span>
                        {uploadingImage
                          ? 'Uploading Screenshot...'
                          : submitting
                          ? 'Submitting Request...'
                          : 'Submit Payment'}
                      </span>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                </form>
              </ScrollReveal>
            )}

          </div>
        )}
      </section>
    </div>
  );
};

export default EnrollmentPage;
