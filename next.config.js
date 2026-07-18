/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
