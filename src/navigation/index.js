import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./auth/AuthStack";
import { BottomTab } from "./app/BottomTab";

import { useSelector } from "react-redux";

export const RootNavigation = () => {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLogged ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
