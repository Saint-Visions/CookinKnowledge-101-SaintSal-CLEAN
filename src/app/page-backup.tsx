import Link from 'next/link';
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/layout/GlobalFooter';

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
      title: "AI-Powered Business Intelligence",
      description: "Advanced analytics and insights powered by OpenAI GPT-4 and Azure AI",
      icon: "🧠",
      metric: "3000+ Decisions Automated"
    },
    {
      title: "Enterprise CRM Integration", 
      description: "Seamless GoHighLevel integration with real-time pipeline management",
      icon: "📊",
      metric: "$2.3M+ Revenue Tracked"
    },
    {
      title: "Communication Automation",
      description: "Twilio-powered SMS, email, and voice automation workflows",
      icon: "📱",
      metric: "50K+ Messages Sent"
    },
    {
      title: "Financial Intelligence",
      description: "Stripe-integrated billing, revenue analytics, and subscription management",
      icon: "💰",
      metric: "99.9% Payment Success"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION - THE REAL DEAL */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          {/* BRAND IDENTITY */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-400/30">
                <span className="text-black font-bold text-2xl">Sv.</span>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-yellow-400">SaintSal™</div>
                <div className="text-sm text-yellow-400/70 tracking-wider">COOKIN' KNOWLEDGE</div>
              </div>
            </div>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-white via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Enterprise AI
            </span>
            <br />
            <span className="text-white">
              Business Automation
            </span>
          </h1>

          {/* VALUE PROPOSITION */}
          <p className={`text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            The most advanced AI-powered business intelligence platform. 
            <span className="text-yellow-400 font-bold"> Automate everything</span>, 
            <span className="text-orange-400 font-bold"> scale infinitely</span>, 
            <span className="text-white font-bold"> dominate your market</span>.
          </p>

          {/* CTA BUTTONS */}
          <div className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link 
              href="/workspace"
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-orange-600 text-black px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-400/30 transform hover:scale-105 transition-all"
            >
              🚀 Enter War Room
            </Link>
            <Link 
              href="/pricing"
              className="bg-gray-900 hover:bg-gray-800 border-2 border-yellow-400/30 hover:border-yellow-400/60 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              💰 View Enterprise Pricing
            </Link>
          </div>

          {/* SOCIAL PROOF */}
          <div className={`text-center transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-yellow-400/70 text-sm mb-4">TRUSTED BY ENTERPRISE LEADERS</div>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-lg">✅</span>
                <span className="text-sm">$50M+ Revenue Managed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400 text-lg">⚡</span>
                <span className="text-sm">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400 text-lg">🔒</span>
                <span className="text-sm">Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE FEATURES SECTION */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Enterprise <span className="text-yellow-400">Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Military-grade business automation tools that give you unfair competitive advantages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-red-500/10 border-yellow-400/40 shadow-2xl shadow-yellow-400/10' 
                    : 'bg-gray-900/50 border-gray-700/50 hover:border-yellow-400/20'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-6xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-lg mb-4 leading-relaxed">{feature.description}</p>
                    <div className="bg-black/50 rounded-lg px-4 py-2 inline-block">
                      <span className="text-yellow-400 font-bold text-sm">{feature.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">SaintVisionAI™</h1>
              <p className="text-xs text-cyan-400 font-medium">ENTERPRISE INTELLIGENCE</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Technology</Link>
              <Link href="/enterprise" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Enterprise</Link>
              <Link href="/api" className="text-white/70 hover:text-white text-sm font-medium transition-colors">API</Link>
              <Link href="/pricing" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
            </nav>
            <Link href="/dashboard" className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-2.5 rounded-md transition-colors text-sm">
              Launch Platform
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Apple-Style Clean */}
      <main className="relative z-10 pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          
          {/* Main Headline */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight leading-none">
              Intelligence
              <br />
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent font-light">
                Redefined
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent font-medium">Patent-protected HACP™ architecture.</span> Enterprise-grade AI that <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-medium">adapts, learns, and scales</span> with your organization.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <a 
                href="/dashboard" 
                className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-black font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-2xl shadow-gold/25"
              >
                Experience SaintSal™
              </Link>
              <a 
                href="/enterprise" 
                className="border border-gold/40 hover:border-gold text-gold hover:text-white font-medium px-8 py-4 rounded-lg transition-all backdrop-blur-sm hover:bg-gold/10"
              >
                Enterprise Solutions
              </Link>
            </div>
            <p className="text-white/40 text-sm font-light">
              Trusted by enterprises worldwide • Patent US 10,290,222 • SOC 2 Compliant
            </p>
          </div>

          {/* Technology Showcase - Minimal & Clean */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400/30 to-blue-500/20 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
                  <span className="text-cyan-400 text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">HACP™ Protocol</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Human-AI Connection Protocol with adaptive escalation and real-time performance monitoring.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <span className="text-purple-400 text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Ready</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Delaware LP structure, global compliance, and enterprise-grade security architecture.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400/30 to-emerald-500/20 rounded-2xl flex items-center justify-center shadow-lg shadow-green-400/20">
                  <span className="text-green-400 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">API Integration</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  RESTful APIs, webhooks, and SDKs for seamless integration with your existing systems.
                </p>
              </div>
            </div>
          </div>

          {/* AI Ecosystem - Sophisticated Layout */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">AI Companion Ecosystem</h2>
            <p className="text-white/60 font-light mb-12 max-w-2xl mx-auto">
              Five specialized AI companions, unified under one intelligent platform.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gold/25 to-yellow-400/15 backdrop-blur-sm rounded-xl p-6 border border-gold/30 hover:border-gold transition-all duration-300 shadow-lg shadow-gold/15 hover:shadow-gold/25">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gold/40 rounded-full flex items-center justify-center shadow-lg shadow-gold/25">
                      <span className="text-gold text-lg font-bold">S</span>
                    </div>
                    <h4 className="text-white font-medium mb-1">SaintSal™</h4>
                    <p className="text-gold/80 text-xs font-light">Master AI</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-cyan-400/30 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/20">
                      <span className="text-cyan-400 text-lg font-bold">A</span>
                    </div>
                    <h4 className="text-white font-medium mb-1">Athena</h4>
                    <p className="text-cyan-400/80 text-xs font-light">Healthcare</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-400/20 hover:border-green-400 transition-all duration-300 shadow-lg shadow-green-400/10 hover:shadow-green-400/20">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-green-400/30 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20">
                      <span className="text-green-400 text-lg font-bold">E</span>
                    </div>
                    <h4 className="text-white font-medium mb-1">EbyTech</h4>
                    <p className="text-green-400/80 text-xs font-light">Finance</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/30 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <span className="text-purple-400 text-lg font-bold">L</span>
                    </div>
                    <h4 className="text-white font-medium mb-1">SVTLegal</h4>
                    <p className="text-purple-400/80 text-xs font-light">Legal</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-gold/20 hover:border-gold transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/20">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gold/30 rounded-full flex items-center justify-center shadow-lg shadow-gold/20">
                      <span className="text-gold text-lg font-bold">P</span>
                    </div>
                    <h4 className="text-gold font-medium mb-1">PartnerTech</h4>
                    <p className="text-gold/70 text-xs font-light">CRM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-left p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Global Compliance</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-4">
                GDPR, CCPA, SOC 2 compliant with enterprise-grade security and Delaware LP structure.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-xs font-medium">ACTIVE COMPLIANCE</span>
              </div>
            </div>
            <div className="text-left p-6">
              <h3 className="text-lg font-semibold text-white mb-3">API Integration</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-4">
                RESTful APIs, webhooks, and SDKs for seamless integration with existing enterprise systems.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-400 text-xs font-medium">DEVELOPER READY</span>
              </div>
            </div>
            <div className="text-left p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Patent Protected</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-4">
                US Patent 10,290,222 covers our HACP™ adaptive intelligence technology.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gold text-xs font-medium">IP PROTECTED</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <GlobalFooter />
    </div>
    </>
  );
}
