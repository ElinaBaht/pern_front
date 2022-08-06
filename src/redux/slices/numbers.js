import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
export const fetchNumbers = createAsyncThunk('numbers/fetchNumbersStatus', async () => {
  const { data } = await axios.get('/numbers');
  return data;
});

const initialState = {
  numbers: {
    items: [],
    status: 'loading',
  },
};

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducer: {},

  extraReducers: {
    [fetchNumbers.pending]: (state) => {
      state.numbers.items = [];
      state.numbers.status = 'loading';
    },
    [fetchNumbers.fulfilled]: (state, action) => {
      state.numbers.items = action.payload;
      state.numbers.status = 'loaded';
    },
    [fetchNumbers.rejected]: (state) => {
      state.numbers.items = [];
      state.numbers.status = 'error';
    },
  },
});

export const numbersReducer = numbersSlice.reducer;
