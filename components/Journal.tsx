
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 unless expanded
  const displayedArticles = showAll ? JOURNAL_ARTICLES : JOURNAL_ARTICLES.slice(0, 3);

  return (
    <section id="journal" className="bg-gray-100 dark:bg-[#050505] py-32 px-6 md:px-12 border-t border-black/5 dark:border-white/10 transition-colors">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
                <span className="block text-xs font-mono font-bold text-gray-500 mb-4">DATABASE</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">System Logs</h2>
            </div>
            <div className="mt-8 md:mt-0">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="text-xs font-mono text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest"
                >
                    {showAll ? 'COLLAPSE ARCHIVE' : 'VIEW ARCHIVE'}
                    <span className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>↓</span>
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedArticles.map((article, index) => (
                <div 
                    key={article.id} 
                    className="group cursor-pointer flex flex-col reveal-on-scroll" 
                    onClick={() => onArticleClick(article)}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <div className="w-full aspect-[16/9] overflow-hidden mb-6 bg-white dark:bg-[#111] relative border border-black/5 dark:border-white/5">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 dark:opacity-60 group-hover:opacity-100 dark:group-hover:opacity-90 grayscale"
                        />
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1">
                             <span className="text-[8px] font-mono text-white uppercase tracking-widest">LOG_0{article.id}</span>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-[10px] font-mono text-gray-500 mb-2">{article.date}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{article.title}</h3>
                        <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Visual indicator of hidden items */}
        {!showAll && JOURNAL_ARTICLES.length > 3 && (
            <div className="mt-12 flex justify-center opacity-50">
                <div className="flex gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Journal;
