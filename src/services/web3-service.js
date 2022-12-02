/* eslint-disable no-async-promise-executor */
import { GTA_PASS_ABI, GTA_PASS_CONTRACT } from '../constants';

export const personalSign = (web3Instance) => {
  return new Promise(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const nonce = Math.floor(Math.random() * 1000000);

      const [address] = await web3Instance.eth.getAccounts();
      const message = `Sign a message to prove ownership of wallet ${address}
      \nnonce: ${nonce}`;
      const signature = await web3Instance.eth.personal.sign(message, address);
      resolve({ signature, nonce });
    } catch (e) {
      console.log('>>>>>>>>>>>>>>>>>');
      reject(e.message);
    }
  });
};

export const claimPass = (web3Instance) => {
  return new Promise(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const gtaPassContract = new web3Instance.eth.Contract(GTA_PASS_ABI, GTA_PASS_CONTRACT);
      const tx = await gtaPassContract.methods
        .mintPass()
        .send({ from: address, gasPrice: 74000000000, gas: 310000 });

      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};

export const isUserInWhitelisted = (web3Instance) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();

        const gtaPassContract = new web3Instance.eth.Contract(GTA_PASS_ABI, GTA_PASS_CONTRACT, {
          from: address,
        });
        const userStatus = await gtaPassContract.methods.check_whitelist().call();
        // TODO: for testing purpose only, will remove later
        const isWhitelisted = userStatus;
        resolve(isWhitelisted);
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const checkClaimPass = (web3Instance) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();
        const gtaPassContract = new web3Instance.eth.Contract(GTA_PASS_ABI, GTA_PASS_CONTRACT);
        const result = await gtaPassContract.methods
          .check_claim()
          .call({ from: address, gasPrice: 74000000000, gas: 310000 });

        resolve(result);
      } catch (e) {
        reject(e.message);
      }
    });
  };
};
