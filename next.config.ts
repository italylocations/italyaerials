import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-043427812e354c88bd7de61078b56cf3.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
