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
import { MaterialIcons } from "@expo/vector-icons";

export const InviteAFriendScreen = ({ navigation }) => {
  const Navigate = (nameScreen) => {
    navigation.navigate(nameScreen);
  };
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../../../assets/icons/trueShareIcon.png")} />
        <Text style={styles.title}>Recomendar a un amigo</Text>
        <Text style={styles.subTitle}>
          Copia este vínculo para invitar a alguien
        </Text>

        <View style={styles.contentLink}>
          <Text style={styles.link}>https://hopeharbor.com</Text>
          <TouchableOpacity>
            <Image source={require('../../../../assets/icons/copyIcon.png')}/>
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
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    marginTop: 40,
    fontFamily: "SemiBold",
    fontSize: 24,
    color: "#fff",
  },
  subTitle: {
    marginTop: 10,
    fontFamily: "Regular",
    fontSize: 17,
    color: "#666666",
  },
  contentLink: {
    marginVertical:50,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 20,
borderRadius:15,
    width: "100%",
    flexDirection:'row',
    justifyContent:'space-around'
  },
  link:{
    fontFamily:'Medium',
    fontSize:17,
    color:'#fff'
  }
});
