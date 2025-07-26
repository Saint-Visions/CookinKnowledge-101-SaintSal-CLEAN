import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function SvgPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-black font-bold text-2xl">SVG</span>
            </div>
            <h1 className="text-5xl font-bold text-[#F4D03F] mb-6">
              Saint Vision Group
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              A collective of brands — Supersal™, Athena, SaintSal — under one gold standard of ethical and visionary tech. Building the future of AI-powered enterprise solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* SaintSal */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-[#F4D03F]/20 p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#F4D03F]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-[#F4D03F] mb-4">SaintSal™</h3>
                <p className="text-gray-300">Enterprise AI assistant with HACP™ technology. The brain behind our intelligent automation.</p>
              </div>
              
              {/* Athena */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Athena.ai</h3>
                <p className="text-gray-300">Healthcare AI platform revolutionizing patient care and medical decision support.</p>
              </div>
              
              {/* PartnerTech */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-400/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">PartnerTech</h3>
                <p className="text-gray-300">CRM and business automation suite. Turning leads into gold with intelligent workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Foundation</h2>
              <p className="text-xl text-gray-300">Built on principles that drive innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-400">Pushing boundaries with cutting-edge AI</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ethics</h3>
                <p className="text-gray-400">Responsible AI development and deployment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-400">Gold standard in everything we build</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F4D03F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Vision</h3>
                <p className="text-gray-400">Shaping the future of human-AI collaboration</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build the Future?</h2>
            <p className="text-xl text-gray-300 mb-8">Join Saint Vision Group in revolutionizing enterprise AI</p>
            
            <div className="flex justify-center gap-6">
              <button className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Explore Our Solutions
              </button>
              <button className="border-2 border-[#F4D03F]/50 text-[#F4D03F] hover:bg-[#F4D03F]/10 font-semibold px-8 py-4 rounded-xl text-lg transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
