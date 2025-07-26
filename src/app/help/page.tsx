import TopNav from "@/components/TopNav";
import Link from 'next/link';
import GlobalFooter from "@/components/GlobalFooter";


export default function Help() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Help Center
            </h1>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Getting Started
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Setting up your account</li>
                  <li>• Understanding tier levels</li>
                  <li>• Basic features overview</li>
                  <li>• First conversation tips</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Billing & Subscriptions
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Upgrading your plan</li>
                  <li>• Payment methods</li>
                  <li>• Subscription management</li>
                  <li>• Refund policy</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">
                Need More Help?
              </h3>
              <p className="text-orange-800 mb-4">
                Contact our support team for personalized assistance.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Contact Support
                </button>
                <a 
                  href="/docs" 
                  className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <GlobalFooter />
    </>
  );
}
