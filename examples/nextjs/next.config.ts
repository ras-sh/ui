import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  modularizeImports: {
    "@ras-sh/ui": {
      transform: "@ras-sh/ui/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
  },
};

export default nextConfig;
