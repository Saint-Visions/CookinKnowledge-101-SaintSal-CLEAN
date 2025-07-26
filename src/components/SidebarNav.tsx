import Image from "next/image";
import Link from 'next/link';

export default function SidebarNav() {
  return (
    <aside className="w-72 min-h-screen bg-charcoal text-white border-r-2 border-gold relative overflow-hidden">
      {/* Original Background Image */}
      <img
        src="/images/sidebar-bg.png"
        alt="Sidebar background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 z-0"
      />

      {/* Subtle "Cookin' Knowledge" Watermark - The Magic Touch! */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-1 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[4rem] font-bold text-yellow-400 select-none whitespace-nowrap rotate-[-90deg] origin-center">
          Cookin&apos; Knowledge
        </div>
      </div>

      {/* Additional subtle branding elements */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none z-1">
        <div className="absolute top-[15%] left-[10%] text-[1.5rem] font-light text-yellow-400 select-none">
          ⚡
        </div>
        <div className="absolute bottom-[25%] right-[15%] text-[1rem] font-light text-yellow-400 select-none">
          🔥
        </div>
        <div className="absolute top-[70%] left-[20%] text-[0.8rem] font-light text-yellow-400 select-none">
          CK
        </div>
      </div>

      {/* Logo + Brand */}
      <div className="relative z-10 p-6 flex items-center space-x-4">
        <img src="/images/sv-logo.png" alt="SV Logo" className="w-10 h-10" />
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gold">Cookin&apos; Knowledge</span>
          <span className="text-xs text-gray-400">Powered by SaintVisionAI™</span>
        </div>
      </div>

      {/* Quick Status */}
      <div className="relative z-10 px-6 pb-4">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300">AI Active</span>
          </div>
          <div className="text-xs text-gray-400">
            Today: <span className="text-yellow-400 font-semibold">+2.3h saved</span>
          </div>
        </div>
      </div>

      {/* Sidebar Links */}
      <nav className="relative z-10 px-4 space-y-2 text-sm font-medium">
        <div className="text-xs text-gray-500 uppercase tracking-wider px-2 py-1">Workspace</div>
        <Link href="/workspace" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-blue-400">🤖</span>
          <span className="group-hover:text-gold transition">AI Companion</span>
        </Link>
        <Link href="/workspace" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-yellow-400">⚡</span>
          <span className="group-hover:text-gold transition">Quick Tools</span>
        </Link>
        <Link href="/workspace" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-green-400">🔄</span>
          <span className="group-hover:text-gold transition">Smart Pipeline</span>
        </Link>
        <Link href="/workspace" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-purple-400">📝</span>
          <span className="group-hover:text-gold transition">Notes & Prompts</span>
        </Link>

        <div className="text-xs text-gray-500 uppercase tracking-wider px-2 py-1 mt-6">Analytics</div>
        <Link href="/workspace" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-blue-400">📊</span>
          <span className="group-hover:text-gold transition">Dashboard</span>
        </Link>
        <Link href="/workspace" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-green-400">📈</span>
          <span className="group-hover:text-gold transition">Productivity</span>
        </Link>

        <div className="text-xs text-gray-500 uppercase tracking-wider px-2 py-1 mt-6">Platform</div>
        <Link href="/" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-yellow-400">🏠</span>
          <span className="group-hover:text-gold transition">Home</span>
        </Link>
        <Link href="/institute" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-purple-400">🏛️</span>
          <span className="group-hover:text-gold transition">Institute</span>
        </Link>
        <Link href="/pricing" className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800/50 rounded-md transition group">
          <span className="text-gold">⚡</span>
          <span className="group-hover:text-gold transition">Upgrade</span>
        </Link>
      </nav>

      {/* Signed-In Footer */}
      <div className="relative z-10 mt-auto p-4 text-center text-xs text-gray-500">
        Signed in as <strong className="text-gold">Saint Gottaguy</strong>
      </div>
    </aside>
  );
}
