import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";

export const ModalEditInput = ({ visible, onClose, value, title, onChangeText }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.containerModal}>
        <View style={styles.contentModal}>
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText} // Agrega onChangeText para permitir la edición del texto
          />
          <TouchableOpacity style={styles.btnSave} onPress={onClose}>
            <Text style={styles.textBtnSave}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  contentModal: {
    backgroundColor: "#151718",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    borderColor: "#6F6F6F",
    borderWidth: 1,
  },
  title: {
    color: "#CBCBCB",
    fontFamily: "SemiBold",
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    color: "#CBCBCB",
    fontFamily: "SemiBold",
    fontSize: 15,
    borderColor: "#fff",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  btnSave: {
    backgroundColor: "#1B1E20",
    padding: 15,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textBtnSave: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
});
