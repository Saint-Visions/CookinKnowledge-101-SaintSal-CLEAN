'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function SplashPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Subtle Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-400/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Main Splash Content */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Animated Logo Entry */}
            <div className={`mb-16 transition-all duration-1500 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="flex items-center justify-center space-x-8 mb-12">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-400/40 animate-pulse">
                  <span className="text-black font-bold text-4xl">Sv.</span>
                </div>
                <div className="text-left">
                  <div className="text-6xl font-bold text-yellow-400 tracking-tight">SaintSal™</div>
                  <div className="text-2xl text-yellow-400/80 tracking-widest font-light">COOKIN' KNOWLEDGE</div>
                  <div className="text-lg text-gray-400 mt-2">Enterprise AI Revolution</div>
                </div>
              </div>
            </div>

            {/* Main Splash Message */}
            <h1 className={`text-7xl md:text-8xl font-thin mb-12 transition-all duration-2000 delay-300 tracking-tight ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                WELCOME
              </span>
              <br />
              <span className="text-white font-extralight">
                TO THE FUTURE
              </span>
            </h1>

            {/* Epic Value Proposition */}
            <p className={`text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed transition-all duration-2000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Where artificial intelligence meets 
              <span className="text-cyan-400 font-light drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"> intelligent</span> business automation,
              <span className="text-purple-400 font-light drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"> integration</span> excellence, and
              <span className="text-green-400 font-light drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"> enterprise</span>-grade 
              <span className="text-yellow-400 font-light drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"> security</span>.
            </p>

            {/* Epic CTA */}
            <div className={`transition-all duration-2000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link 
                href="/"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-black px-16 py-6 rounded-2xl font-bold text-2xl shadow-2xl shadow-yellow-400/30 transform hover:scale-110 transition-all duration-300 animate-pulse"
              >
                🔥 ENTER THE PLATFORM
              </Link>
            </div>

            {/* Status Indicators */}
            <div className={`mt-20 flex items-center justify-center space-x-12 transition-all duration-2000 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                <div className="text-green-400 text-sm font-bold">SYSTEM ONLINE</div>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                <div className="text-yellow-400 text-sm font-bold">AI READY</div>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                <div className="text-blue-400 text-sm font-bold">ENTERPRISE SECURE</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <GlobalFooter />
    </>
  );
}
