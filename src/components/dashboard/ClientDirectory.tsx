'use client';
import { useState } from 'react';

interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: 'Enterprise' | 'Pro' | 'Free';
  status: 'active' | 'inactive';
  revenue: number;
  usage: number;
  lastActive: string;
  avatar: string;
}

interface ClientDirectoryProps {
  className?: string;
}

export default function ClientDirectory({ className = '' }: ClientDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [planFilter, setPlanFilter] = useState('All Plans');

  const clients: Client[] = [
    {
      id: '1',
      name: 'Marcus Johnson',
      email: 'marcus@techstartup.io',
      company: 'TechStartup Inc',
      plan: 'Enterprise',
      status: 'active',
      revenue: 497,
      usage: 95,
      lastActive: '2 hours ago',
      avatar: 'MJ'
    },
    {
      id: '2',
      name: 'Sarah Chen',
      email: 'sarah@digitalagency.com',
      company: 'Digital Agency Co',
      plan: 'Pro',
      status: 'active',
      revenue: 97,
      usage: 78,
      lastActive: '1 day ago',
      avatar: 'SC'
    },
    {
      id: '3',
      name: 'David Rodriguez',
      email: 'david@consultingfirm.net',
      company: 'Rodriguez Consulting',
      plan: 'Pro',
      status: 'inactive',
      revenue: 97,
      usage: 12,
      lastActive: '7 days ago',
      avatar: 'DR'
    },
    {
      id: '4',
      name: 'Lisa Anderson',
      email: 'lisa@creativestudio.com',
      company: 'Creative Studio LLC',
      plan: 'Enterprise',
      status: 'active',
      revenue: 497,
      usage: 87,
      lastActive: '4 hours ago',
      avatar: 'LA'
    },
    {
      id: '5',
      name: 'Michael Park',
      email: 'michael@innovatetech.org',
      company: 'InnovateTech',
      plan: 'Free',
      status: 'active',
      revenue: 0,
      usage: 45,
      lastActive: '1 day ago',
      avatar: 'MP'
    }
  ];

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All Status' || client.status === statusFilter.toLowerCase();
    const matchesPlan = planFilter === 'All Plans' || client.plan === planFilter;
    
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const getPlanBadgeColor = (plan: string) => {
    switch (plan) {
      case 'Enterprise': return 'bg-purple-600 text-white';
      case 'Pro': return 'bg-gold text-black';
      case 'Free': return 'bg-gray-600 text-gray-300';
      default: return 'bg-gray-600 text-gray-300';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400';
  };

  const getUsageBarColor = (usage: number) => {
    if (usage >= 80) return 'bg-green-500';
    if (usage >= 60) return 'bg-yellow-500';
    if (usage >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header with Search and Filters */}
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gold mb-2">Client Management</h2>
            <p className="text-gray-400">Monitor, manage, and analyze your SaintSal™ client base</p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <span>+</span>
            <span>Add Client</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold/50"
            title="Filter by status"
          >
            <option value="All Status">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold/50"
            title="Filter by plan"
          >
            <option value="All Plans">All Plans</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Pro">Pro</option>
            <option value="Free">Free</option>
          </select>

          <button className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-300 hover:text-white transition-colors">
            Export
          </button>
        </div>
      </div>

      {/* Client Directory Table */}
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 overflow-hidden">
        <div className="p-6 border-b border-gray-800/50">
          <h3 className="text-lg font-semibold text-white">Client Directory</h3>
        </div>

        {/* Table Header */}
        <div className="bg-gray-800/30 px-6 py-3 grid grid-cols-12 gap-4 text-sm font-medium text-gray-400 border-b border-gray-800/50">
          <div className="col-span-3">Client</div>
          <div className="col-span-2">Plan</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Revenue</div>
          <div className="col-span-2">Usage</div>
          <div className="col-span-1">Last Active</div>
          <div className="col-span-1">Actions</div>
        </div>

        {/* Client Rows */}
        <div className="divide-y divide-gray-800/50">
          {filteredClients.map((client) => (
            <div key={client.id} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-800/20 transition-colors">
              
              {/* Client Info */}
              <div className="col-span-3 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-orange-500 rounded-lg flex items-center justify-center text-black font-bold text-sm">
                  {client.avatar}
                </div>
                <div>
                  <p className="text-white font-medium">{client.name}</p>
                  <p className="text-gray-400 text-sm">{client.email}</p>
                  <p className="text-gray-500 text-xs">{client.company}</p>
                </div>
              </div>

              {/* Plan */}
              <div className="col-span-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPlanBadgeColor(client.plan)}`}>
                  {client.plan}
                </span>
              </div>

              {/* Status */}
              <div className="col-span-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(client.status)}`}>
                  {client.status}
                </span>
              </div>

              {/* Revenue */}
              <div className="col-span-2">
                <p className="text-white font-semibold">
                  ${client.revenue}<span className="text-gray-400 text-sm">/month</span>
                </p>
              </div>

              {/* Usage */}
              <div className="col-span-2">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getUsageBarColor(client.usage)}`}
                      style={{ width: `${client.usage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 w-8">{client.usage}%</span>
                </div>
              </div>

              {/* Last Active */}
              <div className="col-span-1">
                <p className="text-gray-400 text-sm">{client.lastActive}</p>
              </div>

              {/* Actions */}
              <div className="col-span-1">
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-white transition-colors" title="View Details">
                    👁️
                  </button>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors" title="Send Message">
                    ✉️
                  </button>
                  <button className="text-gray-400 hover:text-green-400 transition-colors" title="View Analytics">
                    📊
                  </button>
                  <button className="text-gray-400 hover:text-gray-300 transition-colors" title="More Options">
                    ⋯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-800/20 border-t border-gray-800/50 text-center text-sm text-gray-400">
          Showing {filteredClients.length} of {clients.length} clients
        </div>
      </div>
    </div>
  );
}
