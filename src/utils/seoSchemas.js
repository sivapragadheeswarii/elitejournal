/**
 * JSON-LD Structured Data Generators for Elite Market Academy (EMA)
 * Valid Schema.org standards for Google, Bing, and AI Search Systems (ChatGPT, Gemini, Perplexity)
 */

export const BASE_URL = 'https://elitemarketacademy.com';

// 1. Organization & EducationalOrganization Schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EducationalOrganization'],
  '@id': `${BASE_URL}/#organization`,
  name: 'Elite Market Academy',
  alternateName: ['EMA', 'Elite Market Academy India'],
  url: BASE_URL,
  logo: `${BASE_URL}/assets/logo.png`,
  image: `${BASE_URL}/assets/logo.png`,
  description: 'Elite Market Academy is a professional stock market and trading education platform in India offering structured courses in technical analysis, options trading, risk management, and trading psychology.',
  founder: {
    '@type': 'Person',
    name: 'Saravana Kumar, B.E.',
    jobTitle: 'Founder - Elite Market Academy',
    description: 'NISM Certified Financial Educator and Founder of SDS Technologies.',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9443879989',
    contactType: 'customer support',
    email: 'support@elitemarketacademy.in',
    areaServed: 'IN',
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [],
});

// 2. WebSite Schema with SearchAction
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Elite Market Academy',
  description: 'Structured Stock Market & Trading Education in India',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/learning-hub?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

// 3. Course Schema Generator
export const getCourseSchema = (course) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.shortDesc || course.intro,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Elite Market Academy',
    url: BASE_URL,
  },
  educationalLevel: course.level,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Online & Self-Paced Learning',
    duration: course.duration,
  },
  courseCode: course.slug,
});

// 4. FAQPage Schema Generator
export const getFaqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question || faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer || faq.a,
    },
  })),
});

// 5. BreadcrumbList Schema Generator
export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url ? `${BASE_URL}${item.url}` : undefined,
  })),
});

// 6. Article Schema Generator for Learning Hub
export const getArticleSchema = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: article.title,
  description: article.directAnswer,
  articleBody: `${article.directAnswer} ${article.quickAnswer} ${article.detailedExplanation}`,
  author: {
    '@type': 'Organization',
    name: 'Elite Market Academy',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Elite Market Academy',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/assets/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/learning-hub/${article.slug}`,
  },
});
