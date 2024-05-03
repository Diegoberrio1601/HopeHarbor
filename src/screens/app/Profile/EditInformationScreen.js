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
import { ModalEditInput } from "../../../components/ModalEditInput";
import { useSelector } from "react-redux";

export const EditInformationScreen = ({ navigation }) => {
  const { name, birthday, phone, gender, email } = useSelector(
    (state) => state.auth.userData
  );

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
      <View style={styles.containerInputs}>
        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Nombre", name)}
        >
          <Image
            source={require("../../../../assets/icons/editiUserIcon.png")}
          />
          <Text style={styles.input}>{name}</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Cumpleaños", birthday)}
        >
          <Image
            source={require("../../../../assets/icons/editBirthdayIcon.png")}
          />
          <Text style={styles.input}>{birthday}</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Teléfono", phone)}
        >
          <Image
            source={require("../../../../assets/icons/editPhoneIcon.png")}
          />
          <Text style={styles.input}>{phone}</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Género", gender)}
        >
          <Image source={require("../../../../assets/icons/editSexIcon.png")} />
          <Text style={styles.input}>{gender}</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowIput}
          onPress={() => toggleModal("Correo", email)}
        >
          <Image
            source={require("../../../../assets/icons/editEmailIcon.png")}
          />
          <Text numberOfLines={1} style={styles.input}>{email}</Text>
          <View>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </View>
        </TouchableOpacity>
      </View>
      <ModalEditInput
        visible={modalVisible}
        onClose={toggleModal}
        title={modalTitle}
        value={modalValue}
        onChangeText={handleInputChange}
      />
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
