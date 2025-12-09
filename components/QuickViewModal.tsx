
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart, onViewDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-[#0a0a0a] w-full max-w-4xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in-up flex flex-col md:flex-row max-h-[90vh]">
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-[#111] relative">
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale opacity-90"
            />
            {hasDiscount && (
                <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs font-bold font-mono px-3 py-1">
                        SALE
                    </span>
                </div>
            )}
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
            <div className="mb-auto">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2 block">{product.category}</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h2>
                <p className="text-xs font-mono text-gray-500 mb-6">{product.tagline}</p>
                
                <div className="flex items-end gap-4 mb-6">
                    {hasDiscount && (
                        <span className="text-lg text-gray-400 line-through font-mono mb-1">${product.originalPrice}</span>
                    )}
                    <span className={`text-2xl font-mono ${hasDiscount ? 'text-red-500 font-bold' : 'text-gray-900 dark:text-white'}`}>
                        ${product.price}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                    {product.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-8">
                    {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                             <div className="w-1 h-1 bg-cyan-500"></div>
                             <span className="text-[10px] font-mono text-gray-500 uppercase">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
                <div className="flex gap-3">
                    <div className="flex items-center border border-black/10 dark:border-white/10 h-12">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5"
                        >-</button>
                        <span className="w-10 text-center font-mono text-sm dark:text-white">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5"
                        >+</button>
                    </div>
                    <button 
                        onClick={() => {
                            onAddToCart(product, quantity);
                            onClose();
                        }}
                        className="flex-1 bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
                <button 
                    onClick={() => onViewDetails(product)}
                    className="w-full py-3 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white uppercase tracking-widest text-[10px] font-bold hover:border-black dark:hover:border-white transition-colors"
                >
                    View Full Details
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
