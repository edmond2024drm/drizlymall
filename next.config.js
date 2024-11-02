/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['localhost:1337'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
