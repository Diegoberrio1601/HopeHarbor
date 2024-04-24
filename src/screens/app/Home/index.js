import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { colorPalette } from "../../../styles/colorPalette";
import { Message } from "../../../components/Message";

export const HomeScreen = ({ navigation }) => {
  const [validate, setValidate] = useState(false);

  const DetailMessageScreen = () => {
    navigation.navigate("DetailMessageScreen")
  }

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={[
        styles.container,
        !validate ? styles.containerWelcome : null,
      ]}
    >
      {validate ? (
        <>
          <Text style={styles.date}>sábado 20 de abril</Text>
          <Text style={styles.notificationTime}>Mensaje motivacional de la mañana</Text>
          <Message/>
          <TouchableOpacity
            style={styles.btnCreateNote}
            onPress={DetailMessageScreen}
          >
            <Text style={styles.btnCreateNoteText}>Agregar una nota +</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Image
            style={styles.logo}
            source={require("../../../../assets/icon.png")}
          />
          <Text style={styles.title}>Bienvenido a</Text>
          <Text style={styles.nameApp}>Hope Harbor</Text>
          <Text style={styles.subtitle}>
            Hagamos unos pequeños ajustes y todo{"\n"}estará listo para ti.
          </Text>
          <TouchableOpacity
            style={styles.btnGoToProfile}
            onPress={() => setValidate(true)}
          >
            <Text style={styles.btnGoToProfileText}>Comencemos</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Para ocupar todo el espacio vertical disponible
    backgroundColor: colorPalette.dark,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerWelcome: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 127,
    height: 127,
  },
  title: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 30,
    marginBottom: 5,
  },
  nameApp: {
    color: "#fff",
    fontFamily: "Regular",
    fontSize: 30,
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: 15,
    color: "#6F6F6F",
    marginTop: 25,
    textAlign: "center",
  },
  btnGoToProfile: {
    bottom: 5,
    position: "absolute",
    backgroundColor: "#1B1E20",
    width: "100%",
    padding: 10,
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  btnGoToProfileText: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
  date: {
    color: "#CBCBCB",
    fontFamily: "SemiBold",
    fontSize: 15,
  },
  notificationTime: {
    color:'#737373',
    fontFamily:'Regular',
    fontSize:14,
    marginTop:20
  },
  btnCreateNote: { 
    backgroundColor: "#1B1E20",
    width: "100%",
    padding: 10,
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20
  },
  btnCreateNoteText: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
});
