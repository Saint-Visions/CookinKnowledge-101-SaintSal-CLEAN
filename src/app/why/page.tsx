import TopNav from "@/components/TopNav";

export default function WhyPage() {
  return (
    <>
      <TopNav />
      <main
        className="pt-20 min-h-screen bg-black text-white"
        style={{
          backgroundImage: "url('/images/why-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Why SaintSal™</h1>
          <p className="text-gray-300">
            Innovation is in our DNA. SaintSal™ fuses intelligence and elegance — powered by the world's most advanced AI.
          </p>
        </section>
      </main>
    </>
  );
}
