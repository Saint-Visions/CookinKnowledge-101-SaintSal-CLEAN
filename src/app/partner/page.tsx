import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function PartnerOnboardingPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-5xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Partner Onboarding</h1>
          <p className="text-gray-300 mb-4">
            Welcome to your white-label CRM + AI bundle. Everything here is built to empower agencies, consultants, and creators.
          </p>
          <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
            <li>🧠 Supersal Assistant (reskinned to your brand)</li>
            <li>📈 PartnerTech CRM snapshot with routing flows</li>
            <li>💬 AI Help Center templates + prompt packs</li>
            <li>🧾 Legal, affiliate, and dashboard access docs</li>
          </ul>
          <p className="text-yellow-300 mt-6 text-sm">Need assistance? Contact <a href="/help" className="underline">Supersal Support</a></p>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
