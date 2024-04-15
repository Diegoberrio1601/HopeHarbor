import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./auth/AuthStack";


export const RootNavigation = () => {
  return (
    <NavigationContainer>
     <AuthStack/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
