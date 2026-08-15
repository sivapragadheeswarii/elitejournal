import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LEARNING_HUB_ARTICLES } from '../data/emaData';
import { BookOpen, Search, ChevronRight } from 'lucide-react';

const LearningHubPage = () => {
  const [search, setSearch] = useState('');

  const filtered = LEARNING_HUB_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.directAnswer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              Knowledge Repository
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#0B192C] font-heading">
              AEO Learning Hub
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              Explore structured, question-based educational guides explaining core stock market and trading concepts.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search learning topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-[#0B192C] outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-amber-600 uppercase font-mono px-2.5 py-1 rounded bg-amber-50 w-max border border-amber-200">
                  {article.category}
                </span>

                <h2 className="text-lg font-black text-[#0B192C] font-heading">{article.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
                  {article.directAnswer}
                </p>
              </div>

              <Link
                to={`/learning-hub/${article.slug}`}
                className="w-full py-2 rounded-xl bg-slate-50 border border-slate-200 hover:bg-[#0B192C] hover:text-white text-[#0B192C] font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>Read Full Guide</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LearningHubPage;
