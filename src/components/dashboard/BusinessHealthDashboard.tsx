'use client';

import { useState } from 'react';

interface BusinessMetric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export default function BusinessHealthDashboard() {
  const [metrics] = useState<BusinessMetric[]>([
    { label: 'Monthly Revenue', value: '$24.5K', change: '+18%', isPositive: true, icon: '💰' },
    { label: 'Active Clients', value: '47', change: '+12', isPositive: true, icon: '👥' },
    { label: 'Pipeline Value', value: '$57.5K', change: '+34%', isPositive: true, icon: '📈' },
    { label: 'Conversion Rate', value: '18.2%', change: '+2.4%', isPositive: true, icon: '🎯' },
    { label: 'Meetings Set', value: '23', change: '+7', isPositive: true, icon: '📅' },
    { label: 'Response Rate', value: '89%', change: '-3%', isPositive: false, icon: '📧' }
  ]);

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <span className="mr-2">📊</span>
          Business Health
        </h3>
        <div className="flex items-center text-sm text-green-400">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          All Systems Running
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg">{metric.icon}</span>
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                metric.isPositive 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {metric.change}
              </span>
            </div>
            <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-xs text-gray-400">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gold/10 border border-gold/30 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-gold">💡</span>
          <span className="text-sm text-gold font-medium">Business Insight</span>
        </div>
        <p className="text-sm text-white">
          Revenue up 18% this month. Consider increasing outreach to maintain momentum.
        </p>
      </div>
    </div>
  );
}
