export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Complex Background Layers */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-charcoal"></div>
        
        {/* Gold accent overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold/5 to-transparent"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Header with sophisticated design */}
      <header className="relative z-10 backdrop-blur-md bg-black/40 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">SV</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gold">SaintVisionAI™</h1>
                <p className="text-xs text-gold/60">Cookin' Knowledge</p>
              </div>
            </div>
            
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-gold transition-colors">Platform</a>
              <a href="#" className="text-white/80 hover:text-gold transition-colors">Solutions</a>
              <a href="#" className="text-white/80 hover:text-gold transition-colors">Enterprise</a>
              <button className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section with complex layout */}
      <main className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center">
              <span className="bg-gold/20 backdrop-blur-sm text-gold px-4 py-2 rounded-full text-sm font-medium border border-gold/30 shadow-gold-glow">
                🏆 SaintSal™ + You
              </span>
            </div>
            
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-thin leading-tight">
                <span className="text-white block">Enterprise</span>
                <span className="text-gold font-light block text-shadow-gold animate-gold-shimmer">Intelligence</span>
                <span className="text-white/90 block text-4xl lg:text-5xl font-extralight">that scales</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl text-white/70 max-w-lg leading-relaxed">
              Advanced cognitive processing for professional insights. Built on Azure enterprise infrastructure with military-grade security.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-gold to-gold-light text-black px-8 py-4 rounded-xl font-semibold hover:shadow-gold-shine transition-all duration-300 text-lg">
                Start Building
              </button>
              <button className="border border-gold/30 text-gold px-8 py-4 rounded-xl font-medium hover:bg-gold/10 transition-all duration-300">
                View Demo →
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">99.9%</div>
                <div className="text-xs text-white/60">Uptime</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">SOC 2</div>
                <div className="text-xs text-white/60">Certified</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">24/7</div>
                <div className="text-xs text-white/60">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main card */}
              <div className="absolute inset-0 glass-effect rounded-2xl p-8 border-gold/20">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gold font-medium">AI Assistant Active</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4 border-l-4 border-gold">
                        <p className="text-white/90">Analyzing enterprise data patterns...</p>
                      </div>
                      <div className="bg-gold/10 rounded-lg p-4">
                        <p className="text-gold">✓ Security compliance verified</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-white/90">Generating insights...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Processing Speed</span>
                      <span className="text-gold">2.3ms</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tl from-gold to-gold-light rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
