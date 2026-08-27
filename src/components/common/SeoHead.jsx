import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://elitemarketacademy.com';
const DEFAULT_IMAGE = 'https://elitemarketacademy.com/assets/logo.png';

/**
 * Clean, lightweight, production-ready SEO/AEO/GEO Meta Head Component
 */
export const SeoHead = ({
  title = 'Elite Market Academy | Stock Market & Trading Education',
  description = 'Learn stock market trading, technical analysis, risk management and trading psychology with structured education from Elite Market Academy.',
  keywords = 'Elite Market Academy, EMA, stock market education, trading course, technical analysis, options trading, risk management, trading psychology, stock market course India',
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  jsonLd = null,
}) => {
  const location = useLocation();
  const currentCanonical = canonicalUrl || `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'author', 'Elite Market Academy');

    // GEO Entity Signals for AI engines (Perplexity, ChatGPT, Gemini, Google AI Overviews)
    setMetaTag('name', 'geo.region', 'IN-TN');
    setMetaTag('name', 'geo.placename', 'Chennai');
    setMetaTag('name', 'subject', 'Stock Market & Financial Trading Education');

    // 3. Canonical URL
    setLinkTag('canonical', currentCanonical);

    // 4. Open Graph Meta Tags
    setMetaTag('property', 'og:site_name', 'Elite Market Academy');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Twitter Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data Injection
    const existingScript = document.getElementById('seo-jsonld-script');
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'seo-jsonld-script';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, currentCanonical, ogType, ogImage, noIndex, jsonLd]);

  return null;
};

export default SeoHead;
