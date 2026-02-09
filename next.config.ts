import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'picsum.photos', pathname: '/**', protocol: 'https' },
      { hostname: 'images.unsplash.com', pathname: '/**', protocol: 'https' },
    ],
  },
};

export default nextConfig;
