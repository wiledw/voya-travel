import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gatlinburg-attractions.com',
        pathname: '/content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hdbqdbbzzmzcpxwcxhbu.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
