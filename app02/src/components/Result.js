import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Result = ({ data }) => {
  const { name, image_url, rating, review_count } = data
  return (
    <View style={styles.view}>
      <Image source={{ uri: image_url }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.details}>
        {rating} stars, {review_count} reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginLeft: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
})

export default Result
