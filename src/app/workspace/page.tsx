'use client';

import { useState } from 'react';
import TopNav from "@/components/TopNav";
import GlobalFooter from '@/components/layout/GlobalFooter';
import Link from "next/link";

export default function Workspace() {
  const [userTier, setUserTier] = useState('pro');
  const [chatInput, setChatInput] = useState('');

  return (
    <>
    <TopNav />
    <div className="min-h-screen bg-black text-white flex pt-20">
      {/* Left Sidebar - Cookin' Knowledge Branding */}
      <div className="w-72 bg-gray-900 border-r border-yellow-400/20 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-yellow-400/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-400/25">
              <span className="text-black font-bold text-lg">Sv.</span>
            </div>
            <div>
              <div className="text-yellow-400 font-bold text-xl">SaintSal™</div>
              <div className="text-xs text-yellow-400/70">COOKIN' KNOWLEDGE</div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 p-4 space-y-2">
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all">
            <span className="text-red-400 text-lg">🔴</span>
            <span className="text-white font-medium">My Companion</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse ml-auto"></div>
          </div>

          <Link href="/dashboard" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-blue-400 text-lg">💼</span>
            <span className="text-gray-200">My Business</span>
          </Link>

          <Link href="/data" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-green-400 text-lg">📝</span>
            <span className="text-gray-200">Sticky Notes</span>
          </Link>

          <Link href="/help" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-purple-400 text-lg">🔧</span>
            <span className="text-gray-200">AI Tools</span>
            <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full ml-auto font-bold">⚡</span>
          </Link>

          <Link href="/builder-ultimate" className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-400/40 hover:bg-yellow-500/30 transition-all cursor-pointer">
            <span className="text-yellow-400 text-lg">👑</span>
            <span className="text-yellow-400 font-bold">ULTIMATE Builder.io</span>
            <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full ml-auto font-bold">ENTERPRISE</span>
          </Link>

          <Link href="/builder" className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 hover:bg-purple-500/20 transition-all cursor-pointer">
            <span className="text-purple-400 text-lg">🎨</span>
            <span className="text-purple-400 font-bold">Builder.io Basic</span>
            <span className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded-full ml-auto font-bold">FIGMA</span>
          </Link>

          <Link href="/svg" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-pink-400 text-lg">🖼️</span>
            <span className="text-gray-200">Image Generator</span>
          </Link>

          <Link href="/svg" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-cyan-400 text-lg">🚀</span>
            <span className="text-gray-200">SVG Launchpad</span>
          </Link>

          <Link href="/help" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-orange-400 text-lg">💡</span>
            <span className="text-gray-200">Feedback & Help</span>
          </Link>

          <div className="border-t border-yellow-400/20 my-4"></div>

          <Link href="/partnertech" className="flex items-center space-x-3 p-4 rounded-xl bg-yellow-400/10 border border-yellow-400/30 hover:bg-yellow-400/20 transition-all cursor-pointer">
            <span className="text-yellow-400 text-lg">🚀</span>
            <span className="text-yellow-400 font-bold">PartnerTech.ai CRM</span>
          </Link>

          <Link href="/dashboard" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-indigo-400 text-lg">👥</span>
            <span className="text-gray-200">Client Portal</span>
          </Link>

          <Link href="/pricing" className="flex items-center space-x-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500/20 transition-all cursor-pointer">
            <span className="text-orange-400 text-lg">⚡</span>
            <span className="text-orange-400 font-bold">Upgrade Tier</span>
          </Link>

          <Link href="/institute" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-emerald-400 text-lg">🏛️</span>
            <span className="text-gray-200 text-sm">SVT Institute of AI (R + D)</span>
          </Link>

          <div className="border-t border-yellow-400/20 my-4"></div>

          <Link href="/dashboard" className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer">
            <span className="text-gray-400 text-lg">⚙️</span>
            <span className="text-gray-200">My Account</span>
          </Link>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-yellow-400/20">
          <div className="bg-gradient-to-br from-yellow-400/20 via-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-400/30 shadow-lg">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-yellow-400 text-xl">⭐</span>
              <span className="text-yellow-400 font-bold">SaintVisionAI™</span>
            </div>
            <div className="text-xs text-yellow-400/80 mb-3 font-medium">COOKIN' KNOWLEDGE</div>
            <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black text-xs font-bold px-3 py-2 rounded-lg text-center">
              ENTERPRISE READY
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-gray-900 border-b border-yellow-400/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-lg">+</span>
                <span className="text-white font-medium">New Project</span>
                <span className="text-xs text-gray-400">Create GHL opportunity</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400 text-lg">📅</span>
                <span className="text-white font-medium">Book Meeting</span>
                <span className="text-xs text-gray-400">Sync calendars</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400 text-lg">🤖</span>
                <span className="text-white font-medium">AI Companion</span>
                <span className="text-xs text-gray-400">ask saint-sal ⚡</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-bold shadow-lg">
                {userTier.toUpperCase()}
              </span>
              <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
            </div>
          </div>
          <div className="mt-3 text-xs text-yellow-400 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
            💡 <strong>Pro Tip:</strong> Use voice commands or type "@workflow" in chat for advanced automation
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="flex-1 flex">
          {/* Center Content */}
          <div className="flex-1 p-6">
            <div className="bg-gray-900 rounded-xl border border-yellow-400/20 p-6 h-full shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">🔴 **Enterprise Command Center Active**</h3>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 mb-6 border border-yellow-400/10">
                <p className="text-white text-sm leading-relaxed mb-4">
                  Welcome to your AI-powered business control room. I can help you with pipeline analysis, draft outreach sequences, and execute GHL workflows. What would you like to accomplish?
                </p>
                <div className="text-xs text-gray-400 font-medium">Latest 4M • SaintSal™ Technology</div>
              </div>

              <div className="flex items-center space-x-4">
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about pipeline analysis, CRM workflows, or business strategy..."
                  className="flex-1 bg-black/50 border border-yellow-400/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-lg focus:shadow-yellow-400/10 transition-all"
                />
                <button 
                  onClick={() => alert('Chat feature coming soon!')}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-yellow-400/25 transform hover:scale-105"
                >
                  🚀
                </button>
              </div>

              <div className="mt-8 text-center">
                <div className="w-32 h-24 mx-auto opacity-30">
                  <div className="text-6xl">🧠</div>
                </div>
                <div className="text-yellow-400/60 text-sm mt-2">AI Engine Ready</div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - CRM Panels */}
          <div className="w-80 bg-gray-900 border-l border-yellow-400/20 p-6">
            <div className="space-y-6">
              {/* Pipeline Overview */}
              <div className="bg-black/50 rounded-xl border border-yellow-400/20 p-6 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  📊 Pipeline Overview
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Active Leads</span>
                    <span className="text-yellow-400 font-bold text-lg">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Pipeline Value</span>
                    <span className="text-green-400 font-bold text-lg">$57,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Meetings Scheduled</span>
                    <span className="text-cyan-400 font-bold text-lg">8</span>
                  </div>
                </div>
              </div>

              {/* CRM Quick Access */}
              <div className="bg-black/50 rounded-xl border border-yellow-400/20 p-6 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4">
                  ⚡ CRM Quick Access
                </h4>
                <div className="space-y-3">
                  <Link href="/partnertech" className="flex items-center space-x-3 p-3 hover:bg-yellow-400/10 rounded-lg cursor-pointer transition-all">
                    <span className="text-cyan-400 text-lg">📋</span>
                    <span className="text-gray-200">GHL Dashboard</span>
                  </Link>
                  <Link href="/dashboard" className="flex items-center space-x-3 p-3 hover:bg-yellow-400/10 rounded-lg cursor-pointer transition-all">
                    <span className="text-green-400 text-lg">👥</span>
                    <span className="text-gray-200">Contacts</span>
                  </Link>
                  <Link href="/dashboard" className="flex items-center space-x-3 p-3 hover:bg-yellow-400/10 rounded-lg cursor-pointer transition-all">
                    <span className="text-yellow-400 text-lg">📅</span>
                    <span className="text-gray-200">Calendar</span>
                  </Link>
                  <Link href="/dashboard" className="flex items-center space-x-3 p-3 hover:bg-yellow-400/10 rounded-lg cursor-pointer transition-all">
                    <span className="text-purple-400 text-lg">🔄</span>
                    <span className="text-gray-200">Pipeline</span>
                  </Link>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-black/50 rounded-xl border border-yellow-400/20 p-6 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4">⚡ Recent Activity</h4>
                <div className="text-center text-gray-400 py-8">
                  <div className="w-16 h-16 mx-auto mb-4 opacity-40">
                    <span className="text-5xl">📊</span>
                  </div>
                  <div className="text-sm mb-2">No recent CRM activity</div>
                  <div className="text-xs text-gray-500">
                    Connect GHL to see live updates
                  </div>
                </div>
              </div>

              {/* War Room Controls */}
              <div className="bg-gradient-to-br from-yellow-400/20 via-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/30 p-6 shadow-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-yellow-400 text-lg">🎯</span>
                  <span className="text-yellow-400 font-bold">WAR ROOM</span>
                </div>
                <div className="text-xs text-gray-300 mb-4">Available to all tiers</div>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setUserTier('free')}
                    className={`text-xs py-2 px-3 rounded-lg transition-all ${
                      userTier === 'free' ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    Free
                  </button>
                  <button 
                    onClick={() => setUserTier('pro')}
                    className={`text-xs py-2 px-3 rounded-lg transition-all ${
                      userTier === 'pro' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    Pro
                  </button>
                  <button 
                    onClick={() => setUserTier('enterprise')}
                    className={`text-xs py-2 px-3 rounded-lg transition-all ${
                      userTier === 'enterprise' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    Enterprise
                  </button>
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
