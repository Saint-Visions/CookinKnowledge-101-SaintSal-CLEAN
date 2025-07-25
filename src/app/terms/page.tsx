import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function TermsPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Terms of Service</h1>
          <p className="text-gray-300 mb-4">
            By using Saint Vision products, you agree to abide by our terms including usage policies, data rules, and AI interactions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
            <li>Use is for lawful purposes only.</li>
            <li>Do not attempt to reverse engineer or abuse platform logic.</li>
            <li>We reserve the right to restrict access for misuse or abuse.</li>
            <li>All AI responses are for assistance, not legal/financial advice.</li>
          </ul>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
