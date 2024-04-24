import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { colorPalette } from "../../../styles/colorPalette";

export const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>HomeScreen</Text>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPalette.dark,
      },
})