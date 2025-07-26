'use client';

import { useState } from 'react';
import GlobalFooter from '@/components/layout/GlobalFooter';

interface ChatMessage {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function SaintGPTWorkspace() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'assistant',
      content: "Welcome to SaintGPT! I'm your faith-aligned AI companion ready to assist with enterprise solutions. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: ChatMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        type: 'assistant',
        content: "I understand your request. Let me provide you with a comprehensive solution that aligns with our enterprise values and your specific needs...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Main Chat Area - Full Width */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8">
                <img 
                  src="/images/sv-logo.png" 
                  alt="SaintVision AI"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">SaintGPT</h1>
                <p className="text-xs text-gold">Your GOTTA GUY™ AI</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Online</span>
              </div>
              <a href="/workspace" className="text-gray-400 hover:text-white text-sm">
                Back to Workspace
              </a>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3xl ${message.type === 'user' ? 'bg-gold text-black' : 'bg-gray-800/60'} rounded-2xl p-4`}>
                {message.type === 'assistant' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6">
                      <img 
                        src="/images/sv-logo.png" 
                        alt="SaintSal"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-gold text-sm font-medium">SaintSal™</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{message.content}</p>
                <div className="mt-2 text-xs opacity-60">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800/60 rounded-2xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6">
                    <img 
                      src="/images/sv-logo.png" 
                      alt="SaintSal"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gold text-sm font-medium">SaintSal™</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/50 p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask SaintSal™ anything..."
                className="w-full bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <button
              onClick={handleSendMessage}
              className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Send
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-400 text-center">
            SaintSal™ can make mistakes. Consider checking important information.
          </div>
        </div>
      </div>

      {/* Sticky Companion - Right Side */}
      <div className="w-80 bg-gray-900/60 backdrop-blur-sm border-l border-gray-800/50 p-4 overflow-y-auto">
        <div className="space-y-6">
          
          {/* Companion Status */}
          <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl p-4 border border-gold/30">
            <h3 className="text-gold font-semibold mb-2">🤖 AI Companion</h3>
            <p className="text-white/90 text-sm">
              I'm here to help with anything you need. Just ask!
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-300">Always ready to assist</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
            <h4 className="text-white font-medium mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full text-left bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 transition-colors">
                <span className="text-sm text-white">💡 Generate Ideas</span>
              </button>
              <button className="w-full text-left bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 transition-colors">
                <span className="text-sm text-white">📝 Write Content</span>
              </button>
              <button className="w-full text-left bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 transition-colors">
                <span className="text-sm text-white">🔍 Research Topic</span>
              </button>
              <button className="w-full text-left bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 transition-colors">
                <span className="text-sm text-white">⚡ Quick Task</span>
              </button>
            </div>
          </div>

          {/* Recent Conversations */}
          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
            <h4 className="text-white font-medium mb-3">Recent Chats</h4>
            <div className="space-y-2">
              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-sm text-white/90">Business Strategy Discussion</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-sm text-white/90">Content Creation Help</p>
                <p className="text-xs text-gray-400 mt-1">Yesterday</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-sm text-white/90">Technical Questions</p>
                <p className="text-xs text-gray-400 mt-1">3 days ago</p>
              </div>
            </div>
          </div>

          {/* Upgrade Prompt */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/30">
            <h4 className="text-purple-400 font-medium mb-2">🚀 Upgrade Available</h4>
            <p className="text-white/90 text-sm mb-3">
              Unlock unlimited conversations and advanced features
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </div>
  );
}
