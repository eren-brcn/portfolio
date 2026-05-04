import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? "/portfolio" : "",
  assetPrefix: isGitHubPagesBuild ? "/portfolio/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild ? "/portfolio" : "",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
