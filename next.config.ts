import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = '/nidhi.github.io';

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // optional
  basePath: isGithubPages ? repoName : '',
  assetPrefix: isGithubPages ? repoName + '/' : '',
};

export default nextConfig;
