'use client';

import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hey! I'm your AI companion. Ready to start cookin' some knowledge? 🔥",
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
        content: "I hear you! Let me help you with that. This is where the magic happens with SaintVisionAI™ 🚀",
        timestamp: new Date()
      }]);
    }, 1000);
    
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
          <span className="text-gold text-sm font-medium">SaintSal™ + You</span>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Simple Header */}
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
                <h1 className="text-xl font-bold text-gold">Straight Chat</h1>
                <p className="text-xs text-gold/70">Clean & Direct Communication</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/workspace" className="text-white/70 hover:text-gold transition-colors text-sm">War Room</a>
              <a href="/workspace/chatgpt" className="text-white/70 hover:text-gold transition-colors text-sm">ChatGPT Mode</a>
              <a href="/" className="text-white/70 hover:text-gold transition-colors text-sm">Home</a>
            </nav>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-6 py-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gold text-black'
                      : 'bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-black/60 backdrop-blur-sm border-t border-gray-800/50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Message SaintSal™..."
                className="flex-1 bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50"
              />
              <button
                onClick={sendMessage}
                className="bg-gradient-to-r from-gold to-gold-light text-black px-6 py-3 rounded-xl font-semibold hover:shadow-gold-shine transition-all duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
