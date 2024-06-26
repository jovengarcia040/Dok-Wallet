import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCoin, newWallet} from '../../crypto';
import {currency} from 'data/currency';
import {BigNumber} from 'bignumber.js';

export const allWalletsSelector = state => state.wallets.wallets;
export const currentWalletSelector = state => {
  return state.wallets.wallets[state.wallets.currentWalletIndex];
};
export const currentWalletIndexSelector = state => {
  return state.wallets.currentWalletIndex;
};

const createCoins = async phrase => {
  const coins = [];
  for (const coin of currency) {
    console.log(
      `newKey in MAIN: ${JSON.stringify(phrase)} for coin: ${coin.page} `,
    );
    const nativeCoin = await getCoin(phrase, coin.page.toLowerCase());
    console.log('nativeCoin', nativeCoin);
    const newCoin = {
      ...coin,
      address: nativeCoin.address,
      totalAmount: `${(await nativeCoin.getBalance?.()) ?? '0.00'}`,
    };
    // coin.address = nativeCoin.address;
    // coin.totalAmount = `${
    //   (await coin.getBalance?.(coin.address)) ?? '0.00'
    // }`;
    console.log('__address from main', newCoin.address);
    coins.push(newCoin);
  }
  return coins;
};

export const createWallet = createAsyncThunk(
  'wallets/createWallet',
  async (walletData, thunkAPI) => {
    //const {walletName, phrase} = walletData;

    const currentState = thunkAPI.getState();
    const allWallets = allWalletsSelector(currentState);
    const currentWallet = currentWalletSelector(currentState);
    const localCurrency = currentState.settings.localCurrency;
    const newStoreWallet = {
      walletName: walletData.walletName ?? currentWallet.walletName,
    };
    if (!walletData.phrase) {
      const nativeWallet = await newWallet();
      console.log('wallet phrase:', nativeWallet.mnemonic.phrase);
      walletData.phrase = nativeWallet.mnemonic.phrase;
    }
    let coins;
    try {
      coins = await createCoins(walletData.phrase);
    } catch (error) {
      console.log('error in createCoins', error);
      thunkAPI.rejectWithValue(error);
      throw error;
    }
    if (localCurrency === 'USD') {
      // dispatch(addCoins(coins));
      newStoreWallet.allCoins = coins;
    } else if (localCurrency === 'EURO') {
      newStoreWallet.allCoins = convertCoins(currency, localCurrency);
    }
    const userCoins = coins.filter(item => item.top === 'true');
    const allPage = new Set(userCoins.map(({page}) => page));
    const otherCoins = [...coins.filter(({page}) => !allPage.has(page))];
    newStoreWallet.userCoins = userCoins;
    newStoreWallet.otherCoins = otherCoins;
    newStoreWallet.phrase = walletData.phrase;
    if (allWallets.length === 0) {
      newStoreWallet.walletName = 'Main Wallet';
    } else {
      newStoreWallet.walletName = `Wallet ${allWallets.length + 1}`;
    }
    walletData.newStoreWallet = newStoreWallet;
    return walletData;
  },
);

export const addToken = createAsyncThunk(
  'wallets/addToken',
  async (tokenData, thunkAPI) => {
    //const {walletName, phrase} = walletData;

    const currentState = thunkAPI.getState();
    const currentWallet = currentWalletSelector(currentState);
    const localCurrency = currentState.settings.localCurrency;
    const nativeCoin = await getCoin(
      currentWallet.phrase,
      tokenData.chain.toLowerCase(),
      tokenData,
    );
    const balance = await nativeCoin.getBalance?.();
    const dec = parseInt(tokenData.decimal);
    const decBig = new BigNumber('10').pow(dec);
    const decVal = new BigNumber(balance.toString()).dividedBy(decBig);
    const newCoin = {
      ...tokenData,
      title: nativeCoin.title,
      page: nativeCoin.page,
      // ...nativeCoin,
      address: nativeCoin.address,
      totalAmount: `${decVal.toFixed(dec)}`,
      transactions: [],
    };
    return newCoin;
  },
);
// Then, create the slice
// Create a slice for the wallets state
const walletsSlice = createSlice({
  name: 'wallets',
  initialState: {
    wallets: [],
    currentWalletIndex: -1,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    updateWalletName: (state, action) => {
      state.wallets[state.currentWalletIndex].walletName = action.payload;
    },
    setCurrentWalletIndex: (state, action) => {
      state.currentWalletIndex = action.payload;
    },
    updateUserCoins: (state, {payload: {userCoins, otherCoins}}) => {
      const currentWallet = state.wallets[state.currentWalletIndex];
      currentWallet.userCoins = userCoins;
      currentWallet.otherCoins = otherCoins;
    },
  },
  extraReducers: builder => {
    builder.addCase(addToken.fulfilled, (state, {payload}) => {
      const currentIndex = state.currentWalletIndex;
      state.wallets[currentIndex].userCoins.push({
        ...payload,
        // page: 'Stellar',
        title: payload.title,
        transactions: [],
      });
      state.wallets[currentIndex].allCoins.push({
        ...payload,
        // page: 'Stellar',
        title: payload.title,
        // top: 'false',
        // // getAddress: () => 'stelaraddress',
        // // totalAmount: '0',
        // // totalCourse: '0',
        // // currencyRate: '0.088',
        // transactions: [],
      });
      console.log(state);
    });
    builder.addCase(createWallet.fulfilled, (state, {payload}) => {
      // This will run when the `createWallet` thunk has been successfully completed
      // You can add the new wallet to your state

      const currentIndex = state.currentWalletIndex;
      // Log the current state
      console.log(
        `wallets before: ${JSON.stringify(state.wallets)} length: ${
          state.wallets.length
        }}`,
      );
      const newStoreWallet = payload.newStoreWallet;
      if (payload.replace) {
        // If we are replacing the wallet, then copy the wallet name
        // from the old wallet to the new wallet
        newStoreWallet.walletName = state.wallets[currentIndex].walletName;
        // Replace the wallet in the state
        state.wallets[currentIndex] = newStoreWallet;
      } else {
        // Otherwise, just add the wallet to the end of the array
        state.wallets.push(newStoreWallet);
        // Update the current wallet index to the newly created wallet
        state.currentWalletIndex = state.wallets.length - 1;
      }
      // Log the new state
      console.log(
        `wallets after: ${JSON.stringify(state.wallets)} length: ${
          state.wallets.length
        }}`,
      );
    });
  },
});

// Export the action creators
export const {updateWalletName, setCurrentWalletIndex, updateUserCoins} =
  walletsSlice.actions;

// Export the reducer
export default walletsSlice;
