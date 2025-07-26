'use client';

import { useState } from 'react';
import GlobalFooter from '@/components/layout/GlobalFooter';

interface SearchResult {
  id: number;
  title: string;
  snippet: string;
  source: string;
  relevance: number;
}

export default function SaintGpt41Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setSearchResults([
        {
          id: 1,
          title: "Enterprise AI Architecture Best Practices",
          snippet: "Learn how to implement enterprise-grade AI solutions with SaintSal™ technology...",
          source: "Knowledge Base",
          relevance: 98
        },
        {
          id: 2,
          title: "PartnerTech CRM Integration Guide",
          snippet: "Step-by-step guide to integrating your CRM with our AI companion system...",
          source: "Documentation",
          relevance: 94
        },
        {
          id: 3,
          title: "Faith-Aligned Security Protocols",
          snippet: "Understanding our values-first approach to enterprise data protection...",
          source: "Security Docs",
          relevance: 91
        }
      ]);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.008] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/images/transparent dawg saintsaltm cookin knowledge  copy.png" 
            alt="Cookin' Knowledge Background"
            className="w-96 h-auto object-contain -rotate-12"
          />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/80 backdrop-blur-sm border-b border-gray-800/50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10">
              <img 
                src="/images/sv-logo.png" 
                alt="SaintVision AI"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">SaintGpt41 Search</h1>
              <p className="text-xs text-gold font-medium">Enterprise Knowledge Discovery</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white/70 hover:text-white text-sm">Settings</button>
            <button className="text-white/70 hover:text-white text-sm">History</button>
          </div>
        </div>
      </header>

      {/* Main Search Interface */}
      <main className="relative z-10 pt-8">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                placeholder="Search enterprise knowledge, docs, APIs, and more..."
                className="w-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 pr-16 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50 transition-colors text-lg"
              />
              <button 
                onClick={() => handleSearch(searchQuery)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold hover:bg-gold/90 text-black px-4 py-2 rounded-lg transition-colors font-medium"
              >
                {isSearching ? '...' : 'Search'}
              </button>
            </div>
          </div>

          {/* Search Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm border border-gold/30">
                All Results
              </button>
              <button className="bg-gray-800/60 text-white/70 hover:text-white px-4 py-2 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                Documentation
              </button>
              <button className="bg-gray-800/60 text-white/70 hover:text-white px-4 py-2 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                API Reference
              </button>
              <button className="bg-gray-800/60 text-white/70 hover:text-white px-4 py-2 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                Knowledge Base
              </button>
              <button className="bg-gray-800/60 text-white/70 hover:text-white px-4 py-2 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                Security Docs
              </button>
            </div>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Search Results</h2>
                <span className="text-gray-400 text-sm">{searchResults.length} results found</span>
              </div>

              {searchResults.map((result) => (
                <div key={result.id} className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 hover:border-gold/30 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white hover:text-gold transition-colors">
                      {result.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400 bg-gray-800/60 px-2 py-1 rounded">
                        {result.source}
                      </span>
                      <span className="text-xs text-gold font-medium">
                        {result.relevance}% match
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {result.snippet}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="text-gold hover:text-gold/80 text-sm font-medium">
                      Read More →
                    </button>
                    <button className="text-gray-400 hover:text-white text-sm">
                      Save
                    </button>
                    <button className="text-gray-400 hover:text-white text-sm">
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {searchResults.length === 0 && !isSearching && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center">
                <span className="text-gold text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ready to Search</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Enter your query above to search through our enterprise knowledge base, documentation, and resources.
              </p>
            </div>
          )}

          {/* Loading State */}
          {isSearching && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Searching...</h3>
              <p className="text-gray-400">
                SaintGpt41 is analyzing your query across all knowledge sources
              </p>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-16 mb-8">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/30 p-4 hover:border-gold/20 transition-all cursor-pointer">
                <h4 className="text-gold font-medium mb-2">📚 Browse Documentation</h4>
                <p className="text-gray-400 text-sm">Explore our complete API and feature documentation</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/30 p-4 hover:border-cyan-400/20 transition-all cursor-pointer">
                <h4 className="text-cyan-400 font-medium mb-2">🔧 API Reference</h4>
                <p className="text-gray-400 text-sm">Technical references and integration guides</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/30 p-4 hover:border-purple-400/20 transition-all cursor-pointer">
                <h4 className="text-purple-400 font-medium mb-2">🎓 Learning Center</h4>
                <p className="text-gray-400 text-sm">Tutorials and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Companion - Will be added after building */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-full shadow-2xl shadow-gold/20 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <span className="text-black text-xl">🤖</span>
        </div>
      </div>
      <GlobalFooter />
    </div>
  );
}
