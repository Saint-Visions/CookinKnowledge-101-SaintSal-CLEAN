'use client';

import { useState } from 'react';
import BuilderWrapper from '@/components/builder/BuilderComponent';

export default function BuilderIntegration() {
  const [selectedModel, setSelectedModel] = useState('page');
  const [apiKey, setApiKey] = useState('');

  const models = [
    { id: 'page', name: 'Page', description: 'Full page layouts', color: 'from-[#F4D03F] to-[#F1C40F]' },
    { id: 'section', name: 'Section', description: 'Page sections', color: 'from-cyan-400 to-cyan-500' },
    { id: 'component', name: 'Component', description: 'Reusable components', color: 'from-purple-400 to-purple-500' },
    { id: 'cookin-workspace', name: 'Cookin Workspace', description: 'Custom workspace components', color: 'from-green-400 to-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Apple-Style Header */}
      <div className="bg-gray-800/60 backdrop-blur-xl border-b border-[#F4D03F]/20 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Builder Studio</h1>
                <p className="text-[#F4D03F] text-lg">COOKIN' KNOWLEDGE × FIGMA INTEGRATION</p>
              </div>
            </div>
          <a 
            href="/workspace" 
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ← Back to Workspace
          </a>
        </div>

        {/* API Key Setup */}
        <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-yellow-400">🔑</span>
            <span className="text-yellow-400 font-medium">API Key Setup</span>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Builder.io API key..."
              className="flex-1 bg-black/50 border border-yellow-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <button 
              onClick={() => {
                if (apiKey) {
                  // Initialize Builder with the API key
                  localStorage.setItem('builder-api-key', apiKey);
                  alert('API key saved! Refresh to apply.');
                }
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Save
            </button>
          </div>
          <div className="text-xs text-gray-400 mt-2">
            Get your API key from: <a href="https://builder.io/account/organization" target="_blank" className="text-yellow-400 hover:underline">builder.io/account/organization</a>
          </div>
        </div>

        {/* Model Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={`p-4 rounded-xl border transition-all text-left ${
                selectedModel === model.id
                  ? 'bg-yellow-400/20 border-yellow-400 text-yellow-400'
                  : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <div className="font-medium mb-1">{model.name}</div>
              <div className="text-xs opacity-70">{model.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Builder Content Area */}
      <div className="p-6">
        <div className="bg-gray-900 rounded-xl border border-yellow-400/20 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              Builder.io Content: <span className="text-yellow-400">{selectedModel}</span>
            </h2>
            <div className="flex items-center space-x-4">
              <a 
                href={`https://builder.io/content/${selectedModel}`}
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                🔗 Edit in Builder.io
              </a>
              <button 
                onClick={() => window.location.reload()}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                🔄 Refresh
              </button>
            </div>
          </div>

          {/* Builder Component */}
          <BuilderWrapper 
            model={selectedModel}
            className="min-h-96"
            data={{
              theme: 'cookin-knowledge',
              brand: 'SaintSal™',
              colors: {
                primary: '#FCD34D', // yellow-400
                background: '#000000',
                sidebar: '#111827' // gray-900
              }
            }}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/50 border border-yellow-400/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">🎨 Design Tools</h3>
            <div className="space-y-3">
              <a 
                href="https://builder.io" 
                target="_blank"
                className="block p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <div className="text-white font-medium">Builder.io Dashboard</div>
                <div className="text-xs text-gray-400">Visual editor</div>
              </a>
              <a 
                href="https://www.figma.com" 
                target="_blank"
                className="block p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <div className="text-white font-medium">Figma</div>
                <div className="text-xs text-gray-400">Design system</div>
              </a>
            </div>
          </div>

          <div className="bg-black/50 border border-yellow-400/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">⚡ Quick Start</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>1. Add your Builder.io API key above</div>
              <div>2. Create content in Builder.io dashboard</div>
              <div>3. Select model type to view content</div>
              <div>4. Use visual editor to design</div>
            </div>
          </div>

          <div className="bg-black/50 border border-yellow-400/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">🚀 Integration</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-300">
                Builder.io is connected to your "Cookin' Knowledge" theme with:
              </div>
              <div className="text-xs space-y-1">
                <div className="text-yellow-400">• Golden accent colors</div>
                <div className="text-gray-400">• Dark charcoal backgrounds</div>
                <div className="text-white">• SaintSal™ branding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
