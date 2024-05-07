export const initialState = {
    isLoggedIn: true,
    userData: {
        name: "Diego Berrio",
        birthday: "01/02/1996",
        phone: "3003118411",
        gender: "Hombre",
        email: "diegoberrio1601@gmail.com",
      },
    settings: {
      darkMode: false,
      notifications: true,
    },

    usePreferences: {
        notifications: [
          {
            id: 1,
            title: "Al amanecer",
            subTitle: "Justo a las 6 am.",
            iconName: "morning",
            state: false,
            type: 'notifications',
          },
          {
            id: 2,
            title: "Al mediodía",
            subTitle: "Justo a las 12 pm.",
            iconName: "noon",
            state: false,
            type: 'notifications',
          },
          {
            id: 3,
            title: "Al Atardecer",
            subTitle: "Justo a las 6 pm.",
            iconName: "sunset",
            state: false,
            type: 'notifications',
          },
        ],
        favoriteTopic: [
          {
            id: 1,
            title: "Autocompasión y amor propio",
            subTitle:
              "Fomenta el amor propio y la compasión con mensajes que destacan tu valía y te inspiran a cuidarte con cariño.",
            state: false,
            type: 'favoriteTopic'
          },
          {
            id: 2,
            title: "Resiliencia y superación",
            subTitle:
              "Encuentra la fuerza interna para superar desafíos y seguir adelante con mensajes de coraje y determinación.",
            state: false,
            type: 'favoriteTopic'
          },
          {
            id: 3,
            title: "Esperanza y optimismo",
            subTitle:
              "Enciende la esperanza en tu vida con mensajes que te llenan de optimismo y te recuerdan que un futuro brillante está por venir.",
            state: false,
            type: 'favoriteTopic'
          },
        ],
      },
    
  };


  

  