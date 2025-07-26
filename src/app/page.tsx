import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section - Apple Style */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
          {/* Subtle background effects */}
          <div className="absolute inset-0 bg-[#F4D03F]/5 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Brand Identity */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center shadow-2xl">
                <span className="text-black font-bold text-2xl">SV</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-[#F4D03F]">SaintVision AI</h1>
                <p className="text-lg text-gray-300 font-medium">RESPONSIBLE INTELLIGENCE</p>
                <p className="text-sm text-[#F4D03F]/80 font-light">A Warm Welcome to the Future</p>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#F4D03F] via-[#F1C40F] to-[#E67E22] bg-clip-text text-transparent">
                Responsible
              </span>
              <br />
              <span className="text-white">
                Intelligence
              </span>
            </h2>

            {/* Warm Welcome */}
            <div className="mb-8">
              <p className="text-3xl text-[#F4D03F] font-semibold mb-4">A Warm Welcome</p>
              <p className="text-xl text-gray-300">to the future of enterprise AI</p>
            </div>

            {/* Value Proposition */}
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI platform that transforms businesses through
              <span className="text-[#F4D03F] font-semibold"> intelligent automation</span>,
              <span className="text-[#F4D03F] font-semibold"> seamless integration</span>, and
              <span className="text-[#F4D03F] font-semibold"> enterprise-grade security</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
              <a 
                href="/workspace"
                className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black px-12 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#F4D03F]/20 transform hover:scale-105 transition-all"
              >
                🚀 Start Building
              </a>
              <a 
                href="/pricing"
                className="bg-gray-800/60 backdrop-blur-xl hover:bg-gray-700/60 text-white border-2 border-[#F4D03F]/30 hover:border-[#F4D03F]/50 px-12 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                View Pricing
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
                <div className="text-3xl font-bold text-[#F4D03F] mb-2">$50M+</div>
                <div className="text-gray-300">Revenue Managed</div>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
                <div className="text-3xl font-bold text-[#F4D03F] mb-2">10,000+</div>
                <div className="text-gray-300">Enterprises Served</div>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
                <div className="text-3xl font-bold text-[#F4D03F] mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-4">Powered by HACP™ Technology</h3>
              <p className="text-xl text-gray-300">Human-AI Connection Protocol (US Patent 10,290,222)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* PartnerTech.ai */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-[#F4D03F]/20 p-8 hover:border-[#F4D03F]/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[#F4D03F]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-2xl font-bold text-[#F4D03F] mb-4 text-center">PartnerTech.ai</h4>
                <p className="text-gray-300 text-center">Enterprise CRM automation with GoHighLevel integration for seamless lead management.</p>
              </div>

              {/* War Room */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8 hover:border-cyan-400/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-2xl font-bold text-cyan-400 mb-4 text-center">AI War Room</h4>
                <p className="text-gray-300 text-center">Command center for business operations with real-time analytics and decision support.</p>
              </div>

              {/* Saint Vision Institute */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 hover:border-purple-400/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-purple-400/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="text-2xl font-bold text-purple-400 mb-4 text-center">SV Institute</h4>
                <p className="text-gray-300 text-center">Advanced AI research and development for next-generation enterprise solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8">Join the enterprises already revolutionizing their operations with SaintVision AI</p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="/workspace"
                className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
              >
                Get Started Now
              </a>
              <a 
                href="/institute"
                className="border-2 border-[#F4D03F]/50 text-[#F4D03F] hover:bg-[#F4D03F]/10 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
