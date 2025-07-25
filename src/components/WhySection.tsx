import Image from "next/image";

export default function WhySection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/why-hero-bg.png"
        alt="SaintSal™ + You"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">SaintSal™ + You</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          The elite AI business copilot. Built for scale. Branded for trust.
        </p>
      </div>
    </section>
  );
}
