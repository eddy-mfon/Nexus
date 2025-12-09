
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-gray-100 dark:bg-[#050505] pt-24 pb-12 px-6 text-gray-500 border-t border-black/5 dark:border-white/10 transition-colors">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">NEXUS</h4>
          <p className="max-w-xs font-light leading-relaxed text-sm text-gray-600 dark:text-gray-500">
            Forging the future through superior hardware.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-[10px] uppercase tracking-widest">Inventory</h4>
          <ul className="space-y-4 font-mono text-xs">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-black dark:hover:text-white transition-colors">All Products</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-black dark:hover:text-white transition-colors">Components</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-black dark:hover:text-white transition-colors">Peripherals</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-[10px] uppercase tracking-widest">Company</h4>
          <ul className="space-y-4 font-mono text-xs">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-black dark:hover:text-white transition-colors">Mission</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-black dark:hover:text-white transition-colors">Journal</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-[10px] uppercase tracking-widest">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-gray-400 dark:border-gray-800 py-2 text-sm outline-none focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:placeholder-gray-700 text-black dark:text-white font-mono" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-[10px] font-bold uppercase tracking-widest mt-2 hover:text-black dark:hover:text-white disabled:cursor-default disabled:hover:text-gray-500 disabled:opacity-50 transition-colors"
            >
              {subscribeStatus === 'idle' && 'Subscribe'}
              {subscribeStatus === 'loading' && 'Processing...'}
              {subscribeStatus === 'success' && 'Registered'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-60 font-mono gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 NEXUS CORP.</p>
            <span className="hidden md:block">|</span>
            <p className="text-black dark:text-white font-bold">ENGINEERED BY EDIDIONG MFON</p>
        </div>
        <p>ALL SYSTEMS NORMAL</p>
      </div>
    </footer>
  );
};

export default Footer;
