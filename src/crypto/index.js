// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values';
// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';
// import {randomBytes} from 'react-native-quick-crypto';
import {NativeModules} from 'react-native';
import {Buffer} from 'buffer';
global.Buffer = Buffer;

console.log('nativeModules', NativeModules);
let {NativeKeygen} = NativeModules;
if (!NativeKeygen) {
  NativeKeygen = NativeModules.CustomMethods;
  console.log(`NativeKeyGen customMethods: ${NativeKeygen}`);
}
console.log(NativeKeygen);
import {AppRegistry} from 'react-native';
// Import the ethers library
// import {ethers} from 'ethers';
// import './shim'; // make sure to use es6 import and not require()
// import {ECPair, networks, HDNode} from 'react-native-bitcoinjs-lib';
// import bip39 from 'react-native-bip39';
import {StopWatch} from 'stopwatch-node';
const sw = new StopWatch();

const TronChain = () => {
  const TronWeb = require('tronweb');
  const solidityNode = 'https://api.trongrid.io';
  const eventServer = 'https://api.trongrid.io';
  const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    // solidityNode,
    // eventServer,
    headers: {'TRON-PRO-API-KEY': '46d3c7cf-50ac-4144-8fd2-3a3939642db9'},
  });

  return {
    getIconName: async name => {
      return 'TRON';
    },
    getContract: async contractAddress => {
      try {
        return await tronWeb.contract().at(contractAddress);
      } catch (e) {
        console.log(`error getting contract ${e}`);
        throw e;
      }
    },
    getBalance: async address => {
      return (await tronWeb.trx.getBalance(address)) / 10 ** 6;
    },
    getTokenBalance: async (address, contract) => {
      try {
        await tronWeb.setAddress(address);
        const bal = await contract.balanceOf(address).call();
        return bal;
      } catch (e) {
        console.log(`error getting token balance ${e}`);
        throw e;
      }
    },
  };
};

const getChain = (() => {
  const chains = {
    tron: TronChain(),
  };
  return chain => chains[chain];
})();

// sleep fox shift walnut target clay badge bean season verb segment small
// TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn
export const newWallet = async () => {
  sw.start('create random eth wallet');
  console.log(`create random eth wallet ${NativeKeygen.generateMnemonic}`);
  const wallet = {
    mnemonic: {
      phrase: await NativeKeygen.generateMnemonic(),
    },
  };
  sw.stop();
  sw.prettyPrint();
  console.log(`wallet: ${wallet}`);
  return wallet;
};

export const getCoin = async (phrase, coin, token) => {
  const wallet = await NativeKeygen.getWallet(coin, phrase);
  console.log(`wallet: ${JSON.stringify(wallet)}`);
  const chain = getChain(coin.toLowerCase());
  const coinWrapper = {
    type: 'coin',
    wallet,
    address: wallet.address,
    chain,
    getBalance: async () => chain?.getBalance(wallet.address),
  };

  if (token) {
    const contractAddress = token.address;
    const tokenContract = await chain.getContract(contractAddress);
    coinWrapper.tokenContract = tokenContract;
    coinWrapper.type = 'token';
    coinWrapper.token = token;
    coinWrapper.getBalance = async () =>
      await chain.getTokenBalance(wallet.address, tokenContract);
    coinWrapper.page = token.name;
    coinWrapper.transactions = [];
    coinWrapper.title = await chain.getIconName(token.name);
  }
  return coinWrapper;
};

export const getTronBalance = async address => {
  sw.prettyPrint();
  return (await tronWeb.trx.getBalance(address)) / 1000000;
};
