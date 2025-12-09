
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product?: Product;
  onClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  index?: number;
  isLoading?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onClick, 
  onAddToCart, 
  onQuickView, 
  index,
  isLoading = false 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Loading Skeleton State (Full Card)
  if (isLoading) {
      return (
        <div className="h-full flex flex-col p-6 bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 relative overflow-hidden tech-border">
             {/* Tech Loading Indicator */}
             <div className="absolute top-3 right-3 flex gap-1 animate-pulse z-10">
                <div className="w-1 h-1 bg-black/20 dark:bg-white/20"></div>
                <div className="w-1 h-1 bg-black/20 dark:bg-white/20 animation-delay-100"></div>
                <div className="w-1 h-1 bg-black/20 dark:bg-white/20 animation-delay-200"></div>
             </div>

             <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-[#111] mb-6 animate-pulse relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
             </div>
             
             <div className="flex justify-between items-start mb-4">
                <div className="space-y-3 w-2/3">
                    <div className="h-4 bg-gray-100 dark:bg-[#111] w-3/4 animate-pulse rounded-sm" />
                    <div className="h-3 bg-gray-100 dark:bg-[#111] w-1/2 animate-pulse rounded-sm" />
                </div>
                <div className="h-4 bg-gray-100 dark:bg-[#111] w-12 animate-pulse rounded-sm" />
             </div>
             
             <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
                <div className="h-3 bg-gray-100 dark:bg-[#111] w-20 animate-pulse rounded-sm" />
                <div className="h-3 bg-gray-100 dark:bg-[#111] w-16 animate-pulse rounded-sm" />
             </div>
        </div>
      );
  }

  if (!product) return null;

  // Real Product Rendering
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
    : 0;
  
  const secondaryImage = product.gallery && product.gallery.length > 0 ? product.gallery[0] : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) onAddToCart(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <div 
        className="group relative cursor-pointer reveal-on-scroll" 
        onClick={() => onClick && onClick(product)}
        style={{ transitionDelay: `${(index || 0) * 80}ms` }} 
    >
      <div className="bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 h-full flex flex-col p-6 relative z-10 hover:border-black/30 dark:hover:border-white/40 transition-all duration-300 tech-border">
        
        {/* Tech Corner Accents */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-black dark:border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-black dark:border-white transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-[#111] mb-6 group/image">
          
          {/* Image Loading State (Skeleton Overlay) */}
          <div className={`absolute inset-0 bg-gray-100 dark:bg-[#111] z-30 transition-opacity duration-500 pointer-events-none ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
               <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-white/5"></div>
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-black dark:text-white">Loading_Asset...</span>
               </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-0 right-0 z-20 flex gap-2">
             <span className="bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60 text-[10px] font-mono px-2 py-1 backdrop-blur-md">{product.category}</span>
          </div>
          
          {/* Sale Badge */}
          {hasDiscount && (
             <div className="absolute top-0 left-0 z-20">
                <span className="bg-red-500 text-white text-[10px] font-bold font-mono px-2 py-1 shadow-sm animate-pulse">
                    SALE -{discountPercent}%
                </span>
             </div>
          )}
          
          {/* Secondary Image (Hover) */}
          {secondaryImage && (
             <img 
               src={secondaryImage} 
               alt={`${product.name} alternate`} 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 group-hover/image:opacity-100 group-hover/image:scale-105 group-hover/image:grayscale-0 transition-all duration-700 ease-out z-10"
             />
          )}

          {/* Primary Image */}
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover grayscale opacity-90 dark:opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out ${secondaryImage ? 'group-hover/image:opacity-0' : 'group-hover:scale-105'}`}
          />
          
          {/* Hover Buttons Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/10 backdrop-blur-[2px] gap-3">
             {onQuickView && (
                <button 
                  onClick={handleQuickView}
                  className="bg-white dark:bg-black text-black dark:text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg border border-black/10 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-400 group/btn"
                  title="Quick View"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover/btn:text-cyan-600 dark:group-hover/btn:text-cyan-400 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
             )}
             {onAddToCart && (
                <button 
                  onClick={handleAddToCart}
                  className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full hover:scale-110 transition-transform shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200"
                  title="Add to Cart"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
             )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-600">{product.tagline}</p>
            </div>
            <div className="text-right">
                {hasDiscount && (
                    <span className="block text-[10px] text-gray-400 line-through font-mono">
                        ${product.originalPrice}
                    </span>
                )}
                <span className={`text-sm font-mono ${hasDiscount ? 'text-red-500 font-bold' : 'text-gray-700 dark:text-white/80'}`}>
                    ${product.price}
                </span>
            </div>
        </div>
        
        {/* Hover Action Footer */}
        <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors">
            <span>ID: {product.id.toUpperCase()}</span>
            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                DETAILS <span className="text-cyan-500">-></span>
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
