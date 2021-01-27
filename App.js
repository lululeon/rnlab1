import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ShowDetailScreen from './src/screens/ShowDetailScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: ShowDetailScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search',
    },
  }
)

export default createAppContainer(navigator)
