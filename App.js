import { useState } from "react";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigation } from "./src/navigation";

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <RootNavigation />
  );
}

export default App;
