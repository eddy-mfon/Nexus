/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "SYSTEM_ONLINE", "WORLDWIDE_SHIPPING", "SECURE_PAYMENT", "NEXUS_PROTOCOL_V4", 
    "NEW_ARRIVALS", "ZERO_LATENCY", "HIGH_FIDELITY", "ENCRYPTED_TRANSACTIONS"
  ];

  return (
    <div className="bg-black dark:bg-white text-white dark:text-black py-3 overflow-hidden border-y border-white/10 dark:border-black/10">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-12 px-6">
            {items.map((item, i) => (
                <span key={i} className="text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-4">
                    {item}
                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                </span>
            ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-12 px-6">
            {items.map((item, i) => (
                <span key={`dup-${i}`} className="text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-4">
                    {item}
                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                </span>
            ))}
        </div>
        <div className="flex gap-12 px-6">
            {items.map((item, i) => (
                <span key={`dup2-${i}`} className="text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-4">
                    {item}
                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;