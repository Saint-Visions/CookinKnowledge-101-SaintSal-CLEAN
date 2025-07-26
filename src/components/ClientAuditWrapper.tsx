'use client';

import React, { useEffect, useState } from 'react';
import { RouteAuditAlert, useRouteAuditor } from './RouteAuditor';

// 🔍 CLIENT AUDIT WRAPPER - Manages route auditing across the application
export function ClientAuditWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const { auditCurrentPage, getAuditSummary, results } = useRouteAuditor();

  useEffect(() => {
    setIsClient(true);
    
    // Run initial audit after component mounts
    const timer = setTimeout(() => {
      auditCurrentPage();
    }, 1000);

    return () => clearTimeout(timer);
  }, [auditCurrentPage]);

  // Show audit summary in console for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && results.length > 0) {
      const summary = getAuditSummary();
      console.log('🔍 Route Audit Summary:', summary);
    }
  }, [results, getAuditSummary]);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <RouteAuditAlert />
    </>
  );
}

// 🎯 AUDIT DASHBOARD COMPONENT
export function AuditDashboard() {
  const { 
    auditCurrentPage, 
    generateReport, 
    autoFix, 
    getAuditSummary, 
    clearResults, 
    results, 
    isAuditing 
  } = useRouteAuditor();

  const [showReport, setShowReport] = useState(false);
  const [report, setReport] = useState('');

  const handleGenerateReport = () => {
    const newReport = generateReport();
    setReport(newReport);
    setShowReport(true);
  };

  const handleAutoFix = () => {
    const { fixed, remaining } = autoFix();
    alert(`Auto-fixed ${fixed} issues. ${remaining} issues remaining.`);
    // Re-audit after fixing
    setTimeout(() => auditCurrentPage(), 500);
  };

  const summary = getAuditSummary();

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🔍</span>
        <h2 className="text-2xl font-bold text-white">Route Audit Dashboard</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
          <div className="text-sm text-gray-400">Total Pages</div>
          <div className="text-2xl font-bold text-white">{summary.totalPages}</div>
        </div>
        <div className="bg-green-900/30 p-4 rounded-lg border border-green-600/30">
          <div className="text-sm text-green-400">Healthy</div>
          <div className="text-2xl font-bold text-green-400">{summary.healthyPages}</div>
        </div>
        <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600/30">
          <div className="text-sm text-yellow-400">Warning</div>
          <div className="text-2xl font-bold text-yellow-400">{summary.warningPages}</div>
        </div>
        <div className="bg-red-900/30 p-4 rounded-lg border border-red-600/30">
          <div className="text-sm text-red-400">Error</div>
          <div className="text-2xl font-bold text-red-400">{summary.errorPages}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={auditCurrentPage}
          disabled={isAuditing}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg font-medium transition-colors"
        >
          {isAuditing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Auditing...
            </>
          ) : (
            <>
              <span>🔄</span>
              Audit Current Page
            </>
          )}
        </button>

        <button
          onClick={handleGenerateReport}
          disabled={results.length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          <span>📊</span>
          Generate Report
        </button>

        <button
          onClick={handleAutoFix}
          disabled={results.length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          <span>🔧</span>
          Auto-Fix Issues
        </button>

        <button
          onClick={clearResults}
          disabled={results.length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          <span>🗑️</span>
          Clear Results
        </button>
      </div>

      {/* Recent Results */}
      {results.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-white">Recent Audit Results</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {results.slice(-5).reverse().map((result, index) => {
              const statusColors = {
                healthy: 'border-green-600/30 bg-green-900/20',
                warning: 'border-yellow-600/30 bg-yellow-900/20', 
                error: 'border-red-600/30 bg-red-900/20'
              };
              
              const statusEmojis = {
                healthy: '✅',
                warning: '⚠️',
                error: '❌'
              };

              return (
                <div 
                  key={index} 
                  className={`p-3 rounded border ${statusColors[result.routeStatus]}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{statusEmojis[result.routeStatus]}</span>
                      <span className="font-medium text-white capitalize">{result.page}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {result.connectedButtons}/{result.totalButtons} connected
                    </div>
                  </div>
                  {result.brokenButtons.length > 0 && (
                    <div className="mt-2 text-sm text-gray-300">
                      Issues: {result.brokenButtons.map(b => b.issue).join(', ')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Report Modal */}
      {showReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-gray-600 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-600">
              <h3 className="text-lg font-semibold text-white">Audit Report</h3>
              <button
                onClick={() => setShowReport(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[60vh]">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                {report}
              </pre>
            </div>
            <div className="p-4 border-t border-gray-600 flex gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(report);
                  alert('Report copied to clipboard!');
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium"
              >
                Copy Report
              </button>
              <button
                onClick={() => setShowReport(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientAuditWrapper;
