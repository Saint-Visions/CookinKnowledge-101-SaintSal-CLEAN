import TopNav from "@/components/TopNav";

export default function WhyPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section 
          className="relative py-32 px-6 text-center"
          style={{
            backgroundImage: "url('/images/why-hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium border border-gold/30">
                🏆 SaintSal™ + You
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-8">
              Why SaintVisionAI™?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              SaintVisionAI™ was built with your business in mind. Say goodbye to generic AI platforms. 
              Here's how we stand out from ChatGPT, Slack, and Notion.
            </p>
            <p className="text-lg text-gold font-semibold mb-12">
              We're not just cookin' responses. We're cookin' knowledge.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-6 bg-charcoal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gold mb-16">
              The Competition vs. SaintVision
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* ChatGPT */}
              <div className="bg-black/50 border border-gray-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">ChatGPT</h3>
                <div className="space-y-3 text-gray-300">
                  <p>❌ Generic responses</p>
                  <p>❌ No business integration</p>
                  <p>❌ Manual workflow</p>
                  <p>❌ Basic chat interface</p>
                </div>
              </div>

              {/* Slack/Teams */}
              <div className="bg-black/50 border border-gray-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Slack/Teams</h3>
                <div className="space-y-3 text-gray-300">
                  <p>❌ Communication only</p>
                  <p>❌ No AI intelligence</p>
                  <p>❌ Cluttered interface</p>
                  <p>❌ Limited automation</p>
                </div>
              </div>

              {/* Notion */}
              <div className="bg-black/50 border border-gray-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Notion</h3>
                <div className="space-y-3 text-gray-300">
                  <p>❌ Complex setup</p>
                  <p>❌ No real-time AI</p>
                  <p>❌ Manual organization</p>
                  <p>❌ Steep learning curve</p>
                </div>
              </div>
            </div>

            {/* SaintVision Advantages */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/10 border border-gold rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gold mb-6 text-center">SaintVisionAI™ Advantage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-white">✅ <strong>Business-First AI:</strong> Every response optimized for productivity</p>
                  <p className="text-white">✅ <strong>Real-Time Companion:</strong> AI that learns your workflow</p>
                  <p className="text-white">✅ <strong>CRM Integration:</strong> Seamless PartnerTech.ai sync</p>
                  <p className="text-white">✅ <strong>Apple-Level Design:</strong> Beautiful, intuitive interface</p>
                </div>
                <div className="space-y-4">
                  <p className="text-white">✅ <strong>Smart Automation:</strong> Workflows that run themselves</p>
                  <p className="text-white">✅ <strong>Enterprise Ready:</strong> Built for scale from day one</p>
                  <p className="text-white">✅ <strong>Quick Access Tools:</strong> Everything you need, one click away</p>
                  <p className="text-white">✅ <strong>Premium Experience:</strong> Prestige meets productivity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Success */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gold mb-16">
              Born from Real-World Success
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-charcoal border border-gold/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">🏢 Brokerage AI Firm</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We built SaintVision because we needed it ourselves. Our brokerage AI firm required 
                  a platform that could handle complex workflows, real-time decision making, and 
                  seamless client management. Generic AI tools couldn't cut it.
                </p>
              </div>
              
              <div className="bg-charcoal border border-gold/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">🧠 Athena.ai Project</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Through our Athena.ai development, we learned what professionals really need: 
                  intelligence that adapts, workflows that scale, and an interface that doesn't 
                  get in the way. That's exactly what we built.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-b from-charcoal to-black text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gold mb-8">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join 1,000+ professionals who've already made the switch to intelligent productivity.
            </p>
            
            <div className="flex justify-center gap-6">
              <button className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl">
                Start Your Free Trial
              </button>
              <button className="border-2 border-gold text-gold px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold hover:text-black transition-all">
                See Pricing Plans
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
