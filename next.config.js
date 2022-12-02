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
    COIN_CHAIN_ID: parseInt(process.env.COIN_CHAIN_ID || 5),
    CURRENT_RPC: process.env.CURRENT_RPC,
    ETHER_SCAN_URL: process.env.ETHER_SCAN_URL,
    COUNTDOWN_DATE: process.env.COUNTDOWN_DATE,
    PROJECT_CONTRACT: process.env.PROJECT_CONTRACT,
    TASKS_URL: process.env.TASKS_URL,
    SENPAD_CONTRACT: process.env.SENPAD_CONTRACT || '0x8061C7C3d86FBE77491457B2C94649DB07ee08fa',
  },
};

module.exports = nextConfig;
