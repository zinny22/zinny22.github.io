/**
 * @format
 * @type {import('next').NextConfig}
 */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: !debug ? `/` : "",
  trailingSlash: true,
};

module.exports = nextConfig;
