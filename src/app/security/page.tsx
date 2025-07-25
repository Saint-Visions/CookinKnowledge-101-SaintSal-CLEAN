import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function SecurityPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Security & Compliance</h1>
          <p className="text-gray-300 mb-4">
            Saint Vision Group protects your data with industry-grade encryption and compliance standards across every layer.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 text-white/80">
            <li>🔐 AES-256 encryption on all stored data</li>
            <li>🛡️ SOC 2-aligned hosting stack (Vercel + Supabase + Azure)</li>
            <li>🔑 Zero-trust admin gateway + access auditing</li>
            <li>🧾 Secure API endpoints with JWT + OAuth flows</li>
          </ul>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
