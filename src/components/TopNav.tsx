"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Smart branding configuration based on page context
const getPageBranding = (pathname: string) => {
  // Don't show TopNav on workspace/dashboard pages (they have their own nav)
  if (pathname.startsWith('/workspace') || pathname.startsWith('/dashboard')) {
    return null;
  }

  // Page-specific branding
  const brandingMap = {
    '/': {
      logo: '/images/sv-logo.png',
      title: 'SaintVisionAI™',
      subtitle: 'Cookin\' Knowledge',
      theme: 'home'
    },
    '/splash': {
      logo: '/images/sv-logo.png',
      title: 'SAINTSAL™',
      subtitle: 'Divine Intelligence',
      theme: 'splash'
    },
    '/pricing': {
      logo: '/images/sv-logo.png',
      title: 'SaintVisionAI™',
      subtitle: 'Premium Plans',
      theme: 'business'
    },
    '/help': {
      logo: '/images/sv-logo.png',
      title: 'SaintVisionAI™',
      subtitle: 'Support Center',
      theme: 'support'
    },
    '/institute': {
      logo: '/images/sv-logo.png',
      title: 'SaintSal Institute™',
      subtitle: 'Knowledge Academy',
      theme: 'education'
    },
    '/partnertech': {
      logo: '/images/sv-logo.png',
      title: 'PartnerTech.ai™',
      subtitle: 'Enterprise Solutions',
      theme: 'partner'
    },
    '/builder': {
      logo: '/images/sv-logo.png',
      title: 'SaintVision Builder™',
      subtitle: 'Create & Deploy',
      theme: 'builder'
    },
    '/builder-ultimate': {
      logo: '/images/sv-logo.png',
      title: 'Ultimate Builder™',
      subtitle: 'Enterprise CMS',
      theme: 'ultimate'
    }
  };

  // Find exact match or fallback to default
  const exactMatch = brandingMap[pathname as keyof typeof brandingMap];
  if (exactMatch) return exactMatch;

  // Check for partial matches
  for (const [path, branding] of Object.entries(brandingMap)) {
    if (pathname.startsWith(path) && path !== '/') {
      return branding;
    }
  }

  // Default branding for other pages
  return {
    logo: '/images/sv-logo.png',
    title: 'SaintVisionAI™',
    subtitle: 'Cookin\' Knowledge',
    theme: 'default'
  };
};

// Theme-based styling
const getThemeStyles = (theme: string) => {
  const themeMap = {
    home: 'bg-black/80',
    splash: 'bg-gradient-to-r from-purple-900/80 to-blue-900/80',
    business: 'bg-gradient-to-r from-green-900/80 to-emerald-900/80',
    support: 'bg-gradient-to-r from-blue-900/80 to-cyan-900/80',
    education: 'bg-gradient-to-r from-indigo-900/80 to-purple-900/80',
    partner: 'bg-gradient-to-r from-orange-900/80 to-red-900/80',
    builder: 'bg-gradient-to-r from-yellow-900/80 to-orange-900/80',
    ultimate: 'bg-gradient-to-r from-gray-900/80 to-black/80',
    default: 'bg-black/80'
  };
  
  return themeMap[theme as keyof typeof themeMap] || themeMap.default;
};

export default function TopNav() {
  const pathname = usePathname();
  const branding = getPageBranding(pathname);
  
  // Don't render TopNav for workspace/dashboard pages
  if (!branding) return null;
  
  const isHome = pathname === "/";
  const themeClass = getThemeStyles(branding.theme);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${themeClass} backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center transition-all duration-300`}>
      <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-200 hover:scale-105">
        <div className="relative">
          <Image
            src={branding.logo}
            alt="SaintVisionAI Logo"
            width={44}
            height={44}
            className="rounded-xl shadow-lg"
          />
          {branding.theme === 'ultimate' && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          )}
        </div>
        <div className="text-white leading-tight">
          <div className="text-xl font-semibold tracking-tight">{branding.title}</div>
          <div className={`text-xs font-light tracking-wide ${
            branding.theme === 'splash' ? 'text-purple-300' :
            branding.theme === 'business' ? 'text-green-300' :
            branding.theme === 'support' ? 'text-blue-300' :
            branding.theme === 'education' ? 'text-indigo-300' :
            branding.theme === 'partner' ? 'text-orange-300' :
            branding.theme === 'builder' ? 'text-yellow-300' :
            branding.theme === 'ultimate' ? 'text-gray-300' :
            'text-yellow-400'
          }`}>
            {branding.subtitle}
          </div>
        </div>
      </Link>

      <nav className="hidden md:flex gap-8 items-center text-white text-sm font-medium">
        <Link 
          href="/pricing" 
          className={`hover:text-yellow-400 transition-colors duration-200 ${
            pathname === '/pricing' ? 'text-yellow-400 font-semibold' : ''
          }`}
        >
          Pricing
        </Link>
        <Link 
          href="/why" 
          className={`hover:text-yellow-400 transition-colors duration-200 ${
            pathname === '/why' ? 'text-yellow-400 font-semibold' : ''
          }`}
        >
          Why Us
        </Link>
        <Link 
          href="/help" 
          className={`hover:text-yellow-400 transition-colors duration-200 ${
            pathname === '/help' ? 'text-yellow-400 font-semibold' : ''
          }`}
        >
          Help
        </Link>
        <Link 
          href="/institute" 
          className={`hover:text-yellow-400 transition-colors duration-200 ${
            pathname === '/institute' ? 'text-yellow-400 font-semibold' : ''
          }`}
        >
          Institute
        </Link>
        
        {isHome ? (
          <Link href="/signin" className="text-gray-300 hover:text-white transition-colors duration-200 border border-gray-600 hover:border-white px-4 py-2 rounded-lg">
            Sign In
          </Link>
        ) : (
          <Link href="/workspace">
            <span className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg ${
              branding.theme === 'splash' ? 'bg-purple-500 hover:bg-purple-600 text-white' :
              branding.theme === 'business' ? 'bg-green-500 hover:bg-green-600 text-white' :
              branding.theme === 'support' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
              branding.theme === 'education' ? 'bg-indigo-500 hover:bg-indigo-600 text-white' :
              branding.theme === 'partner' ? 'bg-orange-500 hover:bg-orange-600 text-white' :
              branding.theme === 'builder' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' :
              branding.theme === 'ultimate' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black' :
              'bg-yellow-500 hover:bg-yellow-600 text-black'
            }`}>
              {branding.theme === 'ultimate' ? '🚀 Enter War Room' : 
               branding.theme === 'builder' ? '🎨 Start Building' :
               branding.theme === 'education' ? '📚 Start Learning' :
               branding.theme === 'partner' ? '🤝 Get Started' :
               'Start Cookin\''}
            </span>
          </Link>
        )}
      </nav>

      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white hover:text-yellow-400 transition-colors"
        aria-label="Open mobile menu"
        title="Open mobile menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
