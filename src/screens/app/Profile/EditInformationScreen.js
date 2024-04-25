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
import { MaterialIcons } from "@expo/vector-icons";

export const EditInformationScreen = ({ navigation }) => {
  const Navigate = (nameScreen) => {
    navigation.navigate(nameScreen);
  };
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <View style={styles.containerInputs}>
        <View style={styles.rowIput}>
          <Image
            source={require("../../../../assets/icons/editiUserIcon.png")}
          />
          <Text style={styles.input}>Diego Berrio</Text>
          <TouchableOpacity>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowIput}>
          <Image
            source={require("../../../../assets/icons/editBirthdayIcon.png")}
          />
          <Text style={styles.input}>01/02/1996</Text>
          <TouchableOpacity>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowIput}>
          <Image
            source={require("../../../../assets/icons/editPhoneIcon.png")}
          />
          <Text style={styles.input}>3003118411</Text>
          <TouchableOpacity>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowIput}>
          <Image
            source={require("../../../../assets/icons/editSexIcon.png")}
          />
          <Text style={styles.input}>Hombre</Text>
          <TouchableOpacity>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowIput}>
          <Image
            source={require("../../../../assets/icons/editEmailIcon.png")}
          />
          <Text style={styles.input}>Diegoberrio1601@...</Text>
          <TouchableOpacity>
            <Image source={require("../../../../assets/icons/EditIcon2.png")} />
          </TouchableOpacity>
        </View>
        
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
    marginBottom:25,
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
