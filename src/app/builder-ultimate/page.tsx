'use client';

import { useState, useEffect } from 'react';
import TopNav from "@/components/TopNav";
import BuilderWrapper from '@/components/builder/BuilderComponent';
import GlobalFooter from '@/components/layout/GlobalFooter';
import Link from 'next/link';

export default function UltimateBuilderDashboard() {
  const [activeModel, setActiveModel] = useState('homepage-hero');
  const [isEnterprise, setIsEnterprise] = useState(true);
  const [builderStatus, setBuilderStatus] = useState('loading');

  useEffect(() => {
    // Check enterprise features
    const checkStatus = async () => {
      try {
        // Simulate enterprise check
        setTimeout(() => {
          setBuilderStatus('enterprise-ready');
        }, 1000);
      } catch (error) {
        setBuilderStatus('error');
      }
    };
    checkStatus();
  }, []);

  const contentModels = [
    { 
      id: 'homepage-hero', 
      name: 'Homepage Hero', 
      icon: '🏠',
      description: 'Main landing page hero section',
      path: '/'
    },
    { 
      id: 'workspace-components', 
      name: 'War Room Components', 
      icon: '⚡',
      description: 'Workspace UI components',
      path: '/workspace'
    },
    { 
      id: 'pricing-sections', 
      name: 'Pricing Tiers', 
      icon: '💰',
      description: 'Stripe-integrated pricing',
      path: '/pricing'
    },
    { 
      id: 'dashboard-widgets', 
      name: 'Dashboard Widgets', 
      icon: '📊',
      description: 'CRM and analytics widgets',
      path: '/dashboard'
    },
    { 
      id: 'onboarding-flow', 
      name: 'Onboarding Flow', 
      icon: '🚀',
      description: 'User signup and setup',
      path: '/signup'
    },
    { 
      id: 'mobile-components', 
      name: 'Mobile PWA', 
      icon: '📱',
      description: 'Mobile-optimized components',
      path: '/mobile'
    },
    { 
      id: 'partner-portal', 
      name: 'Partner Portal', 
      icon: '🤝',
      description: 'PartnerTech.ai integration',
      path: '/partner'
    },
    { 
      id: 'ai-chat-interface', 
      name: 'AI Chat Interface', 
      icon: '🤖',
      description: 'OpenAI + Azure AI components',
      path: '/chat'
    }
  ];

  const enterpriseFeatures = [
    '🔥 Stripe Live Billing Integration',
    '⚡ Azure OpenAI Enterprise API',
    '📞 Twilio SMS/Phone Integration', 
    '💾 Supabase Real-time Database',
    '🎯 GHL CRM Synchronization',
    '📱 PWA Mobile Features',
    '🔒 Enterprise-grade Security'
  ];

  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-black text-white">
        {/* ENTERPRISE HEADER */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-yellow-400/20 pt-24 pb-6 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-xl shadow-yellow-400/30">
                <span className="text-black font-bold text-xl">🎨</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">ULTIMATE Builder.io Dashboard</h1>
                <p className="text-yellow-400 text-sm font-medium">SAINTSAL™ COOKIN' KNOWLEDGE ENTERPRISE</p>
              </div>
            </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-4 py-2 rounded-lg font-bold text-sm">
              {builderStatus === 'enterprise-ready' ? '🔥 ENTERPRISE ACTIVE' : '⏳ LOADING...'}
            </div>
            <Link href="/workspace" className="text-gray-300 hover:text-yellow-400 transition-colors">
              ← Back to War Room
            </Link>
          </div>
        </div>

        {/* Enterprise Status Bar */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-black/30 rounded-lg p-3 border border-green-500/30">
            <div className="text-green-400 text-xs font-bold">BUILDER.IO</div>
            <div className="text-white text-sm">Enterprise Connected</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-blue-500/30">
            <div className="text-blue-400 text-xs font-bold">STRIPE</div>
            <div className="text-white text-sm">Live Billing Active</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
            <div className="text-purple-400 text-xs font-bold">OPENAI</div>
            <div className="text-white text-sm">Enterprise API</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-cyan-500/30">
            <div className="text-cyan-400 text-xs font-bold">SUPABASE</div>
            <div className="text-white text-sm">Real-time DB</div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* LEFT SIDEBAR - Content Models */}
        <div className="w-80 bg-gray-900 border-r border-yellow-400/20 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="mr-2">🎯</span>
            Content Models
          </h3>
          
          <div className="space-y-2 mb-8">
            {contentModels.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeModel === model.id
                    ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/40 text-yellow-400'
                    : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border border-gray-700/50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-lg">{model.icon}</span>
                  <div className="font-medium">{model.name}</div>
                </div>
                <div className="text-xs opacity-70">{model.description}</div>
                <div className="text-xs mt-1 font-mono opacity-50">{model.path}</div>
              </button>
            ))}
          </div>

          {/* Enterprise Features */}
          <div className="bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-red-500/10 rounded-xl border border-yellow-400/30 p-4">
            <h4 className="text-yellow-400 font-bold mb-3 flex items-center">
              <span className="mr-2">⚡</span>
              Enterprise Arsenal
            </h4>
            <div className="space-y-1">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="text-xs text-gray-300 flex items-center">
                  <span className="mr-2">✅</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 p-6">
          <div className="bg-gray-900 rounded-xl border border-yellow-400/20 p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                🎨 <span className="text-yellow-400">{contentModels.find(m => m.id === activeModel)?.name}</span>
              </h2>
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all">
                  🔗 Open in Builder.io
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-all">
                  📱 Preview Mobile
                </button>
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-sm transition-all">
                  🚀 Publish Live
                </button>
              </div>
            </div>

            {/* Builder.io Content Renderer */}
            <div className="h-full bg-black/30 rounded-xl border border-yellow-400/10 overflow-hidden">
              <BuilderWrapper 
                model={activeModel}
                className="h-full"
                data={{
                  theme: 'saintsal-enterprise',
                  brand: 'COOKIN_KNOWLEDGE',
                  user: 'ryan_capatosto',
                  tier: 'enterprise',
                  features: {
                    stripe: true,
                    openai: true,
                    azure: true,
                    supabase: true,
                    twilio: true,
                    ghl: true,
                    pwa: true
                  },
                  colors: {
                    primary: '#facc15', // yellow-400
                    secondary: '#f97316', // orange-500  
                    background: '#000000',
                    surface: '#1f2937', // gray-800
                    accent: '#eab308' // yellow-500
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR - Live Controls */}
        <div className="w-80 bg-gray-900 border-l border-yellow-400/20 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="mr-2">⚡</span>
            Live Controls
          </h3>

          <div className="space-y-4">
            {/* Real-time Stats */}
            <div className="bg-black/50 rounded-xl border border-yellow-400/20 p-4">
              <h4 className="text-yellow-400 font-bold mb-3">📊 Real-time Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Active Users</span>
                  <span className="text-green-400 font-bold">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Page Views</span>
                  <span className="text-cyan-400 font-bold">1,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Conversions</span>
                  <span className="text-yellow-400 font-bold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Revenue</span>
                  <span className="text-green-400 font-bold">$12,847</span>
                </div>
              </div>
            </div>

            {/* Quick Deploy */}
            <div className="bg-black/50 rounded-xl border border-yellow-400/20 p-4">
              <h4 className="text-yellow-400 font-bold mb-3">🚀 Quick Deploy</h4>
              <div className="space-y-2">
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black py-2 rounded-lg text-sm font-bold transition-all">
                  Deploy to Production
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 rounded-lg text-sm font-bold transition-all">
                  Deploy to Staging
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition-all">
                  Save as Draft
                </button>
              </div>
            </div>

            {/* Integration Status */}
            <div className="bg-black/50 rounded-xl border border-yellow-400/20 p-4">
              <h4 className="text-yellow-400 font-bold mb-3">🔌 Integrations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Stripe Billing</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">OpenAI GPT-4</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Azure AI</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Supabase DB</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Twilio SMS</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">GHL CRM</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Ryan's Authority Badge */}
            <div className="bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-red-500/20 rounded-xl border border-yellow-400/40 p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">👑</div>
                <div className="text-yellow-400 font-bold text-sm">RYAN'S ENTERPRISE</div>
                <div className="text-xs text-gray-300 mt-1">Full Authority Granted</div>
                <div className="text-xs text-yellow-400/70 mt-2">COOKIN' KNOWLEDGE</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
