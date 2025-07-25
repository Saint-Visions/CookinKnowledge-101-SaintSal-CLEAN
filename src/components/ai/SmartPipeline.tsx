'use client';

import { useState } from 'react';

interface PipelineStep {
  id: string;
  title: string;
  status: 'pending' | 'active' | 'completed';
  description: string;
  automated: boolean;
}

export default function SmartPipeline() {
  const [steps] = useState<PipelineStep[]>([
    { id: '1', title: 'Lead Capture', status: 'completed', description: 'AI identifies and qualifies leads', automated: true },
    { id: '2', title: 'Content Generation', status: 'active', description: 'Creating personalized outreach', automated: true },
    { id: '3', title: 'CRM Integration', status: 'pending', description: 'Sync with PartnerTech.ai', automated: true },
    { id: '4', title: 'Follow-up Sequence', status: 'pending', description: 'Automated nurture campaign', automated: true }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 border-green-400';
      case 'active': return 'text-gold border-gold';
      case 'pending': return 'text-gray-400 border-gray-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'active': return '⚡';
      case 'pending': return '⏳';
      default: return '○';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gold">Active Pipeline</h3>
        <div className="flex items-center text-sm text-gray-400">
          <div className="w-2 h-2 bg-gold rounded-full mr-2 animate-pulse"></div>
          AI Running
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {index < steps.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-8 bg-gray-600"></div>
            )}
            <div className={`flex items-start space-x-3 p-3 rounded-lg border ${getStatusColor(step.status)} bg-black/30`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${getStatusColor(step.status)}`}>
                {getStatusIcon(step.status)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white">{step.title}</h4>
                  {step.automated && (
                    <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded">
                      AUTO
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-1">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gold/10 border border-gold/30 rounded-lg">
        <div className="flex items-center space-x-2">
          <span className="text-gold">🧠</span>
          <span className="text-sm text-gold font-medium">AI Insight:</span>
        </div>
        <p className="text-sm text-white mt-2">
          Pipeline running 34% faster than average. Consider adding advanced personalization to step 2.
        </p>
      </div>
    </div>
  );
}
