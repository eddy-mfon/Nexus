
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

// Updated Categories
const categories = ['All', 'Computing', 'Mobile', 'Gaming', 'Components', 'Peripherals', 'Photography', 'Drones', 'VR/AR', 'Audio', 'Smart Home', 'Streaming', 'Networking'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  initialCategory?: string;
  showSalesOnly?: boolean;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  onProductClick, 
  searchQuery, 
  onSearchChange, 
  initialCategory, 
  showSalesOnly,
  onAddToCart,
  onQuickView
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');
  const [sortOption, setSortOption] = useState('default');
  const [isSalesFilter, setIsSalesFilter] = useState(!!showSalesOnly);

  useEffect(() => {
      if (initialCategory) setActiveCategory(initialCategory);
      if (showSalesOnly !== undefined) setIsSalesFilter(showSalesOnly);
  }, [initialCategory, showSalesOnly]);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Search (Weighted Relevance)
    if (searchQuery) {
        const lowerQ = searchQuery.toLowerCase().trim();
        if (lowerQ) {
            const terms = lowerQ.split(/\s+/);
            
            // Score and filter
            const scored = result.map(p => {
                let score = 0;
                const name = p.name.toLowerCase();
                const category = p.category.toLowerCase();
                const tagline = p.tagline.toLowerCase();
                const desc = (p.description + ' ' + (p.longDescription || '')).toLowerCase();
                const features = (p.features || []).join(' ').toLowerCase();

                // All terms must match at least one field
                const allTermsMatch = terms.every(term => {
                    let termMatched = false;
                    if (name.includes(term)) { score += 10; termMatched = true; }
                    else if (category.includes(term)) { score += 5; termMatched = true; }
                    else if (tagline.includes(term)) { score += 4; termMatched = true; }
                    else if (features.includes(term)) { score += 2; termMatched = true; }
                    else if (desc.includes(term)) { score += 1; termMatched = true; }
                    return termMatched;
                });

                return allTermsMatch ? { product: p, score } : null;
            }).filter((item): item is { product: Product, score: number } => item !== null);

            // Sort by score if default sort
            if (sortOption === 'default') {
                scored.sort((a, b) => b.score - a.score);
            }

            result = scored.map(item => item.product);
        }
    }
    
    // Filter by Sale
    if (isSalesFilter) {
        result = result.filter(p => p.originalPrice && p.originalPrice > p.price);
    }

    // Sort
    if (sortOption === 'price-asc') {
        result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name') {
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'tagline-asc') {
        result = [...result].sort((a, b) => a.tagline.localeCompare(b.tagline));
    } else if (sortOption === 'tagline-desc') {
        result = [...result].sort((a, b) => b.tagline.localeCompare(a.tagline));
    }

    return result;
  }, [activeCategory, searchQuery, sortOption, isSalesFilter]);

  const handleHomeClick = () => {
    const homeLink = document.querySelector('a[href="#"]') as HTMLAnchorElement;
    if (homeLink) homeLink.click();
    else {
        const logo = document.querySelector('nav a') as HTMLAnchorElement;
        if(logo) logo.click();
    }
  }

  return (
    <section id="products" className="pt-24 pb-32 px-6 md:px-12 bg-gray-50 dark:bg-[#050505] relative min-h-screen transition-colors">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Large Centered Search Bar */}
        <div className="flex flex-col items-center justify-center pt-8 pb-16 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Catalog Search</h1>
            <div className="relative w-full max-w-2xl group">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="ENTER PRODUCT NAME, SKU OR CATEGORY..."
                    className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/20 text-black dark:text-white font-mono text-sm py-4 px-6 pr-12 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-700 shadow-sm"
                    autoFocus
                />
                
                {searchQuery && (
                    <button 
                        onClick={() => onSearchChange('')}
                        className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors p-2"
                        title="Clear Search"
                    >
                        <span className="font-mono text-xs font-bold">CLR</span>
                    </button>
                )}

                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
             <p className="mt-4 text-[10px] font-mono text-gray-500 dark:text-gray-600 uppercase tracking-widest flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${searchQuery ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
                {searchQuery ? 'SEARCHING DATABASE...' : 'SYSTEM READY'}
             </p>
        </div>

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-black/10 dark:border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                <button onClick={handleHomeClick} className="hover:text-black dark:hover:text-white transition-colors">Home</button>
                <span>/</span>
                <span className="text-gray-900 dark:text-white">Inventory</span>
                {isSalesFilter && <span className="text-red-500 font-bold">/ SALE</span>}
            </div>
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-500">
                {filteredProducts.length} UNITS FOUND
            </span>
          </div>
          
          <div className="flex flex-col items-end gap-6">
             {/* Sale Toggle */}
             <div className="flex items-center gap-3">
                 <button 
                    onClick={() => setIsSalesFilter(!isSalesFilter)}
                    className={`text-xs font-bold uppercase tracking-widest px-4 py-2 border transition-all ${
                        isSalesFilter 
                        ? 'bg-red-600 border-red-600 text-white' 
                        : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-500 hover:border-red-500 hover:text-red-500'
                    }`}
                 >
                    On Sale
                 </button>
             </div>

            {/* Sorting & Categories */}
            <div className="flex items-center gap-6 flex-wrap justify-end">
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="bg-transparent text-xs font-mono text-gray-600 dark:text-gray-400 uppercase border-b border-gray-300 dark:border-gray-800 focus:border-black dark:focus:border-white outline-none py-1 cursor-pointer hover:text-black dark:hover:text-white transition-colors"
                >
                    <option value="default" className="bg-white dark:bg-[#111]">Sort: Relevance</option>
                    <option value="price-asc" className="bg-white dark:bg-[#111]">Price: Low to High</option>
                    <option value="price-desc" className="bg-white dark:bg-[#111]">Price: High to Low</option>
                    <option value="name" className="bg-white dark:bg-[#111]">Name</option>
                    <option value="tagline-asc" className="bg-white dark:bg-[#111]">Tagline (A-Z)</option>
                    <option value="tagline-desc" className="bg-white dark:bg-[#111]">Tagline (Z-A)</option>
                </select>

                <div className="flex flex-wrap justify-end gap-x-6 gap-y-2">
                    {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                        activeCategory === cat 
                            ? 'text-cyan-600 dark:text-cyan-400 border-b border-cyan-600 dark:border-cyan-400 pb-1' 
                            : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 pb-1 border-b border-transparent'
                        }`}
                    >
                        {cat}
                    </button>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                    onClick={onProductClick}
                    onAddToCart={onAddToCart}
                    onQuickView={onQuickView}
                />
            ))
          ) : (
            <div className="col-span-full py-24 text-center border border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
                <p className="font-mono text-gray-500 text-sm">NO_MATCHING_RECORDS_FOUND</p>
                <button 
                    onClick={() => {setActiveCategory('All'); onSearchChange(''); setIsSalesFilter(false); }}
                    className="mt-4 text-xs font-bold text-black dark:text-white border-b border-black dark:border-white pb-1"
                >
                    RESET QUERY
                </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;