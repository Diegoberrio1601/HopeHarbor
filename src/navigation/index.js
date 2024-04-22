import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./auth/AuthStack";
import { BottomTab } from "./app/BottomTab";


export const RootNavigation = () => {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <NavigationContainer>
      {isAuth ? <BottomTab/> : <AuthStack/>}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
