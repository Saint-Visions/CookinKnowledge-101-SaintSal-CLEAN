'use client';

import { useTier, useUpgradeGate, useChatGate, useCRMGate } from '../hooks/useTier';
import { ReactNode } from 'react';

interface TierGateProps {
  feature: string;
  children: ReactNode;
  fallback?: ReactNode;
  showUpgradeButton?: boolean;
}

export function TierGate({ 
  feature, 
  children, 
  fallback, 
  showUpgradeButton = true 
}: TierGateProps) {
  const { hasAccess, needsUpgrade, upgradeToTier, upgradePrice } = useUpgradeGate(feature);

  if (hasAccess) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="p-6 border-2 border-dashed border-orange-300 rounded-lg bg-orange-50">
      <div className="text-center">
        <div className="text-2xl mb-2">🔒</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Premium Feature
        </h3>
        <p className="text-gray-600 mb-4">
          This feature requires {upgradeToTier} tier access.
        </p>
        
        {showUpgradeButton && (
          <button
            onClick={() => window.location.href = `/pricing?upgrade=${upgradeToTier.toLowerCase()}`}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Upgrade for ${upgradePrice}/mo
          </button>
        )}
      </div>
    </div>
  );
}

interface ChatGateProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ChatGate({ children, fallback }: ChatGateProps) {
  const { canSendMessage, showUpgradePrompt, upgradeMessage, messagesLeft } = useChatGate();

  if (canSendMessage) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="p-6 border-2 border-dashed border-red-300 rounded-lg bg-red-50">
      <div className="text-center">
        <div className="text-2xl mb-2">💬</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Message Limit Reached
        </h3>
        <p className="text-gray-600 mb-4">
          {upgradeMessage || 'Upgrade to continue chatting with SaintSal AI.'}
        </p>
        
        <div className="space-y-2">
          <button
            onClick={() => window.location.href = '/pricing?upgrade=unlimited'}
            className="w-full px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Upgrade to Unlimited - $15/mo
          </button>
          
          <p className="text-sm text-gray-500">
            {typeof messagesLeft === 'number' 
              ? `${messagesLeft} free messages remaining today`
              : 'Unlimited messages with your plan'
            }
          </p>
        </div>
      </div>
    </div>
  );
}

interface CRMGateProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function CRMGate({ children, fallback }: CRMGateProps) {
  const { hasAccess, needsUpgrade } = useCRMGate();

  if (hasAccess) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="p-6 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50">
      <div className="text-center">
        <div className="text-2xl mb-2">🏢</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          CRM Access Required
        </h3>
        <p className="text-gray-600 mb-4">
          GoHighLevel CRM integration requires Core Tools tier or higher.
        </p>
        
        <button
          onClick={() => window.location.href = '/pricing?upgrade=core'}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Upgrade to Core Tools - $67/mo
        </button>
      </div>
    </div>
  );
}

// 🎯 Usage Examples:
/*
// Protect a specific feature
<TierGate feature="advanced_ai">
  <AdvancedAIComponent />
</TierGate>

// Protect chat functionality
<ChatGate>
  <ChatInterface />
</ChatGate>

// Protect CRM access
<CRMGate>
  <CRMDashboard />
</CRMGate>

// Custom fallback
<TierGate 
  feature="white_label" 
  fallback={<div>White label coming soon!</div>}
>
  <WhiteLabelSettings />
</TierGate>
*/
