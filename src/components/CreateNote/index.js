import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

export const CreateNote = () => {
  return (
    <View>
      <Text style={styles.title}>comparte tus Notas</Text>
      <View style={styles.divider} />

      <TextInput style={styles.input} multiline={true} placeholderTextColor={'#6F6F6F'} placeholder="I wanted to take a minute to say thank you for putting together such a great company holiday. " />
      <TouchableOpacity
            style={styles.btnCreateNote}
            // onPress={DetailMessageScreen}
          >
            <Text style={styles.btnCreateNoteText}>Crear</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "SemiBold",
    fontSize: 15,
    color: "#CBCBCB",
    textTransform: "uppercase",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#fff",
    borderColor: "#CBCBCB",
    marginVertical: 15,
    marginHorizontal: 10,
  },
  input: {
    borderColor: "#D7D9DB",
    height: 170,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginVertical: 30,
    borderRadius: 10,
    backgroundColor: "#1C1E20",
    color:'#6F6F6F',
    fontFamily:'Regular',
    fontSize:16
  },
  btnCreateNote: { 
    backgroundColor: "#1B1E20",
    width: "100%",
    padding: 10,
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:50
  },
  btnCreateNoteText: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 16,
  },
});
