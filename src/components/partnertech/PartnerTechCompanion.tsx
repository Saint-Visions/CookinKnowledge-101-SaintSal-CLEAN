'use client';

import { useState } from 'react';

interface Lead {
  id: string;
  company: string;
  domain: string;
  industry: string;
  size: string;
  status: 'new' | 'contacted' | 'qualified' | 'meeting_set';
}

export default function PartnerTechCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('command');
  const [searchQuery, setSearchQuery] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [dailyMetrics, setDailyMetrics] = useState({
    leadsDiscovered: 47,
    contactsAdded: 23,
    meetingsScheduled: 8,
    dealsInPipeline: 156,
    revenue: 234500,
    conversionRate: 18.2
  });

  const discoverLeads = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate Seamless.ai/Clearbit API call
    setTimeout(() => {
      const newLeads: Lead[] = [
        {
          id: '1',
          company: `${searchQuery} Corp`,
          domain: `${searchQuery.toLowerCase()}.com`,
          industry: 'Technology',
          size: '50-200',
          status: 'new'
        },
        {
          id: '2', 
          company: `${searchQuery} Enterprises`,
          domain: `${searchQuery.toLowerCase()}ent.com`,
          industry: 'Manufacturing',
          size: '200-500',
          status: 'new'
        }
      ];
      setLeads(newLeads);
      setIsSearching(false);
    }, 2000);
  };

  const pushToGHL = async (lead: Lead) => {
    // Simulate GoHighLevel API push
    console.log('Pushing to GHL:', lead);
    setLeads(prev => prev.map(l => 
      l.id === lead.id ? { ...l, status: 'contacted' } : l
    ));
  };

  const scheduleWithGHL = async (lead: Lead) => {
    // Simulate GHL calendar API
    console.log('Scheduling with GHL:', lead);
    setLeads(prev => prev.map(l => 
      l.id === lead.id ? { ...l, status: 'meeting_set' } : l
    ));
  };

  return (
    <>
      {/* Floating Companion Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-[#F4D03F] via-[#F1C40F] to-[#E67E22] rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group border border-[#F4D03F]/30"
        >
          <div className="text-black font-bold text-center">
            <div className="text-[11px] leading-tight font-black">PARTNER</div>
            <div className="text-[9px] leading-tight font-bold opacity-90">TECH</div>
            <div className="text-[7px] leading-tight opacity-75">COMMAND</div>
          </div>
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse border-2 border-black">
              <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-500 rounded-full"></div>
            </div>
          )}
        </button>
      </div>

      {/* Companion Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[450px] h-[600px] bg-gradient-to-br from-black via-gray-900 to-black border border-[#F4D03F]/30 rounded-xl shadow-2xl z-50 flex flex-col backdrop-blur-sm">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#F4D03F]/30 via-[#F1C40F]/20 to-[#E67E22]/10 p-5 border-b border-[#F4D03F]/20 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#F4D03F] font-black text-xl tracking-wide">PARTNERTECH.AI</h3>
                <p className="text-[#F4D03F]/80 text-xs font-semibold tracking-wider">ENTERPRISE COMMAND CENTER</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-semibold">LIVE</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-[#F4D03F] text-2xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-800/50 bg-gray-900/30">
            <button
              onClick={() => setActiveTab('command')}
              className={`flex-1 py-4 px-4 text-sm font-semibold transition-all ${
                activeTab === 'command' 
                  ? 'bg-gradient-to-r from-[#F4D03F]/20 to-[#F1C40F]/10 text-[#F4D03F] border-b-3 border-[#F4D03F] shadow-lg' 
                  : 'text-white/70 hover:text-[#F4D03F] hover:bg-[#F4D03F]/5'
              }`}
            >
              📊 COMMAND
            </button>
            <button
              onClick={() => setActiveTab('discover')}
              className={`flex-1 py-4 px-4 text-sm font-semibold transition-all ${
                activeTab === 'discover' 
                  ? 'bg-gradient-to-r from-[#F4D03F]/20 to-[#F1C40F]/10 text-[#F4D03F] border-b-3 border-[#F4D03F] shadow-lg' 
                  : 'text-white/70 hover:text-[#F4D03F] hover:bg-[#F4D03F]/5'
              }`}
            >
              🎯 DISCOVER
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex-1 py-4 px-4 text-sm font-semibold transition-all ${
                activeTab === 'pipeline' 
                  ? 'bg-gradient-to-r from-[#F4D03F]/20 to-[#F1C40F]/10 text-[#F4D03F] border-b-3 border-[#F4D03F] shadow-lg' 
                  : 'text-white/70 hover:text-[#F4D03F] hover:bg-[#F4D03F]/5'
              }`}
            >
              ⚡ PIPELINE
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {activeTab === 'command' && (
              <div className="space-y-4">
                {/* Executive Metrics */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-[#F4D03F]/20 rounded-xl p-4">
                  <h4 className="text-[#F4D03F] font-bold text-sm mb-3 flex items-center">
                    <span className="mr-2">⚡</span>
                    TODAY'S PERFORMANCE
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/40 rounded-lg p-3 border border-green-500/20">
                      <div className="text-green-400 text-xl font-black">{dailyMetrics.leadsDiscovered}</div>
                      <div className="text-green-300/70 text-xs font-semibold">LEADS FOUND</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3 border border-blue-500/20">
                      <div className="text-blue-400 text-xl font-black">{dailyMetrics.contactsAdded}</div>
                      <div className="text-blue-300/70 text-xs font-semibold">CONTACTS ADDED</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3 border border-purple-500/20">
                      <div className="text-purple-400 text-xl font-black">{dailyMetrics.meetingsScheduled}</div>
                      <div className="text-purple-300/70 text-xs font-semibold">MEETINGS SET</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3 border border-[#F4D03F]/20">
                      <div className="text-[#F4D03F] text-xl font-black">${dailyMetrics.revenue.toLocaleString()}</div>
                      <div className="text-[#F4D03F]/70 text-xs font-semibold">PIPELINE VALUE</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-[#F4D03F]/20 rounded-xl p-4">
                  <h4 className="text-[#F4D03F] font-bold text-sm mb-3 flex items-center">
                    <span className="mr-2">🚀</span>
                    EXECUTIVE ACTIONS
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gradient-to-r from-[#F4D03F]/20 to-[#F1C40F]/10 border border-[#F4D03F]/40 text-[#F4D03F] py-3 px-4 rounded-lg text-sm font-bold hover:bg-[#F4D03F]/30 transition-all shadow-lg">
                      🎯 LAUNCH GHL
                    </button>
                    <button className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/40 text-green-400 py-3 px-4 rounded-lg text-sm font-bold hover:bg-green-500/30 transition-all shadow-lg">
                      📈 ANALYTICS
                    </button>
                    <button className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/40 text-blue-400 py-3 px-4 rounded-lg text-sm font-bold hover:bg-blue-500/30 transition-all shadow-lg">
                      📅 CALENDAR
                    </button>
                    <button className="bg-gradient-to-r from-purple-500/20 to-indigo-500/10 border border-purple-500/40 text-purple-400 py-3 px-4 rounded-lg text-sm font-bold hover:bg-purple-500/30 transition-all shadow-lg">
                      🎪 CAMPAIGNS
                    </button>
                  </div>
                </div>

                {/* Conversion Tracker */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-[#F4D03F]/20 rounded-xl p-4">
                  <h4 className="text-[#F4D03F] font-bold text-sm mb-3 flex items-center">
                    <span className="mr-2">📊</span>
                    CONVERSION METRICS
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm font-semibold">Lead → Contact</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] h-2 rounded-full" style={{width: `${dailyMetrics.conversionRate}%`}}></div>
                        </div>
                        <span className="text-[#F4D03F] text-sm font-bold">{dailyMetrics.conversionRate}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm font-semibold">Contact → Meeting</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '34%'}}></div>
                        </div>
                        <span className="text-green-400 text-sm font-bold">34%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm font-semibold">Meeting → Close</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full" style={{width: '67%'}}></div>
                        </div>
                        <span className="text-purple-400 text-sm font-bold">67%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'discover' && (
              <div className="space-y-4">
                {/* Search */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-[#F4D03F]/20 rounded-xl p-4">
                  <h4 className="text-[#F4D03F] font-bold text-sm mb-3 flex items-center">
                    <span className="mr-2">🎯</span>
                    LEAD INTELLIGENCE SYSTEM
                  </h4>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Enter target company or domain..."
                      className="flex-1 bg-black/60 border border-gray-600/50 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#F4D03F] font-semibold"
                    />
                    <button
                      onClick={discoverLeads}
                      disabled={isSearching}
                      className="px-6 py-3 bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-black font-bold rounded-lg text-sm hover:from-[#F1C40F] hover:to-[#E67E22] disabled:opacity-50 shadow-lg transition-all"
                    >
                      {isSearching ? 'SCANNING...' : 'EXECUTE'}
                    </button>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  {leads.map((lead) => (
                    <div key={lead.id} className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border border-gray-600/30 rounded-xl p-4 hover:border-[#F4D03F]/40 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-sm">{lead.company}</h4>
                          <p className="text-[#F4D03F]/80 text-xs font-semibold">{lead.domain}</p>
                          <p className="text-white/60 text-xs">{lead.industry} • {lead.size} employees</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          lead.status === 'new' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                          lead.status === 'contacted' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                          lead.status === 'qualified' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                          'bg-green-500/20 text-green-400 border-green-500/30'
                        }`}>
                          {lead.status.replace('_', ' ').toUpperCase()}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => pushToGHL(lead)}
                          className="flex-1 bg-gradient-to-r from-[#F4D03F]/20 to-[#F1C40F]/10 border border-[#F4D03F]/40 text-[#F4D03F] py-2 px-3 rounded-lg text-xs font-bold hover:bg-[#F4D03F]/30 transition-all"
                        >
                          🚀 PUSH TO GHL
                        </button>
                        <button
                          onClick={() => scheduleWithGHL(lead)}
                          className="flex-1 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/40 text-green-400 py-2 px-3 rounded-lg text-xs font-bold hover:bg-green-500/30 transition-all"
                        >
                          📅 SCHEDULE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'pipeline' && (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-[#F4D03F]/20 rounded-xl p-4">
                  <h4 className="text-[#F4D03F] font-bold text-sm mb-4 flex items-center">
                    <span className="mr-2">⚡</span>
                    PIPELINE COMMAND CENTER
                  </h4>
                  
                  {/* Pipeline Stats */}
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="bg-black/40 rounded-lg p-3 border border-[#F4D03F]/20">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm font-semibold">Active Deals</span>
                        <span className="text-[#F4D03F] text-lg font-black">{dailyMetrics.dealsInPipeline}</span>
                      </div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3 border border-green-500/20">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm font-semibold">Pipeline Value</span>
                        <span className="text-green-400 text-lg font-black">${dailyMetrics.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Pipeline Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/40 text-blue-400 py-2 px-3 rounded-lg text-xs font-bold hover:bg-blue-500/30 transition-all">
                      📊 VIEW DEALS
                    </button>
                    <button className="bg-gradient-to-r from-purple-500/20 to-indigo-500/10 border border-purple-500/40 text-purple-400 py-2 px-3 rounded-lg text-xs font-bold hover:bg-purple-500/30 transition-all">
                      🎯 FORECASTS
                    </button>
                    <button className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/40 text-green-400 py-2 px-3 rounded-lg text-xs font-bold hover:bg-green-500/30 transition-all">
                      📈 REPORTS
                    </button>
                    <button className="bg-gradient-to-r from-[#F4D03F]/20 to-[#F1C40F]/10 border border-[#F4D03F]/40 text-[#F4D03F] py-2 px-3 rounded-lg text-xs font-bold hover:bg-[#F4D03F]/30 transition-all">
                      ⚡ WORKFLOWS
                    </button>
                  </div>
                </div>

                {/* Team Performance */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-[#F4D03F]/20 rounded-xl p-4">
                  <h4 className="text-[#F4D03F] font-bold text-sm mb-3 flex items-center">
                    <span className="mr-2">👥</span>
                    TEAM PERFORMANCE
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-semibold">Lead Generation Team</span>
                      <span className="text-green-400 font-bold">142% TARGET</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-semibold">Sales Development</span>
                      <span className="text-blue-400 font-bold">98% TARGET</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-semibold">Account Executives</span>
                      <span className="text-purple-400 font-bold">156% TARGET</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-semibold">Customer Success</span>
                      <span className="text-[#F4D03F] font-bold">189% TARGET</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
