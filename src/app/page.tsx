import TopNav from "@/components/TopNav";
import SaintVisionHero from "@/components/SaintVisionHero";
import WhatSeparatesUs from "@/components/WhatSeparatesUs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Apple + OpenAI Inspired Hero - Clean & Sophisticated */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* SaintSal + You Badge - Apple-level sophistication */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 text-gold px-6 py-3 rounded-full text-sm font-medium shadow-2xl">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                SaintSal™ + You
              </span>
            </div>
            
            {/* Clean, powerful headline */}
            <h1 className="text-6xl md:text-7xl font-thin mb-8 tracking-tight">
              <span className="text-white">Cookin'</span>
              <br />
              <span className="text-gold font-light">Knowledge</span>
            </h1>
            
            {/* Minimal, impactful subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-16 font-light leading-relaxed">
              Intelligence that scales with you.
            </p>
            
            {/* Clean CTAs - Apple-style spacing */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/workspace" 
                className="bg-gold text-black px-8 py-3 rounded-lg text-base font-medium hover:bg-gold/90 transition-all duration-200 shadow-lg"
              >
                Get Started
              </Link>
              <Link 
                href="/why" 
                className="text-gold hover:text-white transition-colors duration-200 text-base font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </section>
        
        <SaintVisionHero />
        <WhatSeparatesUs />
        
        {/* Clean Features Section - Apple minimalism */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-20 tracking-tight">
              Intelligence designed for{' '}
              <span className="text-gold">professionals</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-xl">🧠</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">Cognitive AI</h3>
                <p className="text-white/60 leading-relaxed">
                  Intelligence that adapts to your thinking patterns.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">Smart Automation</h3>
                <p className="text-white/60 leading-relaxed">
                  Workflows that scale with your success.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">Enterprise Ready</h3>
                <p className="text-white/60 leading-relaxed">
                  Built for growth, designed for scale.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
