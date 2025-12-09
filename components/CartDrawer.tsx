/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-white dark:bg-[#090909] z-[70] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) border-l border-black/5 dark:border-white/10 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/10 bg-white dark:bg-[#090909]">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white tracking-widest uppercase">Cart <span className="text-gray-500">[{items.length}]</span></h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <span className="font-mono text-xs text-gray-500">[ SYSTEM MESSAGE: CONTAINER_EMPTY ]</span>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartId} className="flex gap-4 animate-fade-in-up border-b border-black/5 dark:border-white/5 pb-6 last:border-0 last:pb-0">
                <div className="w-20 h-24 bg-gray-100 dark:bg-[#111] border border-black/5 dark:border-white/10 flex-shrink-0 relative overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale opacity-90 dark:opacity-80" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm tracking-tight">{item.name}</h3>
                        <span className="text-sm font-mono text-gray-900 dark:text-white">${item.price * item.quantity}</span>
                    </div>
                    {item.selectedOption && (
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-2">Config: {item.selectedOption}</p>
                    )}
                    {!item.selectedOption && (
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-2">{item.category}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Control */}
                    <div className="flex items-center border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#050505]">
                        <button 
                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            -
                        </button>
                        <span className="w-8 text-center text-xs font-mono text-gray-900 dark:text-white">{item.quantity}</span>
                        <button 
                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            +
                        </button>
                    </div>

                    <button 
                        onClick={() => onRemoveItem(item.cartId)}
                        className="text-[10px] text-gray-500 hover:text-red-500 uppercase tracking-widest font-mono transition-colors"
                    >
                        Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#090909]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Subtotal</span>
            <span className="text-lg font-mono text-gray-900 dark:text-white">${total}</span>
          </div>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed border border-transparent"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;