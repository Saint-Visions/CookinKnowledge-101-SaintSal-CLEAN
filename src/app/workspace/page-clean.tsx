'use client';

import { useState, useEffect } from 'react';

export default function WorkspacePage() {
  const [activePanel, setActivePanel] = useState('companion');
  const [userTier, setUserTier] = useState('free');

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/images/transparent dawg saintsaltm cookin knowledge  copy.png" 
            alt="Cookin' Knowledge Background"
            className="w-96 h-auto object-contain -rotate-12 opacity-60"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Your Workspace</h1>
            <p className="text-xl text-white/80">Where productivity meets innovation ⚡</p>
          </div>

          {/* Status Bar */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-8 border border-gray-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">AI Companion Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Pipeline Running</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">3 Tasks Pending</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Productivity Score: <span className="text-gold font-semibold">94%</span>
              </div>
            </div>
          </div>

          {/* Workspace Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Companion Panel */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🤖</span>
                AI Companion
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/60 rounded-md p-4">
                  <p className="text-white/90 text-sm">
                    Ready to assist with your workflow and productivity needs.
                  </p>
                </div>
                <button className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-2 px-4 rounded-md transition-colors">
                  Start Conversation
                </button>
              </div>
            </div>

            {/* Quick Tools Panel */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                Quick Tools
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-800/60 rounded-md p-3">
                  <span className="text-sm font-medium text-white">📅 Calendar</span>
                </div>
                <div className="bg-gray-800/60 rounded-md p-3">
                  <span className="text-sm font-medium text-white">📝 Notes</span>
                </div>
                <div className="bg-gray-800/60 rounded-md p-3">
                  <span className="text-sm font-medium text-white">⏰ Timer</span>
                </div>
              </div>
            </div>

            {/* Analytics Panel */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">📊</span>
                Today's Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tasks Completed</span>
                  <span className="text-gold font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Interactions</span>
                  <span className="text-blue-400 font-semibold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time Saved</span>
                  <span className="text-green-400 font-semibold">2.3h</span>
                </div>
              </div>
            </div>
          </div>

          {/* PartnerTech Section */}
          <div className="mt-8 bg-gradient-to-br from-gold/20 to-gold/10 backdrop-blur-lg rounded-2xl p-8 border border-gold/30">
            <h3 className="text-2xl font-semibold text-gold mb-4">🚀 PartnerTech.ai</h3>
            <p className="text-white/90 mb-6">
              Ready to unlock CRM automation, unlimited AI interactions, and professional tools?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold hover:bg-gold/90 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
                Upgrade to Pro
              </button>
              <button className="border border-gold/40 text-gold hover:bg-gold/10 font-medium py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
