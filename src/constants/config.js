// DEV
export const COIN_CHAIN_ID = process.env.COIN_CHAIN_ID || 5;
export const COIN_CHAIN_NAME = process.env.COIN_CHAIN_ID || 'Goerli Testnet';
export const SUPPORTED_CHAIN_IDS = [COIN_CHAIN_ID];
export const CURRENT_RPC =
  process.env.CURRENT_RPC || 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';

export const COOKIES = {
  ACCESS_TOKEN: 'access_token',
};
export const ETHER_SCAN_URL = process.env.ETHER_SCAN_URL || 'https://goerli.etherscan.io/tx';

export const COUNTDOWN_DATE = process.env.COUNTDOWN_DATE || '2022-12-12';

export const PROJECT_CONTRACT =
  process.env.PROJECT_CONTRACT || '0xC057aB5cA662426E6455a94416b4ab14902fF95c';

export const TASKS_URL = process.env.TASKS_URL || 'https://gleam.io/';
