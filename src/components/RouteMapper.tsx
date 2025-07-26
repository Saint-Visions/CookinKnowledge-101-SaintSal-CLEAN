
// 🗺️ ROUTE MAPPER - Clean, minimal, production-ready version
export interface RouteConfig {
  path: string;
  name: string;
  description?: string;
  external?: boolean;
  auth?: boolean;
  premium?: boolean;
}

export const ROUTE_MAP: Record<string, RouteConfig> = {
  home: {
    path: '/',
    name: 'Home',
    description: 'SaintVision AI Homepage',
    external: false
  },
  pricing: {
    path: '/pricing',
    name: 'Pricing',
    description: 'SaintVision AI Pricing Plans',
    external: false
  },
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    description: 'User dashboard',
    auth: true,
    external: false
  },
  partnertech: {
    path: '/partnertech',
    name: 'PartnerTech Integration',
    description: 'PartnerTech.ai CRM integration',
    external: false
  },
  github: {
    path: 'https://github.com/Saint-Visions',
    name: 'GitHub',
    description: 'SaintVision AI on GitHub',
    external: true
  },
  support: {
    path: 'mailto:support@saintvision.ai',
    name: 'Email Support',
    description: 'Contact support via email',
    external: true
  }
};

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
}
