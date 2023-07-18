const { imageOptimizer } = require('next/dist/server/image-optimizer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  images: {
    unoptimized: true,
  },
};

module.exports =  nextConfig
