import Image from "next/image";

export default function CompanionPanel() {
  return (
    <section className="bg-[#1a1a1a] border border-gold rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <Image
          src="/images/sv-logo.png"
          alt="Companion"
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <h2 className="text-xl font-bold text-gold">AI Companion</h2>
          <p className="text-gray-400 text-sm">Meet your smart assistant.</p>
        </div>
      </div>
      <div className="text-gray-300 text-sm">
        Launch your personal AI agent for business automation, idea generation, and rapid execution. 
        This module evolves with your workflows and becomes smarter over time.
      </div>
    </section>
  );
}
