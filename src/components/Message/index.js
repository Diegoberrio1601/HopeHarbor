import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const Message = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.rowTitle}>
          <Image
            style={styles.logo}
            source={require("../../../assets/icon.png")}
          />
          <Text style={styles.title}>HOPE HARBOR</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={24} color="#fff" />
      </View>

      <View style={styles.body}>
        <Text style={{ color: "#fff", fontFamily: "SemiBold", fontSize: 17 }}>
          Buenos días Diego!
        </Text>
        <Text
          style={{
            marginVertical: 20,
            fontFamily: "Regular",
            fontSize: 16,
            color: "#6F6F6F",
            lineHeight: 24,
          }}
        >
          Hey, team! {"\n"}I wanted to take a minute to say thank you for
          putting together such a great company holiday party. I know that it
          hasn't been easy to pull off, and I appreciate all the hard work that
          went into this event...
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require("../../../assets/icons/likeIcon.png")} />
            <Text style={{marginLeft:10, fontFamily:'SemiBold', fontSize:16, color:'#B4B4B4'}}>4K</Text>
          </TouchableOpacity>
        
        <TouchableOpacity>
            <Image source={require('../../../assets/icons/downloadIcon.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 33,
    height: 33,
    marginRight: 10,
  },
  title: {
    color: "#fff",
    fontFamily: "Medium",
    fontSize: 18,
  },
  body: {
    marginVertical: 25,
  },
});
