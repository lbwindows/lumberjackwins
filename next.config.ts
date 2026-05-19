import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force Next.js to build static files (HTML/CSS/JS) into an 'out' folder
  output: "export",

  // 2. Disable server-side image optimization (not supported on static hosting)
  images: {
    unoptimized: true,
  },

  // 3. Match your GitHub Pages subdirectory URL routing structure
  // Replace 'your-repo-name' with your exact repository name on GitHub
  basePath: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
};

export default nextConfig;