import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { colorPalette } from "../../../styles/colorPalette";
import { MaterialIcons } from "@expo/vector-icons";
import { Notification } from "../../../components/Notification";

export const NotificationsScreen = ({ navigation }) => {
  const Navigate = (nameScreen) => {
    navigation.navigate(nameScreen);
  };
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Aquí puedes seleccionar las notificaciones que prefieras.
      </Text>
      <View style={styles.continerCard}>
        <Notification
          iconName={"morning"}
          title={"Al amanecer"}
          subTitle={"Justo a las 6 am."}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Para ocupar todo el espacio vertical disponible
    backgroundColor: colorPalette.dark,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#737373",
  },
  continerCard: {
    marginTop: 40,
    width: "100%",
  },
});
