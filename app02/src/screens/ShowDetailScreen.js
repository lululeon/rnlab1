import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ShowDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const [result, setResult] = useState(null)

  const getResult = async () => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) return null

  return (
    <>
      <Text>{result.name}</Text>
      <Text>Detail for business: {id}</Text>
      <FlatList
        keyExtractor={(_) => _}
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 130,
  },
})

export default ShowDetailScreen
