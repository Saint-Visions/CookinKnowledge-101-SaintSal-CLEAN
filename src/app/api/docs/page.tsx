import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";

export default function APIDocsPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Developer API Docs</h1>
          <p className="text-gray-300 mb-4">
            Build with Supersal™. View API endpoints, SDK references, and integration guides.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 text-white/80">
            <li>🔌 Supersal REST API reference (OpenAPI)</li>
            <li>🔄 CRM Webhook setup instructions</li>
            <li>🧠 Azure vector search query examples</li>
            <li>💬 Chat input schema + tone controls</li>
          </ul>
          <p className="text-sm text-yellow-300 mt-6">
            Swagger UI and live API test console coming soon.
          </p>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
