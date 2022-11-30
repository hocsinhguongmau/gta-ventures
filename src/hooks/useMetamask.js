import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Web3 from 'web3';
import { injected } from '@components/wallet/connectors';
import { useWeb3React } from '@web3-react/core';
import { COIN_CHAIN_ID, CURRENT_RPC, COIN_CHAIN_NAME } from 'src/constants';

export const MetaMaskContext = React.createContext(null);

export const MetaMaskProvider = ({ children }) => {
  const { activate, account, active, deactivate, library } = useWeb3React();

  const [web3Instance, setWeb3Instance] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false); // Should disable connect button while connecting to MetaMask
  const [isLoading, setIsLoading] = useState(true);

  const getWeb3 = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${COIN_CHAIN_ID.toString(16)}` }],
          });
        } catch (error) {
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: `0x${COIN_CHAIN_ID.toString(16)}`,
                    rpcUrls: [CURRENT_RPC],
                    chainName: COIN_CHAIN_NAME,
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
          console.error(error);
        }
        setWeb3Instance(web3);
      } catch (error) {
        setWeb3Instance(null);
      }
    } else {
      setWeb3Instance(null);
    }
  };

  // Connect to MetaMask wallet

  const connect = useCallback(async () => {
    console.log('Connecting to MetaMask...');
    await getWeb3();
    setShouldDisable(true);
    try {
      await activate(injected, (err) => {
        console.log('Error on connect', err);
      }).then(() => {
        setShouldDisable(false);
      });
    } catch (error) {
      console.log('Error on connecting: ', error);
    }
  }, [activate]);

  // Init Loading
  useEffect(() => {
    connect().then(() => {
      setIsLoading(false);
    });
  }, [connect]);

  // Check when App is Connected or Disconnected to MetaMask
  const handleIsActive = useCallback(async () => {
    if (isActive !== active) {
      console.log('App is connected with MetaMask ', active);
      setIsActive(active);
      await getWeb3();
    }
  }, [isActive, active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  const handleChainChanged = React.useCallback(() => {
    window.location.reload();
  }, []);

  const handleOnAccountChanged = React.useCallback(() => {
    window.location.reload();
  }, []);

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) {
      return;
    }

    ethereum.on('chainChanged', handleChainChanged);
    ethereum.on('accountsChanged', handleOnAccountChanged);

    return () => {
      if (ethereum.removeListener) {
        ethereum.removeListener('chainChanged', handleChainChanged);
        ethereum.removeListener('accountsChanged', handleOnAccountChanged);
      }
    };
  }, [handleChainChanged, handleOnAccountChanged]);

  // Disconnect from Metamask wallet
  const disconnect = useCallback(async () => {
    console.log('Disconnecting wallet from App...');
    try {
      await deactivate();
      await getWeb3();
    } catch (error) {
      console.log('Error on disconnect: ', error);
    }
  }, [deactivate]);

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      connect,
      disconnect,
      shouldDisable,
      library,
      web3Instance,
    }),
    [isActive, isLoading, shouldDisable, account, connect, disconnect, library, web3Instance]
  );

  return <MetaMaskContext.Provider value={values}>{children}</MetaMaskContext.Provider>;
};

export default function useMetaMask() {
  const context = React.useContext(MetaMaskContext);

  if (context === undefined) {
    throw new Error('useMetaMask hook must be used with a MetaMaskProvider component');
  }

  return context;
}
