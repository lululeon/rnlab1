import React, { useContext } from 'react'
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state: blogPosts, deleteBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text style={styles.textStyle}>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(_) => _.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Single', { id: item.id })}
            >
              <View style={styles.row}>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

// inspected by react-navigation navigator, and it also gets the navigation prop
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 30,
  },
  icon: {
    fontSize: 20,
  },
})

export default IndexScreen
