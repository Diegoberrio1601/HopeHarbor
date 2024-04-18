import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colorPalette } from "../../styles/colorPalette";
import { Feather, Ionicons } from "@expo/vector-icons";

export const NewPasswordScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView bounces={false} style={styles.container}>
      <Text style={styles.title}>Recuperar mi contraseña</Text>
      <View style={styles.inputs}>
        <View style={styles.containerInput}>
          <Ionicons name="lock-closed-outline" size={24} color="#C2C3CB" />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={"#C2C3CB"}
            style={[styles.input, { width: "80%" }]}
            secureTextEntry={showPassword ? true : false}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            {showPassword ? (
              <Feather name="eye-off" size={24} color="#C2C3CB" />
            ) : (
              <Feather name="eye" size={24} color="#C2C3CB" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.containerInput}>
          <Ionicons name="lock-closed-outline" size={24} color="#C2C3CB" />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={"#C2C3CB"}
            style={[styles.input, { width: "80%" }]}
            secureTextEntry={showPassword ? false : true}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            {showPassword ? (
              <Feather name="eye" size={24} color="#C2C3CB" />
            ) : (
              <Feather name="eye-off" size={24} color="#C2C3CB" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.registerBtnText}>Guardar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    // justifyContent: "center",
    backgroundColor: colorPalette.dark,
  },
  title: {
    fontFamily: "SemiBold",
    fontSize: 38,
    color: "#fff",
  },
  inputs: {
    marginTop: 35,
  },
  containerInput: {
    flexDirection: "row",
    backgroundColor: "#232627",
    height: 65,
    borderRadius: 12,
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 15,
  },
  input: {
    color: "#C2C3CB",
    paddingLeft: 15,
    fontFamily: "Medium",
    height: "100%",
    width: "90%",
  },
  registerBtn: {
    backgroundColor: "#1B1E20",
    padding: 10,
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  registerBtnText: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
  containerLogin: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  labelLogin: {
    color: "#ACADB9",
    fontFamily: "Medium",
    fontSize: 16,
  },
  loginBtn: {
    color: "#fff",
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
