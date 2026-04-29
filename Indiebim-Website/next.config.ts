import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.164"],
  turbopack: {
    root: configDir,
  },
};

export default nextConfig;
