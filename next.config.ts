import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["payload", "@payloadcms/db-mongodb"],
  },
};

export default withPayload(nextConfig);