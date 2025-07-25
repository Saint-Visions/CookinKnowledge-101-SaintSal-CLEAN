'use client';

import { useState } from 'react';

interface Tool {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'ai' | 'business' | 'creative';
  premium: boolean;
}

export default function QuickTools() {
  const [tools] = useState<Tool[]>([
    { id: '1', name: 'Content Writer', icon: '✍️', description: 'AI content generation', category: 'ai', premium: false },
    { id: '2', name: 'Image Generator', icon: '🎨', description: 'Create stunning visuals', category: 'creative', premium: true },
    { id: '3', name: 'CRM Sync', icon: '🔄', description: 'PartnerTech integration', category: 'business', premium: false },
    { id: '4', name: 'Strategy Advisor', icon: '🧠', description: 'Business intelligence', category: 'ai', premium: true },
    { id: '5', name: 'Email Builder', icon: '📧', description: 'Smart email campaigns', category: 'business', premium: false },
    { id: '6', name: 'Code Assistant', icon: '⚡', description: 'Development helper', category: 'ai', premium: true }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'business' | 'creative'>('all');

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'bg-blue-500/20 text-blue-400';
      case 'business': return 'bg-green-500/20 text-green-400';
      case 'creative': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="flex space-x-2 mb-4">
        {['all', 'ai', 'business', 'creative'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as any)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              selectedCategory === category
                ? 'bg-gold text-black'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filteredTools.map(tool => (
          <button
            key={tool.id}
            className="p-4 bg-black/50 border border-gray-600 rounded-lg hover:border-gold transition group"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{tool.icon}</span>
              <div className="flex-1 text-left">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-medium text-white group-hover:text-gold">
                    {tool.name}
                  </h4>
                  {tool.premium && (
                    <span className="text-xs bg-gold/20 text-gold px-1 py-0.5 rounded">
                      PRO
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">{tool.description}</p>
                <span className={`inline-block px-2 py-0.5 rounded text-xs mt-2 ${getCategoryColor(tool.category)}`}>
                  {tool.category}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Usage Stats */}
      <div className="mt-6 p-3 bg-gold/10 border border-gold/30 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gold">Today's Usage</span>
          <span className="text-sm text-white">12 / 100 tools used</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div className="bg-gold h-2 rounded-full" style={{ width: '12%' }}></div>
        </div>
      </div>
    </div>
  );
}
