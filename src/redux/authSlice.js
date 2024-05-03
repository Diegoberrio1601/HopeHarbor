import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
  userData: {
    name: "Diego Berrio",
    birthday: "01/02/1996",
    phone: "3003118411",
    gender: "Hombre",
    email: "diegoberrio1601@gmail.com",
  },
  usePreferences: {
    notifications: [
      {
        id: 1,
        title: "Al amanecer",
        subTitle: "Justo a las 6 am.",
        iconName: "morning",
        state: false,
      },
      {
        id: 2,
        title: "Al mediodía",
        subTitle: "Justo a las 12 pm.",
        iconName: "noon",
        state: false,
      },
      {
        id: 3,
        title: "Al Atardecer",
        subTitle: "Justo a las 6 pm.",
        iconName: "sunset",
        state: false,
      },
    ],
    favoriteTopic: [
      {
        id: 1,
        title: "Autocompasión y amor propio",
        subTitle:
          "Fomenta el amor propio y la compasión con mensajes que destacan tu valía y te inspiran a cuidarte con cariño.",
        state: false,
      },
      {
        id: 2,
        title: "Resiliencia y superación",
        subTitle:
          "Encuentra la fuerza interna para superar desafíos y seguir adelante con mensajes de coraje y determinación.",
        state: false,
      },
      {
        id: 3,
        title: "Esperanza y optimismo",
        subTitle:
          "Enciende la esperanza en tu vida con mensajes que te llenan de optimismo y te recuerdan que un futuro brillante está por venir.",
        state: false,
      },
    ],
  },
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
      state.isLoggedIn = false;
      state.userData = {}; 
    },

    updateNotificationState: (state, action) => {
      const { id, state: newState } = action.payload;
      const notificationToUpdate = state.usePreferences.notifications.find(notification => notification.id === id);
      if (notificationToUpdate) {
        notificationToUpdate.state = newState;
      }
    },
    updateFavoriteTopicState: (state, action) => {
      const { id, state: newState } = action.payload;
      const favoriteTopicToUpdate = state.usePreferences.favoriteTopic.find(favoriteTopic => favoriteTopic.id === id);
      if (favoriteTopicToUpdate) {
        favoriteTopicToUpdate.state = newState;
      }
    },

  },
});

export const { login, logout, updateNotificationState, updateFavoriteTopicState } = authSlice.actions;
export default authSlice.reducer;
