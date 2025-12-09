
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface CategoryShowcaseProps {
    onCategoryClick: (category: string) => void;
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onCategoryClick }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505] border-b border-black/5 dark:border-white/10 transition-colors">
      <div className="max-w-[1600px] mx-auto reveal-on-scroll">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2 block">/ ROOT / DIRECTORY</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">System Modules</h2>
            </div>
            <span className="hidden md:block text-[10px] font-mono text-gray-400">SELECT_INTERFACE</span>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            
            {/* Main Feature - Computing (2x2) */}
            <div 
                onClick={() => onCategoryClick('Computing')}
                className="group relative md:col-span-2 md:row-span-2 overflow-hidden border border-black/5 dark:border-white/10 cursor-pointer bg-gray-50 dark:bg-[#0a0a0a]"
            >
                {/* Tech Corners */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-black/30 dark:border-white/30 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-cyan-500"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-black/30 dark:border-white/30 z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-cyan-500"></div>

                <img 
                    src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1200" 
                    alt="Computing" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10">
                    <span className="text-[10px] font-mono text-cyan-400 mb-2 block opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">MODULE_01</span>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-tight group-hover:text-cyan-50 transition-colors">Computing</h3>
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-500">
                         <p className="text-gray-300 text-xs font-mono">
                            High-performance workstations & terminals.
                        </p>
                    </div>
                </div>
            </div>

            {/* Wide - Gaming (2x1) */}
            <div 
                onClick={() => onCategoryClick('Gaming')}
                className="group relative md:col-span-2 overflow-hidden border border-black/5 dark:border-white/10 cursor-pointer bg-gray-50 dark:bg-[#0a0a0a]"
            >
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-black/30 dark:border-white/30 z-20 transition-all duration-300 group-hover:border-cyan-500"></div>
                <img 
                    src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=1000" 
                    alt="Gaming" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                 <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-[10px] font-mono text-cyan-400 mb-1 block group-hover:translate-x-1 transition-transform">MODULE_02</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Gaming</h3>
                </div>
            </div>

            {/* Tall - Mobile (1x1) */}
            <div 
                onClick={() => onCategoryClick('Mobile')}
                className="group relative overflow-hidden border border-black/5 dark:border-white/10 cursor-pointer bg-gray-50 dark:bg-[#0a0a0a]"
            >
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-black/30 dark:border-white/30 z-20 transition-all duration-300 group-hover:border-cyan-500"></div>
                <img 
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800" 
                    alt="Mobile" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-[10px] font-mono text-cyan-400 mb-1 block group-hover:translate-x-1 transition-transform">MODULE_03</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Mobile</h3>
                </div>
            </div>

            {/* Tall - VR/AR (1x1) */}
            <div 
                onClick={() => onCategoryClick('VR/AR')}
                className="group relative overflow-hidden border border-black/5 dark:border-white/10 cursor-pointer bg-gray-50 dark:bg-[#0a0a0a]"
            >
                 <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-black/30 dark:border-white/30 z-20 transition-all duration-300 group-hover:border-cyan-500"></div>
                <img 
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=800" 
                    alt="VR/AR" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-[10px] font-mono text-cyan-400 mb-1 block group-hover:translate-x-1 transition-transform">MODULE_04</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">VR / AR</h3>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
