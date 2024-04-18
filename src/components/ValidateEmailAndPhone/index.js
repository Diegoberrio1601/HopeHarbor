import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { colorPalette } from "../../styles/colorPalette";
import { Feather } from "@expo/vector-icons";

export const ValidateEmailAndPhone = ({ modalVisible, modalHiddden, title, subTitle, method, navigate }) => {
    

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
        modalHiddden(false);
      setCodeInputs(Array(4).fill(""));
    };
  
    const refs = Array.from({ length: 4 }, () => useRef(null)); // Aseguramos que hay una ref para cada TextInput

    const validateCode = () => {
        modalHiddden(false);
        navigate()

    }
  return (
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
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalSubTitle}>
          {subTitle}
        </Text>
        <Text style={styles.phoneNumber}>{method}</Text>

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

        <TouchableOpacity style={styles.sendCodeBtm} onPress={validateCode}>
          <Text style={styles.sendCodeText}>Validar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendCodeBtm}>
          <Text style={styles.sendCodeText}>Enviar de nuevo</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  )
}


const styles = StyleSheet.create({
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
})
