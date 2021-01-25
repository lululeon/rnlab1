import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>Enter your password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 && (
        <Text style={styles.warning}>Your password is not long enough</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  warning: {
    color: 'red',
  },
})
export default TextScreen
