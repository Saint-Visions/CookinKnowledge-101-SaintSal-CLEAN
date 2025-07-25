import Image from "next/image";

export default function GlobalFooter() {
  return (
    <footer className="w-full border-t border-gold bg-black py-10 px-6 md:px-20 text-white relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-20">
        <div className="flex items-center gap-3">
          <Image src="/images/sv-logo.png" alt="SaintVisionAI Logo" width={40} height={40} className="rounded" />
          <span className="text-xl font-bold">SaintVisionAI™</span>
        </div>
        <div className="flex flex-wrap gap-10 text-sm font-light w-full md:w-auto justify-between">
          <div>
            <div className="text-gold font-semibold mb-1">Platform</div>
            <div>Pricing</div>
            <div>Why SaintSal</div>
            <div>Support</div>
          </div>
          <div>
            <div className="text-gold font-semibold mb-1">Business</div>
            <div>PartnerTech</div>
            <div>API Access</div>
            <div>Enterprise</div>
          </div>
          <div>
            <div className="text-gold font-semibold mb-1">Powered by</div>
            <div>GPT-4o, OpenAI</div>
            <div>Azure Cloud</div>
            <div>Supabase</div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 mt-8">
        © 2025 SaintVisionAI™ — All rights reserved.
      </div>
    </footer>
  );
}
