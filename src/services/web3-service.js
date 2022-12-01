/* eslint-disable no-async-promise-executor */
import { SENPAD_ABI } from '../constants';

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

export const claimTicket = (web3Instance, projectContract) => {
  return new Promise(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const senpadContract = new web3Instance.eth.Contract(SENPAD_ABI, projectContract, {
        from: address,
        gasPrice: 74000000000,
        gas: 310000,
      });
      const tx = await senpadContract.methods.claim_tickets().send();

      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};

export const sendApproveTicketRequest = (web3Instance, projectContract) => {
  return new Promise(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const senpadContract = new web3Instance.eth.Contract(SENPAD_ABI, projectContract, {
        from: address,
      });

      const tx = await senpadContract.methods.setApprovalForAll(projectContract, true).send();

      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};

export const isUserInWhitelisted = (web3Instance, projectContract) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();

        const senpadContract = new web3Instance.eth.Contract(SENPAD_ABI, projectContract, {
          from: address,
        });
        const userStatus = await senpadContract.methods.check_whitelist().call();
        // TODO: for testing purpose only, will remove later
        const isWhitelisted = userStatus;
        resolve(isWhitelisted);
      } catch (e) {
        reject(e.message);
      }
    });
  };
};
