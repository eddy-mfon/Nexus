/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'NEXUS_AI v4.2 Online. How can I optimize your setup?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        // Error handled
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-white dark:bg-[#0a0a0a] w-[90vw] sm:w-[350px] h-[500px] mb-4 flex flex-col overflow-hidden border border-black/10 dark:border-white/20 animate-fade-in-up shadow-xl shadow-black/10">
          {/* Header */}
          <div className="bg-gray-50 dark:bg-[#111] p-3 border-b border-black/10 dark:border-white/10 flex justify-between items-center">
            <span className="font-mono text-black dark:text-white text-[10px] tracking-widest">TERMINAL_01</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              <span className="font-mono text-lg">×</span>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black font-mono text-xs" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[90%] p-2 border ${
                    msg.role === 'user' 
                      ? 'text-black dark:text-white border-black/20 dark:border-white/20 bg-white dark:bg-white/5' 
                      : 'text-gray-600 dark:text-gray-400 border-transparent'
                  }`}
                >
                  <span className="text-[8px] opacity-40 block mb-1 uppercase">
                      {msg.role === 'user' ? 'USER' : 'SYS'}
                  </span>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="text-gray-500 font-mono text-[10px] animate-pulse">
                   ...
                 </div>
               </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10">
            <div className="flex gap-2 relative items-center">
              <span className="text-gray-500 font-mono text-xs">{'>'}</span>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Command..." 
                className="flex-1 bg-transparent border-none focus:ring-0 text-black dark:text-white text-xs font-mono outline-none placeholder-gray-400 dark:placeholder-gray-700"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black dark:bg-white text-white dark:text-black w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 z-50 shadow-lg"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )}
      </button>
    </div>
  );
};

export default Assistant;