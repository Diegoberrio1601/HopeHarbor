import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export const FavoriteTopic = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Autocompasión y amor propio</Text>
        <Text style={styles.subTitle}>
          Fomenta el amor propio y la compasión con mensajes que destacan tu
          valía y te inspiran a cuidarte con cariño.
        </Text>
      </View>
      <TouchableOpacity onPress={toggleCheckbox}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <MaterialIcons name="check" size={24} color="white" />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232627",
    flexDirection: "row",
    padding: 20,
    borderRadius: 20,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20
  },
  containerText:{
    width:249,
  },
  title: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
  subTitle: {
    fontFamily: "Regular",
    color: "#fff",
    fontSize: 13,
    textAlign:'justify',
    marginTop:10
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,

  },
  checked: {
    backgroundColor: 'gray',
  },
});
