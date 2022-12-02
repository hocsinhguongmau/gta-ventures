import { Inter } from '@next/font/google';
import Layout from '@components/Layout';
import '../styles/globals.scss';
import { MetaMaskProvider } from '@hooks/useMetamask';
import { Web3Provider } from '@ethersproject/providers';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Web3ReactProvider } from '@web3-react/core';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ['latin'], display: 'fallback' });

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetaMaskProvider>
          <main className={inter.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </MetaMaskProvider>
      </Web3ReactProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
