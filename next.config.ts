import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Update this to match your actual GitHub repository name
  basePath: "/lumberjackwins", 
};

export default nextConfig;