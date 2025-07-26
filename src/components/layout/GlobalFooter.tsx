'use client';

import Link from 'next/link';

interface GlobalFooterProps {
  currentPage?: string;
}

export default function GlobalFooter({ currentPage }: GlobalFooterProps) {
  return (
    <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-black text-xs font-bold">SV</span>
              </div>
              <span className="text-white font-semibold">Saint Vision Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise AI solutions powered by HACP™ technology. Patent-protected, Delaware LP structured.
            </p>
            <div className="text-xs text-gray-500">
              🛡️ Protected by US Patent 10,290,222
            </div>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Legal & Compliance</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclosures" className="block text-gray-400 hover:text-purple-400 text-sm transition-colors">
                AI Disclosure
              </Link>
              <Link href="/security" className="block text-gray-400 hover:text-red-400 text-sm transition-colors">
                Security Policy
              </Link>
            </div>
          </div>

          {/* Platform & Technology */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Platform & Technology</h4>
            <div className="space-y-2">
              <Link href="/institute" className="block text-gray-400 hover:text-gold text-sm transition-colors">
                SVT Institute (R&D)
              </Link>
              <Link href="/svg" className="block text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Saint Vision Group
              </Link>
              <Link href="/partnertech" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                PartnerTech.ai
              </Link>
              <Link href="/api/docs" className="block text-gray-400 hover:text-green-400 text-sm transition-colors">
                API Documentation
              </Link>
            </div>
          </div>

          {/* Enterprise & Support */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Enterprise & Support</h4>
            <div className="space-y-2">
              <Link href="/pricing" className="block text-gray-400 hover:text-gold text-sm transition-colors">
                Enterprise Pricing
              </Link>
              <Link href="/help" className="block text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Help Center
              </Link>
              <Link href="/attribution" className="block text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Attribution
              </Link>
              <Link href="/partner" className="block text-gray-400 hover:text-green-400 text-sm transition-colors">
                Partner Program
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright & Patent */}
            <div className="text-center md:text-left">
              <div className="text-white/60 text-sm font-light mb-1">
                © 2025 Saint Vision Group LLC. All rights reserved.
              </div>
              <div className="text-gray-500 text-xs">
                We protect your data. We respect your time. We serve your purpose.
              </div>
            </div>

            {/* Status & Certifications */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>GDPR</span>
                <span>CCPA</span>
                <span>SOC 2</span>
                <span>Delaware LP</span>
              </div>
            </div>
          </div>

          {/* HACP Badge */}
          <div className="mt-6 flex justify-center">
            <div className="bg-gradient-to-r from-gold/10 to-purple-600/10 rounded-lg px-4 py-2 border border-gold/20">
              <div className="flex items-center space-x-3">
                <span className="text-gold text-sm">🧬</span>
                <span className="text-gold text-sm font-medium">Powered by HACP™ Intelligence</span>
                <span className="text-gray-400 text-xs">| US Patent 10,290,222</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
