import Link from 'next/link';
import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section - Deep Neon Upgrade */}
        <section className="pt-32 pb-20 px-6 bg-black relative overflow-hidden">
          {/* Deep Neon Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-red-500 to-purple-600 blur-3xl"></div>
            <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-green-500 blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 blur-3xl"></div>
            <div className="absolute top-60 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Main Headline - Clean White */}
            <h2 className="text-6xl md:text-7xl font-thin mb-8 leading-tight relative">
              <span className="text-white">
                Responsible
              </span>
              <br />
              <span className="text-white">
                Intelligence
              </span>
            </h2>

            {/* Warm Welcome - Clean */}
            <div className="mb-8">
              <p className="text-3xl text-white font-light mb-4">A Warm Welcome</p>
              <p className="text-xl text-gray-300">to the future of enterprise AI</p>
            </div>

            {/* Value Proposition */}
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI platform that transforms businesses through
              <span className="text-white font-light"> intelligent automation</span>,
              <span className="text-white font-light"> seamless integration</span>, and
              <span className="text-white font-light"> enterprise-grade security</span>.
            </p>

            {/* CTA Buttons - Solid Gold */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
              <a 
                href="/workspace"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-12 py-4 rounded-2xl font-light text-lg transform hover:scale-105 transition-all"
              >
                🚀 Start Building
              </a>
              <a 
                href="/pricing"
                className="bg-white hover:bg-gray-100 text-black px-12 py-4 rounded-2xl font-light text-lg transition-all"
              >
                View Pricing
              </a>
            </div>

            {/* Stats - Clean Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500 transition-all">
                <div className="text-3xl font-thin text-white mb-2">$50M+</div>
                <div className="text-gray-300">Revenue Managed</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500 transition-all">
                <div className="text-3xl font-thin text-white mb-2">10,000+</div>
                <div className="text-gray-300">Enterprises Served</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500 transition-all">
                <div className="text-3xl font-thin text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Deep Neon Cards */}
        <section className="py-20 px-6 bg-black relative overflow-hidden">
          {/* Additional Background Neon */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-green-500/20"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-thin text-white mb-4">Powered by HACP™ Technology</h3>
              <p className="text-xl text-gray-300">Human-AI Connection Protocol (US Patent 10,290,222)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* PartnerTech.ai - Red/Purple Neon */}
              <div className="bg-gradient-to-br from-red-500/10 to-purple-600/10 border-2 border-red-500/40 rounded-2xl p-8 hover:border-red-400 hover:from-red-500/20 hover:to-purple-600/20 transition-all backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/30 to-purple-600/30 border border-red-500/50 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">🤝</span>
                </div>
                <h4 className="text-2xl font-light text-white mb-4 text-center">PartnerTech.ai</h4>
                <p className="text-gray-300 text-center">Enterprise CRM automation with GoHighLevel integration for seamless lead management.</p>
              </div>

              {/* War Room - Blue/Green Neon */}
              <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 border-2 border-blue-500/40 rounded-2xl p-8 hover:border-blue-400 hover:from-blue-500/20 hover:to-green-500/20 transition-all backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-green-500/30 border border-blue-500/50 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl drop-shadow-[0_0_10px_rgba(0,0,255,0.8)]">⚡</span>
                </div>
                <h4 className="text-2xl font-light text-white mb-4 text-center">AI War Room</h4>
                <p className="text-gray-300 text-center">Command center for business operations with real-time analytics and decision support.</p>
              </div>

              {/* Saint Vision Institute - Yellow/Purple Neon */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-purple-500/10 border-2 border-yellow-500/40 rounded-2xl p-8 hover:border-yellow-400 hover:from-yellow-500/20 hover:to-purple-500/20 transition-all backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-purple-500/30 border border-yellow-500/50 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">🧠</span>
                </div>
                <h4 className="text-2xl font-light text-white mb-4 text-center">SV Institute</h4>
                <p className="text-gray-300 text-center">Advanced AI research and development for next-generation enterprise solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Final Neon Blast */}
        <section className="py-20 px-6 bg-black relative overflow-hidden text-center">
          {/* Epic Background Effects */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/30 via-purple-500/30 via-blue-500/30 via-green-500/30 to-yellow-500/30"></div>
            <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8">Join the enterprises already revolutionizing their operations with SaintVision AI</p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="/workspace"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
              >
                Get Started Now
              </a>
              <a 
                href="/institute"
                className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-all"
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
