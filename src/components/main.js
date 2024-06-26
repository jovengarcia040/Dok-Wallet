import React, {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {useRoute} from 'routers/router';
import {getLoading, getUserPassword} from 'redux/auth/authSelectors';
import Spinner from 'components/Spinner';
import Delete from './delete';
import {loadingOff} from 'redux/auth/authSlice';
import {getCoin} from '../crypto';
import {persistor} from '../redux/store';
const Main = () => {
  // persistor.purge();
  // const localCurrency = useSelector(getLocalCurrency);
  // const newKey = useSelector(getNewKey);
  // const totalWallets = useSelector(getTotalWallets);
  // const currentWallet = useSelector(getCurrentWallet);
  // const allCoins = useSelector(getAllCoins);
  // const allWallets = useSelector(getWallets);
  // const currentWalletName = useSelector(getWalletName);
  const isLoading = useSelector(getLoading);
  // const dispatch = useDispatch();
  const storePassword = useSelector(getUserPassword);
  // const phrase = useSelector(getWalletPhrase);

  const routing = useRoute(storePassword);

  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
      {isLoading && <Spinner />}
      <Delete />
    </>
  );
};

export default Main;
