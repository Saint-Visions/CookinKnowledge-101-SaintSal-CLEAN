'use client';

import { useState, useEffect } from 'react';
import SidebarNav from '../../components/SidebarNav';
import CompanionPanel from './components/CompanionPanel';
import QuickAccessPanel from './components/QuickAccessPanel';
import PipelineOverview from './components/PipelineOverview';
import NotesAndPrompts from './components/NotesAndPrompts';
import OnboardingFlow from '../../components/onboarding/OnboardingFlow';
import AnalyticsDashboard from '../../components/analytics/AnalyticsDashboard';
import TierBasedFeatures from '../../components/features/TierBasedFeatures';

export default function WorkspacePage() {
  const [activePanel, setActivePanel] = useState('companion');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [userTier, setUserTier] = useState('free'); // free, pro, enterprise

  useEffect(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('onboarding_completed');
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('onboarding_completed', 'true');
  };

  const renderActivePanel = () => {
    switch (activePanel) {
      case 'companion':
        return <CompanionPanel />;
      case 'quick-access':
        return <QuickAccessPanel />;
      case 'pipeline':
        return <PipelineOverview />;
      case 'notes':
        return <NotesAndPrompts />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'features':
        return <TierBasedFeatures userTier={userTier} />;
      default:
        return <CompanionPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle Background Logo Watermark - The Magic Touch! */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18rem] font-bold text-yellow-400 select-none whitespace-nowrap rotate-[-15deg]">
          Cookin&apos; Knowledge
        </div>
      </div>

      {/* Scrolling subtle pattern */}
      <div className="fixed inset-0 opacity-[0.01] pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] text-[8rem] font-light text-yellow-400 select-none transform rotate-[45deg]">
          CK
        </div>
        <div className="absolute bottom-[30%] right-[15%] text-[6rem] font-light text-yellow-400 select-none transform rotate-[-30deg]">
          ⚡
        </div>
        <div className="absolute top-[60%] left-[5%] text-[4rem] font-light text-yellow-400 select-none">
          🔥
        </div>
      </div>

      {/* Onboarding Flow Overlay */}
      {showOnboarding && (
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      )}

      {/* Sidebar */}
      <SidebarNav />
      
      {/* Main Content */}
      <div className="ml-64 p-6 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Your Workspace</h1>
              <p className="text-gray-400">Where productivity meets innovation ⚡</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">Current Plan</div>
              <div className={`text-lg font-bold ${userTier === 'free' ? 'text-gray-300' : userTier === 'pro' ? 'text-yellow-400' : 'text-purple-400'}`}>
                {userTier.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-6 border border-gray-800/50 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">AI Companion Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Pipeline Running</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-300">3 Tasks Pending</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Productivity Score: <span className="text-yellow-400 font-semibold">94%</span>
            </div>
          </div>
        </div>

        {/* Panel Navigation */}
        <div className="flex space-x-4 mb-6">
          <div className="flex bg-gray-900/60 backdrop-blur-sm rounded-lg p-1 border border-gray-800/50">
            {[
              { id: 'companion', label: 'AI Companion', icon: '🤖' },
              { id: 'quick-access', label: 'Quick Tools', icon: '⚡' },
              { id: 'pipeline', label: 'Pipeline', icon: '🔄' },
              { id: 'notes', label: 'Notes', icon: '📝' },
              { id: 'analytics', label: 'Analytics', icon: '📊' },
              { id: 'features', label: 'Features', icon: '🎯' }
            ].map((panel) => (
              <button
                key={panel.id}
                onClick={() => setActivePanel(panel.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activePanel === panel.id
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span>{panel.icon}</span>
                <span>{panel.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Panel Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Panel (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6 shadow-xl">
              {renderActivePanel()}
            </div>
          </div>

          {/* Side Panel (1/3 width) */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Today&apos;s Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tasks Completed</span>
                  <span className="text-yellow-400 font-semibold">12</span>
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

            {/* Quick Actions */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-md text-sm transition-colors">
                  🚀 Start New Project
                </button>
                <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-md text-sm transition-colors">
                  📊 Generate Report
                </button>
                <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-md text-sm transition-colors">
                  💡 Get AI Suggestions
                </button>
                <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-md text-sm transition-colors">
                  ⚙️ Workspace Settings
                </button>
              </div>
            </div>

            {/* Upgrade CTA (for free users) */}
            {userTier === 'free' && (
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-lg border border-yellow-500/30 p-4 shadow-xl">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Unlock More Power</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Upgrade to Pro for unlimited AI interactions and advanced features
                </p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md transition-colors">
                  Upgrade Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
