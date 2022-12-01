/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    COIN_CHAIN_ID: process.env.COIN_CHAIN_ID,
    CURRENT_RPC: process.env.CURRENT_RPC,
    ETHER_SCAN_URL: process.env.ETHER_SCAN_URL,
    COUNTDOWN_DATE: process.env.COUNTDOWN_DATE,
    PROJECT_CONTRACT: process.env.PROJECT_CONTRACT,
    TASKS_URL: process.env.TASKS_URL,
  },
};

module.exports = nextConfig;
