import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LEARNING_HUB_ARTICLES } from '../data/emaData';
import { ArrowLeft, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';
import SeoHead from '../components/common/SeoHead';
import { getArticleSchema, getBreadcrumbSchema, getFaqSchema } from '../utils/seoSchemas';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const article = LEARNING_HUB_ARTICLES.find((a) => a.slug === slug) || LEARNING_HUB_ARTICLES[0];

  const articleJsonLd = [
    getArticleSchema(article),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Learning Hub', url: '/learning-hub' },
      { name: article.title, url: `/learning-hub/${article.slug}` }
    ]),
    getFaqSchema(article.faqs)
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <SeoHead
        title={`${article.title} | Elite Market Academy`}
        description={article.directAnswer}
        keywords={`${article.title}, ${article.category}, learn stock market, Elite Market Academy`}
        jsonLd={articleJsonLd}
      />

      <div className="max-w-4xl mx-auto px-4 text-left flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <Link to="/learning-hub" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0D1B15]">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Learning Hub</span>
        </Link>

        {/* H1: Question-based title */}
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6">
          <span className="text-xs font-bold text-[#D97706] uppercase font-mono px-3 py-1 bg-[#FFFBEB] rounded-md border border-[#FDE68A] w-max">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D1B15] font-heading">
            {article.title}
          </h1>
          <p className="text-sm text-slate-700 leading-relaxed font-semibold bg-slate-50 p-5 rounded-2xl border border-slate-200">
            {article.directAnswer}
          </p>
        </div>

        {/* H2: Quick Answer */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold text-[#0D1B15] font-heading">Quick Answer</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            {article.quickAnswer}
          </p>
        </div>

        {/* H2: Detailed Explanation */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold text-[#0D1B15] font-heading">Detailed Explanation</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            {article.detailedExplanation}
          </p>
        </div>

        {/* H2: Key Points */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-[#0D1B15] font-heading">Key Points</h2>
          <div className="grid grid-cols-1 gap-2">
            {article.keyPoints.map((point, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* H2: Practical Example */}
        <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col gap-3 text-amber-950">
          <h2 className="text-xl font-extrabold font-heading text-amber-900">Practical Example</h2>
          <p className="text-xs leading-relaxed font-medium">{article.example}</p>
        </div>

        {/* H2: Common Mistakes */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-[#0D1B15] font-heading">Common Mistakes to Avoid</h2>
          <div className="flex flex-col gap-2">
            {article.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-xs font-bold text-rose-900">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{mistake}</span>
              </div>
            ))}
          </div>
        </div>

        {/* H2: FAQs */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-[#0D1B15] font-heading">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {article.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                <span className="text-xs font-bold text-[#0D1B15] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#D97706]" /> {faq.q}
                </span>
                <p className="text-xs text-slate-600 font-medium pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2: Related Learning */}
        <div className="pt-6 border-t border-slate-200 flex flex-col gap-4">
          <h2 className="text-xl font-extrabold text-[#0D1B15] font-heading">Related Learning</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/courses/stock-market-fundamentals" className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-[#0D1B15] text-xs font-bold hover:bg-[#0D1B15] hover:text-white transition-colors">
              Stock Market Fundamentals Course
            </Link>
            <Link to="/courses/technical-analysis" className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-[#0D1B15] text-xs font-bold hover:bg-[#0D1B15] hover:text-white transition-colors">
              Technical Analysis Course
            </Link>
            <Link to="/learning-hub" className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-[#0D1B15] text-xs font-bold hover:bg-[#0D1B15] hover:text-white transition-colors">
              Browse All Learning Hub Articles
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArticleDetailPage;
