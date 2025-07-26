import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function InstitutePage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#F4D03F] to-[#F1C40F] flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-black font-bold text-2xl">AI</span>
            </div>
            <h1 className="text-5xl font-bold text-[#F4D03F] mb-6">
              Saint Vision Institute
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              A think-tank of innovation and deep-tech R&D — building the future of enterprise AI, ethics, and cognition. Where breakthrough research meets real-world applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Research */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-[#F4D03F]/20 p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#F4D03F]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-[#F4D03F] mb-4">AI Research</h3>
                <p className="text-gray-300">Advancing the frontiers of artificial intelligence with breakthrough research in cognitive computing and neural networks.</p>
              </div>
              
              {/* Ethics */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Ethics</h3>
                <p className="text-gray-300">Developing ethical frameworks and guidelines for responsible AI deployment across industries.</p>
              </div>
              
              {/* Innovation */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-400/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Innovation Lab</h3>
                <p className="text-gray-300">Prototyping next-generation AI solutions that transform how businesses operate and scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Research Focus Areas</h2>
              <p className="text-xl text-gray-300">Pushing the boundaries of what's possible</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-[#F4D03F] mb-4">HACP™ Technology</h3>
                <p className="text-gray-300 mb-4">Our patented Human-AI Connection Protocol (US Patent 10,290,222) revolutionizes how humans and AI systems collaborate seamlessly.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Cognitive bridging algorithms</li>
                  <li>• Real-time adaptation protocols</li>
                  <li>• Contextual understanding frameworks</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Enterprise AI Systems</h3>
                <p className="text-gray-300 mb-4">Building scalable AI architectures that integrate seamlessly with existing business processes and workflows.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Distributed AI processing</li>
                  <li>• Enterprise security protocols</li>
                  <li>• Workflow automation engines</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Cognitive Computing</h3>
                <p className="text-gray-300 mb-4">Advancing AI systems that can understand, reason, and learn in ways that complement human intelligence.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Natural language understanding</li>
                  <li>• Contextual reasoning models</li>
                  <li>• Adaptive learning systems</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Ethical AI Frameworks</h3>
                <p className="text-gray-300 mb-4">Developing comprehensive guidelines and standards for responsible AI development and deployment.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Bias detection and mitigation</li>
                  <li>• Transparency protocols</li>
                  <li>• Privacy-preserving AI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Research Mission</h2>
            <p className="text-xl text-gray-300 mb-8">Be part of the future of AI research and development</p>
            
            <div className="flex justify-center gap-6">
              <button className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Research Partnerships
              </button>
              <button className="border-2 border-[#F4D03F]/50 text-[#F4D03F] hover:bg-[#F4D03F]/10 font-semibold px-8 py-4 rounded-xl text-lg transition-all">
                View Publications
              </button>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
