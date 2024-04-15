// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "../../screens/auth/OnboardingScreen";
import { LoginScreen } from "../../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#EC5B70",
        },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: "#fff",
          // fontWeight:900
        },
        headerTintColor: {
          color: "#fff",
        },
      }}
    >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
