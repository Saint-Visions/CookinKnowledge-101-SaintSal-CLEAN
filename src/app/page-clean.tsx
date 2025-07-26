'use client';

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Welcome to your AI-powered business control room. I can help you with pipeline analysis, draft outreach sequences, and execute GHL workflows. What would you like to accomplish?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setInputMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: "I'm processing your request. As your enterprise AI companion, I'm here to help optimize your business workflows and drive results.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="h-screen bg-black text-white flex overflow-hidden">
      {/* Left Sidebar - Dark Elite */}
      <div className="w-64 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800/50 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <img 
                src="/images/sv-logo.png" 
                alt="SaintVision"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white">SaintVisionAI™</h1>
              <p className="text-xs text-gold/80">COOKIN' KNOWLEDGE</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 space-y-2">
          <div className="flex items-center space-x-3 text-red-400 bg-red-500/10 rounded-lg p-3 border border-red-500/20">
            <span>🔴</span>
            <span className="text-sm font-medium">My Companion</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>💼</span>
            <span className="text-sm">My Business</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>📝</span>
            <span className="text-sm">Sticky Notes</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🛠️</span>
            <span className="text-sm">AI Tools</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🎨</span>
            <span className="text-sm">Image Generator</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🚀</span>
            <span className="text-sm">SVG Launchpad</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>💬</span>
            <span className="text-sm">Feedback & Help</span>
          </div>
          
          <div className="flex items-center space-x-3 text-gold hover:text-gold/80 hover:bg-gold/10 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🤝</span>
            <span className="text-sm">PartnerTech.ai CRM</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🌐</span>
            <span className="text-sm">Client Portal</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>⚡</span>
            <span className="text-sm">Upgrade Tier</span>
          </div>
          
          <div className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🏛️</span>
            <span className="text-sm">SVT Institute of AI (R + D)</span>
          </div>
        </div>

        {/* Bottom Account */}
        <div className="p-4 border-t border-gray-800/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">SV</span>
            </div>
            <div className="flex-1">
              <div className="text-sm text-white">SaintVisionAI™</div>
              <div className="text-xs text-gold bg-gray-800 px-2 py-1 rounded text-center">ENTERPRISE READY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-white">🔴 **Enterprise Command Center Active**</h2>
            <span className="text-sm text-gray-400">Welcome to your AI-powered business control room</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/workspace" className="text-gold hover:text-gold/80 text-sm font-medium">War Room</a>
            <a href="/workspace/chat" className="text-white/70 hover:text-white text-sm">Straight Chat</a>
            <a href="/workspace/chatgpt" className="text-white/70 hover:text-white text-sm">SaintGPT™</a>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gold to-gold/80 flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-sm font-bold">
                      {message.type === 'user' ? 'U' : 'S'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-1">
                      {message.type === 'user' ? 'You' : 'SaintSal™ AI Companion'}
                    </div>
                    <div className="text-white leading-relaxed">
                      {message.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-gray-800/50">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about pipeline analysis, CRM workflows, or business strategy..."
                  className="flex-1 bg-gray-900/60 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-gray-900/95 backdrop-blur-sm border-l border-gray-800/50 p-6">
            {/* Pipeline Overview */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                <span className="mr-2">📊</span>
                Pipeline Overview
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Active Leads</span>
                  <span className="text-white font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Pipeline</span>
                  <span className="text-gold font-semibold">$57500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Revenue MTD</span>
                  <span className="text-green-400 font-semibold">$24.5K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Scheduled</span>
                  <span className="text-white font-semibold">12</span>
                </div>
              </div>
            </div>

            {/* GHL Quick Access */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                GHL Quick Access
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-white flex items-center space-x-2">
                  <span>📋</span>
                  <span>Dashboard</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-white flex items-center space-x-2">
                  <span>👥</span>
                  <span>Contacts</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-white flex items-center space-x-2">
                  <span>📅</span>
                  <span>Calendar</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-white flex items-center space-x-2">
                  <span>🔄</span>
                  <span>Pipeline</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                Recent Activity
              </h3>
              <div className="text-center py-8">
                <div className="text-gray-500 text-sm">No recent activity</div>
                <div className="text-gray-600 text-xs mt-1">Connect GHL to see live updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
