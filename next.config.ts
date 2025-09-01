import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ❌ remove this line: output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
