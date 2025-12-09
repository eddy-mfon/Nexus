
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import CategoryShowcase from './components/CategoryShowcase';
import FeaturedProducts from './components/FeaturedProducts';
import SalesBanner from './components/SalesBanner';
import QuickViewModal from './components/QuickViewModal';
import Marquee from './components/Marquee'; 
import { Product, CartItem, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'landing' });
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Scroll Button Logic
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollTip, setShowScrollTip] = useState(false);

  // Theme Toggle Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Initial Deep Linking
  useEffect(() => {
    const handleHashRouting = () => {
        const hash = window.location.hash;
        if (hash === '#products') {
            setView({ type: 'shop' });
        } else if (hash === '#about') {
            setView({ type: 'landing' });
            setTimeout(() => {
                const el = document.getElementById('about');
                if(el) el.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } else if (hash === '#journal') {
            setView({ type: 'landing' });
            setTimeout(() => {
                const el = document.getElementById('journal');
                if(el) el.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    };
    
    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  // Native Scroll Listener (Progress & Parallax)
  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
        setScrollProgress(progress);
        
        if (scrollY > 600) {
            if (!showScrollTop) {
                setShowScrollTop(true);
                setShowScrollTip(true);
                setTimeout(() => setShowScrollTip(false), 5000); 
            }
        } else {
            setShowScrollTop(false);
            setShowScrollTip(false);
        }
        
        // Parallax for Hero Bg
        const bg = document.querySelector('.hero-bg') as HTMLElement;
        if(bg) {
            bg.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollTop]);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }); 

    setTimeout(() => {
        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [view]);

  // Safe Scroll Helper
  const safeScrollTo = (top: number) => {
      window.scrollTo({ top, behavior: 'smooth' });
  };

  // Handle navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Allow default browser behavior for Middle Click (1), Ctrl+Click, Meta+Click
    if (e.button === 1 || e.ctrlKey || e.metaKey || e.shiftKey) return;
    
    e.preventDefault();
    
    if (targetId === 'products') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setView({ type: 'shop' });
    } else if (targetId === 'landing' || targetId === '') {
        setView({ type: 'landing' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        if (view.type !== 'landing') {
          setView({ type: 'landing' });
          setTimeout(() => scrollToSection(targetId), 100);
        } else {
          scrollToSection(targetId);
        }
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        safeScrollTo(0);
        return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      // Offset for navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Cart Logic
  const addToCart = (product: Product, option?: string, quantity: number = 1) => {
    const cartId = option ? `${product.id}-${option}` : product.id;
    
    setCartItems(prev => {
      const existing = prev.find(item => item.cartId === cartId);
      if (existing) {
        return prev.map(item => 
          item.cartId === cartId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, cartId, selectedOption: option, quantity }];
    });
    
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (cartId: string) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] font-sans text-gray-900 dark:text-gray-200 selection:bg-cyan-500 selection:text-white transition-colors duration-500">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[100]">
         <div 
            className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-100 ease-out" 
            style={{ width: `${scrollProgress}%` }}
         ></div>
      </div>

      {/* Global Noise Overlay */}
      <div className="noise-overlay"></div>

      {view.type !== 'checkout' && (
        <Navbar 
            onNavClick={handleNavClick} 
            cartCount={cartCount}
            onOpenCart={() => setIsCartOpen(true)}
            onSearch={setSearchQuery}
            onSearchSubmit={() => {
                if (view.type !== 'shop') {
                    setView({ type: 'shop' });
                    safeScrollTo(0);
                }
            }}
            currentView={view.type}
            darkMode={darkMode}
            onToggleTheme={() => setDarkMode(!darkMode)}
            onSaleClick={() => {
                safeScrollTo(0);
                setView({ type: 'shop', showSales: true });
            }}
        />
      )}
      
      <main className="relative z-10">
        {view.type === 'landing' && (
          <>
            <Hero 
                onShopClick={() => setView({ type: 'shop' })} 
                onScrollDown={() => safeScrollTo(window.innerHeight * 0.85)}
            />
            
            <Marquee />
            
            <CategoryShowcase onCategoryClick={(cat) => {
                safeScrollTo(0);
                setView({ type: 'shop', category: cat });
            }} />
            
            <SalesBanner onShopClick={(cat, showSales) => {
                safeScrollTo(0);
                setView({ type: 'shop', category: cat, showSales: showSales });
            }} />
            
            <FeaturedProducts onProductClick={(p) => {
                safeScrollTo(0);
                setView({ type: 'product', product: p });
            }} />
            
            <About />
            
            <Journal onArticleClick={(a) => {
                safeScrollTo(0);
                setView({ type: 'journal', article: a });
            }} />
          </>
        )}

        {view.type === 'shop' && (
          <ProductGrid 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            initialCategory={view.category}
            showSalesOnly={view.showSales}
            onProductClick={(p) => {
                safeScrollTo(0);
                setView({ type: 'product', product: p });
            }} 
            onAddToCart={(p) => addToCart(p, undefined, 1)}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => {
              setView({ type: 'shop' });
            }}
            onAddToCart={addToCart}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'landing' })}
          />
        )}

        {view.type === 'checkout' && (
            <Checkout 
                items={cartItems}
                onBack={() => setView({ type: 'landing' })}
                onClearCart={clearCart}
            />
        )}
      </main>

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      {/* Tech Scroll To Top Button (Bottom Left) */}
      <div className={`fixed bottom-8 left-8 z-[110] transition-all duration-700 ease-out transform ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          {/* Notification Tip */}
          {showScrollTip && (
             <div className="absolute bottom-full left-0 mb-4 whitespace-nowrap bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500 text-cyan-600 dark:text-cyan-400 text-[9px] font-mono px-3 py-1 font-bold tracking-widest animate-bounce origin-bottom">
                 SYSTEM: UPLINK_READY
                 <div className="absolute top-full left-4 -mt-px w-2 h-2 border-t border-r border-cyan-500 bg-gray-50 dark:bg-[#050505] transform rotate-135"></div>
             </div>
          )}
          
          <button 
             onClick={() => safeScrollTo(0)}
             className="group w-12 h-12 flex items-center justify-center bg-white dark:bg-black border border-black/10 dark:border-white/20 shadow-lg text-black dark:text-white hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 relative overflow-hidden"
             aria-label="Scroll to top"
          >
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-current opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-current opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
          </button>
      </div>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
            setIsCartOpen(false);
            safeScrollTo(0);
            setView({ type: 'checkout' });
        }}
      />

      {quickViewProduct && (
        <QuickViewModal 
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onAddToCart={(p, q) => {
                addToCart(p, undefined, q);
                setQuickViewProduct(null);
            }}
            onViewDetails={(p) => {
                setQuickViewProduct(null);
                safeScrollTo(0);
                setView({ type: 'product', product: p });
            }}
        />
      )}
    </div>
  );
}

export default App;
