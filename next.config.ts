import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  turbopack:{
    root: __dirname,
  },
   images: {
    domains: ["m.media-amazon.com"],
  },
  reactCompiler: true,
};

export default nextConfig;
