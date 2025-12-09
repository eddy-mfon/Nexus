
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, option?: string, quantity?: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  const options = ['STD', 'PRO', 'ULTRA'];
  const showOptions = ['Components', 'Computers', 'VR/AR'].includes(product.category);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  const handleAdd = () => {
      if (showOptions && !selectedSize) {
          // In a real app, show error/toast
          alert("Please select a configuration.");
          return;
      }
      onAddToCart(product, selectedSize || undefined, quantity);
  };

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#050505] animate-fade-in-up transition-colors">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          <span className="text-lg">‹</span>
          Back to Inventory
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Main Image Only */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-[#111] overflow-hidden border border-black/5 dark:border-white/10 relative group">
              {hasDiscount && (
                 <div className="absolute top-4 left-4 z-20">
                    <span className="bg-red-500 text-white text-xs font-bold font-mono px-3 py-1">
                        LIMITED OFFER
                    </span>
                 </div>
              )}
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none"></div>
            </div>
            {/* Tech Specs Micro-grid */}
            <div className="grid grid-cols-2 gap-4">
               {product.features.map((feature, idx) => (
                   <div key={idx} className="bg-gray-50 dark:bg-[#0a0a0a] p-4 border border-black/5 dark:border-white/10 flex items-center gap-3">
                     <div className="w-1 h-1 bg-black dark:bg-white"></div>
                     <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400 uppercase">{feature}</span>
                   </div>
               ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <div className="flex items-center gap-2 mb-2">
                 <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{product.category} // STATUS: ACTIVE</span>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{product.name}</h1>
             <div className="flex items-end gap-4 mb-8">
                {hasDiscount && (
                     <span className="text-lg text-gray-400 line-through font-mono mb-1">${product.originalPrice}</span>
                )}
                <span className={`text-2xl font-light font-mono ${hasDiscount ? 'text-red-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                    ${product.price}
                </span>
             </div>
             
             <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light text-lg mb-10 border-b border-black/10 dark:border-white/10 pb-8">
               {product.longDescription || product.description}
             </p>

             {showOptions && (
                <div className="mb-8">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Select Configuration</span>
                  <div className="flex gap-4">
                    {options.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => setSelectedSize(opt)}
                        className={`px-6 py-3 border transition-all duration-200 font-mono text-xs ${
                          selectedSize === opt 
                            ? 'border-black text-black bg-black/5 dark:border-white dark:text-white dark:bg-white/5' 
                            : 'border-black/10 text-gray-500 hover:border-black/30 hover:text-black dark:border-white/10 dark:hover:border-white/30 dark:hover:text-gray-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
             )}

             {/* Quantity & Add */}
             <div className="flex gap-4 mb-4">
                 <div className="flex items-center border border-black/10 dark:border-white/10">
                     <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-full text-gray-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                     >-</button>
                     <span className="w-12 text-center text-black dark:text-white font-mono text-lg">{quantity}</span>
                     <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-full text-gray-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                     >+</button>
                 </div>
                 <button 
                    onClick={handleAdd}
                    className="flex-1 py-5 bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all border border-transparent"
                 >
                    Add to Cart — ${(product.price * quantity).toLocaleString()}
                 </button>
             </div>
             <p className="text-[10px] text-center text-gray-500 dark:text-gray-700 mt-2 font-mono">
                 SECURE ENCRYPTED TRANSACTION
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
