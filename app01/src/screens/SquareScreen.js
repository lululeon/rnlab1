import React, { useReducer } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const colorIncrement = 15

const reducer = (state, action) => {
  switch (action.color) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    case 'default':
      return state
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

  // destructure state for simplicity / readability
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ color: 'red', amount: colorIncrement })}
        onDecrease={() =>
          dispatch({ color: 'red', amount: -1 * colorIncrement })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ color: 'green', amount: colorIncrement })}
        onDecrease={() =>
          dispatch({ color: 'green', amount: -1 * colorIncrement })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ color: 'blue', amount: colorIncrement })}
        onDecrease={() =>
          dispatch({ color: 'blue', amount: -1 * colorIncrement })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
export default SquareScreen
