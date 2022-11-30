/* eslint-disable no-async-promise-executor */

export const personalSign = (web3Instance) => {
  return new Promise(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null')
      return
    }
    try {
      const nonce = Math.floor(Math.random() * 1000000)

      const [address] = await web3Instance.eth.getAccounts()
      const message = `Sign a message to prove ownership of wallet ${address}
      \nnonce: ${nonce}`
      const signature = await web3Instance.eth.personal.sign(message, address)
      resolve({ signature, nonce })
    } catch (e) {
      console.log('>>>>>>>>>>>>>>>>>')
      reject(e.message)
    }
  })
}
