export default function PipelineOverview() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4">📊 Pipeline Overview</h2>
      <div className="bg-charcoal border border-gold rounded-lg p-6 shadow-md max-w-md">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-400">Active Leads</p>
            <p className="text-2xl font-bold text-gold">5</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Pipeline</p>
            <p className="text-2xl font-bold text-gold">$57,500</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400">Revenue MTD</p>
            <p className="text-xl font-semibold text-white">$24.5k</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Scheduled</p>
            <p className="text-xl font-semibold text-white">12</p>
          </div>
        </div>
      </div>
    </section>
  );
}
