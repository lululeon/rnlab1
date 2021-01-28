import React, { useContext, useState } from 'react'
import { Text, TextInput, StyleSheet, View, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const NewPostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add blog post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
})

export default NewPostScreen
