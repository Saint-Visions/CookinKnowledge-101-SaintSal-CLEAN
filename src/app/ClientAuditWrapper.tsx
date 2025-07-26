'use client';

import React, { useEffect, useState } from 'react';
import { RouteAuditAlert, useRouteAuditor } from '../components/RouteAuditor';

// 🔍 CLIENT AUDIT WRAPPER - Manages route auditing across the application
export default function ClientAuditWrapper({ children }: { children: React.ReactNode }) {
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
