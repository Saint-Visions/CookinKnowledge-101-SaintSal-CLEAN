'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SaintVisionHero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-white overflow-hidden">
      {/* Deep Charcoal Lab Background with Handsome Guy + AI Bot */}
      <Image
        src="/images/saintsal-you-bg.png"
        alt="SaintSal Plus You - Deep Charcoal AI Lab"
        fill
        className="object-cover z-0"
        priority
        quality={100}
      />
      
      {/* Dark overlay for better text readability while keeping the background visible */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gold drop-shadow-2xl leading-tight mb-8">
          Cookin' Knowledge.
        </h1>
        
        <p className="text-2xl md:text-3xl text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed mb-12">
          AI doesn't just answer. It adapts. It empowers. 
          It becomes your enterprise companion.
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/workspace">
            <button className="bg-gold text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-2xl">
              Start Cookin' Knowledge
            </button>
          </Link>
          <Link href="/pricing">
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-lg text-xl font-bold hover:bg-gold hover:text-black transition-all shadow-xl">
              Try CRM Tools
            </button>
          </Link>
        </div>
        
        {/* Enterprise Ready Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gold font-semibold tracking-wider mb-2 drop-shadow">POWERED BY HACP™ TECHNOLOGY</p>
          <div className="flex justify-center space-x-4 text-xs text-gray-200 drop-shadow">
            <span>Azure Cognitive AI</span>
            <span>•</span>
            <span>Enterprise Architecture</span>
            <span>•</span>
            <span>Real-Time Intelligence</span>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-white/70">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span>1,000+ Active Users</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Real-Time AI Companion</span>
          </div>
        </div>
      </div>
    </section>
  );
}

