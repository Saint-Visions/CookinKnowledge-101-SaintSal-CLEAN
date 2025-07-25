import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function SupersalArchitecturePage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-5xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Supersal™ Architecture</h1>
          <p className="text-gray-300 mb-6">
            This is the brain behind the brilliance — combining Dual-AI Mode, Companion escalation logic, and secure API orchestration.
          </p>
          <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
            <li>🧠 Dual-Mode Context: Client Mode vs Companion Mode</li>
            <li>🔁 Azure Cognitive Search hybrid vector + keyword stack</li>
            <li>⚡ HACP™ escalation triggers (sentiment, complexity, keywords)</li>
            <li>📞 Twilio + CRM integration for real-time escalations</li>
            <li>🧾 GPT-4o primary logic, fallback to Claude/GHL when needed</li>
          </ul>
          <p className="text-yellow-300 mt-6 text-sm">
            Powered by US Patent 10,290,222 · Built by Saint Vision Group
          </p>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
