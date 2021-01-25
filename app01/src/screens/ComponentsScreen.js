import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'meesie me'
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with RN</Text>
      <Text style={styles.captionStyle}>Hello {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  captionStyle: {
    fontSize: 20,
  },
})
export default ComponentsScreen
