import React, { useContext, useState } from 'react'
import { Text, TextInput, StyleSheet, View, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const EditPostScreen = ({ navigation }) => {
  const postId = navigation.getParam('id')

  // find the original content
  const { state, updateBlogPost } = useContext(BlogContext)
  const post = state.find((_) => _.id === postId)
  const { title: origTitle, content: origContent } = post

  const [title, setTitle] = useState(origTitle)
  const [content, setContent] = useState(origContent)

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
        title="Save edits"
        onPress={() => {
          updateBlogPost(postId, title, content, () => {
            // navigation.navigate('Single', { id: postId })
            // Better: go back to whatever the previous screen was
            navigation.pop()
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

export default EditPostScreen
