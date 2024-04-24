import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { colorPalette } from "../../../styles/colorPalette";

export const CommunityScreen = () => {
  return (
<ScrollView contentContainerStyle={styles.container}>
      <Text>CommunityScreen</Text>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colorPalette.dark,
    },
})