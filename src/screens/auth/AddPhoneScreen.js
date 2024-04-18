import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { colorPalette } from "../../styles/colorPalette";
import { Feather } from "@expo/vector-icons";

export const AddPhoneScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [codeInputs, setCodeInputs] = useState(Array(4).fill("")); // Estado para almacenar los valores de los inputs

  const handleChangeText = (text, index) => {
    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = text;
    setCodeInputs(newCodeInputs);

    // Si se ingresó un carácter y no es el último input, enfocar el siguiente input
    if (text.length === 1 && index < 3 && refs[index + 1]?.current) {
      refs[index + 1].current.focus();
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setCodeInputs(Array(4).fill(""));
  };

  const refs = Array.from({ length: 4 }, () => useRef(null)); // Aseguramos que hay una ref para cada TextInput


  return (
    <ScrollView bounces={false} style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{ flexDirection: "row-reverse" }}
              onPress={handleModalClose}
            >
              <Feather name="x" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Verificar número de teléfono</Text>
            <Text style={styles.modalSubTitle}>
              Hemos enviado el código a tu número de teléfono
            </Text>
            <Text style={styles.phoneNumber}>+00 000000 0000</Text>

            {/* Inputs de código */}
            <View style={styles.codeInputsContainer}>
              {Array.from({ length: 4 }, (_, index) => (
                <TextInput
                  key={index}
                  style={styles.codeInput}
                  value={codeInputs[index]}
                  onChangeText={(text) => handleChangeText(text, index)}
                  maxLength={1}
                  keyboardType="number-pad"
                  ref={refs[index]} // Asignar la ref al TextInput
                />
              ))}
            </View>

            <TouchableOpacity style={styles.sendCodeBtm}>
              <Text style={styles.sendCodeText}>Validar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendCodeBtm}>
              <Text style={styles.sendCodeText}>Enviar de nuevo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>Agrega tu{"\n"}teléfono</Text>
      <View style={styles.inputs}>
        <View style={styles.containerInput}>
          <Feather name="phone" size={24} color="#C2C3CB" />
          <TextInput
            placeholder="+00 0000000 000"
            placeholderTextColor={"#C2C3CB"}
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.sendCodeBtm}
        onPress={() => setModalVisible(true)}
        // onPress={() => navigation.navigate("ValidatePhoneCode")}
      >
        <Text style={styles.sendCodeText}>Enviar código</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sendCodeBtm}
        // onPress={() => navigation.navigate("AddPhoneScreen")}
      >
        <Text style={styles.sendCodeText}>Agregar después</Text>
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
  sendCodeBtm: {
    backgroundColor: "#1B1E20",
    padding: 10,
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  sendCodeText: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 350,
    height: 502,
    backgroundColor: "#141718",
    borderRadius: 27,
    padding: 15,
    borderColor: "#fff",
    borderWidth: 1,
  },

  modalTitle: {
    fontFamily: "SemiBold",
    fontSize: 22,
    marginVertical: 10,
    color: "#fff",
  },
  modalSubTitle: {
    fontFamily: "Regular",
    fontSize: 14,
    marginBottom: 10,
    color: "#ACADB9",
  },

  phoneNumber: {
    color: "#ACADB9",
    fontFamily: "SemiBold",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 20,
  },

  codeInputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  codeInput: {
    backgroundColor: "#232627",
    color: "#fff",
    width: 50,
    height: 50,
    borderRadius: 10,
    fontSize: 24,
    textAlign: "center",
    borderColor: "#C2C3CB",
    borderWidth: 1,
  },

  buttonClose: {
    backgroundColor: "#232627",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
