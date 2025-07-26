import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-black font-bold text-xl">🔒</span>
            </div>
            <h1 className="text-5xl font-bold text-[#F4D03F] mb-6 text-center">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
              We protect your privacy like it's our mission. Saint Vision Group complies with GDPR, CCPA, LGPD, and SOC-2.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#F4D03F] mb-6">Privacy Commitments</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>We don't sell or share your data without consent.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>We encrypt all stored data (AES-256 standard).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Users may request data deletion at any time.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Our stack is zero-trust with role-based access control.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-[#F4D03F]/20 p-8">
              <p className="text-gray-300">
                For a full breakdown of AI ethics and data use, see our{" "}
                <a href="/disclosures" className="text-[#F4D03F] hover:text-[#F4D03F]/80 underline transition-colors">Disclosures</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
