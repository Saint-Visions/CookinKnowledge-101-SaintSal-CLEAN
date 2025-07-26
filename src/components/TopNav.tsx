"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-xl px-6 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <Image
          src="/images/sv-logo.png"
          alt="SaintVisionAI Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div className="text-white leading-tight">
          <div className="text-xl font-light">SaintVisionAI™</div>
          <div className="text-xs text-yellow-400 font-light">Cookin' Knowledge</div>
        </div>
      </Link>

      <nav className="hidden md:flex gap-8 items-center text-white text-sm font-light">
        <Link href="/pricing" className="hover:text-yellow-400 transition-colors duration-200">Pricing</Link>
        <Link href="/why" className="hover:text-yellow-400 transition-colors duration-200">Why Us</Link>
        <Link href="/help" className="hover:text-yellow-400 transition-colors duration-200">Help</Link>
        {isHome ? (
          <Link href="/signin" className="text-gray-300 hover:text-white transition-colors duration-200">Sign In</Link>
        ) : (
          <Link href="/workspace">
            <span className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200">
              Start Cookin'
            </span>
          </Link>
        )}
      </nav>

      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
