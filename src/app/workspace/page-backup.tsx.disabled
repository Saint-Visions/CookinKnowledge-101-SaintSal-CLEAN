'use client';

import { useState } from 'react';

const gold = '#F4D03F';

export default function WarRoom() {
  const [userTier, setUserTier] = useState('free');
  const [chatInput, setChatInput] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Simple Clean Header */}
      <div className="bg-gray-800 p-4 border-b" style={{ borderColor: gold }}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold" style={{ color: gold }}>WAR ROOM</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm px-3 py-1 rounded font-bold text-black" style={{ backgroundColor: gold }}>
              {userTier.toUpperCase()}
            </span>
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
          </div>
        </div>
      </div>

      {/* Main Content - Single Column */}
      <div className="p-8 max-w-4xl mx-auto">
        {/* Welcome Message */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border" style={{ borderColor: gold + '50' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: gold }}>🎯 Enterprise Command Center</h2>
          <p className="text-gray-300 mb-4">
            Welcome to your AI-powered business control room. I can help with strategy, 
            content creation, and workflow optimization.
          </p>
          
          {/* Chat Interface */}
          <div className="flex space-x-3">
            <input 
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none"
              style={{ borderColor: chatInput ? gold : undefined }}
            />
            <button 
              onClick={() => alert('Chat feature coming soon!')}
              className="px-6 py-3 rounded font-bold text-black hover:opacity-90"
              style={{ backgroundColor: gold }}
            >
              Send
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="font-bold mb-2" style={{ color: gold }}>AI Operations</h3>
            <div className="text-3xl font-bold text-white">47</div>
            <div className="text-gray-400 text-sm">Tasks completed</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="font-bold mb-2" style={{ color: gold }}>Success Rate</h3>
            <div className="text-3xl font-bold text-green-400">98.7%</div>
            <div className="text-gray-400 text-sm">Mission completion</div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="font-bold mb-2" style={{ color: gold }}>Pipeline Value</h3>
            <div className="text-3xl font-bold text-cyan-400">$57.5K</div>
            <div className="text-gray-400 text-sm">Active opportunities</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg border border-gray-700 transition-colors">
            <div className="text-xl mb-2" style={{ color: gold }}>🤖</div>
            <div className="font-medium">SaintGPT</div>
          </button>
          
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg border border-gray-700 transition-colors">
            <div className="text-cyan-400 text-xl mb-2">🔍</div>
            <div className="font-medium">AI Search</div>
          </button>
          
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg border border-gray-700 transition-colors">
            <div className="text-purple-400 text-xl mb-2">📝</div>
            <div className="font-medium">Quick Notes</div>
          </button>
          
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg border border-gray-700 transition-colors">
            <div className="text-green-400 text-xl mb-2">⚡</div>
            <div className="font-medium">All Tools</div>
          </button>
        </div>

        {/* Tier Upgrade */}
        {userTier === 'free' && (
          <div className="rounded-lg p-6 border mb-6" style={{ 
            background: `linear-gradient(to right, ${gold}20, ${gold}10)`,
            borderColor: gold + '50'
          }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: gold }}>Upgrade to Pro</h3>
            <p className="text-gray-300 mb-4">Unlock PartnerTech CRM, advanced analytics, and more!</p>
            <button 
              onClick={() => setUserTier('pro')}
              className="px-6 py-3 rounded font-bold text-black hover:opacity-90"
              style={{ backgroundColor: gold }}
            >
              Upgrade Now
            </button>
          </div>
        )}

        {userTier !== 'free' && (
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg p-6 border border-cyan-500/30 mb-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">🚀 PartnerTech CRM</h3>
            <p className="text-gray-300 mb-4">Pro features unlocked! Access to advanced CRM tools.</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Leads:</span>
                <span className="text-cyan-400 font-bold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Conversion Rate:</span>
                <span className="text-green-400 font-bold">34%</span>
              </div>
            </div>
          </div>
        )}

        {/* Demo Controls */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Demo: Switch Tiers</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setUserTier('free')}
              className={`px-4 py-2 rounded ${userTier === 'free' 
                ? 'text-black' 
                : 'bg-gray-700 text-gray-300'
              }`}
              style={userTier === 'free' ? { backgroundColor: gold } : {}}
            >
              Free
            </button>
            <button 
              onClick={() => setUserTier('pro')}
              className={`px-4 py-2 rounded ${userTier === 'pro' 
                ? 'text-black' 
                : 'bg-gray-700 text-gray-300'
              }`}
              style={userTier === 'pro' ? { backgroundColor: gold } : {}}
            >
              Pro
            </button>
            <button 
              onClick={() => setUserTier('enterprise')}
              className={`px-4 py-2 rounded ${userTier === 'enterprise' 
                ? 'text-black' 
                : 'bg-gray-700 text-gray-300'
              }`}
              style={userTier === 'enterprise' ? { backgroundColor: gold } : {}}
            >
              Enterprise
            </button>
          </div>
        </div>

        {/* Footer Branding */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 rounded-lg border" style={{ 
            background: `linear-gradient(to br, ${gold}05, ${gold}10)`,
            borderColor: gold + '30'
          }}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span style={{ color: gold }}>⭐</span>
              <span className="font-bold text-sm" style={{ color: gold }}>ENTERPRISE READY</span>
            </div>
            <div className="text-xs text-gray-300 mb-1">HACP™ Technology</div>
            <div className="text-xs text-gray-400">SaintVision AI • Cookin' Knowledge</div>
          </div>
        </div>
      </div>
    </div>
  );
}
      {/* Apple-Style Header */}
      <header className="bg-gray-800/95 backdrop-blur-xl border-b border-[#F4D03F]/20 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-6">
            <div className="w-10 h-10 rounded-full bg-[#F4D03F] flex items-center justify-center">
              <span className="text-black font-bold text-sm">SV</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[#F4D03F]">WAR ROOM</h1>
              <p className="text-gray-400 text-sm">Enterprise Command Center</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => handleToolClick('saintgpt')}
                className="text-gray-300 hover:text-[#F4D03F] transition-all duration-200 text-sm font-medium"
              >
                SaintGPT
              </button>
              <button 
                onClick={() => handleToolClick('search')}
                className="text-gray-300 hover:text-[#F4D03F] transition-all duration-200 text-sm font-medium"
              >
                AI Search
              </button>
              <a href="/" className="text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium">Home</a>
            </nav>
            <div className={`px-4 py-2 rounded-full text-xs font-bold border ${
              userTier === 'free' ? 'bg-gray-700/50 text-gray-300 border-gray-600' : 
              userTier === 'pro' ? 'bg-[#F4D03F]/10 text-[#F4D03F] border-[#F4D03F]/30' : 
              'bg-purple-500/10 text-purple-400 border-purple-500/30'
            }`}>
              {userTier.toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* Main Interface */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar */}
        <div className="w-72 bg-gray-800/50 backdrop-blur-xl border-r border-[#F4D03F]/10 overflow-y-auto">
          <div className="p-6 space-y-3">
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#F4D03F]/10 border border-[#F4D03F]/20">
              <div className="w-2 h-2 bg-[#F4D03F] rounded-full animate-pulse"></div>
              <span className="text-[#F4D03F] font-medium">AI Companion</span>
              <span className="text-xs bg-[#F4D03F]/20 text-[#F4D03F] px-2 py-1 rounded-full ml-auto">LIVE</span>
            </div>

            <button 
              onClick={() => handleToolClick('saintgpt')}
              className="w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-200 text-left"
            >
              <span className="text-[#F4D03F]">🤖</span>
              <span className="text-gray-200 font-medium">SaintGPT</span>
            </button>

            <button 
              onClick={handleNotesClick}
              className="w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-200 text-left"
            >
              <span className="text-[#F4D03F]">�</span>
              <span className="text-gray-200 font-medium">Quick Notes</span>
            </button>

            <button 
              onClick={() => handleToolClick('search')}
              className="w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-200 text-left"
            >
              <span className="text-[#F4D03F]">�</span>
              <span className="text-gray-200 font-medium">AI Search</span>
            </button>

            <div className="border-t border-gray-700/50 my-6"></div>

            {userTier !== 'free' ? (
              <button 
                onClick={() => window.location.href = '/workspace/crm'}
                className="w-full flex items-center space-x-3 p-4 rounded-xl bg-[#F4D03F]/10 border border-[#F4D03F]/20 hover:bg-[#F4D03F]/20 transition-all duration-200 text-left"
              >
                <span className="text-[#F4D03F]">💼</span>
                <span className="text-[#F4D03F] font-medium">PartnerTech CRM</span>
              </button>
            ) : (
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-700/20 border border-gray-600/30 opacity-50">
                <span className="text-gray-500">🔒</span>
                <span className="text-gray-500 font-medium">PartnerTech CRM</span>
                <span className="text-xs bg-gray-600/30 text-gray-400 px-2 py-1 rounded-full ml-auto">PRO+</span>
              </div>
            )}

            <button 
              onClick={() => handleToolClick('tools')}
              className="w-full flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-200 text-left"
            >
              <span className="text-[#F4D03F]">🔧</span>
              <span className="text-gray-200 font-medium">All Tools</span>
            </button>

            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-[#F4D03F]/5 to-[#F4D03F]/10 border border-[#F4D03F]/20">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[#F4D03F] text-lg">⭐</span>
                <span className="text-[#F4D03F] font-bold text-sm">ENTERPRISE READY</span>
              </div>
              <div className="text-xs text-gray-300 mb-3">HACP™ Technology</div>
              <div className="text-xs text-gray-400">SaintVision AI • Cookin' Knowledge</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/30 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">AI Operations</h3>
                  <span className="text-[#F4D03F]">⚡</span>
                </div>
                <div className="text-3xl font-bold text-[#F4D03F] mb-2">47</div>
                <div className="text-sm text-gray-400">Tasks completed today</div>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/30 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Success Rate</h3>
                  <span className="text-green-400">📈</span>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">98.7%</div>
                <div className="text-sm text-gray-400">Mission completion</div>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/30 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{userTier === 'free' ? 'Time Saved' : 'Pipeline Value'}</h3>
                  <span className="text-cyan-400">{userTier === 'free' ? '⏱️' : '💰'}</span>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{userTier === 'free' ? '23.4h' : '$57.5K'}</div>
                <div className="text-sm text-gray-400">{userTier === 'free' ? 'This week' : 'Active opportunities'}</div>
              </div>
            </div>

            {/* Main Command Center */}
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/30 p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Enterprise Command Center</h2>
                  <p className="text-gray-400">HACP™ AI systems synchronized and ready for deployment</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">ONLINE</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* AI Console */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#F4D03F]">AI Console</h3>
                  <div className="bg-gray-900/60 rounded-xl border border-gray-700/40 p-6">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      War Room ready. Dual AI engines synchronized. I can help with business strategy, 
                      content creation, problem-solving, and workflow optimization.
                    </p>
                    <div className="text-xs text-gray-500 mb-4">SaintSal™ + Azure • Enterprise Grade</div>
                    <div className="flex items-center space-x-3">
                      <input 
                        type="text" 
                        placeholder="Enter your mission objective..."
                        className="flex-1 bg-gray-800/60 border border-gray-600/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F4D03F]/50 transition-colors"
                      />
                      <button 
                        onClick={() => handleToolClick('saintgpt')}
                        className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                      >
                        🚀
                      </button>
                    </div>
                  </div>
                </div>

                {/* Business Health */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#F4D03F]">Business Health</h3>
                  <div className="bg-gray-900/60 rounded-xl border border-gray-700/40 p-6">
                    <BusinessHealthDashboard userTier={userTier} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Tier Info */}
        <div className="w-80 bg-gray-800/50 backdrop-blur-xl border-l border-[#F4D03F]/10 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                userTier === 'free' ? 'bg-gray-700' : 
                userTier === 'pro' ? 'bg-[#F4D03F]/20 border-2 border-[#F4D03F]' : 
                'bg-purple-500/20 border-2 border-purple-400'
              }`}>
                <span className={`text-xl font-bold ${
                  userTier === 'free' ? 'text-gray-300' : 
                  userTier === 'pro' ? 'text-[#F4D03F]' : 
                  'text-purple-400'
                }`}>
                  {userTier === 'free' ? 'F' : userTier === 'pro' ? 'P' : 'E'}
                </span>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${
                userTier === 'free' ? 'text-gray-300' : 
                userTier === 'pro' ? 'text-[#F4D03F]' : 
                'text-purple-400'
              }`}>
                {userTier === 'free' ? 'FREE TIER' : 
                 userTier === 'pro' ? 'PRO TIER' : 
                 'ENTERPRISE'}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {userTier === 'free' ? 'Core AI tools available' : 
                 userTier === 'pro' ? 'Full CRM access unlocked' : 
                 'Complete enterprise suite'}
              </p>

              {userTier === 'free' && (
                <button 
                  onClick={() => setUserTier('pro')}
                  className="w-full bg-gradient-to-r from-[#F4D03F] to-[#F4D03F]/80 text-black font-bold py-3 px-4 rounded-xl hover:scale-105 transition-transform duration-200"
                >
                  Upgrade to Pro
                </button>
              )}

              {userTier === 'pro' && (
                <button 
                  onClick={() => setUserTier('enterprise')}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-4 rounded-xl hover:scale-105 transition-transform duration-200"
                >
                  Go Enterprise
                </button>
              )}
            </div>

            <div className="bg-gray-900/40 rounded-xl border border-gray-700/30 p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Today's Performance</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">AI Chats</span>
                  <span className="text-[#F4D03F] font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Tasks Done</span>
                  <span className="text-green-400 font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Efficiency</span>
                  <span className="text-cyan-400 font-bold">94%</span>
                </div>
                {userTier !== 'free' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CRM Leads</span>
                    <span className="text-purple-400 font-bold">23</span>
                  </div>
                )}
              </div>
            </div>

            {/* Demo Controls */}
            <div className="bg-gray-900/40 rounded-xl border border-gray-700/30 p-4">
              <h5 className="text-sm font-medium text-gray-400 mb-3">Demo: Switch Tiers</h5>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setUserTier('free')}
                  className={`text-xs py-2 px-3 rounded-lg transition-all duration-200 ${
                    userTier === 'free' ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Free
                </button>
                <button 
                  onClick={() => setUserTier('pro')}
                  className={`text-xs py-2 px-3 rounded-lg transition-all duration-200 ${
                    userTier === 'pro' ? 'bg-[#F4D03F] text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Pro
                </button>
                <button 
                  onClick={() => setUserTier('enterprise')}
                  className={`text-xs py-2 px-3 rounded-lg transition-all duration-200 ${
                    userTier === 'enterprise' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Ent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Popups */}
      {showToolsPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gray-800/95 backdrop-blur-xl border border-[#F4D03F]/20 rounded-2xl w-96 max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#F4D03F]">
                  {activePopupContent === 'saintgpt' ? '🤖 SaintGPT' :
                   activePopupContent === 'search' ? '🔍 AI Search' :
                   activePopupContent === 'tools' ? '🔧 All Tools' : '⚡ Tools'}
                </h3>
                <button 
                  onClick={() => setShowToolsPopup(false)}
                  className="text-gray-400 hover:text-white w-8 h-8 rounded-full hover:bg-gray-700/50 transition-all duration-200 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {activePopupContent === 'saintgpt' && (
                <div className="space-y-4">
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-700/40">
                    <p className="text-white text-sm mb-4">Start a conversation with SaintSal™</p>
                    <input 
                      type="text" 
                      placeholder="Ask me anything..."
                      className="w-full bg-gray-800/60 border border-gray-600/40 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F4D03F]/50"
                    />
                    <button className="w-full mt-4 bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black py-3 rounded-lg font-semibold transition-all duration-200">
                      Start Chat
                    </button>
                  </div>
                </div>
              )}

              {activePopupContent === 'search' && (
                <div className="space-y-4">
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-700/40">
                    <p className="text-white text-sm mb-4">AI-powered search intelligence</p>
                    <input 
                      type="text" 
                      placeholder="Search anything..."
                      className="w-full bg-gray-800/60 border border-gray-600/40 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F4D03F]/50"
                    />
                    <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                      Search Now
                    </button>
                  </div>
                </div>
              )}

              {activePopupContent === 'tools' && (
                <div className="space-y-3">
                  <button 
                    onClick={() => setActivePopupContent('saintgpt')}
                    className="w-full bg-gray-800/60 hover:bg-gray-700/60 text-white py-4 px-6 rounded-xl text-left flex items-center space-x-3 transition-all duration-200"
                  >
                    <span className="text-[#F4D03F]">🤖</span>
                    <span>SaintGPT Chat</span>
                  </button>
                  <button 
                    onClick={() => setActivePopupContent('search')}
                    className="w-full bg-gray-800/60 hover:bg-gray-700/60 text-white py-4 px-6 rounded-xl text-left flex items-center space-x-3 transition-all duration-200"
                  >
                    <span className="text-cyan-400">🔍</span>
                    <span>AI Search</span>
                  </button>
                  <button className="w-full bg-gray-800/60 hover:bg-gray-700/60 text-white py-4 px-6 rounded-xl text-left flex items-center space-x-3 transition-all duration-200">
                    <span className="text-purple-400">🎨</span>
                    <span>Image Generator</span>
                  </button>
                  <button className="w-full bg-gray-800/60 hover:bg-gray-700/60 text-white py-4 px-6 rounded-xl text-left flex items-center space-x-3 transition-all duration-200">
                    <span className="text-green-400">📊</span>
                    <span>Analytics</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Notes Popup */}
      {showNotesPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gray-800/95 backdrop-blur-xl border border-[#F4D03F]/20 rounded-2xl w-[600px] max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#F4D03F]">📝 Quick Notes</h3>
                <button 
                  onClick={() => setShowNotesPopup(false)}
                  className="text-gray-400 hover:text-white w-8 h-8 rounded-full hover:bg-gray-700/50 transition-all duration-200 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <div className="bg-gray-900/60 rounded-xl border border-gray-700/40">
                <StickyNotes />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PartnerTech.ai Companion (Pro+ only) */}
      {userTier !== 'free' && <PartnerTechCompanion />}
    </div>
  );
}

