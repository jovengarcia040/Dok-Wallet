import Bit from 'assets/images/crypto/bitcoin.svg';
import BitCash from 'assets/images/crypto/bch.svg';
import Dash from 'assets/images/crypto/dash.svg';
import Ethereum from 'assets/images/crypto/etherium.svg';
import Litecoin from 'assets/images/crypto/litecoin.svg';
import Stellar from 'assets/images/crypto/stellar.svg';
import Ripple from 'assets/images/crypto/ripple.svg';
import TwoKey from 'assets/images/crypto/2key.svg';
import Dollar from 'assets/images/crypto/$.svg';
import Tron from 'assets/images/crypto/tron.svg';

export const bitcoin = <Bit width="30" height="30" color="#FFFFFF" />;
export const bitcoinCash = <BitCash width="30" height="30" color="#FFFFFF" />;
export const dash = <Dash width="30" height="30" color="#FFFFFF" />;
export const ethereum = <Ethereum width="30" height="30" color="#FFFFFF" />;
export const litecoin = <Litecoin width="30" height="30" color="#FFFFFF" />;
export const stellar = <Stellar width="30" height="30" color="#FFFFFF" />;
export const ripple = <Ripple width="30" height="30" color="#FFFFFF" />;
export const twoKey = <TwoKey width="30" height="30" color="#FFFFFF" />;
export const tron = <Tron width="30" height="30" color="#FFFFFF" />;

export const iconsList = [
  {
    title: 'BTC',
    icon: bitcoin,
  },
  {
    icon: bitcoinCash,
    title: 'BCH',
  },
  {
    icon: dash,
    title: 'DASH',
  },
  {
    icon: ethereum,
    title: 'ETH',
  },
  {
    icon: litecoin,
    title: 'LTC',
  },
  {
    icon: stellar,
    title: 'XML',
  },
  {
    icon: ripple,
    title: 'XRP',
  },
  {
    icon: twoKey,
    title: '2KEY',
  },
  {
    icon: tron,
    title: 'TRON',
  },
];

/////////////////////////currency////////////////////////////////////////////////

// import { MaterialCommunityIcons } from "@expo/vector-icons";

// export const dollar = <Dollar width="30" height="30" />;
// export const euro = (
//   <MaterialCommunityIcons name="currency-eur" size={30} color="white" />
// );
// export const ils = (
//   <MaterialCommunityIcons name="currency-ils" size={30} color="white" />
// );
// export const krw = (
//   <MaterialCommunityIcons name="currency-krw" size={30} color="white" />
// );
import {
  generateBitcoinAddress,
  generateEthAddress,
  generateTronAddress,
  getTronBalance,
} from '../crypto';
import {generateBitcoinCashAddress} from '../crypto';

export const currency = [
  {
    page: 'Bitcoin',
    title: 'BTC',
    top: 'true',
    getAddress: generateBitcoinAddress,
    totalAmount: '0.0532',
    totalCourse: '1401.56',
    currencyRate: '26345.2',
    transactions: [
      {
        amount: '+4.375',
        course: '804.17',
        link: '0xdf4c270dg18...',
        date: '13.08.2019',
        status: 'Completed',
      },
      {
        amount: '-7.48',
        course: '1374.9',
        link: '0xdf4c270dg18...',
        date: '30.08.2019',
        status: 'Pending',
      },
      {
        amount: '15.27',
        course: '2806.78',
        link: '0xdf4c270dg18...',
        date: '15.10.2019',
        status: 'Failed',
      },
      {
        amount: '-7.48',
        course: '1374.9',
        link: '0xdf4c270dg18...',
        date: '16.03.2018',
        status: 'Pending',
      },
      {
        amount: '15.27',
        course: '2806.78',
        link: '0xdf4c270dg18...',
        date: '18.08.2020',
        status: 'Failed',
      },
      {
        amount: '-7.48',
        course: '1374.9',
        link: '0xdf4c270dg18...',
        date: '01.02.2021',
        status: 'Pending',
      },
      {
        amount: '+4.375',
        course: '804.17',
        link: '0xdf4c270dg18...',
        date: '14.10.2022',
        status: 'Completed',
      },
    ],
  },
  // {
  //   page: 'Bitcoin Cash',
  //   title: 'BCH',
  //   top: 'true',
  //   getAddress: generateBitcoinCashAddress,
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '116.41',
  //   transactions: [],
  // },
  {
    page: 'Tron',
    title: 'TRON',
    top: 'true',
    getAddress: generateTronAddress,
    totalAmount: '0',
    totalCourse: '0',
    currencyRate: '0.07',
    //getBalance: getTronBalance,
    transactions: [], //getTronTransactions,
  },

  // {
  //   page: 'Dash',
  //   title: 'DASH',
  //   top: 'true',
  //   getAddress: () => 'dashaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '44.83',
  //   transactions: [],
  // },
  {
    page: 'Ethereum',
    title: 'ETH',
    top: 'false',
    getAddress: generateEthAddress,
    totalAmount: '19.645',
    totalCourse: '361.86',
    currencyRate: '18.42',
    transactions: [
      {
        amount: '+4.375',
        course: '804.17',
        link: '0xdf4c270dg18...',
        date: '13.08.2019',
        status: 'Completed',
      },
      {
        amount: '15.27',
        course: '2806.78',
        link: '0xdf4c270dg18...',
        date: '15.10.2022',
        status: 'Failed',
      },
      {
        amount: '-7.48',
        course: '1374.9',
        link: '0xdf4c270dg18...',
        date: '22.04.2019',
        status: 'Pending',
      },
    ],
  },
  // {
  //   page: 'Litecoin',
  //   title: 'LTC',
  //   top: 'true',
  //   getAddress: () => 'litecoinaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '92.50',
  //   transactions: [],
  // },
  // {
  //   page: 'Stellar',
  //   title: 'XML',
  //   top: 'false',
  //   getAddress: () => 'stelaraddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '0.088',
  //   transactions: [],
  // },
  // {
  //   page: 'Ripple',
  //   title: 'XRP',
  //   top: 'false',
  //   getAddress: () => 'rippleaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '0.44',
  //   transactions: [],
  // },
  // {
  //   page: '2key',
  //   title: '2KEY',
  //   top: 'false',
  //   getAddress: () => '2keyaddress',
  //   totalAmount: '0',
  //   totalCourse: '0',
  //   currencyRate: '0.60',
  //   transactions: [],
  // },
];

////////////////////////////////////////////

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const dollar = <Dollar width="30" height="30" />;
export const euro = (
  <MaterialCommunityIcons name="currency-eur" size={30} color="white" />
);

export const amountList = [
  {
    src: dollar,
    value: '5,000 to 10,000 Dollar',
  },
  {
    src: dollar,
    value: '10,000 to 20,000 Dollar',
  },
  {
    src: dollar,
    value: '20,000 to 50,000 Dollar',
  },
  {
    src: dollar,
    value: '50,000 to 100,000 Dollar',
  },
  {
    src: dollar,
    value: 'More than 100,000 Dollar',
  },
];

export const localCurrencyList = [
  {
    icon: dollar,
    label: 'United States Dollar',
    id: 'USD',
  },
  {
    icon: euro,
    label: 'Euro',
    id: 'EURO',
  },
];
