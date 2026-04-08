import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // En Next.js 15 la opción se llama serverExternalPackages
  serverExternalPackages: ["payload", "@payloadcms/db-mongodb", "pino", "pino-pretty"],
};

export default withPayload(nextConfig);