import type { NextConfig } from "next";
import { env } from "./lib/env";

// Import env files to validate at build time.
if (env) {
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
