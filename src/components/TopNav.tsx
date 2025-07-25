"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-lg px-6 py-4 flex justify-between items-center border-b border-yellow-500">
      {/* Logo and Branding */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/sv-logo.png"
          alt="SaintVisionAI Logo"
          width={40}
          height={40}
          className="rounded"
        />
        <div className="text-white leading-tight">
          <div className="text-xl font-bold">SaintVisionAI™</div>
          <div className="text-xs text-gold">Cookin' Knowledge</div>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 items-center text-white text-sm font-medium">
        <Link href="/pricing" className="hover:text-gold transition">Pricing</Link>
        <Link href="/why" className="hover:text-gold transition">Why Us</Link>
        <Link href="/help" className="hover:text-gold transition">Help</Link>
        {isHome ? (
          <Link href="/signin" className="text-cyan-400 hover:underline">Sign In</Link>
        ) : (
          <Link href="/workspace">
            <span className="bg-[#FFD700] text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-yellow-400 transition shadow-md">
              Start Cookin’
            </span>
          </Link>
        )}
      </nav>
    </header>
  );
}
