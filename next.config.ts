import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // When deployed to GitHub Pages subdirectory, assets need the basePath
  // Remove basePath once custom domain (spotonfresno.com) is pointed
  basePath: isProd ? "/spotonfresno-site" : "",
  assetPrefix: isProd ? "/spotonfresno-site/" : "",
};

export default nextConfig;
