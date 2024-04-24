import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colorPalette } from "../../../styles/colorPalette";
import { Message } from "../../../components/Message";
import { CreateNote } from "../../../components/CreateNote";
import { Note } from "../../../components/Note";

export const DetailMessageScreen = () => {
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
        <Message/>
        <CreateNote/>
        <Note/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Para ocupar todo el espacio vertical disponible
        backgroundColor: colorPalette.dark,
        paddingHorizontal: 20,
        paddingTop: 20,
      },
});
