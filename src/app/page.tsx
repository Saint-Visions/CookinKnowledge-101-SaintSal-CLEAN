import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section - Clean Black */}
        <section className="pt-32 pb-20 px-6 bg-black relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Main Headline - Clean White */}
            <h1 className="text-6xl md:text-7xl font-thin mb-8 leading-tight">
              <span className="text-white">
                Responsible
              </span>
              <br />
              <span className="text-white">
                Intelligence
              </span>
            </h1>

            {/* Warm Welcome - Clean */}
            <div className="mb-8">
              <p className="text-3xl text-white font-light mb-4">A Warm Welcome</p>
              <p className="text-xl text-gray-300">to the future of enterprise AI</p>
            </div>

            {/* Value Proposition - Neon Highlights */}
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI platform that transforms businesses through
              <span className="text-cyan-400 font-light drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"> intelligent</span> automation,
              <span className="text-purple-400 font-light drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"> integration</span>, and
              <span className="text-green-400 font-light drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"> enterprise</span>-grade 
              <span className="text-yellow-400 font-light drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"> security</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-16">
              <a 
                href="/workspace"
                className="bg-white hover:bg-gray-100 text-black px-12 py-4 rounded-2xl font-medium text-lg transition-all transform hover:scale-105"
              >
                🚀 Start Building
              </a>
              <a 
                href="/pricing"
                className="border border-gray-600 hover:border-gray-400 text-white px-12 py-4 rounded-2xl font-medium text-lg transition-all"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            {/* Where Technology Meets Excellence */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
                Where Technology Meets
              </h2>
              <h2 className="text-5xl md:text-6xl font-thin text-cyan-400 mb-8">
                Excellence
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Revolutionizing industries through <span className="text-yellow-400 font-light">patented HACP™ technology</span>,
                faith-guided innovation, and AI solutions that change lives across
                healthcare, education, and enterprise.
              </p>
            </div>

            {/* Meet SaintSal */}
            <div className="text-center mb-16">
              <h3 className="text-2xl text-cyan-400 mb-4">Meet SaintSal™</h3>
              <p className="text-gray-400">Your AI companion leading the next generation of intelligent technology</p>
            </div>
            
            {/* Four Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* HACP™ Protocol */}
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-2xl p-6 hover:border-yellow-500 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-yellow-600/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🧠</span>
                </div>
                <h4 className="text-xl font-light text-yellow-400 mb-3 text-center">HACP™ Protocol</h4>
                <p className="text-gray-400 text-center text-sm">Patented adaptive AI that learns and responds with emotional intelligence</p>
              </div>

              {/* Enterprise Ready */}
              <div className="bg-cyan-900/20 border border-cyan-600/30 rounded-2xl p-6 hover:border-cyan-500 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="text-xl font-light text-cyan-400 mb-3 text-center">Enterprise Ready</h4>
                <p className="text-gray-400 text-center text-sm">SOC 2 compliant with enterprise-grade security and scalability</p>
              </div>

              {/* Faith-Guided */}
              <div className="bg-green-900/20 border border-green-600/30 rounded-2xl p-6 hover:border-green-500 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-green-600/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💚</span>
                </div>
                <h4 className="text-xl font-light text-green-400 mb-3 text-center">Faith-Guided</h4>
                <p className="text-gray-400 text-center text-sm">Technology with soul - ethical AI designed to uplift humanity</p>
              </div>

              {/* Global Impact */}
              <div className="bg-purple-900/20 border border-purple-600/30 rounded-2xl p-6 hover:border-purple-500 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h4 className="text-xl font-light text-purple-400 mb-3 text-center">Global Impact</h4>
                <p className="text-gray-400 text-center text-sm">Transforming healthcare, education, and enterprise worldwide</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mb-16">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                <div>
                  <div className="text-3xl font-thin text-yellow-400 mb-2">$75M+</div>
                  <div className="text-gray-400 text-sm">Patent Value</div>
                </div>
                <div>
                  <div className="text-3xl font-thin text-cyan-400 mb-2">24K+</div>
                  <div className="text-gray-400 text-sm">Users Served</div>
                </div>
                <div>
                  <div className="text-3xl font-thin text-blue-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-thin text-green-400 mb-2">25+</div>
                  <div className="text-gray-400 text-sm">AI Tools</div>
                </div>
                <div>
                  <div className="text-3xl font-thin text-purple-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Purpose-Driven</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center mb-16">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                  href="/workspace"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-12 py-4 rounded-2xl font-medium text-lg transition-all transform hover:scale-105"
                >
                  Start Cookin →
                </a>
                <a 
                  href="/why"
                  className="border border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 px-12 py-4 rounded-2xl font-medium text-lg transition-all"
                >
                  ▶ Watch Our Story
                </a>
              </div>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">⚡</span>
                <span className="text-gray-400 text-sm">AI Tools</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🎯</span>
                <span className="text-gray-400 text-sm">WarRoom</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">📊</span>
                <span className="text-gray-400 text-sm">Brokerage</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🧠</span>
                <span className="text-gray-400 text-sm">Institute</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🛡️</span>
                <span className="text-gray-400 text-sm">Legal</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🤝</span>
                <span className="text-gray-400 text-sm">Support</span>
              </div>
            </div>
          </div>
        </section>


      </main>
      <GlobalFooter />
    </>
  );
}
