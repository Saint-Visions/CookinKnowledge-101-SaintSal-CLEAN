'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  target: string;
  action?: string;
}

interface OnboardingFlowProps {
  onComplete: () => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps: OnboardingStep[] = [
    {
      id: 1,
      title: "Welcome to SaintVision",
      description: "You're stepping into your AI-powered workspace. Let's get you oriented.",
      target: "welcome",
      action: "Get Started"
    },
    {
      id: 2,
      title: "Meet Your AI Companion",
      description: "This is where the magic happens. Your AI companion learns and adapts to your workflow.",
      target: "companion",
      action: "Say Hello"
    },
    {
      id: 3,
      title: "Smart Pipeline Automation",
      description: "Watch your workflows come to life. Every step is intelligent and adaptive.",
      target: "pipeline",
      action: "See It Work"
    },
    {
      id: 4,
      title: "Quick Access Tools",
      description: "Your entire AI toolkit at your fingertips. From content creation to CRM sync.",
      target: "tools",
      action: "Explore Tools"
    },
    {
      id: 5,
      title: "You're Ready to Cook!",
      description: "Time to experience the SaintVision difference. Let's create something amazing.",
      target: "complete",
      action: "Start Cookin'"
    }
  ];

  useEffect(() => {
    // Check if user has completed onboarding
    const hasSeenOnboarding = localStorage.getItem('saintvision_onboarding_complete');
    if (!hasSeenOnboarding) {
      setIsVisible(true);
    }
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const completeOnboarding = () => {
    localStorage.setItem('saintvision_onboarding_complete', 'true');
    setIsVisible(false);
  };

  const skipOnboarding = () => {
    completeOnboarding();
  };

  if (!isVisible) return null;

  const currentStepData = steps[currentStep];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-charcoal to-black border border-gold rounded-xl p-8 max-w-md w-full"
        >
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Step {currentStep + 1} of {steps.length}</span>
              <button 
                onClick={skipOnboarding}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Skip Tour
              </button>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gold h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gold mb-4">
              {currentStepData.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {currentStepData.description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 border border-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={nextStep}
              className="flex-1 bg-gold text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              {currentStepData.action}
            </button>
          </div>

          {/* Hint for current step */}
          {currentStep === 1 && (
            <div className="mt-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-blue-300">
                💡 <strong>Tip:</strong> Ask your AI companion anything about your business workflow!
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
