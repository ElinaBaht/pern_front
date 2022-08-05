import { configureStore } from '@reduxjs/toolkit';
import { numberReducer } from './slices/numbers';

const store = configureStore({
  reducer: {
    numbers: numberReducer,
  },
});

export default store;
