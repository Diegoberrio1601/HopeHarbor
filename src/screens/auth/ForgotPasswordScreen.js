import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colorPalette } from "../../styles/colorPalette";
import { Zocial, FontAwesome } from "@expo/vector-icons";
import { ValidateEmailAndPhone } from "../../components/ValidateEmailAndPhone";

export const ForgotPasswordScreen = ({navigation}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleOpenModal = (type) => {
    setIsModalOpen(true);

    setModalProps({
      title: type === "phone" ? "Verificar número de teléfono" : "Verificar correo electrónico",
      subTitle: type === "phone" ? "Hemos enviado el código a tu número de teléfono" : "Hemos enviado el código a su correo electrónico.",
      method: type === "phone" ? "+57 3001112233" : "example@example.com",
      navigate: () => {navigation.navigate("NewPasswordScreen")},
    });
  };
  
  

  return (
    <ScrollView style={styles.container}>
      
      {isModalOpen && (
        <ValidateEmailAndPhone
        modalVisible={isModalOpen}
        modalHiddden={() => setIsModalOpen(false)}
          {...modalProps}
        />
      )}

      <Text style={styles.title}>Recuperar mi contraseña</Text>
      <Text style={styles.subTitle}>
        Seleccione qué datos de contacto debemos utilizar para restablecer su
        contraseña
      </Text>

      <View style={styles.contianerBtns}>
        <TouchableOpacity style={styles.containerBtn} onPress={() => handleOpenModal("email")}>
          <View style={styles.containerIcon}>
            <Zocial name="email" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.titleBtn}>Correo</Text>
            <Text style={styles.subTitleBtn}>
              Código a tu correo electrónico
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerBtn} onPress={() => handleOpenModal("phone")}>
          <View style={styles.containerIcon}>
            <FontAwesome name="phone" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.titleBtn}>Teléfono</Text>
            <Text style={styles.subTitleBtn}>
              Código en un mensaje de texto
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.nextBtn}
        // onPress={() => navigation.navigate("AddPhoneScreen")}
      >
        <Text style={styles.netcBtnText}>Siguiente</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: colorPalette.dark,
  },
  title: {
    fontFamily: "SemiBold",
    fontSize: 38,
    color: "#fff",
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#ACADB9",
  },
  contianerBtns: {
    marginVertical: 30,
  },
  containerBtn: {
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#232627",
    borderRadius: 10,
    justifyContent: "space-around",
    marginBottom: 20,
  },
  containerIcon: {
    backgroundColor: "#3A485E",
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBtn: {
    fontFamily: "SemiBold",
    fontSize: 17,
    color: "#fff",
  },
  subTitleBtn: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#ACADB9",
  },

  nextBtn: {
    backgroundColor: "#1B1E20",
    padding: 10,
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  netcBtnText: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
});
