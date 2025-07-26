'use client';

import { useState } from 'react';
import GlobalFooter from '@/components/layout/GlobalFooter';

export default function PartnerTechDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-[#1a1f36] border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SV</span>
              </div>
              <div>
                <h1 className="text-white font-semibold">SaintVisionAI™</h1>
                <p className="text-xs text-gray-400">Build 5.0 • Pro</p>
              </div>
            </div>
            
            <div className="text-2xl font-bold text-white">PartnerTech.ai</div>
            <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">CRM</div>
            
            <div className="flex items-center space-x-4 ml-8">
              <div className="text-sm text-green-400">CookinKnowledge</div>
              <div className="text-xs text-gray-400">Powered by GoHighLevel + HACP™</div>
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium">
              📊 Dashboard
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              👥 Contacts
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              📅 Calendar
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              💬 Messages
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              🔌 API Status
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              🔄
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
              🔗
            </button>
          </nav>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - CRM Live Data */}
        <div className="w-64 bg-[#1a1f36] border-r border-gray-700 p-6">
          <h3 className="text-white font-semibold mb-4">CRM LIVE DATA</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">👥</span>
                <span className="text-gray-300 text-sm">New Leads</span>
              </div>
              <span className="text-white font-bold">47</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">💰</span>
                <span className="text-gray-300 text-sm">Pipeline Value</span>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">$247K</div>
                <div className="text-green-400 text-xs">+18%</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">📞</span>
                <span className="text-gray-300 text-sm">Calls Today</span>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">23</div>
                <div className="text-gray-400 text-xs">+7</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">📈</span>
                <span className="text-gray-300 text-sm">Conversion Rate</span>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">34.2%</div>
                <div className="text-green-400 text-xs">+5.2%</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
              + New Contact
            </button>
          </div>

          <div className="mt-6">
            <h4 className="text-gray-400 text-xs uppercase mb-3">FAVORITES</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="text-blue-400">📊</span>
                <span className="text-gray-300 text-sm">Main Dashboard</span>
                <span className="text-yellow-400 ml-auto">⭐</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="text-green-400">👤</span>
                <span className="text-gray-300 text-sm">My Companion</span>
                <span className="text-yellow-400 ml-auto">⭐</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="text-purple-400">💼</span>
                <span className="text-gray-300 text-sm">My Business</span>
                <span className="text-yellow-400 ml-auto">⭐</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="text-cyan-400">🚀</span>
                <span className="text-gray-300 text-sm">PartnerTech.ai CRM</span>
                <span className="text-yellow-400 ml-auto">⭐</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-orange-400">📝</span>
                <span className="text-white text-sm font-medium">Sticky Notes</span>
              </div>
              <p className="text-xs text-gray-400">Quick Notes & Ideas</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400">👨‍💼</span>
                <span className="text-white text-sm font-medium">Admin Portal</span>
              </div>
              <p className="text-xs text-gray-400">Build 5.0 • jcrm</p>
              <span className="text-yellow-400 text-xs">⭐</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100">
          {/* Chart Header */}
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">📊</span>
              <span className="text-gray-600 text-sm">Analytics Overview</span>
            </div>
          </div>

          {/* Sign In Form */}
          <div className="flex items-center justify-center h-full p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign into your account</h2>
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

              {/* Google Sign-in Popup Simulation */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200 w-80">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="font-medium text-gray-800">Sign in to HighLevel with Google</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">✕</button>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    R
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Ryan Capatosto</div>
                    <div className="text-sm text-gray-600">ryan.capatosto@gmail.com</div>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
                  Continue as Ryan
                </button>

                <div className="mt-3 text-xs text-gray-600">
                  To create your account, Google will share your name, email address, and profile picture with HighLevel. See HighLevel's privacy policy and terms of service.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1a1f36] border-t border-gray-700 p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-green-400">● Connected to SaintVision CRM • Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Sync: Real-time • API: Active</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </div>
  );
}
