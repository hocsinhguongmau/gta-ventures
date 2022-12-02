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
    TASKS_URL: process.env.TASKS_URL,
    GTA_PASS_CONTRACT:
      process.env.GTA_PASS_CONTRACT || '0xeBDb8b142D732736fbBE8766bb855e94069C5e0A',
  },
};

module.exports = nextConfig;
