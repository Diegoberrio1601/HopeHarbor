import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';




const Icons = {
    morning: require("../../../assets/icons/morningIcon.png"),
    noon: require("../../../assets/icons/noonIcon.png"),
    sunset: require("../../../assets/icons/sunsetIcon.png"),
  };

  
export const Notification = ({ iconName, title, subTitle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

   // Validar que el nombre del ícono sea válido
   const icon = Icons[iconName];

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>

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
    width: 130,
    height: 163,
    backgroundColor: '#232627',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:30
  },
  logo: {
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontFamily: 'Regular',
    fontSize: 16,
  },
  subTitle: {
    color: '#A0A0A5',
    fontFamily: 'Medium',
    fontSize: 11,
    marginTop: 5,
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
