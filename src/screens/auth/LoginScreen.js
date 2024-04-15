import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to onboarding"
        onPress={() => navigation.navigate("OnboardingScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
