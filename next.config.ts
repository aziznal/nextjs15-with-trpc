import type { NextConfig } from "next";
import { env } from "./lib/env";

// Import env files to validate at build time.
if (env) {
}

const nextConfig: NextConfig = {
  rewrites: async () => [
    // route all SPA requests to app
    {
      source: "/spa/:path",
      destination: "/spa",
    },
  ],
};

export default nextConfig;
