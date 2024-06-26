import {createSlice} from '@reduxjs/toolkit';

const state = {
  localCurrency: 'USD',
  notifications: {
    received: true,
    sent: true,
  },
  fingerprint: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: state,
  reducers: {
    setLocalCurrency(state, {payload}) {
      state.localCurrency = payload;
    },
    updateReceived(state, {payload}) {
      state.notifications.received = payload;
    },
    updateSent(state, {payload}) {
      state.notifications.sent = payload;
    },
    updateFingerprint(state, {payload}) {
      state.fingerprint = payload;
    },
  },
});

export const {setLocalCurrency, updateReceived, updateSent, updateFingerprint} =
  settingsSlice.actions;
