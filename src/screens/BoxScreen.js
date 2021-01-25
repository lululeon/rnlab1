import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 5,
    height: 100,
    // padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    alignSelf: 'flex-start',
    // flex: 1,
    width: 50,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    height: 50,
    // flex: 1,
    // position: 'absolute',
    alignSelf: 'flex-end',
    width: 50,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    alignSelf: 'flex-start',
    // flex: 1,
    width: 50,
  },
})
export default BoxScreen
