import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/,
      use: ["raw-loader"],
    });
    return config;
  },
};

export default nextConfig;
