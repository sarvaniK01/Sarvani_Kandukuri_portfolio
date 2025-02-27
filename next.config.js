/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      trace: false, // Disables build trace collection
    },
  },
};

module.exports = nextConfig;
