import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        value={term}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  iconStyle: {
    paddingHorizontal: 5,
    fontSize: 35,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1, // stretch
    padding: 5,
    fontSize: 18,
  },
})

export default SearchBar
