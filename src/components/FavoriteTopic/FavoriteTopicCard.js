import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { updatePreferenceState } from "../../redux/authSlice";

export const FavoriteTopicCard = ({favoriteTopic}) => {
  const { id, title, subTitle, iconName, state, type } = favoriteTopic;
  const [checked, setChecked] = useState(state);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch(updateFavoriteTopicState({ id, state: !checked })); 
    dispatch(updatePreferenceState({ type: type, id, state: !checked }));
  };


  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
         {subTitle}
        </Text>
      </View>
      <TouchableOpacity onPress={toggleCheckbox}>
        <View style={[styles.checkbox, checked && styles.checked]}>
          {checked && <MaterialIcons name="check" size={24} color="white" />}
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
