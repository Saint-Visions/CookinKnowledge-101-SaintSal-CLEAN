export default function QuickAccessPanel() {
  return (
    <section className="p-6 rounded-lg border border-gold bg-[#1a1a1a] shadow-md">
      <h2 className="text-xl font-bold text-gold mb-4">⚡ Quick Access</h2>
      <ul className="space-y-2 text-sm text-white">
        <li>
          <a href="/workspace" className="hover:text-gold transition">🏠 Dashboard Home</a>
        </li>
        <li>
          <a href="/workspace/institute" className="hover:text-gold transition">🏛️ SVT Institute</a>
        </li>
        <li>
          <a href="/workspace/svg" className="hover:text-gold transition">🚀 SVG Launch View</a>
        </li>
        <li>
          <a
            href="https://yourcrm.partnertech.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline hover:text-yellow-400 transition block mt-2"
          >
            🔗 Launch PartnerTech.ai CRM
          </a>
        </li>
      </ul>
    </section>
  );
}
