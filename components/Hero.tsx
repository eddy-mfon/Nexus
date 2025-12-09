
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

interface HeroProps {
    onShopClick: () => void;
    onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick, onScrollDown }) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-gray-100 dark:bg-[#050505]">
      
      {/* Background Image - Parallax Target */}
      <div className="hero-bg absolute inset-0 w-full h-full will-change-transform">
        <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
            alt="Circuit board abstract" 
            className="w-full h-full object-cover opacity-10 dark:opacity-30 grayscale transition-transform duration-[20s] hover:scale-110"
        />
        {/* Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent dark:from-[#050505] dark:via-[#050505]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="w-full max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
             <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-400/30 px-3 py-1 rounded-full animate-pulse">
                System Online v4.2
             </span>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white tracking-tighter mb-8 leading-[0.85] glitch-wrapper">
                <span className="glitch" data-text="FUTURE">FUTURE</span>
                <br/>
                <span className="glitch" data-text="READY.">READY.</span>
            </h1>
          </div>

          <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Precision hardware for the next generation of builders. 
            <span className="block text-black dark:text-white font-medium mt-2">No noise. Pure performance.</span>
          </p>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button 
                onClick={onShopClick}
                className="group relative px-10 py-5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 duration-300"
            >
                <span className="relative z-10">Access Inventory</span>
                <div className="absolute inset-0 bg-cyan-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 opacity-20"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Tech Decoration */}
      <div className="absolute bottom-8 left-8 hidden md:block text-left animate-fade-in-up" style={{animationDelay: '1s'}}>
        <div className="text-[10px] font-mono text-gray-400 dark:text-gray-600 space-y-1">
            <p>LAT: 34.0522° N</p>
            <p>LNG: 118.2437° W</p>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 hidden md:block text-right animate-fade-in-up" style={{animationDelay: '1s'}}>
        <div className="text-[10px] font-mono text-gray-400 dark:text-gray-600 space-y-1">
            <p className="flex items-center justify-end gap-2">
                SERVER_STATUS: <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> OPTIMAL
            </p>
            <p>PING: 12ms</p>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity animate-fade-in-up" 
        style={{animationDelay: '1.2s'}}
        onClick={onScrollDown}
      >
          <span className="text-[8px] font-mono tracking-[0.2em] text-black dark:text-white animate-pulse">INITIALIZE</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-black/0 via-black/50 to-black/0 dark:from-white/0 dark:via-white/50 dark:to-white/0 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-black dark:bg-white animate-[slideDown_1.5s_infinite]"></div>
          </div>
      </div>
      
      <style>{`
        @keyframes slideDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
