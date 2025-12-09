
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number; // New field for discounts
  category: 'Computing' | 'Mobile' | 'Peripherals' | 'Streaming' | 'Audio' | 'Components' | 'VR/AR' | 'Drones' | 'Smart Home' | 'Gaming' | 'Photography' | 'Networking';
  imageUrl: string;
  gallery?: string[];
  features: string[];
}

export interface CartItem extends Product {
  cartId: string; // unique identifier (productId + selectedOption)
  selectedOption?: string;
  quantity: number;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'landing' }
  | { type: 'shop', category?: string, showSales?: boolean } // Added showSales flag
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' };

export interface OrderDetails {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
}
