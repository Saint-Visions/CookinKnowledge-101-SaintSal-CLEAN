
"use client";

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
      title: "AI-Powered War Room",
      description: "Advanced business intelligence powered by OpenAI GPT-4 and Azure AI Enterprise",
      icon: "🧠",
      metric: "3000+ Decisions Automated",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Enterprise CRM Arsenal", 
      description: "GoHighLevel integration with real-time pipeline management and automation",
      icon: "📊",
      metric: "$2.3M+ Revenue Tracked",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Communication Dominance",
      description: "Twilio-powered SMS, email, and voice automation workflows",
      icon: "📱",
      metric: "50K+ Messages Sent",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Financial Intelligence",
      description: "Stripe-integrated billing, revenue analytics, and subscription management",
      icon: "💰",
      metric: "99.9% Payment Success",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* ANIMATED BACKGROUND - YOUR STYLE */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-yellow-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
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

      {/* HERO SECTION - YOUR DARK STYLE */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* BRAND IDENTITY - YOUR STYLE */}
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

          {/* MAIN HEADLINE - YOUR STYLE */}
          <h1 className={`text-7xl md:text-9xl font-bold mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              ENTERPRISE
            </span>
            <br />
            <span className="text-white">
              WAR ROOM
            </span>
          </h1>

          {/* VALUE PROPOSITION */}
          <p className={`text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            The most advanced AI-powered business intelligence platform. 
            <span className="text-yellow-400 font-bold"> Automate everything</span>, 
            <span className="text-orange-400 font-bold"> dominate your market</span>, 
            <span className="text-red-400 font-bold"> scale infinitely</span>.
          </p>

          {/* CTA BUTTONS - YOUR STYLE */}
          <div className={`flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-16 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link 
              href="/workspace"
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-black px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-yellow-400/30 transform hover:scale-105 transition-all"
            >
              🔥 ENTER WAR ROOM
            </Link>
            <Link 
              href="/builder-ultimate"
              className="bg-gray-900 hover:bg-gray-800 border-2 border-yellow-400/40 hover:border-yellow-400 text-yellow-400 hover:text-white px-16 py-6 rounded-2xl font-bold text-xl transition-all"
            >
              👑 ULTIMATE BUILDER
            </Link>
          </div>

          {/* SOCIAL PROOF - YOUR STYLE */}
          <div className={`text-center transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-yellow-400/70 text-sm mb-6 font-bold tracking-wider">ENTERPRISE ARSENAL ACTIVE</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-4">
                <div className="text-green-400 text-2xl mb-2">✅</div>
                <div className="text-yellow-400 text-lg font-bold">$50M+</div>
                <div className="text-gray-400 text-sm">Revenue Managed</div>
              </div>
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-4">
                <div className="text-cyan-400 text-2xl mb-2">⚡</div>
                <div className="text-cyan-400 text-lg font-bold">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-4">
                <div className="text-purple-400 text-2xl mb-2">🔒</div>
                <div className="text-purple-400 text-lg font-bold">SOC 2</div>
                <div className="text-gray-400 text-sm">Compliant</div>
              </div>
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-4">
                <div className="text-orange-400 text-2xl mb-2">🚀</div>
                <div className="text-orange-400 text-lg font-bold">24/7</div>
                <div className="text-gray-400 text-sm">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE FEATURES SECTION - YOUR STYLE */}
      <section className="relative z-10 py-32 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">
              ENTERPRISE <span className="text-yellow-400">ARSENAL</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Military-grade business automation tools that give you unfair competitive advantages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? `bg-gradient-to-br ${feature.color}/10 border-yellow-400/40 shadow-2xl shadow-yellow-400/10 transform scale-105` 
                    : 'bg-gray-900/50 border-gray-700/50 hover:border-yellow-400/30'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-lg mb-4 leading-relaxed">{feature.description}</p>
                    <div className="bg-black/50 rounded-lg px-4 py-2 inline-block border border-yellow-400/20">
                      <span className="text-yellow-400 font-bold text-sm">{feature.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI COMPANIONS SECTION - YOUR STYLE */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">
              AI <span className="text-yellow-400">COMPANION</span> ARMY
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Five specialized AI companions working 24/7 to dominate your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/15 hover:shadow-yellow-400/25 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/25">
                    <span className="text-black text-2xl font-bold">Sv.</span>
                  </div>
                  <h4 className="text-yellow-400 font-bold text-xl mb-2">SaintSal™</h4>
                  <p className="text-yellow-400/80 text-sm font-medium">MASTER AI</p>
                  <p className="text-gray-400 text-xs mt-2">Command Center</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/40 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
                    <span className="text-black text-2xl font-bold">A</span>
                  </div>
                  <h4 className="text-cyan-400 font-bold text-xl mb-2">Athena</h4>
                  <p className="text-cyan-400/80 text-sm font-medium">HEALTHCARE AI</p>
                  <p className="text-gray-400 text-xs mt-2">Medical Intelligence</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/40 hover:border-green-400 transition-all duration-300 shadow-lg shadow-green-400/10 hover:shadow-green-400/20 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-400/20">
                    <span className="text-black text-2xl font-bold">E</span>
                  </div>
                  <h4 className="text-green-400 font-bold text-xl mb-2">EbyTech</h4>
                  <p className="text-green-400/80 text-sm font-medium">FINANCE AI</p>
                  <p className="text-gray-400 text-xs mt-2">Financial Operations</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <span className="text-white text-2xl font-bold">L</span>
                  </div>
                  <h4 className="text-purple-400 font-bold text-xl mb-2">SVTLegal</h4>
                  <p className="text-purple-400/80 text-sm font-medium">LEGAL AI</p>
                  <p className="text-gray-400 text-xs mt-2">Legal Operations</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-orange-400/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/40 hover:border-orange-400 transition-all duration-300 shadow-lg shadow-orange-400/10 hover:shadow-orange-400/20 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-400/20">
                    <span className="text-white text-2xl font-bold">P</span>
                  </div>
                  <h4 className="text-orange-400 font-bold text-xl mb-2">PartnerTech</h4>
                  <p className="text-orange-400/80 text-sm font-medium">CRM AI</p>
                  <p className="text-gray-400 text-xs mt-2">Sales Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - YOUR STYLE */}
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
