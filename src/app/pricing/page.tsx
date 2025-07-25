import TopNav from "@/components/TopNav";

export default function PricingPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 min-h-screen bg-black text-white">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Pricing Plans</h1>
          <p className="text-gray-400 max-w-2xl mb-12">
            Choose the plan that fits your vision. Built for creators and enterprises alike.
          </p>
          {/* Pricing tiers would go here */}
        </section>
      </main>
    </>
  );
}
