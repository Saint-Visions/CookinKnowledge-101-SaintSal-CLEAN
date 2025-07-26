import Image from "next/image";
import Link from "next/link";

export default function GlobalFooter() {
  return (
    <footer className="w-full border-t border-gold bg-black py-10 px-6 md:px-20 text-white relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-20">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image src="/images/sv-logo.png" alt="SaintVisionAI Logo" width={40} height={40} className="rounded" />
          <span className="text-xl font-bold">SaintVisionAI™</span>
        </Link>
        <div className="flex flex-wrap gap-10 text-sm font-light w-full md:w-auto justify-between">
          <div>
            <div className="text-gold font-semibold mb-3">Platform</div>
            <div className="space-y-2">
              <div><Link href="/pricing" className="hover:text-gold transition-colors">Pricing</Link></div>
              <div><Link href="/why" className="hover:text-gold transition-colors">Why SaintSal</Link></div>
              <div><Link href="/help" className="hover:text-gold transition-colors">Support</Link></div>
            </div>
          </div>
          <div>
            <div className="text-gold font-semibold mb-3">Business</div>
            <div className="space-y-2">
              <div><Link href="/partnertech" className="hover:text-gold transition-colors">PartnerTech</Link></div>
              <div><Link href="/api/docs" className="hover:text-gold transition-colors">API Access</Link></div>
              <div><Link href="/partner" className="hover:text-gold transition-colors">Enterprise</Link></div>
            </div>
          </div>
          <div>
            <div className="text-gold font-semibold mb-3">Legal</div>
            <div className="space-y-2">
              <div><Link href="/terms" className="hover:text-gold transition-colors">Terms</Link></div>
              <div><Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link></div>
              <div><Link href="/security" className="hover:text-gold transition-colors">Security</Link></div>
            </div>
          </div>
          <div>
            <div className="text-gold font-semibold mb-3">Powered by</div>
            <div className="space-y-2 text-gray-400">
              <div>GPT-4o, OpenAI</div>
              <div>Azure Cloud</div>
              <div>Supabase</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 mt-8">
        © 2025 SaintVisionAI™ — All rights reserved. 
        <Link href="/disclosures" className="hover:text-gold transition-colors ml-2">Disclosures</Link> • 
        <Link href="/attribution" className="hover:text-gold transition-colors ml-2">Attribution</Link>
      </div>
    </footer>
  );
}
