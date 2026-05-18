import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = ".next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.164"],
  distDir,
  turbopack: {
    root: configDir,
  },
  async redirects() {
    return [
      {
        source: "/membership-detectives-association",
        destination: "/membership",
        statusCode: 301,
      },
      {
        source: "/clienttestimonial",
        destination: "/client-testimonial",
        statusCode: 301,
      },
      {
        source: "/case-study-1",
        destination: "/case-study/corporate-espionage-mumbai-financial-hub",
        statusCode: 301,
      },
      {
        source: "/case-study-2",
        destination: "/case-study/protecting-intellectual-property-bengaluru",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
