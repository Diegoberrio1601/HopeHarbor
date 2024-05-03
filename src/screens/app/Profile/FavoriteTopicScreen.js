import React, { useState } from "react";
import { ScrollView, StyleSheet, Image, Text, View } from "react-native";
import { colorPalette } from "../../../styles/colorPalette";
import { FavoriteTopicList } from "../../../components/FavoriteTopic";
import { useSelector } from "react-redux";

export const FavoriteTopicScreen = () => {
  const favoriteTopic = useSelector(
    (state) => state.auth.usePreferences.favoriteTopic
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Aquí puedes seleccionar los temas que sean de tu interés para generar
        los mensajes.
      </Text>
      <View style={styles.continerCard}>
        <FavoriteTopicList favoriteTopic={favoriteTopic} />
      </View>
    </View>
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
