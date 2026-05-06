import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const deployTarget = process.env.DEPLOY_TARGET;
const isGithubPagesBuild = isGithubActions && deployTarget === "github-pages";
const useGithubPagesBasePath =
  process.env.GITHUB_PAGES_USE_BASE_PATH === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repositoryName.endsWith(".github.io");
const basePath =
  isGithubPagesBuild &&
  useGithubPagesBasePath &&
  repositoryName &&
  !isUserOrOrgPage
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
