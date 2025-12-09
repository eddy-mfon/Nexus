
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white dark:bg-[#050505] border-t border-black/5 dark:border-white/10 transition-colors">
      
      {/* Intro */}
      <div className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32 reveal-on-scroll">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-none tracking-tight">
            Engineered <br/> for the <br/> <span className="text-gray-400 dark:text-gray-600">void.</span>
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8">
            NEXUS was founded on the bleeding edge. We believe technology is an extension of the human potential. It shouldn't just work; it should propel you forward.
          </p>
          <div className="relative mt-12 group">
            <div className="absolute inset-0 bg-cyan-500/20 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
            <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Tech Lab" 
                className="relative z-10 w-full h-[400px] object-cover grayscale contrast-125 brightness-110 dark:brightness-75 transition-all duration-500 group-hover:grayscale-0"
            />
          </div>
          <p className="text-[10px] font-mono text-gray-500 mt-4 uppercase flex items-center gap-2">
            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
            Lab_01 // Tokyo_HQ
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black/5 dark:border-white/10 reveal-on-scroll">
        <div className="order-2 lg:order-1 relative h-[400px] lg:h-auto overflow-hidden border-r border-black/5 dark:border-white/10 group">
           <img 
             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
             alt="Data Center" 
             className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent pointer-events-none"></div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors">
           <span className="text-xs font-mono font-bold text-gray-500 mb-6 flex items-center gap-2">
              <span className="text-cyan-500">{'>'}</span> PRECISION
           </span>
           <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
             Zero Latency. <br/> Max Throughput.
           </h3>
           <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md">
             Lag is the enemy. Whether you are compiling code, rendering 3D scenes, or competing in e-sports, every millisecond counts. We optimize for speed above all else.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
