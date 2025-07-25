import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/layout/GlobalFooter";

export default function DataProcessingPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Data Processing & Protection</h1>
          <p className="text-gray-300 mb-4">
            We process all data in accordance with global standards. Your privacy and data security are a core part of our system architecture.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
            <li>All personal data is encrypted at rest and in transit.</li>
            <li>Role-based access control via Supabase Auth.</li>
            <li>No data is shared with third parties without explicit consent.</li>
            <li>Data processing logs are reviewed regularly for compliance.</li>
          </ul>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
