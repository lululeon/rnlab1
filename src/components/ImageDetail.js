import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ImageDetail = ({ title }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
})
export default ImageDetail
