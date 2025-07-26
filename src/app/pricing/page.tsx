import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function PricingPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#F4D03F] mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From powerful free tools to enterprise-grade AI. Every tier unlocks the next level of productivity.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gray-800/60 rounded-full p-1 border border-[#F4D03F]/20">
              <span className="bg-[#F4D03F] text-black px-6 py-2 rounded-full text-sm font-semibold">Monthly</span>
              <span className="text-gray-400 px-6 py-2 text-sm">Yearly (20% off)</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Free Tier */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                  <div className="text-4xl font-bold text-gray-300 mb-4">$0<span className="text-lg font-normal">/month</span></div>
                  <p className="text-gray-400">Perfect for getting started</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Basic AI Chat</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">War Room Access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Quick Notes & Tools</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Basic Analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-500">×</span>
                    <span className="text-gray-500">PartnerTech CRM</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-500">×</span>
                    <span className="text-gray-500">Advanced AI Models</span>
                  </li>
                </ul>
                
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all">
                  Get Started Free
                </button>
              </div>

              {/* Pro Tier - Most Popular */}
              <div className="bg-gradient-to-b from-[#F4D03F]/20 to-[#F4D03F]/5 backdrop-blur-xl rounded-2xl border-2 border-[#F4D03F]/50 p-8 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#F4D03F] text-black px-6 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#F4D03F] mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-white mb-4">$29<span className="text-lg font-normal">/month</span></div>
                  <p className="text-gray-300">For professionals & teams</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <span className="text-[#F4D03F]">✓</span>
                    <span className="text-white">Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-[#F4D03F]">✓</span>
                    <span className="text-white">PartnerTech CRM</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-[#F4D03F]">✓</span>
                    <span className="text-white">Advanced AI Models</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-[#F4D03F]">✓</span>
                    <span className="text-white">Pipeline Analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-[#F4D03F]">✓</span>
                    <span className="text-white">Priority Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-500">×</span>
                    <span className="text-gray-500">Custom AI Training</span>
                  </li>
                </ul>
                
                <button className="w-full bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
                  Upgrade to Pro
                </button>
              </div>

              {/* Enterprise Tier */}
              <div className="bg-gradient-to-b from-purple-600/20 to-purple-600/5 backdrop-blur-xl rounded-2xl border border-purple-500/50 p-8 relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-4">$99<span className="text-lg font-normal">/month</span></div>
                  <p className="text-gray-300">For large teams & organizations</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">✓</span>
                    <span className="text-white">Everything in Pro</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">✓</span>
                    <span className="text-white">Custom AI Training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">✓</span>
                    <span className="text-white">White-label Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">✓</span>
                    <span className="text-white">Enterprise Security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">✓</span>
                    <span className="text-white">Dedicated Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-purple-400">✓</span>
                    <span className="text-white">Custom Integrations</span>
                  </li>
                </ul>
                
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Enterprise Ready</h2>
              <p className="text-xl text-gray-300">Built for scale, security, and success</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400">SOC-2 compliant with enterprise-grade encryption</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Sub-second response times with global CDN</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Scalable</h3>
                <p className="text-gray-400">From 1 user to 10,000+ without missing a beat</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-[#F4D03F] mb-3">What's included in the free tier?</h3>
                <p className="text-gray-300">Full access to the War Room, basic AI chat, quick tools, and analytics. Perfect for individual users getting started.</p>
              </div>
              
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-[#F4D03F] mb-3">Can I upgrade or downgrade anytime?</h3>
                <p className="text-gray-300">Absolutely! Change your plan anytime. Upgrades are instant, downgrades take effect at your next billing cycle.</p>
              </div>
              
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-[#F4D03F] mb-3">What's HACP™ technology?</h3>
                <p className="text-gray-300">Our patented Human-AI Connection Protocol (US Patent 10,290,222) that enables seamless AI-human collaboration.</p>
              </div>
              
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-[#F4D03F] mb-3">Do you offer custom enterprise solutions?</h3>
                <p className="text-gray-300">Yes! Enterprise customers get white-label options, custom integrations, and dedicated support. Contact our sales team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Productivity?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of professionals already cooking with SaintVision AI</p>
            
            <div className="flex justify-center gap-6">
              <button className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-[#F4D03F]/50 text-[#F4D03F] hover:bg-[#F4D03F]/10 font-semibold px-8 py-4 rounded-xl text-lg transition-all">
                Book Demo
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">No credit card required • 7-day free trial • Cancel anytime</p>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
