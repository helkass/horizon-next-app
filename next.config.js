/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["randomuser.me", "instagram.com"],
  },
};

module.exports = nextConfig;
