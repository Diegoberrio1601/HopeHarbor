import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from "react-native";

export const SocialMediaButtons = () => {
  return (
    <>
      <View style={styles.divider} />

      <Text style={styles.continueWith}>Continuar con</Text>
      <View style={styles.containerSocialBtn}>
        <TouchableOpacity
          style={[styles.square, { backgroundColor: "#D44638" + "40" }]}
        >
          <Image source={require("../../../assets/images/googleIcon.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.square, { backgroundColor: "#9DB0D540" }]}
        >
          <Image source={require("../../../assets/images/appleIcon.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.square, { backgroundColor: "#4267B240" }]}
        >
          <Image source={require("../../../assets/images/facebookIcon.png")} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    divider: {
        borderColor: "#C2C3CB",
        borderWidth: 0.5,
        marginVertical: 30,
      },
      continueWith: {
        color: "#ACADB9",
        fontFamily: "Medium",
        fontSize: 16,
        textAlign: "center",
      },
      containerSocialBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        marginBottom:60
      },
      square: {
        width: 57,
        height: 57,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      },
});
