
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
    onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick }) => {
  // Select top 3 products
  const featured = PRODUCTS.slice(0, 3);

  const handleViewAll = () => {
    const shopLink = document.querySelector('a[href="#products"]') as HTMLAnchorElement;
    if (shopLink) shopLink.click();
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50 dark:bg-[#050505] transition-colors">
      <div className="max-w-[1600px] mx-auto reveal-on-scroll">
        <div className="flex justify-between items-end mb-16 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2 block">Showcase</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Latest Arrivals</h2>
            </div>
            <span className="text-[10px] font-mono text-gray-500 hidden md:block">
                SYS.TIME: {new Date().toLocaleTimeString()}
            </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product, index) => (
                <ProductCard key={product.id} product={product} onClick={onProductClick} index={index} />
            ))}
        </div>

        <div className="mt-16 flex justify-center">
            <button 
                onClick={handleViewAll}
                className="group relative px-12 py-4 border border-black/20 dark:border-white/20 text-black dark:text-white overflow-hidden transition-colors text-xs font-bold uppercase tracking-widest font-mono hover:text-white dark:hover:text-black"
            >
                <div className="absolute inset-0 bg-black dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                <span className="relative z-10">View Full Inventory</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;