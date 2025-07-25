import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function AttributionPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Attributions & AI Services</h1>
          <p className="text-gray-300 mb-4">
            SaintSal™ is powered by a carefully integrated stack of trusted AI and cloud platforms:
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 text-white/80">
            <li>🧠 GPT-4o API by OpenAI — core LLM processing</li>
            <li>📂 Azure Cognitive Search — grounded hybrid search</li>
            <li>🗃️ Supabase — session + account management</li>
            <li>📞 Twilio — voice/SMS channels for escalation</li>
            <li>🧾 TailwindCSS, Next.js, Vercel — frontend build</li>
          </ul>
          <p className="text-sm text-gray-400 mt-6">
            All platforms are operated with user consent, and comply with global data standards (GDPR, CCPA, SOC 2).
          </p>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
