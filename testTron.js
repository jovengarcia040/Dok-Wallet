const {ethers} = require('ethers');
const TronWeb = require('tronweb');
const BigNumber = require('bignumber.js');
const HttpProvider = TronWeb.providers.HttpProvider;
// const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
// const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
// const eventServer = new HttpProvider('https://api.shasta.trongrid.io');
const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = new HttpProvider('https://api.trongrid.io');

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
const run = async () => {
  //   const wallet = ethers.Wallet.createRandom();
  //   console.log(wallet.mnemonic.phrase);
  //   const tw = TronWeb.fromMnemonic(wallet.mnemonic.phrase);
  const tw = TronWeb.fromMnemonic(
    'sleep fox shift walnut target clay badge bean season verb segment small',
  );
  console.log(tw.address);
  console.log(tw);
  //   const tronWeb = new TronWeb({
  //     fullHost: 'https://api.trongrid.io',
  //     headers: {'TRON-PRO-API-KEY': '46d3c7cf-50ac-4144-8fd2-3a3939642db9'},
  //     //privateKey: wallet.privateKey.substring(2),
  //   });
  const account = await tronWeb.trx.getAccount(tw.address);
  console.log(`account ${account}`);
  const balace = await tronWeb.trx.getBalance(tw.address);
  console.log(`balance ${balace}`);
  const contract = await tronWeb
    .contract()
    .at('TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn');
  console.log(`contract ${contract}`);
  tronWeb.setAddress(tw.address);
  console.log('after set address');
  try {
    const tokenBalance = await contract.balanceOf(tw.address).call();
    console.log(tokenBalance);

    const bigNumBal = new BigNumber(tokenBalance.toString());
    console.log(bigNumBal);
    const bigDec = new BigNumber('10').pow(6);
    console.log(bigNumBal.dividedBy(bigDec).toFixed(5));
  } catch (e) {
    console.log(e);
  }
};
run();
