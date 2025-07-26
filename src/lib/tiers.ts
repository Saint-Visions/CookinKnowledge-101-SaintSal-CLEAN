// 🔓 SAINTSAL™ TIER ACCESS SYSTEM
// Complete pricing and access control logic

export interface TierConfig {
  id: string;
  name: string;
  price: number;
  stripeId: string;
  features: string[];
  crmAccess: boolean;
  crmAccounts: number;
  aiMode: 'client' | 'dual' | 'admin' | 'custom';
  maxMessages: number | 'unlimited';
  webhooks: boolean;
  whiteLabel: boolean;
  adminDashboard: boolean;
  customDomain: boolean;
}

export const TIER_CONFIGS: Record<string, TierConfig> = {
  free: {
    id: 'free',
    name: 'Free Trial',
    price: 0,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_FREE_PRICE_ID!,
    features: [
      'Dual AI Chat (2 messages)',
      'Basic SaintSal access',
      'Lead magnet prompt'
    ],
    crmAccess: false,
    crmAccounts: 0,
    aiMode: 'client',
    maxMessages: 2,
    webhooks: false,
    whiteLabel: false,
    adminDashboard: false,
    customDomain: false
  },
  
  unlimited: {
    id: 'unlimited',
    name: 'Unlimited',
    price: 27,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_UNLIMITED_PRICE_ID!,
    features: [
      'Unlimited Dual AI Chat',
      'Save Chat History',
      'Sticky Supersal Bot',
      'Full GPT-4o access'
    ],
    crmAccess: false,
    crmAccounts: 0,
    aiMode: 'dual',
    maxMessages: 'unlimited',
    webhooks: false,
    whiteLabel: false,
    adminDashboard: false,
    customDomain: false
  },
  
  core: {
    id: 'core',
    name: 'Core Tools',
    price: 97,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID!,
    features: [
      'Everything in Unlimited',
      'Embedded GoHighLevel CRM',
      'Personal CRM Dashboard',
      'Lead routing logic',
      'SMS alerts & webhooks'
    ],
    crmAccess: true,
    crmAccounts: 1,
    aiMode: 'admin',
    maxMessages: 'unlimited',
    webhooks: true,
    whiteLabel: false,
    adminDashboard: true,
    customDomain: false
  },
  
  pro: {
    id: 'pro',
    name: 'Pro Suite',
    price: 297,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID!,
    features: [
      'Admin Dashboards',
      'Webhook Tools & Logs',
      'CRM+ Pipeline Automation',
      'Smart GHL pipeline hooks',
      'Escalation routing',
      'Full Supersal™ CRM mode'
    ],
    crmAccess: true,
    crmAccounts: 1,
    aiMode: 'admin',
    maxMessages: 'unlimited',
    webhooks: true,
    whiteLabel: false,
    adminDashboard: true,
    customDomain: false
  },
  
  whiteLabel: {
    id: 'whiteLabel',
    name: 'Full White-Label',
    price: 497,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_WHITE_LABEL_PRICE_ID!,
    features: [
      'Custom AI Assistant',
      '10 CRM Subaccounts',
      'White-labeled branding',
      'Custom bot avatar & naming',
      'Client portal embedding',
      'Stripe webhooks to client email'
    ],
    crmAccess: true,
    crmAccounts: 10,
    aiMode: 'custom',
    maxMessages: 'unlimited',
    webhooks: true,
    whiteLabel: true,
    adminDashboard: true,
    customDomain: false
  },
  
  custom: {
    id: 'custom',
    name: 'Custom Enterprise',
    price: 1500,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_CUSTOM_PRICE_ID!,
    features: [
      'Custom domain & onboarding',
      'Embedded chat widgets',
      'GPT-4o fine-tuning',
      'Microsoft Teams integration',
      'Zapier & email logic',
      'Custom Slack commands',
      'Fusion API keys',
      'Full hands-on setup'
    ],
    crmAccess: true,
    crmAccounts: 999,
    aiMode: 'custom',
    maxMessages: 'unlimited',
    webhooks: true,
    whiteLabel: true,
    adminDashboard: true,
    customDomain: true
  }
};

// 🔐 Access Control Helpers
export function getTierById(tierId: string): TierConfig | null {
  return TIER_CONFIGS[tierId] || null;
}

export function canAccessFeature(userTier: string, feature: string): boolean {
  const tier = getTierById(userTier);
  if (!tier) return false;
  
  const featureMap: Record<string, (tier: TierConfig) => boolean> = {
    'chat': () => true, // All tiers have chat
    'unlimited_chat': (t) => t.maxMessages === 'unlimited',
    'crm': (t) => t.crmAccess,
    'webhooks': (t) => t.webhooks,
    'admin_dashboard': (t) => t.adminDashboard,
    'white_label': (t) => t.whiteLabel,
    'custom_domain': (t) => t.customDomain,
    'dual_ai': (t) => ['dual', 'admin', 'custom'].includes(t.aiMode),
    'sticky_bot': (t) => t.price >= 27,
    'save_history': (t) => t.price >= 27,
    'pipeline_hooks': (t) => t.price >= 297,
    'escalation_routing': (t) => t.price >= 297,
    'multiple_crm': (t) => t.crmAccounts > 1
  };
  
  const checker = featureMap[feature];
  return checker ? checker(tier) : false;
}

export function getUpgradeFlow(currentTier: string): TierConfig | null {
  const upgradeMap: Record<string, string> = {
    'free': 'unlimited',
    'unlimited': 'core',
    'core': 'pro', 
    'pro': 'whiteLabel',
    'whiteLabel': 'custom'
  };
  
  const nextTierId = upgradeMap[currentTier];
  return nextTierId ? getTierById(nextTierId) : null;
}

// 🚦 Message Limit Logic
export function canSendMessage(userTier: string, messageCount: number): boolean {
  const tier = getTierById(userTier);
  if (!tier) return false;
  
  if (tier.maxMessages === 'unlimited') return true;
  return messageCount < tier.maxMessages;
}

export function getUpgradePrompt(userTier: string, messageCount: number): string | null {
  if (userTier === 'free' && messageCount >= 2) {
    return `🔓 You've reached your free message limit! Upgrade to Unlimited for $27/mo to unlock unlimited AI chat, save history, and access Sticky Supersal™.`;
  }
  
  return null;
}

// 🎯 CRM Access Logic
export function getCRMAccess(userTier: string): {
  hasAccess: boolean;
  accountCount: number;
  isWhiteLabel: boolean;
} {
  const tier = getTierById(userTier);
  
  return {
    hasAccess: tier?.crmAccess || false,
    accountCount: tier?.crmAccounts || 0,
    isWhiteLabel: tier?.whiteLabel || false
  };
}

// 🤖 AI Behavior by Tier
export function getAIConfig(userTier: string): {
  mode: string;
  hasCRMBot: boolean;
  hasCompanionBot: boolean;
  customAvatar: boolean;
  smartTriggers: boolean;
} {
  const tier = getTierById(userTier);
  if (!tier) {
    return {
      mode: 'client',
      hasCRMBot: false,
      hasCompanionBot: false,
      customAvatar: false,
      smartTriggers: false
    };
  }
  
  return {
    mode: tier.aiMode,
    hasCRMBot: tier.crmAccess,
    hasCompanionBot: tier.price >= 27,
    customAvatar: tier.whiteLabel,
    smartTriggers: tier.price >= 297
  };
}

// 📊 Plan Gating for Stripe
export const STRIPE_PLAN_MAP: Record<string, string> = {
  [process.env.NEXT_PUBLIC_STRIPE_FREE_PRICE_ID!]: 'free',
  [process.env.NEXT_PUBLIC_STRIPE_UNLIMITED_PRICE_ID!]: 'unlimited',
  [process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID!]: 'core',
  [process.env.NEXT_PUBLIC_STRIPE_WHITE_LABEL_PRICE_ID!]: 'whiteLabel',
  [process.env.NEXT_PUBLIC_STRIPE_CUSTOM_PRICE_ID!]: 'custom'
};

export function getTierFromStripePrice(priceId: string): string {
  return STRIPE_PLAN_MAP[priceId] || 'free';
}

// 🔄 Upgrade Recommendations
export function getRecommendedUpgrade(userTier: string, usage: {
  messageCount: number;
  needsCRM: boolean;
  needsWebhooks: boolean;
  needsWhiteLabel: boolean;
}): {
  shouldUpgrade: boolean;
  recommendedTier: string | null;
  reason: string;
} {
  const current = getTierById(userTier);
  if (!current) return { shouldUpgrade: false, recommendedTier: null, reason: '' };
  
  // Free tier upgrade logic
  if (userTier === 'free' && usage.messageCount >= 2) {
    return {
      shouldUpgrade: true,
      recommendedTier: 'unlimited',
      reason: 'You\'ve hit the free message limit. Upgrade for unlimited chat!'
    };
  }
  
  // CRM upgrade logic
  if (usage.needsCRM && !current.crmAccess) {
    return {
      shouldUpgrade: true,
      recommendedTier: 'core',
      reason: 'Unlock CRM tools and lead management with Core Tools!'
    };
  }
  
  // Webhooks upgrade logic
  if (usage.needsWebhooks && !current.webhooks) {
    return {
      shouldUpgrade: true,
      recommendedTier: 'pro',
      reason: 'Enable advanced automation with Pro Suite webhooks!'
    };
  }
  
  // White label upgrade logic
  if (usage.needsWhiteLabel && !current.whiteLabel) {
    return {
      shouldUpgrade: true,
      recommendedTier: 'whiteLabel',
      reason: 'Brand it as your own with Full White-Label!'
    };
  }
  
  return { shouldUpgrade: false, recommendedTier: null, reason: '' };
}
