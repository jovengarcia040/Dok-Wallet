import {compose, applyMiddleware, createStore} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {authSlice} from './auth/authSlice';
import {coinsSlice} from './coins/coinsSlice';
import {settingsSlice} from './settings/settingsSlice';
import walletsSlice from './wallets/walletsSlice';

const storage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'mySharedPrefs6rr',
});

const config = {
  key: 'root2',
  storage,
};

const rootReducer = persistCombineReducers(config, {
  [authSlice.name]: authSlice.reducer,
  [coinsSlice.name]: coinsSlice.reducer,
  [walletsSlice.name]: walletsSlice.reducer,
  [settingsSlice.name]: settingsSlice.reducer,
});

// Logging middleware
const logger = storeAPI => next => action => {
  console.log('Dispatching action:', action);
  let result = next(action);
  console.log('New state:', JSON.stringify(storeAPI.getState()));
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger), // Add the logger to the middleware chain
});

let persistor = persistStore(store);

export {persistor, store};
