import Image from "next/image";

export default function SidebarNav() {
  return (
    <aside className="w-72 min-h-screen bg-charcoal text-white border-r-2 border-gold relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/sidebar-bg.png"
        alt="Sidebar background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 z-0"
      />

      {/* Logo + Brand */}
      <div className="relative z-10 p-6 flex items-center space-x-4">
        <img src="/images/sv-logo.png" alt="SV Logo" className="w-10 h-10" />
        <span className="text-xl font-semibold text-gold">SaintVisionAI™</span>
      </div>

      {/* Sidebar Links */}
      <nav className="relative z-10 p-4 space-y-4 text-sm font-medium">
        <a href="#" className="block hover:text-gold transition">🏠 Main Dashboard</a>
        <a href="#" className="block hover:text-gold transition">🧠 My Companion</a>
        <a href="#" className="block hover:text-gold transition">📁 My Business</a>
        <a href="#" className="block hover:text-gold transition">📝 Sticky Notes</a>
        <a href="#" className="block hover:text-gold transition">🛠️ AI Tools</a>
        <a href="#" className="block hover:text-gold transition">🖼️ Image Generator</a>
        <a href="#" className="block hover:text-gold transition">🚀 SVG Launchpad</a>
        <a href="#" className="block hover:text-gold transition">📣 Feedback & Help</a>
        <a href="#" className="block hover:text-gold transition">🤝 PartnerTech.ai CRM</a>
        <a href="#" className="block hover:text-gold transition">🕓 Client Portal</a>
        <a href="#" className="block hover:text-gold transition">🏛️ SVT Institute of AI (R + D)</a>
        <a href="#" className="block hover:text-gold transition">⚡ Upgrade Tier</a>
        <a href="#" className="block hover:text-gold transition">🔒 My Account</a>
        <a href="#" className="block hover:text-gold transition">👀 Logout</a>
      </nav>

      {/* Signed-In Footer */}
      <div className="relative z-10 mt-auto p-4 text-center text-xs text-gray-500">
        Signed in as <strong className="text-gold">Saint Gottaguy</strong>
      </div>
    </aside>
  );
}
