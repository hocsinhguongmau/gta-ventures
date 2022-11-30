import Web3 from 'web3'

export const getWeb3 = () =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      try {
        await window.ethereum.enable()
        resolve(web3)
      } catch (error) {
        reject(error)
      }
    }
  })
