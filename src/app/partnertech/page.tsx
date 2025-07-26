import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";


export default function PartnerTech() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Partner Technology
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integrate with our ecosystem of cutting-edge tools and platforms to supercharge your business growth.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  GoHighLevel CRM
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive CRM and marketing automation platform with white-label capabilities.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Lead management</li>
                  <li>• Marketing automation</li>
                  <li>• White-label solutions</li>
                  <li>• Multi-location support</li>
                </ul>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Connect GHL
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-3xl mb-4">💳</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Stripe Payments
                </h3>
                <p className="text-gray-600 mb-6">
                  Secure payment processing with subscription management and global reach.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Secure payments</li>
                  <li>• Subscription billing</li>
                  <li>• Global support</li>
                  <li>• Advanced analytics</li>
                </ul>
                <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  Setup Payments
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  OpenAI Integration
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced AI capabilities powered by GPT-4 and custom model training.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• GPT-4 conversations</li>
                  <li>• Custom training</li>
                  <li>• Multi-modal AI</li>
                  <li>• Enterprise scaling</li>
                </ul>
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  Enable AI
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Integrate?
              </h2>
              <p className="text-orange-100 mb-6 text-lg">
                Connect all your favorite tools in one powerful platform.
              </p>
              <button className="px-8 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Integration
              </button>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
