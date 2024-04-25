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

export const AccountSecurityScreen = ({ navigation }) => {
  const Navigate = (nameScreen) => {
    navigation.navigate(nameScreen);
  };
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <View style={styles.containerBtns}>
        <TouchableOpacity
          style={styles.rowBtn}
          onPress={() => Navigate("EditInformationScreen")}
        >
          <View style={styles.iconText}>
            <Image
              source={require("../../../../assets/icons/userIcon.png")}
            />
            <View style={styles.contentText}>
              <Text style={styles.btnText}>Datos personales</Text>
              <Text style={styles.btnSubText}>
                Cambiar la información de tu cuenta
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowBtn}
          onPress={() => Navigate("NewPasswordScreen")}
        >
          <View style={styles.iconText}>
            <Image
              source={require("../../../../assets/icons/passwordIcon.png")}
            />
            <View style={styles.contentText}>
              <Text style={styles.btnText}>Contraseña</Text>
              <Text style={styles.btnSubText}>Cambia tu contraseña</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowBtn}
        onPress={() => Navigate("InviteAFriendScreen")}>
          <View style={styles.iconText}>
            <Image source={require("../../../../assets/icons/shareIcon.png")} />
            <View style={styles.contentText}>
              <Text style={styles.btnText}>Invita a tus amigos</Text>
              <Text style={styles.btnSubText}>Recomendar esta app </Text>
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
    paddingTop: 20,
    alignItems: "center",
  },
  containerBtns: {
    marginTop: 70,
    // backgroundColor: "red",
    width: "100%",
  },
  rowBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 35,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentText: {
    marginLeft: 15,
  },
  btnText: {
    fontFamily: "Medium",
    fontSize: 18,
    color: "#fff",
  },
  btnSubText: {
    color: "#737373",
    fontFamily: "Regular",
    fontSize: 13,
  },
});
