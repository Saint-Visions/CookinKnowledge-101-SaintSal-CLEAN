'use client';

import { useState } from 'react';
import PartnerTechCompanion from '@/components/partnertech/PartnerTechCompanion';

export default function CEODashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Header */}
      <header className="bg-gray-900 border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8">
              <img 
                src="/images/sv-logo.png" 
                alt="SaintVision AI"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#F4D03F]">CEO Dashboard</h1>
              <p className="text-gray-400 text-sm">CookinKnowledge + PartnerTech.ai</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              <a href="/workspace/saintgpt" className="text-gray-400 hover:text-white transition-colors text-sm">SaintGPT</a>
              <a href="/workspace/saintgpt41-search" className="text-gray-400 hover:text-white transition-colors text-sm">Search</a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
            </nav>
            <div className="w-8 h-8 bg-[#F4D03F] rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">CEO</span>
            </div>
          </div>
        </div>
      </header>

      {/* CEO Dashboard Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side: Dashboard Boxes */}
          <div className="space-y-6">
            {/* CookinKnowledge Dashboard */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-[#F4D03F] mb-4">CookinKnowledge Dashboard</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">47</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">$24.5K</div>
                  <div className="text-sm text-gray-400">Revenue MTD</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">98.7%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">23</div>
                  <div className="text-sm text-gray-400">New Leads</div>
                </div>
              </div>
            </div>

            {/* PartnerTech.ai Dashboard */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-[#F4D03F] mb-4">PartnerTech.ai Dashboard</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-sm text-gray-400">Total Contacts</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">18.2%</div>
                  <div className="text-sm text-gray-400">Conversion Rate</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">8</div>
                  <div className="text-sm text-gray-400">Meetings Set</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">$57.5K</div>
                  <div className="text-sm text-gray-400">Pipeline Value</div>
                </div>
              </div>
            </div>

            {/* Tools & Actions */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-[#F4D03F] mb-4">Tools & Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => window.location.href = '/workspace/saintgpt'}
                  className="bg-[#F4D03F] hover:bg-[#F1C40F] text-black font-bold py-4 px-6 rounded-lg transition-colors"
                >
                  Launch SaintGPT
                </button>
                <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                  Open PartnerTech
                </button>
                <button 
                  onClick={() => window.location.href = '/workspace/saintgpt41-search'}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-lg transition-colors"
                >
                  AI Search
                </button>
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                  Analytics
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: CRM Widget */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 h-fit">
            <h3 className="text-xl font-bold text-[#F4D03F] mb-4">GoHighLevel CRM</h3>
            
            {/* CRM Sign In Widget */}
            <div className="bg-white rounded-lg p-6">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Sign into your account</h4>
                <p className="text-gray-600">Access your GoHighLevel CRM dashboard</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input 
                    type="password" 
                    placeholder="The password you picked"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>

                <div className="text-right">
                  <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Sign in
                </button>

                <div className="text-center text-gray-500">
                  <span className="text-sm">Or continue with</span>
                </div>

                <button className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Sign in with Google</span>
                </button>

                <div className="text-center text-sm text-gray-600">
                  By signing in you agree to our <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PartnerTech.ai Companion */}
      <PartnerTechCompanion />
    </div>
  );
}
