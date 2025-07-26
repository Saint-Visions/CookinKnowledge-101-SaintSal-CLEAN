'use client';

import { useState } from 'react';
import GlobalFooter from '@/components/layout/GlobalFooter';

export default function Dashboard() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "🔥 **SaintSal™ AI Enterprise Command Center Active** Welcome to your comprehensive AI-powered business intelligence platform. I have access to universal knowledge across all Saint Vision Group domains - from healthcare (Athena) to finance (EbyTech) to legal (SVTLegal.ai) and CRM automation (PartnerTech.ai). What would you like to accomplish today?",
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
        content: "Processing with SaintSal™ Dual-AI architecture... I'm analyzing your request using our comprehensive knowledge base spanning all Saint Vision Group domains. Ready to provide enterprise-grade insights and execute workflows across our integrated platform.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Left Sidebar - Apple Style */}
      <div className="w-72 bg-gray-800/60 backdrop-blur-xl border-r border-[#F4D03F]/10 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#F4D03F] flex items-center justify-center">
              <span className="text-black font-bold">SV</span>
            </div> 
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
          
          <a href="/business" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>💼</span>
            <span className="text-sm">My Business</span>
          </a>
          
          <a href="/notes" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>📝</span>
            <span className="text-sm">Sticky Notes</span>
          </a>
          
          <a href="/tools" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🛠️</span>
            <span className="text-sm">AI Tools</span>
          </a>
          
          <a href="/generate" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🎨</span>
            <span className="text-sm">Image Generator</span>
          </a>
          
          <a href="/launchpad" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🚀</span>
            <span className="text-sm">SVG Launchpad</span>
          </a>
          
          <a href="/support" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>💬</span>
            <span className="text-sm">Feedback & Help</span>
          </a>
          
          <a href="/partnertech" className="flex items-center space-x-3 text-gold hover:text-gold/80 hover:bg-gold/10 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🤝</span>
            <span className="text-sm">PartnerTech.ai CRM</span>
          </a>
          
          <a href="/portal" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🌐</span>
            <span className="text-sm">Client Portal</span>
          </a>
          
          <a href="/pricing" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>⚡</span>
            <span className="text-sm">Upgrade Tier</span>
          </a>
          
          <a href="/institute" className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-gray-800/50 rounded-lg p-3 transition-colors cursor-pointer">
            <span>🏛️</span>
            <span className="text-sm">SVT Institute of AI (R + D)</span>
          </a>
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
            <h2 className="text-lg font-semibold text-white">🔥 **SaintSal™ Enterprise Command Center Active**</h2>
            <span className="text-sm text-gray-400">Dual-AI architecture with universal knowledge base access</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white/70 hover:text-white text-sm">Home</a>
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
                  placeholder="Ask about universal knowledge base, dual-AI architecture, or enterprise workflows..."
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
            {/* HACP™ Patent Showcase */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                <span className="mr-2">🛡️</span>
                HACP™ Patent Protection
              </h3>
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-4 border border-gold/20 mb-4">
                <div className="text-center mb-3">
                  <div className="text-gold font-bold text-sm">U.S. Patent No. 10,290,222</div>
                  <div className="text-gray-400 text-xs">Interactive Tutorial with Escalating Prompts</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <span className="text-gray-300 text-xs">Real-time performance monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <span className="text-gray-300 text-xs">Escalating guidance delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <span className="text-gray-300 text-xs">Dynamic feedback loops</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <span className="text-gray-300 text-xs">Adaptive persona shifts</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Patent Status</span>
                  <span className="text-green-400 font-semibold">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Enforcement</span>
                  <span className="text-gold font-semibold">GLOBAL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Licensing Value</span>
                  <span className="text-white font-semibold">$10M-$75M</span>
                </div>
              </div>
            </div>

            {/* AI Companion Access */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                <span className="mr-2">🤖</span>
                AI Companion Access
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm transition-colors flex items-center space-x-2">
                  <span>🔴</span>
                  <span>SaintSal™ (Master AI)</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-white flex items-center space-x-2">
                  <span>🏥</span>
                  <span>Athena (Healthcare)</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-white flex items-center space-x-2">
                  <span>💰</span>
                  <span>EbyTech (Finance)</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors text-sm text-white flex items-center space-x-2">
                  <span>⚖️</span>
                  <span>SVTLegal.ai</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gold/10 border border-gold/20 text-gold text-sm transition-colors flex items-center space-x-2">
                  <span>🤝</span>
                  <span>PartnerTech.ai</span>
                </button>
              </div>
            </div>

            {/* Enterprise Legal Compliance */}
            <div>
              <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                <span className="mr-2">⚖️</span>
                Enterprise Compliance
              </h3>
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <div className="text-green-400 text-sm font-medium mb-1">Delaware LP Structure</div>
                  <div className="text-gray-300 text-xs">Asset protection & tax optimization</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                  <div className="text-cyan-400 text-sm font-medium mb-1">Global Compliance</div>
                  <div className="text-gray-300 text-xs">GDPR • CCPA • SOC 2 • AES-256</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                  <div className="text-purple-400 text-sm font-medium mb-1">Faith-Aligned Ethics</div>
                  <div className="text-gray-300 text-xs">Values-first AI architecture</div>
                </div>
                <div className="text-center mt-4">
                  <a href="/legal/privacy" className="text-gold hover:text-gold/80 text-xs">Privacy Policy</a>
                  <span className="text-gray-500 mx-2">•</span>
                  <a href="/legal/disclosure" className="text-gold hover:text-gold/80 text-xs">AI Disclosure</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GlobalFooter />
    </>
  );
}
