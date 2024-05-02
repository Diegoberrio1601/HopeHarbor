import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colorPalette } from "../../../styles/colorPalette";
import { ModalEditInput } from "../../../components/ModalEditInput";

export const EditInformationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(""); 
  const [modalValue, setModalValue] = useState(""); 

  const handleInputChange = (text) => {
    setModalValue(text);
  };

  const toggleModal = (title, value) => {
    setModalTitle(title); 
    setModalValue(value);
    setModalVisible(!modalVisible);
  };

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <ModalEditInput
        visible={modalVisible}
        onClose={toggleModal}
        title={modalTitle} 
        value={modalValue} 
        onChangeText={handleInputChange} 
      />
      <View style={styles.containerInputs}>
        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Nombre", "Diego Berrio")}
        >
          <Image
            source={require("../../../../assets/icons/editiUserIcon.png")}
          />
          <Text style={styles.input}>Diego Berrio</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Cumpleaños", "01/02/1996")}
        >
          <Image
            source={require("../../../../assets/icons/editBirthdayIcon.png")}
          />
          <Text style={styles.input}>01/02/1996</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Teléfono", "3003118411")}
        >
          <Image
            source={require("../../../../assets/icons/editPhoneIcon.png")}
          />
          <Text style={styles.input}>3003118411</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Género", "Hombre")}
        >
          <Image source={require("../../../../assets/icons/editSexIcon.png")} />
          <Text style={styles.input}>Hombre</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Correo", "diegoberrio1601@gmail.com")}
        >
          <Image
            source={require("../../../../assets/icons/editEmailIcon.png")}
          />
          <Text style={styles.input}>Diegoberrio1601@...</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
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
  containerInputs: {
    width: "100%",
    marginTop: 50,
  },
  rowIput: {
    backgroundColor: "#2B2D30",
    height: 67,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  input: {
    alignItems: "center",
    width: "70%",
    fontFamily: "SemiBold",
    fontSize: 15,
    letterSpacing: 2,
    color: "#CBCBCB",
  },
});
