export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Complex Background Layers - ENHANCED */}
      <div className="fixed inset-0 z-0">
        {/* Deep space gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-charcoal opacity-90"></div>
        
        {/* Sophisticated overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-gold/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-gold/6 via-transparent to-transparent"></div>
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/4 to-transparent"></div>
        </div>
        
        {/* Enterprise-grade texture */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-gold/20 via-transparent to-charcoal/40"></div>
      </div>

      {/* Header with enhanced connectivity */}
      <header className="relative z-10 backdrop-blur-lg bg-black/60 border-b border-gold/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Enhanced Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-gold via-gold-light to-gold-dark rounded-xl flex items-center justify-center shadow-gold-glow">
                <span className="text-black font-bold text-xl tracking-tight">SV</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gold tracking-tight">SaintVisionAI™</h1>
                <p className="text-xs text-gold/70 tracking-wide">Cookin' Knowledge</p>
              </div>
            </div>
            
            {/* Enhanced Navigation with connectivity */}
            <nav className="flex items-center space-x-8">
              <a href="/platform" className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide">Platform</a>
              <a href="/solutions" className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide">Solutions</a>
              <a href="/enterprise" className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide">Enterprise</a>
              <a href="/workspace" className="text-white/90 hover:text-gold transition-all duration-300 font-medium tracking-wide">Workspace</a>
              <button className="bg-gradient-to-r from-gold to-gold-light text-black px-6 py-2.5 rounded-xl font-semibold hover:shadow-gold-shine transition-all duration-300 tracking-wide">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section - Natural, high-level feel */}
      <main className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Enhanced typography */}
          <div className="space-y-8">
            {/* Refined badge */}
            <div className="inline-flex items-center">
              <span className="bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm text-gold px-6 py-3 rounded-full text-sm font-medium border border-gold/40 shadow-gold-glow tracking-wide">
                🏆 SaintSal™ + You
              </span>
            </div>
            
            {/* Main headline - THAT FONT MAGIC */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-light leading-tight tracking-tight">
                <span className="text-white block font-extralight">Enterprise</span>
                <span className="text-gold block font-light text-shadow-gold animate-gold-shimmer">Intelligence</span>
                <span className="text-white/95 block text-5xl lg:text-6xl font-thin mt-2">that scales</span>
              </h1>
            </div>
            
            {/* Enhanced subtitle */}
            <p className="text-xl text-white/80 max-w-lg leading-relaxed font-light tracking-wide">
              Advanced cognitive processing for professional insights. 
              <span className="text-gold/90"> Built on Azure enterprise infrastructure</span> with military-grade security.
            </p>
            
            {/* Sophisticated CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="bg-gradient-to-r from-gold via-gold-light to-gold text-black px-10 py-4 rounded-2xl font-semibold hover:shadow-gold-shine transition-all duration-300 text-lg tracking-wide transform hover:scale-105">
                Start Building
              </button>
              <button className="border border-gold/40 text-gold px-10 py-4 rounded-2xl font-medium hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 backdrop-blur-sm tracking-wide">
                View Demo →
              </button>
            </div>
            
            {/* Enterprise trust indicators - Color coordinated */}
            <div className="flex items-center space-x-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-light text-gold tracking-tight">99.9%</div>
                <div className="text-xs text-white/60 tracking-wide uppercase">Uptime</div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-gold tracking-tight">SOC 2</div>
                <div className="text-xs text-white/60 tracking-wide uppercase">Certified</div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-gold tracking-tight">24/7</div>
                <div className="text-xs text-white/60 tracking-wide uppercase">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Natural, integrated visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main interface - Natural, seamless */}
              <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-black/40 via-charcoal/60 to-black/40 rounded-3xl border border-gold/20 shadow-2xl overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/8 rounded-3xl"></div>
                
                <div className="relative h-full flex flex-col p-8">
                  {/* Status indicator - Elegant */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-gold-glow"></div>
                    <span className="text-gold/90 font-medium tracking-wide">AI Assistant Active</span>
                    <div className="flex-1"></div>
                    <div className="text-xs text-white/50 tracking-wider uppercase">Enterprise Mode</div>
                  </div>
                  
                  {/* Natural conversation flow */}
                  <div className="space-y-6 flex-1">
                    <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 border-l-4 border-gold/60 backdrop-blur-sm">
                      <div className="text-white/90 font-light tracking-wide">Analyzing enterprise data patterns...</div>
                      <div className="mt-2 text-gold/70 text-sm tracking-wide">Neural networks processing 847M parameters</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gold/10 to-gold/20 rounded-2xl p-6 border border-gold/30 backdrop-blur-sm">
                      <div className="text-gold font-medium tracking-wide">✓ Security compliance verified</div>
                      <div className="mt-2 text-white/80 text-sm tracking-wide">Azure SOC 2 Type II certified infrastructure</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-white/90 font-light tracking-wide">Generating strategic insights...</div>
                      <div className="mt-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-1 bg-gradient-to-r from-gold to-gold-light rounded-full flex-1"></div>
                          <div className="text-gold/80 text-xs tracking-wide">87%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance metrics - Seamless integration */}
                  <div className="border-t border-white/10 pt-6 mt-6">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-white/60 tracking-wide">Processing Speed</span>
                        <div className="text-gold font-light text-lg tracking-tight">2.3ms</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-white/60 tracking-wide">Accuracy</span>
                        <div className="text-gold font-light text-lg tracking-tight">99.7%</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-white/60 tracking-wide">Confidence</span>
                        <div className="text-gold font-light text-lg tracking-tight">High</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating accent elements - Subtle, professional */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-full opacity-40 animate-pulse blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tl from-gold/30 to-gold-light/30 rounded-full opacity-50 animate-pulse delay-1000 blur-xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
