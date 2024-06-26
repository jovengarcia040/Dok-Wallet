export const words = [
  {
    word: 'detect',
  },
  {
    word: 'leisure',
  },
  {
    word: 'mixed',
  },
  {
    word: 'margin',
  },
  {
    word: 'print',
  },
  {
    word: 'torch',
  },
  {
    word: 'wool',
  },
  {
    word: 'require',
  },
  {
    word: 'wrong',
  },
  {
    word: 'ivory',
  },
  {
    word: 'attitude',
  },
  {
    word: 'boring',
  },
  {
    word: 'video',
  },
  {
    word: 'crush',
  },
  {
    word: 'jazz',
  },
  {
    word: 'spray',
  },
  {
    word: 'left',
  },
  {
    word: 'type',
  },
];

const data = [
  {
    title: 'Multi-currency Support',
    body: 'Store, send, receive and exchange primary crypto currencies like BTC, LTC, ETH and more.',
    src: require('assets/images/screens/register1.jpg'),
  },
  {
    title: 'Buy Crypto',
    body: 'Buy crypto directly from the app with a credit/debit card!',
    src: require('assets/images/screens/register2.jpg'),
  },
  {
    title: 'Convenient biometric authentication login',
    body: 'Keep all your assets secure with our biometric authentication-based login.',
    src: require('assets/images/screens/register3.jpg'),
  },
  {
    title: 'The best place to store your crypto assents.',
    body: 'Store all your crypto assents in one place with our user-friendly wallet.',
    src: require('assets/images/screens/register4.jpg'),
  },
];

export default data;

import CloudCheck from 'assets/images/icons/cloud-check.svg';
import Edit from 'assets/images/icons/edit.svg';

export const google = <CloudCheck height="30" width="30" fiil="black" />;
export const manual = <Edit height="30" width="30" fiil="black" />;

export const wallet = [
  {
    title: 'Google Drive Backup',
    body: 'Not active',
    icon: google,
  },
  {
    title: 'Manual Backup',
    body: 'Active',
    icon: manual,
  },
];

export const cards = [
  {
    src: require('assets/images/buy/card.jpg'),
  },
  {
    src: require('assets/images/buy/card2.jpg'),
  },
];

export const countryList = [
  {label: 'Italy', value: 'Italy'},
  {label: 'Poland', value: 'Poland'},
  {label: 'United States', value: 'United States'},
  {label: 'Ukraine', value: 'Ukraine'},
];

export const ModalAddTokenList = [
  {label: 'Ethereum', value: 'Ethereum'},
  {label: 'Binance Smart Chain', value: 'bsc'},
  {label: 'Tron Smart Chain', value: 'tron'},
];

export const providersList = [
  {
    title: 'Simplex',
    src: require('assets/images/buy/simplex.jpeg'),
    uri: 'https://buy.chainbits.com/',
  },
  {
    title: 'MoonPay',
    src: require('assets/images/buy/moonpay.jpeg'),
    uri: 'https://buy.moonpay.com/?apiKey=pk_live_a8W1dDxaaQTLxvR7OvHIx85cElw44K5M&defaultCurrencyCode=BTC&walletAddresses=%7B%22bch%22%3A%22bitcoincash%3Aqrfqv3mxxhwv4sqx4kvnpy5ntg687qhzl5mftddmyq%22%2C%22bnb%22%3A%22bnb1j8wqkydksamj8jwrsr5p6qugkrlq4pdrrttza3%22%2C%22btc%22%3A%22132Fi4cTZbu3Mo3f98jSHDqiMerNkZz8kN%22%2C%22dash%22%3A%22Xx7wZAnWhZSW7wXkxaTShJGiJF9ptnaFY8%22%2C%22eth%22%3A%220x53a5b94d1378bd0f839617ef0e9787f4a737781e%22%2C%22ltc%22%3A%22LebVCDUD9mthR3EpsPWBqxdUs9kbCjyn1Z%22%2C%22xlm%22%3A%22r9dQwTb9pNdCJQJNsDsMDm1AHworxDZDdq%22%2C%22xrp%22%3A%22GAK2WAZ2ZWAXFDSXQYMW6HHWEWEKRWIYGAUEG4RWBOXFZD2UTXR4V25C%22%7D&baseCurrencyCode=USD&showWalletAddressForm=true&externalCustomerId=ba88c5ef-3534-4a14-a405-f2cb00021269&externalTransactionId=undefined&signature=aiA9zCRyjhANZKJcNRtMdTmNx8X7Iqxg%2FtN2SR0%2FHgY%3D',
  },
  {
    title: 'Coinify',
    src: require('assets/images/buy/coinify.jpeg'),
    uri: '<html><body><iframe src="https://trade-ui.coinify.com?partnerId=bccd4fca-62bd-4b1d-95a2-b7ef80411cbe&primaryColor=blue&cryptoCurrencies=BTC,ETH,XLM" width="100%" height="576px" allow="camera;fullscreen;accelerometer;gyroscope;magnetometer" allowfullscreen></iframe></body></html>',

    //'https://trade-ui.coinify.com/widget/buy/quote', //'https://mycoinify.com/trade/?targetPage=buy',
  },
];
