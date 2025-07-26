import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function DisclosuresPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-black font-bold text-xl">📊</span>
            </div>
            <h1 className="text-5xl font-bold text-[#F4D03F] mb-6 text-center">Platform Disclosures & Attributions</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
              Supersal™ runs on Saint Vision's proprietary HACP™ architecture with partner integrations:
            </p>
          </div>
        </section>

        {/* Disclosures Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#F4D03F] mb-6">Technology Stack</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <span className="font-semibold">GPT-4o (OpenAI)</span>
                    <p className="text-gray-400 text-sm">Natural language reasoning</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">📡</span>
                  <div>
                    <span className="font-semibold">Azure Cognitive Search</span>
                    <p className="text-gray-400 text-sm">Hybrid vector/keyword retrieval</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <span className="font-semibold">Supabase</span>
                    <p className="text-gray-400 text-sm">Real-time data + auth</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <span className="font-semibold">Twilio</span>
                    <p className="text-gray-400 text-sm">Secure voice/SMS channels</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">📑</span>
                  <div>
                    <span className="font-semibold">Internal SVG Files</span>
                    <p className="text-gray-400 text-sm">Docs from internal sources, not public web</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-[#F4D03F]/20 p-8">
              <h3 className="text-xl font-bold text-[#F4D03F] mb-4">Data Privacy Notice</h3>
              <p className="text-gray-300">
                All third-party APIs are opt-in, encrypted, and tracked. No data is shared or used for external model training.
              </p>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
