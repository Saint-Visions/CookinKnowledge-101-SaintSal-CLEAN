'use client';

import { useState } from 'react';

interface UserTier {
  name: string;
  level: 'free' | 'pro' | 'enterprise';
  features: string[];
}

interface FeatureProps {
  title: string;
  description: string;
  tier: 'free' | 'pro' | 'enterprise';
  icon: string;
  isAvailable: boolean;
  onUpgrade?: () => void;
}

function FeatureCard({ title, description, tier, icon, isAvailable, onUpgrade }: FeatureProps) {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'free': return 'border-gray-500 text-gray-300';
      case 'pro': return 'border-gold text-gold';
      case 'enterprise': return 'border-purple-500 text-purple-400';
      default: return 'border-gray-500 text-gray-300';
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'pro': return 'PRO';
      case 'enterprise': return 'ENTERPRISE';
      default: return null;
    }
  };

  return (
    <div className={`relative p-4 rounded-lg border-2 ${getTierColor(tier)} ${!isAvailable ? 'opacity-60' : ''}`}>
      {!isAvailable && (
        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
          <button 
            onClick={onUpgrade}
            className="bg-gold text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition"
          >
            Upgrade to Access
          </button>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        {getTierBadge(tier) && (
          <span className={`text-xs px-2 py-1 rounded ${getTierColor(tier)} border`}>
            {getTierBadge(tier)}
          </span>
        )}
      </div>
      
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

interface TierBasedFeaturesProps {
  userTier: string;
}

export default function TierBasedFeatures({ userTier }: TierBasedFeaturesProps) {
  
  const features = [
    {
      title: "AI Content Writer",
      description: "Generate high-quality content for your business",
      tier: 'free' as const,
      icon: "✍️",
      isAvailable: true
    },
    {
      title: "Advanced Pipeline Automation",
      description: "Complex workflow automation with custom triggers",
      tier: 'pro' as const,
      icon: "⚡",
      isAvailable: userTier === 'pro' || userTier === 'enterprise'
    },
    {
      title: "White Label Solution",
      description: "Complete platform customization for your brand",
      tier: 'enterprise' as const,
      icon: "🏢",
      isAvailable: userTier === 'enterprise'
    },
    {
      title: "Team Collaboration Hub",
      description: "Invite team members and manage permissions",
      tier: 'pro' as const,
      icon: "👥",
      isAvailable: userTier === 'pro' || userTier === 'enterprise'
    },
    {
      title: "Custom AI Training",
      description: "Train AI models on your specific business data",
      tier: 'enterprise' as const,
      icon: "🧠",
      isAvailable: userTier === 'enterprise'
    },
    {
      title: "Basic CRM Integration",
      description: "Connect with popular CRM platforms",
      tier: 'free' as const,
      icon: "🔄",
      isAvailable: true
    }
  ];

  const handleUpgrade = () => {
    // Navigate to pricing page or open upgrade modal
    window.location.href = '/pricing';
  };

  return (
    <div className="space-y-6">
      {/* Current Tier Display */}
      <div className="bg-gradient-to-r from-charcoal to-black border border-gold/30 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gold capitalize">{userTier} Plan</h2>
            <p className="text-gray-300">
              {userTier === 'free' && "Unlock more features with Pro or Enterprise"}
              {userTier === 'pro' && "You have access to advanced AI features"}
              {userTier === 'enterprise' && "Full access to all SaintVision capabilities"}
            </p>
          </div>
          {userTier !== 'enterprise' && (
            <button 
              onClick={handleUpgrade}
              className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Upgrade Now
            </button>
          )}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            onUpgrade={handleUpgrade}
          />
        ))}
      </div>

      {/* Upgrade Nudge */}
      {userTier === 'free' && (
        <div className="bg-gradient-to-r from-gold/10 to-yellow-500/10 border border-gold/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gold mb-2">Ready to Scale?</h3>
          <p className="text-gray-300 mb-4">
            Unlock advanced AI features, team collaboration, and enterprise-grade automation.
          </p>
          <button 
            onClick={handleUpgrade}
            className="bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            View Pricing Plans
          </button>
        </div>
      )}
    </div>
  );
}
