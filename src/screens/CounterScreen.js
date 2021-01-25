import React, { useReducer } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, counter: state.counter + 1 }
    case 'dec':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  const { counter } = state

  return (
    <View>
      <Text style={styles.textStyle}>Current Count: {counter}</Text>
      <Button title="Increase" onPress={() => dispatch({ type: 'inc' })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'dec' })} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
})
export default CounterScreen
