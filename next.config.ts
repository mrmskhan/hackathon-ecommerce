import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ESLint warnings ko build ke dauran ignore karein
  },
  /* any other config options you might have */
};

export default nextConfig;
