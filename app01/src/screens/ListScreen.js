import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'susan' },
    { name: 'jessica' },
    { name: 'sally' },
    { name: 'john' },
    { name: 'bob' },
    { name: 'alice' },
  ]

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(_) => _.name}
      data={friends}
      renderItem={({ item, index }) => (
        <Text style={styles.friendTextStyle}>{item.name}</Text>
      )}
    />
  )
}

const styles = StyleSheet.create({
  friendTextStyle: {
    marginVertical: 50,
    marginHorizontal: 20,
  },
})
export default ListScreen
