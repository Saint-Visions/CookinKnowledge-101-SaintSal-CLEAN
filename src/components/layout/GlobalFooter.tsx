import Link from "next/link";

export default function GlobalFooter() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12 border-t border-yellow-900">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-screen-xl mx-auto text-sm">
        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-1">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/charter">Our Charter</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/brand">Brand</Link></li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-white font-semibold mb-3">Platform</h4>
          <ul className="space-y-1">
            <li><Link href="/supersal">Supersal™ AI</Link></li>
            <li><Link href="/partnertech">PartnerTech CRM</Link></li>
            <li><Link href="/pricing">Upgrade Plans</Link></li>
            <li><Link href="/hacp">HACP™ Patent</Link></li>
          </ul>
        </div>

        {/* Legal & Trust */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/data">Data Policy</Link></li>
            <li><Link href="/disclosures">Disclosures</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Help & Support</h4>
          <ul className="space-y-1">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/help#chat">Live Chat</Link></li>
            <li><Link href="/api/docs">API Docs</Link></li>
            <li><Link href="/contact">Contact Support</Link></li>
          </ul>
        </div>
      </div>

      {/* Attribution Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-xs text-gray-500 text-center space-y-2">
        <div>© 2025 Saint Vision Group LLC. All rights reserved.</div>
        <div className="space-x-3">
          <span>HACP™ Secured</span>
          <span>US Patent 10,290,222</span>
          <span>GDPR · CCPA · SOC-2 Compliant</span>
        </div>
      </div>
    </footer>
  );
}
