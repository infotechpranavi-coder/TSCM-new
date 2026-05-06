import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const localAppDataDir = process.env.LOCALAPPDATA;
const distDir = localAppDataDir
  ? path.relative(configDir, path.join(localAppDataDir, "Indiebim-Website", ".next")).replaceAll("\\", "/")
  : ".next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.164"],
  distDir,
  turbopack: {
    root: configDir,
  },
};

export default nextConfig;
