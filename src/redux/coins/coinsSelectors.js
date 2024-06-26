export const getAllCoins = state =>
  state.coins.wallets[parseInt(state.coins.currentWalletIndex)]?.allCoins;
export const getCurrentWallet = state =>
  state.coins.wallets[parseInt(state.coins.currentWalletIndex)];
export const getUserCoins = state =>
  state.coins.wallets[parseInt(state.coins.currentWalletIndex)]?.userCoins;
export const getOtherCoins = state =>
  state.coins.wallets[parseInt(state.coins.currentWalletIndex)]?.otherCoins;
export const getWalletName = state =>
  state.coins.wallets[parseInt(state.coins.currentWalletIndex)]?.walletName;
export const getWallets = state => state.coins.wallets;
export const getCurrentCoin = state => state.coins.currentCoin;
export const getCurrentWalletIndex = state =>
  parseInt(state.coins.currentWalletIndex);
export const getTotalWallets = state => state.coins.wallets.length;
export const getWalletPhrase = state =>
  state.coins.wallets[parseInt(state.coins.currentWalletIndex)]?.phrase;
// export const getNewKey = state => state.coins.newKey;
