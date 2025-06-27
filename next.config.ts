/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['monespaces.w3spaces.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
