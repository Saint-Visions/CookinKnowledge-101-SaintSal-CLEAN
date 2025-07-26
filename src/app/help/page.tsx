'use client';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Apple-Style Header */}
      <header className="bg-gray-800/60 backdrop-blur-xl border-b border-[#F4D03F]/20 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-xl">?</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Help Center</h1>
              <p className="text-[#F4D03F] text-lg">SaintVisionAI™ Support Hub</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">How can we help you?</h2>
          <p className="text-xl text-gray-300 mb-8">Get answers, tutorials, and support for all SaintVision products</p>
          
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for help articles, tutorials, or features..."
              className="w-full bg-gray-800/60 border border-gray-600/40 rounded-2xl px-6 py-4 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-[#F4D03F]/50 transition-colors"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black px-6 py-2 rounded-xl font-semibold transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Popular Help Topics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Getting Started */}
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-[#F4D03F]/20 p-8 hover:border-[#F4D03F]/40 transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-[#F4D03F]/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold text-[#F4D03F] mb-4 text-center">Getting Started</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Setting up your War Room</li>
                <li>• First steps with SaintGPT</li>
                <li>• Understanding tier benefits</li>
                <li>• Account setup guide</li>
              </ul>
            </div>

            {/* Features & Tools */}
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8 hover:border-cyan-400/40 transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4 text-center">Features & Tools</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• PartnerTech CRM setup</li>
                <li>• AI tools and automation</li>
                <li>• Analytics dashboard</li>
                <li>• Integration guides</li>
              </ul>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 hover:border-purple-400/40 transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-purple-400/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4 text-center">Troubleshooting</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Common issues and fixes</li>
                <li>• Performance optimization</li>
                <li>• Security and privacy</li>
                <li>• Contact support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Need More Help?</h3>
            <p className="text-xl text-gray-300">Choose the support option that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Chat */}
            <div className="bg-gray-800/60 rounded-2xl p-8 border border-green-400/20 text-center">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="text-xl font-bold text-green-400 mb-4">Live Chat</h4>
              <p className="text-gray-300 mb-6">Get instant help from our support team</p>
              <button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-xl transition-all">
                Start Chat
              </button>
            </div>

            {/* Email Support */}
            <div className="bg-gray-800/60 rounded-2xl p-8 border border-[#F4D03F]/20 text-center">
              <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="text-xl font-bold text-[#F4D03F] mb-4">Email Support</h4>
              <p className="text-gray-300 mb-6">Send us a detailed message</p>
              <button className="w-full bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black font-bold py-3 px-6 rounded-xl transition-all">
                Send Email
              </button>
            </div>

            {/* Knowledge Base */}
            <div className="bg-gray-800/60 rounded-2xl p-8 border border-purple-400/20 text-center">
              <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-4">Knowledge Base</h4>
              <p className="text-gray-300 mb-6">Browse our complete documentation</p>
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all">
                Browse Articles
              </button>
            </div>
          </div>
        </div>
      </section>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Home</a>
              <a href="/dashboard" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Dashboard</a>
              <a href="/pricing" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Pricing</a>
            </nav>
            <a href="/dashboard" className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 py-2.5 rounded-md transition-colors text-sm">
              Sign In
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          {/* Cookin' Knowledge Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm border border-gold/30 rounded-2xl px-6 py-3">
              <div className="w-12 h-12 mr-4">
                <img 
                  src="/images/sv-logo.png" 
                  alt="SV Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gold font-semibold text-lg">Cookin' Knowledge</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight leading-none">
              How Can We
              <br />
              <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent font-light">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
              Everything you need to master SaintSal™ and unlock the full power of your
              <br />
              <span className="text-gold font-medium">GOTTA GUY™</span> AI companion.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for help articles, guides, or features..."
                className="w-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </div>

          {/* Get Help Now Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gold mb-8">Get Help Now</h2>
          </div>

          {/* Help Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Live Chat Support */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 hover:border-gold/30 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold/30 to-gold/20 rounded-full flex items-center justify-center shadow-lg shadow-gold/10">
                  <span className="text-gold text-2xl">💬</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Live Chat Support</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Get instant help from our support team
              </p>
              <button className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                Start Chat
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Schedule a Call */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 hover:border-cyan-400/30 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400/30 to-cyan-400/20 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/10">
                  <span className="text-cyan-400 text-2xl">📞</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Schedule a Call</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Book a 1-on-1 session with our experts
              </p>
              <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                Book Now
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Email Support */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 hover:border-purple-400/30 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/30 to-purple-500/20 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/10">
                  <span className="text-purple-400 text-2xl">✉️</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Email Support</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Send us a detailed message
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                Send Email
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Video Tutorials */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 hover:border-green-400/30 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400/30 to-green-400/20 rounded-full flex items-center justify-center shadow-lg shadow-green-400/10">
                  <span className="text-green-400 text-2xl">🎥</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Video Tutorials</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Watch step-by-step guides
              </p>
              <button className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                Watch Now
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-20">
            <h3 className="text-xl font-semibold text-white mb-8">Popular Help Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/30 p-6 hover:border-gold/20 transition-all">
                <h4 className="text-gold font-medium mb-2">Getting Started</h4>
                <p className="text-gray-400 text-sm">Learn the basics of SaintSal™</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/30 p-6 hover:border-cyan-400/20 transition-all">
                <h4 className="text-cyan-400 font-medium mb-2">API Integration</h4>
                <p className="text-gray-400 text-sm">Connect with your systems</p>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/30 p-6 hover:border-purple-400/20 transition-all">
                <h4 className="text-purple-400 font-medium mb-2">Enterprise Setup</h4>
                <p className="text-gray-400 text-sm">Configure for your organization</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/40 text-sm font-light mb-4 md:mb-0">
              © 2025 Saint Vision Group LLC. Patent-protected enterprise AI.
            </div>
            <div className="flex items-center space-x-8">
              <a href="/legal/privacy" className="text-white/40 hover:text-white/70 text-sm font-light transition-colors">Privacy</a>
              <a href="/legal/disclosure" className="text-white/40 hover:text-white/70 text-sm font-light transition-colors">AI Disclosure</a>
              <a href="/enterprise" className="text-white/40 hover:text-white/70 text-sm font-light transition-colors">Enterprise</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
