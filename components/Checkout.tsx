/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onBack: () => void;
  onClearCart: () => void;
}

type CheckoutStep = 'form' | 'processing' | 'success';

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, onClearCart }) => {
  const [step, setStep] = useState<CheckoutStep>('form');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNum: '',
    exp: '',
    cvc: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!formData.firstName) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.address) newErrors.address = 'Required';
    if (!formData.cardNum || formData.cardNum.length < 12) newErrors.cardNum = 'Invalid Card';
    if (!formData.cvc || formData.cvc.length < 3) newErrors.cvc = 'Invalid CVC';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStep('processing');
    
    // Simulate API Transaction
    setTimeout(() => {
        setStep('success');
        onClearCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  if (step === 'success') {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#050505] text-center px-6 animate-fade-in-up transition-colors">
            <div className="w-20 h-20 border border-green-500/50 rounded-full flex items-center justify-center mb-8 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Order Confirmed</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-12">
                Your gear has been secured. A confirmation sequence has been sent to <span className="text-black dark:text-white">{formData.email}</span>.
            </p>
            <div className="bg-white dark:bg-[#111] p-6 border border-black/10 dark:border-white/10 w-full max-w-sm mb-12">
                <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                    <span>ORDER_ID</span>
                    <span className="text-black dark:text-white">NXS-{Math.floor(Math.random() * 100000)}</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-gray-500">
                    <span>EST_DELIVERY</span>
                    <span className="text-black dark:text-white">T+3 DAYS</span>
                </div>
            </div>
            <button 
                onClick={onBack}
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
                Return to Base
            </button>
        </div>
      );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-gray-50 dark:bg-[#050505] animate-fade-in-up text-gray-600 dark:text-gray-300 transition-colors">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <span>{'<'}</span> BACK_TO_STORE
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xs font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest border-b border-black/10 dark:border-white/10 pb-2">Identification</h2>
                <div className="space-y-4">
                   <div>
                       <input 
                         type="email" 
                         name="email"
                         placeholder="Email address" 
                         value={formData.email}
                         onChange={handleChange}
                         className={`w-full bg-white dark:bg-[#0a0a0a] border p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`} 
                       />
                       {errors.email && <span className="text-[10px] text-red-500 mt-1 block font-mono">{errors.email}</span>}
                   </div>
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-xs font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest border-b border-black/10 dark:border-white/10 pb-2">Shipping</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input 
                            type="text" 
                            name="firstName"
                            placeholder="First name" 
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full bg-white dark:bg-[#0a0a0a] border p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors ${errors.firstName ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`} 
                        />
                      </div>
                      <div>
                        <input 
                            type="text" 
                            name="lastName"
                            placeholder="Last name" 
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full bg-white dark:bg-[#0a0a0a] border p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors ${errors.lastName ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`} 
                        />
                      </div>
                   </div>
                   <input 
                        type="text" 
                        name="address"
                        placeholder="Street Address" 
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full bg-white dark:bg-[#0a0a0a] border p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors ${errors.address ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`} 
                   />
                   <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="city"
                        placeholder="City" 
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors" 
                      />
                      <input 
                        type="text" 
                        name="zip"
                        placeholder="Zip Code" 
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors" 
                      />
                   </div>
                </div>
              </div>

              {/* Section 3: Payment */}
              <div>
                <h2 className="text-xs font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest border-b border-black/10 dark:border-white/10 pb-2">Payment Protocol</h2>
                <div className="space-y-4">
                   <input 
                        type="text" 
                        name="cardNum"
                        placeholder="Card Number" 
                        maxLength={19}
                        value={formData.cardNum}
                        onChange={handleChange}
                        className={`w-full bg-white dark:bg-[#0a0a0a] border p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors ${errors.cardNum ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`} 
                   />
                   <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="exp"
                        placeholder="MM/YY" 
                        value={formData.exp}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors" 
                      />
                      <div>
                        <input 
                            type="text" 
                            name="cvc"
                            placeholder="CVC" 
                            maxLength={4}
                            value={formData.cvc}
                            onChange={handleChange}
                            className={`w-full bg-white dark:bg-[#0a0a0a] border p-4 text-black dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-600 focus:border-black dark:focus:border-white outline-none transition-colors ${errors.cvc ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`} 
                        />
                      </div>
                   </div>
                </div>
              </div>

              <div>
                <button 
                    type="submit"
                    disabled={step === 'processing' || items.length === 0}
                    className="w-full py-5 bg-black dark:bg-white text-white dark:text-black uppercase tracking-widest text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors border border-transparent disabled:opacity-50 disabled:cursor-wait"
                >
                    {step === 'processing' ? 'PROCESSING TRANSACTION...' : `AUTHORIZE PAYMENT $${total}`}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-black/10 dark:border-white/10 h-fit sticky top-24">
            <h2 className="text-xs font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-widest">Cart Manifest</h2>
            
            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
               {items.map((item) => (
                 <div key={item.cartId} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-[#111] border border-black/5 dark:border-white/10 relative flex-shrink-0">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover opacity-90 dark:opacity-80 grayscale" />
                       <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center rounded-full px-1">
                           {item.quantity}
                       </span>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-bold text-gray-900 dark:text-white text-sm">{item.name}</h3>
                       {item.selectedOption && <p className="text-[10px] text-gray-500 font-mono uppercase">{item.selectedOption}</p>}
                       {!item.selectedOption && <p className="text-[10px] text-gray-500 font-mono uppercase">{item.category}</p>}
                    </div>
                    <span className="text-sm text-gray-900 dark:text-white font-mono">${item.price * item.quantity}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-2 font-mono">
              <div className="flex justify-between text-sm text-gray-500">
                 <span>Subtotal</span>
                 <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                 <span>Shipping</span>
                 <span>CALCULATED AT NEXT STEP</span>
              </div>
            </div>
            
            <div className="border-t border-black/10 dark:border-white/10 mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-bold text-xl text-gray-900 dark:text-white">Total</span>
                 <div className="flex items-end gap-2">
                   <span className="text-[10px] text-gray-500 mb-1">USD</span>
                   <span className="font-mono text-2xl text-gray-900 dark:text-white">${total}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;