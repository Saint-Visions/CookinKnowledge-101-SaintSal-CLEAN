'use client';

import TopNav from "@/components/TopNav";
import GlobalFooter from '@/components/layout/GlobalFooter';

export default function WhyUsPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Apple-Style Background with Saint Vision Branding */}
        <div className="fixed inset-0 z-0">
          {/* Dynamic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{
                 backgroundImage: "url('/images/transparent dawg saintsaltm cookin knowledge  copy.png')",
                 backgroundSize: "400px",
                 backgroundRepeat: "repeat",
                 backgroundPosition: "center"
               }}>
          </div>
          
          {/* Apple-style glass morphism elements */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-400/3 to-purple-500/3 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section - Apple Style */}
        <section className="relative z-10 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Main Hero */}
            <div className="text-center mb-32">
              <div className="mb-8">
                <span className="inline-flex items-center bg-yellow-400/10 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium border border-yellow-400/20 backdrop-blur-sm">
                  <span className="mr-2">🏆</span>
                  What Separates SaintVisionAI™
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white mb-8 tracking-tight leading-none">
                Because your business
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-extralight">
                  deserves AI
                </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-gray-400 font-light">
                that actually makes sense
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Not another confusing ChatGPT clone
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <div className="flex items-center space-x-4 text-lg font-medium">
                <span className="text-green-400">No Learning Curve</span>
                <span className="text-gray-500">•</span>
                <span className="text-cyan-400">Instant Results</span>
                <span className="text-gray-500">•</span>
                <span className="text-gold">Built For You</span>
              </div>
            </div>
            
            <a 
              href="/dashboard" 
              className="inline-flex items-center bg-gradient-to-r from-gold to-orange-500 text-black font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-gold/25 hover:shadow-gold/40"
            >
              Experience The Difference
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Problem Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <span className="text-red-400 text-lg font-medium">🚀 NEXT LEVEL UNLOCKED</span>
              <h2 className="text-5xl md:text-6xl font-thin text-white mt-4 mb-8">
                Ready to Build Your
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Empire?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                SaintVisionAI is just the beginning. For visionaries ready to scale, PartnerTech AI awaits.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-gold/30 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-gold text-2xl">🏗️</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Build AI-Powered Businesses</h3>
                <p className="text-gray-400 leading-relaxed">
                  Don't just use AI - become an AI entrepreneur. Create, deploy, and monetize custom AI solutions for any industry.
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-400 text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Scale Without Limits</h3>
                <p className="text-gray-400 leading-relaxed">
                  From solopreneurs to enterprise empires. PartnerTech AI grows with your vision, handling complexity while you focus on expansion.
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-cyan-400/30 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-cyan-400 text-2xl">🏰</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Own Your Digital Territory</h3>
                <p className="text-gray-400 leading-relaxed">
                  Create proprietary AI ecosystems. Build intellectual property. Establish lasting competitive advantages in the AI economy.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-purple-500/10 to-cyan-400/10 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-12">
              <div className="mb-8">
                <img 
                  src="/images/why-hero-bg.png" 
                  alt="SaintVisionAI Logo" 
                  className="w-24 h-24 mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">"From User to AI Mogul"</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the elite tier of entrepreneurs who don't just use AI - they command it, scale with it, and build empires on it.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-purple-400 font-medium">
                <span>POWERED BY</span>
                <span className="text-gold">PartnerTech AI</span>
              </div>
            </div>
          </div>

          {/* Problems vs Solutions */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8">
                Tired of This?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 text-2xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Confusing AI Tools</h3>
                </div>
                <p className="text-gray-400 text-center">
                  Spending hours figuring out prompts instead of getting work done
                </p>
              </div>

              <div className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 text-2xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Generic Responses</h3>
                </div>
                <p className="text-gray-400 text-center">
                  Getting answers that don't understand your business or values
                </p>
              </div>

              <div className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 text-2xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Tech Frustration</h3>
                </div>
                <p className="text-gray-400 text-center">
                  Feeling left behind by technology that's supposed to help
                </p>
              </div>
            </div>

            <div className="text-center bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 mb-16">
              <h3 className="text-2xl font-medium text-gray-300 mb-4">
                "AI is too complicated for me..."
              </h3>
              <p className="text-gray-400">
                Sound familiar? You're not alone. Most AI feels like it was built by engineers, for engineers.
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8">
                Here's What We Built Instead
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI that feels like having your most trusted advisor right beside you
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 transition-all">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-400 text-2xl">💬</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Just Talk Naturally</h3>
                <p className="text-gray-400 leading-relaxed">
                  No prompts, no technical jargon. Ask questions like you're talking to your best business partner.
                </p>
              </div>

              <div className="bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-cyan-400 text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Knows Your Business</h3>
                <p className="text-gray-400 leading-relaxed">
                  Understands your industry, values, and goals. Every answer is tailored specifically for you.
                </p>
              </div>

              <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 hover:border-gold/40 transition-all">
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-gold text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Instant Clarity</h3>
                <p className="text-gray-400 leading-relaxed">
                  Get clear, actionable insights that you can implement immediately. No confusion, just results.
                </p>
              </div>
            </div>
          </div>

          {/* Life-Changing Impact */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8">
                More Than Business
                <br />
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  This Changes Your Life
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-400 text-2xl">⏰</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Get Your Time Back</h3>
                <p className="text-gray-400 leading-relaxed">
                  Stop wrestling with technology. Spend more time with family, pursuing passions, living life.
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-purple-400 text-2xl">💪</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Build Real Confidence</h3>
                <p className="text-gray-400 leading-relaxed">
                  Make decisions with clarity. Lead with conviction. Feel equipped for any challenge.
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-green-400 text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Stay True to Your Values</h3>
                <p className="text-gray-400 leading-relaxed">
                  Technology that aligns with your principles. Never compromise who you are for what you need.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-gold/10 to-green-400/10 backdrop-blur-sm rounded-3xl border border-gold/20 p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                "Finally, AI That Gets Me"
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands who've discovered their GOTTA GUY™ - AI that understands not just what you do, but who you are and what matters to you.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-8">
                Ready to Experience
                <br />
                <span className="bg-gradient-to-r from-gold to-green-400 bg-clip-text text-transparent">
                  AI That Actually Works?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Stop struggling with confusing tools. Start succeeding with AI built for real people with real goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <a 
                href="/dashboard" 
                className="bg-gradient-to-r from-gold to-orange-500 text-black font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-gold/25"
              >
                Start Your Journey Now
              </a>
              <a 
                href="/help" 
                className="border border-gray-600 hover:border-gold text-gray-300 hover:text-white font-medium px-8 py-4 rounded-2xl transition-all backdrop-blur-sm hover:bg-gray-800/50"
              >
                Learn More
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>No Credit Card Required</span>
              <span>•</span>
              <span>Instant Access</span>
              <span>•</span>
              <span>Cancel Anytime</span>
            </div>
          </div>

        </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
