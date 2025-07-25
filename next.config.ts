import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io"
      }
    ]
  },
  
  // Enable experimental features for better app router support
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  },
  
  // Configure webpack for better builds
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

export default nextConfig;
