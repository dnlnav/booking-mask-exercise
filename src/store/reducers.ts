import { searchAirportCodes } from './thunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface stateType {
  airportList: string[][];
}

const initialState: stateType = {
  airportList: [],
};

const bookingReducer = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    emptyAirportList(state) {
      state.airportList = [];
    },
  },
  extraReducers: (builder) =>
    builder.addCase(searchAirportCodes.fulfilled, (state, action) => {
      state.airportList = action.payload || [];
    }),
});

export const { emptyAirportList } = bookingReducer.actions;

export default bookingReducer.reducer;
