import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider as BlogProvider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import SinglePostScreen from './src/screens/SinglePostScreen'
import NewPostScreen from './src/screens/NewPostScreen'
import EditPostScreen from './src/screens/EditPostScreen'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Single: SinglePostScreen,
    Create: NewPostScreen,
    Edit: EditPostScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog App',
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}
