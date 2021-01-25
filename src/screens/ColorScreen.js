import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'

const ColorScreen = () => {
  const [colors, setColors] = useState([])

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => setColors([...colors, randomColor()])}
      />
      <FlatList
        keyExtractor={(_) => _}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ width: 100, height: 100, backgroundColor: item }} />
        )}
      />
    </View>
  )
}

const randRgb = () => {
  return Math.floor(Math.random() * 256)
}

const randomColor = () => {
  return `rgb(${randRgb()},${randRgb()},${randRgb()})`
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
})
export default ColorScreen
