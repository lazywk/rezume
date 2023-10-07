
import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'store/appSlice';

const store = configureStore({
  reducer: {
    counter: appReducer,
  },
});

export default store;
