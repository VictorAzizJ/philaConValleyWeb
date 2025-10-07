import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Fix for Windows file system issues with webpack cache
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
};

export default withContentlayer(nextConfig);
