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
import { SocialMediaButtons } from "../../components/socialMediaButtons";

// redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

export const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // redux
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log('entrando...')
    dispatch(login({
      isLoggedIn: true, 
    }));
  };
  return (
    <ScrollView bounces={false} style={styles.container}>
      <Text style={styles.title}>Ingresa a tu cuenta</Text>
      <View style={styles.inputs}>
        <View style={styles.containerInput}>
          <Feather name="mail" size={24} color="#C2C3CB" />
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor={"#C2C3CB"}
            style={styles.input}
          />
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

      <TouchableOpacity style={styles.forgetPasswordBtn} onPress={() => navigation.navigate("ForgotPasswordScreen")}>
        <Text style={styles.forgetPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleLogin}
      >
        <Text style={styles.loginBtnText}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>

      <View style={styles.containerRegister}>
        <Text style={styles.labelRegister}>¿No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.registerBtn}>Regístrate</Text>
        </TouchableOpacity>
      </View>

      <SocialMediaButtons/>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop:50,
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
  forgetPasswordBtn: {
    flexDirection: "row-reverse",
    marginBottom: 20,
  },
  forgetPasswordText: {
    fontFamily: "Medium",
    fontSize: 14,
    color: "#fff",
  },
  loginBtn: {
    backgroundColor: "#1B1E20",
    padding: 10,
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  loginBtnText: { 
    color: "#fff", 
    fontFamily: "Medium", 
    fontSize: 16 },
  containerRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  labelRegister: {
    color: "#ACADB9",
    fontFamily: "Medium",
    fontSize: 16,
  },
  registerBtn: {
    color: "#fff",
    fontFamily: "SemiBold",
    fontSize: 16,
  },
  
});
