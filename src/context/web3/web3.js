import React from 'react';

const initialState = {
  web3: null,
  requestWeb3: () => {
    return;
  },
  chainId: -1,
  account: '',
  setAccount: () => {
    return '';
  },
};

export default React.createContext(initialState);
