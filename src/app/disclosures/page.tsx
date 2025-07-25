import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function DisclosuresPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Platform Disclosures & Attributions</h1>
          <p className="text-gray-300 mb-4">
            Supersal™ runs on Saint Vision’s proprietary HACP™ architecture with partner integrations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
            <li>🧠 GPT-4o (OpenAI) — natural language reasoning</li>
            <li>📡 Azure Cognitive Search — hybrid vector/keyword retrieval</li>
            <li>🔐 Supabase — real-time data + auth</li>
            <li>📞 Twilio — secure voice/SMS channels</li>
            <li>📑 Docs from internal SVG files, not public web</li>
          </ul>
          <p className="mt-6 text-sm text-gray-400">
            All third-party APIs are opt-in, encrypted, and tracked. No data is shared or used for external model training.
          </p>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
