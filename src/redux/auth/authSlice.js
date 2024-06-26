import {createSlice} from '@reduxjs/toolkit';

const state = {
  isLogin: false,
  password: '',
  loading: false,
  error: null,
  fingerprintAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    signUpSuccess: (state, action) => {
      state.password = action.payload;
      state.isLogin = true;
    },
    logInSuccess: (state, action) => {
      state.password = action.payload;
      state.isLogin = true;
    },
    changePasswordSuccess: (state, action) => {
      state.password = action.payload;
      state.isLogin = true;
    },
    logOutSuccess: state => {
      state.isLogin = false;
      state.password = '';
    },
    fingerprintAuthSuccess: (state, action) => {
      state.fingerprintAuth = action.payload;
    },
    fingerprintAuthOut: state => {
      state.fingerprintAuth = false;
    },
    loadingOn: state => {
      state.loading = true;
    },
    loadingOff: state => {
      state.loading = false;
    },
  },
});

export const {
  signUpSuccess,
  logInSuccess,
  changePasswordSuccess,
  logOutSuccess,
  fingerprintAuthSuccess,
  fingerprintAuthOut,
  loadingOn,
  loadingOff,
} = authSlice.actions;
