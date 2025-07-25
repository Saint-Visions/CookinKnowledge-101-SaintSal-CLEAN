'use client';

import { useState, useEffect } from 'react';

interface UsageStats {
  tasksCompleted: number;
  timesSaved: string;
  toolsUsed: number;
  productivityIncrease: string;
  weeklyReport: {
    mostUsedTool: string;
    totalActions: number;
    avgSessionTime: string;
  };
}

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState<UsageStats>({
    tasksCompleted: 127,
    timesSaved: "4.7h",
    toolsUsed: 12,
    productivityIncrease: "3.2x",
    weeklyReport: {
      mostUsedTool: "AI Content Writer",
      totalActions: 89,
      avgSessionTime: "24m"
    }
  });

  const [showWeeklyReport, setShowWeeklyReport] = useState(false);

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-4">
          <h3 className="text-2xl font-bold text-green-400">{stats.tasksCompleted}</h3>
          <p className="text-sm text-gray-300">Tasks Completed</p>
          <p className="text-xs text-green-300 mt-1">↗ +23 this week</p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4">
          <h3 className="text-2xl font-bold text-blue-400">{stats.productivityIncrease}</h3>
          <p className="text-sm text-gray-300">Productivity Boost</p>
          <p className="text-xs text-blue-300 mt-1">vs. last month</p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-4">
          <h3 className="text-2xl font-bold text-purple-400">{stats.timesSaved}</h3>
          <p className="text-sm text-gray-300">Time Saved</p>
          <p className="text-xs text-purple-300 mt-1">this week</p>
        </div>
        
        <div className="bg-gradient-to-r from-gold/20 to-yellow-500/20 border border-gold/30 rounded-lg p-4">
          <h3 className="text-2xl font-bold text-gold">{stats.toolsUsed}</h3>
          <p className="text-sm text-gray-300">Tools Mastered</p>
          <p className="text-xs text-yellow-300 mt-1">out of 18 available</p>
        </div>
      </div>

      {/* Weekly Report Card */}
      <div className="bg-gradient-to-r from-charcoal to-black border border-gold/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gold">Weekly Intelligence Report</h3>
          <button 
            onClick={() => setShowWeeklyReport(!showWeeklyReport)}
            className="text-sm bg-gold/20 text-gold px-3 py-1 rounded hover:bg-gold/30 transition"
          >
            {showWeeklyReport ? 'Hide' : 'View Details'}
          </button>
        </div>
        
        {showWeeklyReport && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Most Used Tool</h4>
                <p className="text-gold">{stats.weeklyReport.mostUsedTool}</p>
                <p className="text-xs text-gray-400">45% of your sessions</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-2">Total Actions</h4>
                <p className="text-gold">{stats.weeklyReport.totalActions}</p>
                <p className="text-xs text-gray-400">↗ 34% increase</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-2">Avg Session</h4>
                <p className="text-gold">{stats.weeklyReport.avgSessionTime}</p>
                <p className="text-xs text-gray-400">Perfect focus time</p>
              </div>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">🧠 AI Insight</h4>
              <p className="text-white text-sm">
                Your workflow efficiency peaked on Tuesday at 2 PM. Consider scheduling your most important 
                tasks during this high-productivity window for maximum impact.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions Based on Usage */}
      <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-3">Suggested Next Actions</h4>
        <div className="space-y-2">
          <button className="w-full text-left p-3 bg-gold/10 border border-gold/30 rounded hover:bg-gold/20 transition">
            <span className="text-gold">⚡</span>
            <span className="ml-2 text-white">Try the Pipeline Automation for your CRM workflow</span>
          </button>
          <button className="w-full text-left p-3 bg-purple-500/10 border border-purple-500/30 rounded hover:bg-purple-500/20 transition">
            <span className="text-purple-400">🎨</span>
            <span className="ml-2 text-white">Generate marketing content with AI Content Writer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
