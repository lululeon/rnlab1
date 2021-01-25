import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        title="Go to components demo"
        onPress={() => {
          navigation.navigate('Components')
        }}
      />
      <Button
        title="Go to List"
        onPress={() => {
          navigation.navigate('List')
        }}
      />
      <Button
        title="Go to Images"
        onPress={() => {
          navigation.navigate('Images')
        }}
      />
      <Button
        title="Go to Counter"
        onPress={() => {
          navigation.navigate('Counter')
        }}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => {
          navigation.navigate('Color')
        }}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => {
          navigation.navigate('Square')
        }}
      />
      <Button
        title="Go to Text input"
        onPress={() => {
          navigation.navigate('Text')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
})

export default HomeScreen
