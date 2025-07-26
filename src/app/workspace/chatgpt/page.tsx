'use client';

import { useState } from 'react';
import TopNav from "@/components/TopNav";
import GlobalFooter from '@/components/layout/GlobalFooter';
import Link from 'next/link';

export default function ChatGPTPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm SaintSal™, your GOTTA GUY for enterprise AI solutions. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'assistant',
        content: "That's a great question! With SaintVisionAI™ and our HACP technology, I can provide enterprise-grade insights backed by dual AI engines. Let me break this down for you...",
        timestamp: new Date()
      }]);
    }, 1500);
    
    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/images/transparent dawg saintsaltm cookin knowledge  copy.png" 
            alt="Cookin' Knowledge Background"
            className="w-96 h-auto object-contain -rotate-12 opacity-40"
          />
        </div>
      </div>

      {/* Sticky Companion Bar */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 flex items-center space-x-2">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
          <span className="text-gold text-sm font-medium">SaintSal™ Active</span>
        </div>
      </div>

      {/* Main Interface */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* ChatGPT-style Header */}
        <header className="bg-black/60 backdrop-blur-sm border-b border-gray-800/50 p-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10">
                <img 
                  src="/images/sv-logo.png" 
                  alt="SaintVision AI"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gold">SaintGPT™</h1>
                <p className="text-xs text-gold/70">Enterprise AI Assistant</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/workspace" className="text-white/70 hover:text-gold transition-colors text-sm">War Room</Link>
              <Link href="/workspace/chat" className="text-white/70 hover:text-gold transition-colors text-sm">Straight Chat</Link>
              <Link href="/" className="text-white/70 hover:text-gold transition-colors text-sm">Home</Link>
            </nav>
          </div>
        </header>

        {/* ChatGPT-style Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`${
                  message.type === 'user' ? 'bg-gray-900/40' : 'bg-black/40'
                } border-b border-gray-800/30`}
              >
                <div className="p-6">
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-gold to-gold-light">
                      <span className="text-black text-sm font-bold">
                        {message.type === 'user' ? 'U' : 'S'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-300 mb-2">
                        {message.type === 'user' ? 'You' : 'SaintSal™'}
                      </div>
                      <div className="text-white leading-relaxed">
                        {message.content}
                      </div>
                      <div className="text-xs text-gray-500 mt-3">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ChatGPT-style Input */}
        <div className="bg-black/60 backdrop-blur-sm border-t border-gray-800/50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden">
              <div className="flex">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
                  placeholder="Message SaintSal™ (your GOTTA GUY)..."
                  className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-white placeholder-gray-400 resize-none"
                  rows={1}
                />
                <button
                  onClick={sendMessage}
                  className="p-3 text-gold hover:text-gold/80 transition-colors"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </div>
  );
}
