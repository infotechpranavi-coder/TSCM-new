import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { getNextConfigRedirects } from "./src/data/redirects";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = ".next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.164"],
  distDir,
  turbopack: {
    root: configDir,
  },
  async redirects() {
    return getNextConfigRedirects();
  },
};

export default nextConfig;
