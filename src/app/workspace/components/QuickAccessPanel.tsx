import QuickTools from "@/components/ai/QuickTools";

export default function QuickAccessPanel() {
  return (
    <section className="bg-[#1a1a1a] border border-gold rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
        <div>
          <h2 className="text-xl font-bold text-gold">Quick Access</h2>
          <p className="text-gray-400 text-sm">Your AI toolkit at your fingertips</p>
        </div>
      </div>
      <QuickTools />
    </section>
  );
}
