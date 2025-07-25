import TopNav from "@/components/TopNav";
import SaintVisionHero from "@/components/SaintVisionHero";
import WhatSeparatesUs from "@/components/WhatSeparatesUs";

export default function Home() {
  return (
    <>
      <TopNav />
      <main
        className="pt-20 min-h-screen text-white flex flex-col"
        style={{
          backgroundImage: "url('/images/home-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000",
        }}
      >
        <div className="flex-grow">
          <SaintVisionHero />
          <WhatSeparatesUs />
          <section className="py-20 px-6 bg-black text-white">
            <h2 className="text-3xl font-bold mb-4 text-gold">Our Pricing</h2>
            <p className="text-gray-400 max-w-xl">
              Transparent pricing. Scalable for startups to enterprises. Built for performance, branded for trust.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
