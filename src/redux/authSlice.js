import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './InitialState'

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
      state.isLoggedIn = false;
      state.userData = {}; 
    },

    updatePreferenceState: (state, action) => {
      const { type, id, state: newState } = action.payload;
      const preferencesToUpdate = state.usePreferences[type];
      if (preferencesToUpdate) {
        const preferenceToUpdate = preferencesToUpdate.find(preference => preference.id === id);
        if (preferenceToUpdate) {
          preferenceToUpdate.state = newState;
        }
      }
    },

  },
});

export const { login, logout, updatePreferenceState } = authSlice.actions;
export default authSlice.reducer;
