import { StackNavigator } from 'react-navigation'

// Screens
import {Home_page} from '../components/home_page'
import history_page from '../components/history_page'

const routeConfiguration = {
  home_page: { screen: Home_page },
  history_page: { screen: history_page },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  //initialRouteName: 'home_page',
  showIcon: true
}

export const HomePageNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
