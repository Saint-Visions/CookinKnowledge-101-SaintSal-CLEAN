// 🗺️ ROUTE MAPPER - Central routing configuration for SaintVision AI
// This defines all routes in the application with their metadata

export interface RouteConfig {
  path: string;
  name: string;
  description?: string;
  external?: boolean;
  auth?: boolean;
  premium?: boolean;
}

export const ROUTE_MAP = {
  // 🏠 Main Pages
  home: {
    path: '/',
    name: 'Home',
    description: 'SaintVision AI Homepage'
  },
  pricing: {
    path: '/pricing',
    name: 'Pricing',
    description: 'SaintVision AI Pricing Plans'
  },
  institute: {
    path: '/institute',
    name: 'Institute',
    description: 'SaintVision AI Institute'
  },
  why: {
    path: '/why',
    name: 'Why SaintVision',
    description: 'Why choose SaintVision AI'
  },
  help: {
    path: '/help',
    name: 'Help Center',
    description: 'Get help and support'
  },

  // 🔐 Authentication
  signin: {
    path: '/signin',
    name: 'Sign In',
    description: 'Sign into your account'
  },
  signup: {
    path: '/signup',
    name: 'Sign Up',
    description: 'Create a new account'
  },
  
  // 📱 Application Pages
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    description: 'User dashboard',
    auth: true
  },
  workspace: {
    path: '/workspace',
    name: 'Workspace',
    description: 'AI workspace',
    auth: true
  },
  builder: {
    path: '/builder',
    name: 'Builder',
    description: 'AI builder tool',
    auth: true
  },
  builderUltimate: {
    path: '/builder-ultimate',
    name: 'Ultimate Builder',
    description: 'Advanced AI builder',
    auth: true,
    premium: true
  },
  vault: {
    path: '/vault',
    name: 'Vault',
    description: 'Secure document vault',
    auth: true
  },
  supersal: {
    path: '/supersal',
    name: 'SuperSal AI',
    description: 'Advanced AI companion',
    auth: true,
    premium: true
  },

  // 📄 Legal & Info Pages
  terms: {
    path: '/terms',
    name: 'Terms of Service',
    description: 'Terms and conditions'
  },
  privacy: {
    path: '/privacy',
    name: 'Privacy Policy',
    description: 'Privacy policy and data protection'
  },
  security: {
    path: '/security',
    name: 'Security',
    description: 'Security practices and compliance'
  },
  disclosures: {
    path: '/disclosures',
    name: 'Disclosures',
    description: 'Legal disclosures and notices'
  },
  attribution: {
    path: '/attribution',
    name: 'Attribution',
    description: 'Third-party attributions'
  },

  // 🤝 Partnership & Business
  partner: {
    path: '/partner',
    name: 'Partner Program',
    description: 'Join our partner network'
  },
  partnertech: {
    path: '/partnertech',
    name: 'PartnerTech Integration',
    description: 'PartnerTech.ai CRM integration'
  },

  // 📊 Data & Analytics
  data: {
    path: '/data',
    name: 'Data Management',
    description: 'Data analytics and management',
    auth: true
  },
  audit: {
    path: '/audit',
    name: 'Route Audit',
    description: 'Route auditing and monitoring dashboard',
    auth: true
  },

  // 🎨 Assets & Resources
  svg: {
    path: '/svg',
    name: 'SVG Assets',
    description: 'SVG graphics and icons'
  },
  splash: {
    path: '/splash',
    name: 'Splash Screen',
    description: 'Application splash screen'
  },

  // 🌐 External Links
  github: {
    path: 'https://github.com/Saint-Visions',
    name: 'GitHub',
    description: 'SaintVision AI on GitHub',
    external: true
  },
  twitter: {
    path: 'https://twitter.com/saintvisionai',
    name: 'Twitter',
    description: 'Follow us on Twitter',
    external: true
  },
  linkedin: {
    path: 'https://linkedin.com/company/saintvision-ai',
    name: 'LinkedIn',
    description: 'Connect on LinkedIn',
    external: true
  },
  support: {
    path: 'mailto:support@saintvision.ai',
    name: 'Email Support',
    description: 'Contact support via email',
    external: true
  }
} as const satisfies Record<string, RouteConfig>;

// 🔍 Route utilities
export class RouteMapper {
  static getRoute(key: keyof typeof ROUTE_MAP): RouteConfig {
    return ROUTE_MAP[key];
  }

  static getAllRoutes(): RouteConfig[] {
    return Object.values(ROUTE_MAP);
  }

  static getInternalRoutes(): RouteConfig[] {
    return Object.values(ROUTE_MAP).filter(route => !route.external);
  }

  static getExternalRoutes(): RouteConfig[] {
    return Object.values(ROUTE_MAP).filter(route => route.external);
  }

  static getAuthRoutes(): RouteConfig[] {
    return Object.values(ROUTE_MAP).filter(route => route.auth);
  }

  static getPremiumRoutes(): RouteConfig[] {
    return Object.values(ROUTE_MAP).filter(route => route.premium);
  }

  static routeExists(path: string): boolean {
    return Object.values(ROUTE_MAP).some(route => route.path === path);
  }

  static getRouteByPath(path: string): RouteConfig | undefined {
    return Object.values(ROUTE_MAP).find(route => route.path === path);
  }

  static generateSitemap(): string[] {
    return this.getInternalRoutes().map(route => route.path);
  }
}

// 🎯 Navigation helpers
export function navigateTo(routeKey: keyof typeof ROUTE_MAP, newTab = false) {
  const route = ROUTE_MAP[routeKey];
  
  if (route.external || newTab) {
    window.open(route.path, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = route.path;
  }
}

// 🔗 Get route URL with base domain
export function getFullUrl(routeKey: keyof typeof ROUTE_MAP, baseUrl = 'https://saintvision.ai'): string {
  const route = ROUTE_MAP[routeKey];
  
  if (route.external) {
    return route.path;
  }
  
  return `${baseUrl}${route.path}`;
}

// 📱 Generate navigation menu items
export function getNavigationItems(userIsAuthenticated = false, userIsPremium = false) {
  return Object.entries(ROUTE_MAP)
    .filter(([_, route]) => {
      // Filter out auth-required routes if user is not authenticated
      if (route.auth && !userIsAuthenticated) return false;
      
      // Filter out premium routes if user doesn't have premium
      if (route.premium && !userIsPremium) return false;
      
      // Filter out external routes from main navigation
      if (route.external) return false;
      
      // Filter out utility pages from main navigation
      const utilityPages = ['splash', 'svg', 'attribution'];
      return !utilityPages.includes(route.path.slice(1));
    })
    .map(([key, route]) => ({
      key,
      ...route
    }));
}
