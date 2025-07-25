import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function VaultPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-5xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">The Vault</h1>
          <p className="text-gray-300 mb-4">
            A window into the mission, moments, and mindsets that shaped Saint Vision Group. From Supersal’s first prototype to the HACP patent, the Vault contains our legacy.
          </p>
          <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
            <li>📜 Gotta Guy™ Manifesto</li>
            <li>🚀 Fusion rollout timelines</li>
            <li>🛡️ Ethics & AI governance history</li>
            <li>👑 First sketches of Supersal & SaintSal AI stack</li>
          </ul>
          <p className="text-yellow-300 mt-6 text-sm">Coming soon: Early interviews, training logs, and prototypes.</p>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
