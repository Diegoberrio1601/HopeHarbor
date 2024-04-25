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
import { FavoriteTopic } from "../../../components/FavoriteTopic";

export const FavoriteTopicScreen = ({ navigation }) => {
  const Navigate = (nameScreen) => {
    navigation.navigate(nameScreen);
  };
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Aquí puedes seleccionar los temas que sean de tu interés para generar
        los mensajes.
      </Text>
      <View style={styles.continerCard}>
        <FavoriteTopic/>
        <FavoriteTopic/>
        <FavoriteTopic/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Para ocupar todo el espacio vertical disponible
    backgroundColor: colorPalette.dark,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#737373",
  },
  continerCard: {
    marginTop: 40,
    width: "100%",
  },
});
