import React, { useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SinglePostScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const postId = navigation.getParam('id')
  const blogPost = state.find((_) => _.id === postId)
  return (
    <View style={styles.blog}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

SinglePostScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  blog: {
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default SinglePostScreen
