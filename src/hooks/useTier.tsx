'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { getTierById, canAccessFeature, getUpgradeFlow, canSendMessage, getUpgradePrompt, getCRMAccess, getAIConfig } from '../lib/tiers';

interface UserTierData {
  tier: string;
  messageCount: number;
  stripeCustomerId?: string;
  subscriptionId?: string;
  subscriptionStatus?: string;
}

interface TierContextType {
  userTier: UserTierData;
  updateTier: (newTier: string) => void;
  incrementMessages: () => void;
  canAccess: (feature: string) => boolean;
  canChat: () => boolean;
  upgradePrompt: string | null;
  nextTier: any;
  crmAccess: ReturnType<typeof getCRMAccess>;
  aiConfig: ReturnType<typeof getAIConfig>;
  isLoading: boolean;
}

const TierContext = createContext<TierContextType | null>(null);

export function TierProvider({ children }: { children: React.ReactNode }) {
  const [userTier, setUserTier] = useState<UserTierData>({
    tier: 'free',
    messageCount: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load user tier from localStorage or API
  useEffect(() => {
    const loadUserTier = async () => {
      try {
        // First check localStorage
        const savedTier = localStorage.getItem('saintsal_user_tier');
        const savedMessages = localStorage.getItem('saintsal_message_count');
        
        if (savedTier) {
          setUserTier(prev => ({
            ...prev,
            tier: savedTier,
            messageCount: parseInt(savedMessages || '0', 10)
          }));
        }

        // Then check with backend for authenticated users
        const response = await fetch('/api/user/tier', {
          credentials: 'include'
        });
        
        if (response.ok) {
          const tierData = await response.json();
          setUserTier(tierData);
          
          // Sync with localStorage
          localStorage.setItem('saintsal_user_tier', tierData.tier);
          localStorage.setItem('saintsal_message_count', tierData.messageCount.toString());
        }
      } catch (error) {
        console.error('🚨 Error loading user tier:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserTier();
  }, []);

  const updateTier = (newTier: string) => {
    setUserTier(prev => ({ ...prev, tier: newTier }));
    localStorage.setItem('saintsal_user_tier', newTier);
  };

  const incrementMessages = () => {
    setUserTier(prev => {
      const newCount = prev.messageCount + 1;
      localStorage.setItem('saintsal_message_count', newCount.toString());
      return { ...prev, messageCount: newCount };
    });
  };

  const canAccess = (feature: string): boolean => {
    return canAccessFeature(userTier.tier, feature);
  };

  const canChat = (): boolean => {
    return canSendMessage(userTier.tier, userTier.messageCount);
  };

  const upgradePrompt = getUpgradePrompt(userTier.tier, userTier.messageCount);
  const nextTier = getUpgradeFlow(userTier.tier);
  const crmAccess = getCRMAccess(userTier.tier);
  const aiConfig = getAIConfig(userTier.tier);

  const value: TierContextType = {
    userTier,
    updateTier,
    incrementMessages,
    canAccess,
    canChat,
    upgradePrompt,
    nextTier,
    crmAccess,
    aiConfig,
    isLoading
  };

  return (
    <TierContext.Provider value={value}>
      {children}
    </TierContext.Provider>
  );
}

export function useTier() {
  const context = useContext(TierContext);
  if (!context) {
    throw new Error('useTier must be used within a TierProvider');
  }
  return context;
}

// 🎯 Specific hooks for common use cases
export function useUpgradeGate(feature: string) {
  const { canAccess, userTier, nextTier } = useTier();
  const hasAccess = canAccess(feature);
  
  return {
    hasAccess,
    needsUpgrade: !hasAccess,
    currentTier: userTier.tier,
    upgradeToTier: nextTier?.name || 'Pro',
    upgradePrice: nextTier?.price || 27
  };
}

export function useChatGate() {
  const { canChat, upgradePrompt, incrementMessages, userTier } = useTier();
  
  return {
    canSendMessage: canChat(),
    showUpgradePrompt: !!upgradePrompt,
    upgradeMessage: upgradePrompt,
    sendMessage: incrementMessages,
    messagesLeft: userTier.tier === 'free' ? Math.max(0, 2 - userTier.messageCount) : 'unlimited'
  };
}

export function useCRMGate() {
  const { crmAccess, userTier } = useTier();
  
  return {
    ...crmAccess,
    currentTier: userTier.tier,
    needsUpgrade: !crmAccess.hasAccess
  };
}
