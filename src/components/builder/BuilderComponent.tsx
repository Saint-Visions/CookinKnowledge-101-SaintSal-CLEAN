'use client';

import { useEffect, useState } from 'react';

// RYAN'S BULLETPROOF Builder.io Integration - SAFE MODE!
let BuilderComponent: any = null;
let builder: any = null;
let isBuilderAvailable = false;

// Ultra-safe import with multiple fallbacks
try {
  const builderModule = require('@builder.io/react');
  BuilderComponent = builderModule.BuilderComponent;
  builder = builderModule.builder;
  
  // Initialize with Ryan's REAL API key - ENTERPRISE POWER!
  const apiKey = '065997bd13e4442e888a08652fcd61ba'; // Ryan's PRODUCTION API Key
  if (builder && typeof builder.init === 'function') {
    builder.init(apiKey);
    isBuilderAvailable = true;
    console.log('✅ Builder.io initialized successfully for SaintSal Cookin Knowledge!');
  }
} catch (error) {
  console.warn('🔄 Builder.io not available, using safe fallback mode');
  isBuilderAvailable = false;
}

interface BuilderWrapperProps {
  model: string;
  content?: any;
  className?: string;
  data?: any;
}

export default function BuilderWrapper({ 
  model, 
  content, 
  className = "",
  data = {} 
}: BuilderWrapperProps) {
  const [builderContent, setBuilderContent] = useState(content);
  const [isLoading, setIsLoading] = useState(!content && isBuilderAvailable);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // SAFETY FIRST: Only try to fetch if Builder.io is available
    if (!content && isBuilderAvailable && builder) {
      setIsLoading(true);
      
      // Extra safe content fetching
      try {
        builder.get(model, {
          userAttributes: {
            urlPath: typeof window !== 'undefined' ? window.location.pathname : '/'
          }
        }).then((fetchedContent: any) => {
          setBuilderContent(fetchedContent);
          setIsLoading(false);
          setError(null);
        }).catch((error: any) => {
          console.warn('Builder.io content fetch failed (safe fallback):', error);
          setIsLoading(false);
          setError('Content not available');
        });
      } catch (syncError) {
        console.warn('Builder.io sync error (safe fallback):', syncError);
        setIsLoading(false);
        setError('Builder.io unavailable');
      }
    } else if (!isBuilderAvailable) {
      setIsLoading(false);
      setError('Builder.io not loaded');
    }
  }, [model, content]);

  // SAFE FALLBACK: If Builder.io isn't available, show beautiful fallback
  if (!isBuilderAvailable) {
    return (
      <div className={`bg-gray-900 border border-yellow-400/20 rounded-xl p-8 text-center ${className}`}>
        <div className="text-yellow-400 text-lg mb-2">🎨 Builder.io Integration</div>
        <div className="text-gray-300 text-sm mb-4">
          Ready for: <code className="bg-black/50 px-2 py-1 rounded text-yellow-400">{model}</code>
        </div>
        <div className="text-xs text-yellow-400/70 mb-4">
          ✅ Safe mode - Build protected by Ryan's authority
        </div>
        <div className="text-xs text-gray-400">
          SaintSal Cookin Knowledge Space Connected
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-yellow-400 text-sm">Loading Builder content...</div>
        </div>
      </div>
    );
  }

  // If Builder.io isn't available, show fallback
  if (!BuilderComponent) {
    return (
      <div className={`bg-gray-900 border border-yellow-400/20 rounded-xl p-8 text-center ${className}`}>
        <div className="text-yellow-400 text-lg mb-2">🎨 Visual Builder</div>
        <div className="text-gray-300 text-sm mb-4">
          Builder.io integration ready but not configured
        </div>
        <div className="text-xs text-gray-400">
          Add NEXT_PUBLIC_BUILDER_API_KEY to enable visual editing
        </div>
      </div>
    );
  }

  if (!builderContent) {
    return (
      <div className={`bg-gray-900 border border-yellow-400/20 rounded-xl p-8 text-center ${className}`}>
        <div className="text-yellow-400 text-lg mb-2">🎨 Builder.io Ready</div>
        <div className="text-gray-300 text-sm mb-4">
          No content found for model: <code className="bg-black/50 px-2 py-1 rounded text-yellow-400">{model}</code>
        </div>
        <div className="text-xs text-gray-400">
          Create content in Builder.io dashboard to see it here
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <BuilderComponent 
        model={model} 
        content={builderContent}
        data={data}
      />
    </div>
  );
}

// Export Builder for additional configuration
export { builder };
