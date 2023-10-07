import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoginning: false,
    user: null,
    theme: 'light', // light or dark
    authority: 'user', // admin
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoginning: (state, action) => {
        state.isLoginning = action.payload
    },

    setTheme: (state, action) => {
        state.theme = action.payload
    }
  },
});

export const { setIsLoginning } = appSlice.actions;
export default appSlice.reducer;
