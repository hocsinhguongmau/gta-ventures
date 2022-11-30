import { Inter } from '@next/font/google';
import Layout from '@components/Layout';
import '../styles/globals.scss';
import { MetaMaskProvider } from '@hooks/useMetamask';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

const inter = Inter({ subsets: ['latin'] });

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <main className={inter.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
