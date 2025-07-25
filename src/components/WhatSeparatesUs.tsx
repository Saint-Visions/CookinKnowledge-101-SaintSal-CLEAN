'use client';

export default function WhatSeparatesUs() {
  return (
    <section className="py-16 px-4 text-center bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gold">
        What Separates Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div>
          <h3 className="text-2xl font-semibold mb-2">⚙️ Tech Stack</h3>
          <p className="text-white/80">
            Next.js 14, TailwindCSS, TypeScript, Supabase, Azure, and GPT-4o—
            engineered for scale and speed.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">🤝 PartnerTech™</h3>
          <p className="text-white/80">
            Integrated seamlessly with your favorite tools. From Stripe to
            HubSpot, it just works.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">💼 Built for Business</h3>
          <p className="text-white/80">
            CRM sync, AI copilots, workflow automations — all in one workspace,
            without compromise.
          </p>
        </div>
      </div>
    </section>
  );
}

