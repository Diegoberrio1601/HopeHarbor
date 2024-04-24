import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  TouchableOpacityBase,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export const Note = () => {
  return (
    <View>
      <Text style={styles.title}>Todas Las Notas</Text>
      <View style={styles.divider} />

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.rowTitle}>
            <Image
              style={styles.logo}
              source={require("../../../assets/images/ImageProfile.jpeg")}
            />
            <Text style={styles.titleHeader}>Diego Berrio</Text>
          </View>
          <TouchableOpacity>
            <Image source={require("../../../assets/icons/trashIcon.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Text style={styles.message}>
            I wanted to take a minute to say thank you for putting together such
            a great company holiday.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.btnLike}>
            <Image source={require("../../../assets/icons/likeIcon.png")} />
            <Text style={styles.likeTitle}>4K</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require("../../../assets/icons/editIcon.png")} />
          </TouchableOpacity>
        </View>
      </View>
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

  container: {
    borderColor: "#D7D9DB",
    borderWidth: 1,
    padding: 20,
    marginVertical: 41,
    borderRadius: 10,
    backgroundColor: "#1C1E20",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  titleHeader: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 18,
  },
  body: {
    marginVertical: 25,
  },
  message: {
    marginVertical: 20,
    fontFamily: "Regular",
    fontSize: 16,
    color: "#6F6F6F",
    lineHeight: 24,
    textAlign: "justify",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnLike: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeTitle: {
    marginLeft: 10,
    fontFamily: "SemiBold",
    fontSize: 16,
    color: "#B4B4B4",
  },
});
