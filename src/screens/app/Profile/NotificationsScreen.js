import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colorPalette } from "../../../styles/colorPalette";
import { NotificationList } from "../../../components/Notification";

import { useSelector } from "react-redux";


export const NotificationsScreen = ({ navigation }) => {
  const notifications = useSelector(state => state.auth.usePreferences.notifications);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Aquí puedes seleccionar las notificaciones que prefieras.
      </Text>
      <View style={styles.continerCard}>
        <NotificationList notifications={notifications}/>
      </View>
    </View>
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
