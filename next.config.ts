import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig = {
  cssChunking: "strict",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
} satisfies NextConfig & { cssChunking?: string };

export default withPayload(nextConfig);