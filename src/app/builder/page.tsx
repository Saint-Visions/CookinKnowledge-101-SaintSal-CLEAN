'use client';

import { useState } from 'react';
import TopNav from "@/components/TopNav";
import GlobalFooter from '@/components/layout/GlobalFooter';

export default function BuilderPage() {
  return (
    <>
    <TopNav />
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="bg-gray-800/60 backdrop-blur-xl border-b border-gray-700 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏗️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Builder</h1>
                <p className="text-gray-400">Visual page builder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
          <p className="text-gray-300 mb-6">
            Our visual page builder is currently in development. 
            You can create custom layouts and components here.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Page Builder</h3>
              <p className="text-gray-400">Build complete pages visually</p>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Components</h3>
              <p className="text-gray-400">Create reusable components</p>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Templates</h3>
              <p className="text-gray-400">Pre-built templates</p>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
    </>
  );
}
