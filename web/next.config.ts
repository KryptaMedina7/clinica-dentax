import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Re-activamos la exportación estática para igualar como funcionaba en Netlify
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.watchOptions = {
      ignored: ['**/node_modules/**', '**/public/**', '**/.next/**'],
    };
    return config;
  },
};

export default nextConfig;
