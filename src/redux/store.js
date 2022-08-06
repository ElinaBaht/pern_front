import { configureStore } from '@reduxjs/toolkit';
import { numbersReducer } from './slices/numbers';

const store = configureStore({
  reducer: {
    numbers: numbersReducer,
  },
});

export default store;
