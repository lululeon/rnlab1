import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="forest" />
      <ImageDetail title="beach" />
      <ImageDetail title="mountain" />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
})
export default ImageScreen
