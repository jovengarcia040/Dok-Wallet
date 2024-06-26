import {createSlice} from '@reduxjs/toolkit';

const state = {
  key: null,
};

export const keySlice = createSlice({
  name: 'key',
  initialState: state,
  reducers: {
    keyCreated: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const {keyCreated} = keySlice.actions;
