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

export const PreferencesScreen = ({ navigation }) => {
  const Navigate = (nameScreen) => {
    navigation.navigate(nameScreen);
  };
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <View style={styles.containerBtns}>
        <TouchableOpacity
          style={styles.rowBtn}
          onPress={() => Navigate("NotificationsScreen")}
        >
          <View style={styles.iconText}>
            <Image
              style={styles.logo}
              source={require("../../../../assets/icons/notificationIcon.png")}
            />
            <View style={styles.rowText}>
              <Text style={styles.btnText}>Notificaciones</Text>
              <Text style={styles.btnSubText}>
                En el día son 3 mañana, tarde y noche.
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowBtn}
          onPress={() => Navigate("FavoriteTopicScreen")}
        >
          <View style={styles.iconText}>
            <Image
              style={styles.logo}
              source={require("../../../../assets/icons/favoriteTopicIcon.png")}
            />
            <View style={styles.rowText}>
              <Text style={styles.btnText}>Tema preferido</Text>
              <Text style={styles.btnSubText}>
                Elige un tema de tu interés para generar los mensajes.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Para ocupar todo el espacio vertical disponible
    backgroundColor: colorPalette.dark,
    paddingHorizontal: 20,
    // marginHorizontal:20,
    paddingTop: 20,
    alignItems: "center",
  },
  containerBtns: {
    marginTop: 20,
    width: "100%",
  },
  rowBtn: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 35,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    marginRight: 15,
  },
  rowText: {
    width: "100%"
  },
  btnText: {
    fontFamily: "SemiBold",
    fontSize: 19,
    color: "#fff",
  },
  btnSubText: {
    color: "#737373",
    fontFamily: "Regular",
    fontSize: 14,
    width:253
  },
});
