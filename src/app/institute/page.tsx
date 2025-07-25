import TopNav from "@/components/TopNav";

export default function InstitutePage() {
  return (
    <>
      <TopNav />
      <main
        className="pt-20 min-h-screen bg-black text-white"
        style={{
          backgroundImage: "url('/images/institute-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Saint Vision Institute</h1>
          <p className="text-gray-300">
            A think-tank of innovation and deep-tech R&D — building the future of enterprise AI, ethics, and cognition.
          </p>
        </section>
      </main>
    </>
  );
}
