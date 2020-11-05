import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './reducers';

export const store = configureStore({
  reducer: bookingReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
