import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
  userData: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { isLoggedIn, userData } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.userData = userData;
    },
    logout: (state) => {
      const { isLoggedIn, userData } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.userData = userData;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
