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

export const ProfileScreen = ({ navigation }) => {
  // const DetailMessageScreen = () => {
  //   navigation.navigate("DetailMessageScreen")
  // }

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../../../assets/images/ImageProfile.jpeg")}
        />
        <View style={styles.containerOnline}>
          <View style={styles.online} />
        </View>
      </View>
      <Text style={styles.name}>Diego Berrio</Text>
      <Text style={styles.email}>Diegoberrio1601@gmail.com</Text>

      <View style={styles.containerBtns}>
        <TouchableOpacity style={styles.rowBtn}>
          <View style={styles.iconText}>
            <Image
              source={require("../../../../assets/icons/preferenceIcon.png")}
            />
            <Text style={styles.btnText}>Preferencias</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={19} color="#A7A7AB" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowBtn}>
          <View style={styles.iconText}>
            <Image
              source={require("../../../../assets/icons/securityIcon.png")}
            />
            <Text style={styles.btnText}>Seguridad de la cuenta</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={19} color="#A7A7AB" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.rowBtn}>
          <View style={styles.iconText}>
            <Image
              source={require("../../../../assets/icons/themeIcon.png")}
            />
            <Text style={styles.btnText}>Modo claro</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={19} color="#A7A7AB" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowBtn}>
          <View style={styles.iconText}>
            <Image
              source={require("../../../../assets/icons/logoutIcon.png")}
            />
            <Text style={styles.btnText}>Cerrar sesión</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={19} color="#A7A7AB" />
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
  logo: {
    width: 112,
    height: 112,
    borderRadius: 55,
    marginBottom: 15,
  },
  name: {
    fontFamily: "SemiBold",
    fontSize: 27,
    color: "#fff",
    marginBottom: 5,
  },
  email: {
    fontFamily: "Medium",
    fontSize: 14,
    color: "#6A6A6B",
  },
  containerOnline: {
    backgroundColor: "#fff",
    height: 22,
    width: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 0,
  },
  online: {
    backgroundColor: "#0AB161",
    height: 15,
    width: 15,
    borderRadius: 6,
  },
  containerBtns: {
    marginTop:70,
    // backgroundColor: "red",
    width: "100%",
  },
  rowBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:35
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    marginLeft: 15,
    fontFamily: "Medium",
    fontSize: 18,
    color: "#fff",
  },
});
