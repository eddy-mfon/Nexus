/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] animate-fade-in-up text-gray-700 dark:text-gray-300 transition-colors">
       {/* Hero Image */}
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={article.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#050505]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       </div>

       <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
          <div className="bg-white dark:bg-[#111] p-8 md:p-16 border border-black/5 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black">
             <div className="flex justify-between items-center mb-12 border-b border-black/5 dark:border-white/10 pb-8">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500 hover:text-black dark:hover:text-white transition-colors"
                >
                  <span>{'<'}</span> BACK_TO_LOGS
                </button>
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">{article.date}</span>
             </div>

             <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 leading-tight text-center tracking-tight">
               {article.title}
             </h1>

             <div className="prose prose-lg mx-auto font-light leading-loose text-gray-600 dark:text-gray-300">
               {article.content}
             </div>
             
             <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/10 flex justify-center">
                 <span className="text-xl font-bold tracking-widest text-cyan-600 dark:text-cyan-500">NEXUS</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;