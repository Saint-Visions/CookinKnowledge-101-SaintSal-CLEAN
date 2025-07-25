import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Privacy Policy</h1>
          <p className="text-gray-300 mb-4">
            We protect your privacy like it’s our mission. Saint Vision Group complies with GDPR, CCPA, LGPD, and SOC-2.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
            <li>We don’t sell or share your data without consent.</li>
            <li>We encrypt all stored data (AES-256 standard).</li>
            <li>Users may request data deletion at any time.</li>
            <li>Our stack is zero-trust with role-based access control.</li>
          </ul>
          <p className="text-gray-400 mt-6">
            For a full breakdown of AI ethics and data use, see our{" "}
            <a href="/disclosures" className="text-yellow-300 underline">Disclosures</a>.
          </p>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
