/**
 * Meta Pixel Integration Utility
 * Pixel ID: 1102669032189272
 * Elite Market Academy (EMA) Website
 */

export const META_PIXEL_ID = '1102669032189272';

/**
 * Generic safe event tracker
 * @param {string} eventName - Standard or custom Meta event name
 * @param {Record<string, any>} [params] - Optional event parameters
 */
export const trackPixelEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (Object.keys(params).length > 0) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    } catch (err) {
      console.warn('[Meta Pixel] Failed to track event:', eventName, err);
    }
  }
};

/**
 * Track default PageView event
 */
export const trackPageView = () => {
  trackPixelEvent('PageView');
};

/**
 * Track ViewContent event when the Courses/Programs section is viewed
 * @param {Record<string, any>} [params]
 */
export const trackViewContent = (params = {}) => {
  trackPixelEvent('ViewContent', {
    content_name: 'EMA Mentorship Program & Tailored Syllabus Levels',
    content_category: 'Stock Market Course',
    ...params,
  });
};

/**
 * Track Lead event ONLY after the Free Demo form is successfully submitted
 * (Must NOT fire when the form is merely opened)
 * @param {Record<string, any>} [params]
 */
export const trackLead = (params = {}) => {
  trackPixelEvent('Lead', {
    content_name: 'Free Demo Class Booking',
    status: 'success',
    ...params,
  });
};

/**
 * Track Contact event when WhatsApp CTA is clicked
 * (Fires ONLY when WhatsApp is actually clicked)
 * @param {Record<string, any>} [params]
 */
export const trackContact = (params = {}) => {
  trackPixelEvent('Contact', {
    method: 'WhatsApp',
    content_name: 'WhatsApp Support & Direct Chat',
    ...params,
  });
};

/**
 * Track InitiateCheckout event when the course enrollment/payment flow is started
 * @param {Record<string, any>} [params]
 */
export const trackInitiateCheckout = (params = {}) => {
  trackPixelEvent('InitiateCheckout', {
    content_category: 'Course Enrollment',
    currency: 'INR',
    ...params,
  });
};
