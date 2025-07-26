'use client';

import Link from 'next/link';

interface GlobalHeaderProps {
  currentPage: string;
  showFullNav?: boolean;
}

export default function GlobalHeader({ currentPage, showFullNav = true }: GlobalHeaderProps) {
  const getPageSubtitle = (page: string) => {
    switch (page) {
      case 'home': return 'ENTERPRISE INTELLIGENCE';
      case 'dashboard': return 'COMMAND CENTER';
      case 'help': return 'SUPPORT CENTER';
      case 'workspace': return 'WAR ROOM';
      case 'pricing': return 'ENTERPRISE PLANS';
      case 'why': return 'INNOVATION LAB';
      case 'legal': return 'COMPLIANCE FRAMEWORK';
      case 'enterprise': return 'SOLUTIONS SUITE';
      case 'signin': return 'ACCESS PORTAL';
      case 'signup': return 'JOIN THE REVOLUTION';
      default: return 'ENTERPRISE INTELLIGENCE';
    }
  };

  const getHeaderColor = (page: string) => {
    switch (page) {
      case 'dashboard': return 'text-gold';
      case 'workspace': return 'text-gold';
      case 'help': return 'text-gold';
      case 'pricing': return 'text-cyan-400';
      case 'why': return 'text-purple-400';
      case 'legal': return 'text-green-400';
      case 'enterprise': return 'text-cyan-400';
      case 'signin': return 'text-gold';
      case 'signup': return 'text-gold';
      default: return 'text-cyan-400';
    }
  };

  return (
    <header className="relative z-10 p-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10">
            <img 
              src="/images/sv-logo.png" 
              alt="SaintVision AI"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">SaintVisionAI™</h1>
            <p className={`text-xs font-medium ${getHeaderColor(currentPage)}`}>
              {getPageSubtitle(currentPage)}
            </p>
          </div>
        </div>
        
        {showFullNav && (
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="/" 
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                Home
              </Link>
              <a 
                href="/why" 
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'why' ? 'text-purple-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Why Us
              </Link>
              <a 
                href="/enterprise" 
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'enterprise' ? 'text-cyan-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Enterprise
              </Link>
              <a 
                href="/pricing" 
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'pricing' ? 'text-cyan-400' : 'text-white/70 hover:text-white'
                }`}
              >
                Pricing
              </Link>
              <a 
                href="/help" 
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'help' ? 'text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                Help
              </Link>
            </nav>
            
            {currentPage === 'signin' || currentPage === 'signup' ? (
              <div className="flex items-center space-x-4">
                <a 
                  href="/signin" 
                  className={`text-sm font-medium transition-colors ${
                    currentPage === 'signin' ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  Sign In
                </Link>
                <a 
                  href="/signup" 
                  className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 py-2.5 rounded-md transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <a 
                  href="/signin" 
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <a 
                  href="/dashboard" 
                  className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 py-2.5 rounded-md transition-colors text-sm"
                >
                  Launch Platform
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
