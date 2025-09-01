import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ needed for static export
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ skip TS errors during build
  },
};

export default nextConfig;