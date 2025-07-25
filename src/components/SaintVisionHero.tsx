'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SaintVisionHero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-white bg-black overflow-hidden">
      <Image
        src="/images/saintsal-you-bg.png"
        alt="SaintSal Plus You"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-80"
        priority
      />

      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gold drop-shadow-xl leading-tight">
          Your Gotta Guy™ for AI
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Scale with intelligence. Work like magic. Powered by HACP™.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/pricing">
            <button className="bg-gold text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition">
              Unlock the Magic
            </button>
          </Link>
          <Link href="/why">
            <button className="bg-transparent border border-gold text-gold px-6 py-3 rounded-lg text-lg font-medium hover:bg-gold hover:text-black transition">
              Learn How It Works
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

