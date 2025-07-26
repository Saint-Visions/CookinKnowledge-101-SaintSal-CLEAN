import Link from 'next/link';
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookinKnowledgeHomepage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const enterpriseFeatures = [
    {
      title: "AI War Room Command",
      description: "Pure fire AI automation with OpenAI GPT-4 that runs your business while you sleep",
      icon: "🔥",
      metric: "3000+ Decisions Automated",
      color: "from-yellow-400 to-orange-600"
    },
    {
      title: "Golden CRM Arsenal", 
      description: "GoHighLevel integration that turns leads into gold - automatic pipeline domination",
      icon: "👑",
      metric: "$2.3M+ Revenue Tracked",
      color: "from-amber-400 to-yellow-600"
    },
    {
      title: "Communication Empire",
      description: "Twilio-powered messages that hit different - SMS, email, voice automation that converts",
      icon: "⚡",
      metric: "50K+ Messages Sent",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Money Machine Intelligence",
      description: "Stripe billing automation that prints money - revenue analytics that make you rich",
      icon: "💸",
      metric: "99.9% Payment Success",
      color: "from-yellow-500 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* CLEAN DARK BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-yellow-500/8 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      </div>

      {/* TOP NAVIGATION */}
      <nav className="relative z-20 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-400/25">
              <span className="text-black font-bold text-lg">Sv.</span>
            </div>
            <div>
              <div className="text-yellow-400 font-bold text-xl">SaintSal™</div>
              <div className="text-xs text-yellow-400/70">COOKIN' KNOWLEDGE</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/workspace" className="text-gray-300 hover:text-yellow-400 transition-colors">War Room</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</Link>
            <Link href="/partner" className="text-gray-300 hover:text-yellow-400 transition-colors">Partners</Link>
            <Link href="/workspace" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all">
              Enter Platform
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - CLEAN DARK STYLE */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* BRAND IDENTITY */}
          <div className={`mb-12 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-400/30">
                <span className="text-black font-bold text-3xl">Sv.</span>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-yellow-400">SaintSal™</div>
                <div className="text-lg text-yellow-400/70 tracking-wider font-medium">COOKIN' KNOWLEDGE</div>
                <div className="text-sm text-gray-400">Enterprise AI Automation</div>
              </div>
            </div>
          </div>

          {/* MAIN HEADLINE - CLEAN & POLISHED */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 delay-300 tracking-tight ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              COOKIN'
            </span>
            <br />
            <span className="text-white">
              KNOWLEDGE
            </span>
          </h1>

          {/* VALUE PROPOSITION - CLEAN */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            The most advanced AI platform that's about to 
            <span className="text-yellow-400 font-bold"> change your life</span>, 
            <span className="text-yellow-500 font-bold"> dominate your competition</span>, 
            <span className="text-amber-500 font-bold"> and make you successful</span>.
          </p>

          {/* CTA BUTTONS - CLEAN STYLE */}
          <div className={`flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-16 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link 
              href="/workspace"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-black px-12 py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-400/20 transform hover:scale-105 transition-all"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            >
              🔥 START COOKIN'
            </Link>
            <Link 
              href="/builder-ultimate"
              className="bg-transparent border-2 border-yellow-400/50 hover:border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400/10 px-12 py-4 rounded-xl font-bold text-lg transition-all"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            >
              👑 ULTIMATE BUILDER
            </Link>
          </div>

          {/* SOCIAL PROOF - NO BOXES */}
          <div className={`text-center transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-yellow-400/70 text-sm mb-8 font-bold tracking-wider">TRUSTED BY ENTERPRISE LEADERS</div>
            <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-yellow-400 text-2xl font-bold">$50M+</div>
                <div className="text-gray-400 text-sm">Revenue Managed</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-2xl font-bold">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-2xl font-bold">SOC 2</div>
                <div className="text-gray-400 text-sm">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-2xl font-bold">24/7</div>
                <div className="text-gray-400 text-sm">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - CLEAN DARK */}
      <section className="relative z-10 py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              POWERFUL <span className="text-yellow-400">ARSENAL</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              Enterprise-grade business automation tools that give you the competitive edge
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? `opacity-100` 
                    : 'opacity-80 hover:opacity-100'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-5xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>{feature.title}</h3>
                    <p className="text-gray-300 text-lg mb-4 leading-relaxed">{feature.description}</p>
                    <div className="text-yellow-400 font-bold text-sm">{feature.metric}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI COMPANIONS SECTION - CLEAN */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              AI <span className="text-yellow-400">COMPANION</span> ARMY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              Five specialized AI companions working 24/7 for your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="group cursor-pointer text-center">
              <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  <span className="text-black text-xl font-bold">Sv.</span>
                </div>
                <h4 className="text-yellow-400 font-bold text-lg mb-1" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>SaintSal™</h4>
                <p className="text-yellow-400/80 text-sm font-medium">MASTER AI</p>
                <p className="text-gray-400 text-xs mt-1">Command Center</p>
              </div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <span className="text-black text-xl font-bold">A</span>
                </div>
                <h4 className="text-yellow-500 font-bold text-lg mb-1" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Athena</h4>
                <p className="text-yellow-500/80 text-sm font-medium">HEALTHCARE AI</p>
                <p className="text-gray-400 text-xs mt-1">Medical Intelligence</p>
              </div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <span className="text-black text-xl font-bold">E</span>
                </div>
                <h4 className="text-amber-400 font-bold text-lg mb-1" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>EbyTech</h4>
                <p className="text-amber-400/80 text-sm font-medium">FINANCE AI</p>
                <p className="text-gray-400 text-xs mt-1">Financial Operations</p>
              </div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <span className="text-black text-xl font-bold">L</span>
                </div>
                <h4 className="text-yellow-500 font-bold text-lg mb-1" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>SVTLegal</h4>
                <p className="text-yellow-500/80 text-sm font-medium">LEGAL AI</p>
                <p className="text-gray-400 text-xs mt-1">Legal Operations</p>
              </div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center">
                  <span className="text-black text-xl font-bold">P</span>
                </div>
                <h4 className="text-yellow-600 font-bold text-lg mb-1" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>PartnerTech</h4>
                <p className="text-yellow-600/80 text-sm font-medium">CRM AI</p>
                <p className="text-gray-400 text-xs mt-1">Sales Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - CLEAN STYLE */}
      <footer className="relative z-10 bg-gray-900 border-t border-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-400/25">
                  <span className="text-black font-bold text-lg">Sv.</span>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-xl">SaintSal™</div>
                  <div className="text-xs text-yellow-400/70">COOKIN' KNOWLEDGE</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Enterprise AI automation platform for serious business leaders who want to dominate their markets.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <div className="space-y-2">
                <Link href="/workspace" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">War Room</Link>
                <Link href="/builder-ultimate" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Ultimate Builder</Link>
                <Link href="/pricing" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Pricing</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Enterprise</h4>
              <div className="space-y-2">
                <Link href="/partner" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Partners</Link>
                <Link href="/institute" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">SVT Institute</Link>
                <Link href="/security" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors">Security</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-400/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm">
                © 2025 SaintVisionAI™. All rights reserved. COOKIN' KNOWLEDGE.
              </div>
              <div className="text-yellow-400 text-sm font-bold mt-4 md:mt-0">
                🔥 ENTERPRISE READY
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
