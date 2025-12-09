
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface SalesBannerProps {
    onShopClick: (category?: string, showSales?: boolean) => void;
}

const SalesBanner: React.FC<SalesBannerProps> = ({ onShopClick }) => {
  return (
    <section className="bg-black text-white py-12 border-b border-white/10 reveal-on-scroll">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Back To School */}
            <div 
                onClick={() => onShopClick('Computing', true)}
                className="group relative h-48 md:h-64 overflow-hidden border border-white/10 cursor-pointer bg-neutral-900 flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297424005-06342e7f3947?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity grayscale duration-700"></div>
                <div className="relative z-10 text-center">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-black/50 px-2 py-1 mb-2 inline-block">Student Protocol</span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter italic group-hover:text-cyan-400 transition-colors">BACK TO<br/>SCHOOL</h3>
                    <p className="text-xs font-mono text-gray-300 mt-2 group-hover:text-white">UPGRADE YOUR LOADOUT</p>
                </div>
            </div>

            {/* Desk Upgrade */}
            <div 
                onClick={() => onShopClick('Peripherals', true)}
                className="group relative h-48 md:h-64 overflow-hidden border border-white/10 cursor-pointer bg-neutral-900 flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity grayscale duration-700"></div>
                <div className="relative z-10 text-center">
                    <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest bg-black/50 px-2 py-1 mb-2 inline-block">Workspace v2.0</span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter italic group-hover:text-yellow-400 transition-colors">TECH DESK<br/>OVERHAUL</h3>
                    <p className="text-xs font-mono text-gray-300 mt-2 group-hover:text-white">OPTIMIZE YOUR ENVIRONMENT</p>
                </div>
            </div>

            {/* Christmas/Holiday */}
            <div 
                onClick={() => onShopClick(undefined, true)}
                className="group relative h-48 md:h-64 overflow-hidden border border-white/10 cursor-pointer bg-neutral-900 flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity grayscale duration-700"></div>
                <div className="relative z-10 text-center">
                    <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest bg-black/50 px-2 py-1 mb-2 inline-block">Winter Cycle</span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter italic group-hover:text-red-500 transition-colors">HOLIDAY<br/>DROPS</h3>
                    <p className="text-xs font-mono text-gray-300 mt-2 group-hover:text-white">UP TO 40% OFF SYSTEM WIDE</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default SalesBanner;
