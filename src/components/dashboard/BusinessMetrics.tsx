'use client';
import { useState } from 'react';

interface BusinessMetricsProps {
  className?: string;
}

export default function BusinessMetrics({ className = '' }: BusinessMetricsProps) {
  const [timeframe, setTimeframe] = useState('month');

  const metrics = {
    revenue: {
      current: 278450,
      growth: 23,
      trend: 'up'
    },
    clients: {
      total: 2847,
      active: 2341,
      growth: 12,
      trend: 'up'
    },
    retention: {
      rate: 94.2,
      churn: 2.1,
      trend: 'up'
    },
    projects: {
      active: 156,
      completed: 892,
      growth: 8,
      trend: 'up'
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Business Health</h2>
          <p className="text-gray-400">Monitor your SaintSal™ client base with comprehensive metrics</p>
        </div>
        <div className="flex items-center space-x-2">
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold/50"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-3 py-2 text-sm hover:bg-gray-700 transition-colors">
            Export
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Monthly Revenue */}
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6 hover:border-green-500/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span className="text-green-400 text-xl">💰</span>
            </div>
            <div className="flex items-center space-x-1 text-green-400 text-sm">
              <span>↗</span>
              <span>+{metrics.revenue.growth}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Monthly Revenue</p>
            <p className="text-3xl font-bold text-white">
              ${metrics.revenue.current.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">MRR</p>
          </div>
        </div>

        {/* Total Clients */}
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6 hover:border-blue-500/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-xl">👥</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-400 text-sm">
              <span>↗</span>
              <span>+{metrics.clients.growth}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Total Clients</p>
            <p className="text-3xl font-bold text-white">
              {metrics.clients.total.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">
              {metrics.clients.active.toLocaleString()} active this month
            </p>
          </div>
        </div>

        {/* Retention Rate */}
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6 hover:border-purple-500/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <span className="text-purple-400 text-xl">📈</span>
            </div>
            <div className="flex items-center space-x-1 text-red-400 text-sm">
              <span>↘</span>
              <span>-{metrics.retention.churn}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Retention Rate</p>
            <p className="text-3xl font-bold text-white">
              {metrics.retention.rate}%
            </p>
            <p className="text-xs text-gray-500">Churn Rate: {metrics.retention.churn}%</p>
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6 hover:border-gold/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
              <span className="text-gold text-xl">🎯</span>
            </div>
            <div className="flex items-center space-x-1 text-gold text-sm">
              <span>↗</span>
              <span>+{metrics.projects.growth}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-gray-400 text-sm">Active Projects</p>
            <p className="text-3xl font-bold text-white">
              {metrics.projects.active}
            </p>
            <p className="text-xs text-gray-500">
              {metrics.projects.completed} completed total
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
              <span>+</span>
              <span className="font-medium">Add Client</span>
            </button>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <span>📊</span>
              <span className="font-medium">View Analytics</span>
            </button>
            <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
              <span>📋</span>
              <span className="font-medium">Manage Projects</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">All Systems Online</span>
          </div>
        </div>
      </div>

      {/* SaintSal Integration Badge */}
      <div className="bg-gradient-to-r from-gold/10 to-purple-600/10 rounded-lg p-4 border border-gold/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-black text-sm font-bold">🧠</span>
            </div>
            <div>
              <p className="text-gold font-medium">SaintSal™ Intelligence Active</p>
              <p className="text-gray-400 text-sm">AI companion monitoring business health</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-gold to-purple-500 text-black text-sm font-bold py-2 px-4 rounded-lg hover:scale-105 transition-transform">
            Ask SaintSal
          </button>
        </div>
      </div>
    </div>
  );
}
