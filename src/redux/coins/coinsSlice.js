import {createSlice} from '@reduxjs/toolkit';

const state = {
  // allCoins: [], // all coins
  wallets: [],
  //   {
  //     walletName: 'Main Wallet',
  //     userCoins: [],
  //     otherCoins: [],
  //     allCoins: [],
  //     phrase: '',
  //   },
  // ],
  currentCoin: '',
  // newKey: '',
  currentWalletIndex: '-1',
};
console.log('initial state', state);
export const coinsSlice = createSlice({
  name: 'coins',
  initialState: state,
  reducers: {
    // keyCreated: (state, action) => {
    //   state.newKey = action.payload;
    // },
    addCoins(state, {payload}) {
      state.wallets[parseInt(state.currentWalletIndex)].allCoins = payload;
      // state.allCoins = payload;
    },
    // setDefaultCurrentWallet(state) {
    //   state.currentWallet = state.wallets[0];
    // },
    updateWalletName(state, {payload}) {
      state.wallets[parseInt(state.currentWalletIndex)].walletName = payload;
      // state.currentWallet = payload; //{...payload, key: state.newKey};
      // state.newKey = '';
    },
    updateWalletPhrase(state, {payload}) {
      state.wallets[parseInt(state.currentWalletIndex)].phrase = payload;
    },
    updateWallet(state, {payload}) {
      state.wallets[parseInt(state.currentWalletIndex)] = payload;
    },
    addWallet(state, {payload}) {
      state.wallets.unshift(payload);
      state.currentWalletIndex = `${state.wallets.length - 1}`;
    },

    removeWallet(state, {payload}) {
      state.wallets = state.wallets.filter((_, idx) => idx !== payload);
    },
    setCurrentCoin(state, {payload}) {
      state.currentCoin = payload;
    },
    updateAllWallets(state, {payload}) {
      state.wallets = payload;
    },
  },
});

console.log('coinsSlice', JSON.stringify(coinsSlice.getInitialState()));

export const {
  keyCreated,
  addCoins,
  updateCoins,
  setDefaultCurrentWallet,
  updateWalletName,
  addWallet,
  removeWallet,
  setCurrentCoin,
  updateAllWallets,
  updateWalletPhrase,
  updateWallet,
} = coinsSlice.actions;
