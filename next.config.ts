import { join } from 'path';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Set output tracing root properly for Vercel deployment
  outputFileTracingRoot: join(process.cwd()),
  // Configure styled-components
  compiler: {
    styledComponents: true,
  },
  // Add transpilePackages for styled-components
  transpilePackages: ['styled-components'],
  // Make sure to generate proper source maps for better error reporting
  productionBrowserSourceMaps: true,
};

export default nextConfig;
