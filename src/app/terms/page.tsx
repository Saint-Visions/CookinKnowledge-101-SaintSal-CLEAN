import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function TermsPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-black font-bold text-xl">📋</span>
            </div>
            <h1 className="text-5xl font-bold text-[#F4D03F] mb-6 text-center">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
              By using Saint Vision products, you agree to abide by our terms including usage policies, data rules, and AI interactions.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
              <h2 className="text-2xl font-bold text-[#F4D03F] mb-6">Key Terms & Conditions</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-[#F4D03F] mt-1">•</span>
                  <span>Use is for lawful purposes only.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#F4D03F] mt-1">•</span>
                  <span>Do not attempt to reverse engineer or abuse platform logic.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#F4D03F] mt-1">•</span>
                  <span>We reserve the right to restrict access for misuse or abuse.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#F4D03F] mt-1">•</span>
                  <span>All AI responses are for assistance, not legal/financial advice.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
