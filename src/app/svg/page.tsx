import TopNav from "@/components/TopNav";

export default function SvgPage() {
  return (
    <>
      <TopNav />
      <main
        className="pt-20 min-h-screen bg-black text-white"
        style={{
          backgroundImage: "url('/images/svg-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-gold mb-6">Saint Vision Group</h1>
          <p className="text-gray-300">
            A collective of brands — Supersal™, Athena, SaintSal — under one gold standard of ethical and visionary tech.
          </p>
        </section>
      </main>
    </>
  );
}
