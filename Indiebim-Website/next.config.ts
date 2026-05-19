import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { getNextConfigRedirects } from "./src/data/redirects";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = ".next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.164", "192.168.29.150"],
  distDir,
  turbopack: {
    root: configDir,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid webpack pack cache OOM on Windows when using `pnpm dev:webpack`.
      config.cache = false;
    }
    return config;
  },
  async redirects() {
    return getNextConfigRedirects();
  },
};

export default nextConfig;
