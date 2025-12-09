
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
  onSearchSubmit: () => void;
  currentView: string;
  darkMode: boolean;
  onToggleTheme: () => void;
  onSaleClick: () => void; // New prop for sales
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavClick, 
  cartCount, 
  onOpenCart, 
  onSearch, 
  onSearchSubmit,
  currentView, 
  darkMode, 
  onToggleTheme, 
  onSaleClick 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        onSearchSubmit();
    }
  };

  const isShopView = currentView === 'shop';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || mobileMenuOpen 
            ? 'bg-white/80 dark:bg-[#050505]/90 backdrop-blur-md py-4 border-black/5 dark:border-white/10' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                onNavClick(e, 'landing');
            }}
            className="text-xl font-bold tracking-tight z-50 relative group flex items-center gap-2 text-black dark:text-white"
          >
            {BRAND_NAME}
          </a>
          
          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
             {!isShopView ? (
                <>
                  <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-black dark:hover:text-white transition-colors">Shop</a>
                  <button onClick={onSaleClick} className="hover:text-red-500 transition-colors font-bold">SALE</button>
                  <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-black dark:hover:text-white transition-colors">Mission</a>
                  <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-black dark:hover:text-white transition-colors">Logs</a>
                </>
             ) : (
                <div className="flex gap-10">
                   <a href="#" onClick={(e) => handleLinkClick(e, 'landing')} className="text-gray-900 dark:text-white border-b border-black/20 dark:border-white/50 hover:border-black dark:hover:border-white transition-all">Back to Home</a>
                   <span className="opacity-50 pointer-events-none">/</span>
                   <span className="text-gray-900 dark:text-white">Full Catalog</span>
                </div>
             )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 z-50 relative text-black dark:text-white">
            {/* Search Input - Only show if NOT in shop view */}
            {!isShopView && (
                <div className="hidden md:block relative group">
                <input
                    type="text"
                    placeholder="SEARCH_DB..."
                    onChange={(e) => onSearch(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    className="bg-transparent border-b border-black/20 dark:border-white/20 text-xs font-mono text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none py-1 w-32 focus:w-48 transition-all duration-300"
                />
                <button onClick={onSearchSubmit} className="absolute right-0 top-1.5 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                </div>
            )}

            {/* Theme Toggle */}
            <button onClick={onToggleTheme} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
               {darkMode ? (
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                   </svg>
               ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                   </svg>
               )}
            </button>

            <button 
              onClick={handleCartClick}
              className="text-xs font-medium uppercase tracking-wide hover:text-gray-600 dark:hover:text-gray-300 transition-colors hidden sm:block flex items-center gap-2"
            >
              <span>Cart</span>
              <span className="text-gray-500">[{cartCount}]</span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-gray-50 dark:bg-black z-40 flex flex-col justify-center items-center transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-medium text-black dark:text-white tracking-tight">
            {!isShopView && (
                <div className="w-64 border-b border-black/20 dark:border-white/20 pb-2 mb-4">
                <input
                    type="text"
                    placeholder="SEARCH..."
                    onChange={(e) => onSearch(e.target.value)}
                    onKeyDown={(e) => { if(e.key === 'Enter') { onSearchSubmit(); setMobileMenuOpen(false); }}}
                    className="bg-transparent text-center w-full text-sm font-mono text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none"
                />
                </div>
            )}
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Shop</a>
            <button onClick={() => { setMobileMenuOpen(false); onSaleClick(); }} className="text-red-500 font-bold hover:text-red-400 transition-colors">Sale</button>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Mission</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Logs</a>
            <button 
                onClick={handleCartClick} 
                className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors text-base uppercase tracking-widest font-mono mt-8 border border-black/20 dark:border-white/20 px-8 py-3"
            >
                Cart [{cartCount}]
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
