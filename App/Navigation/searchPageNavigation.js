import { StackNavigator } from 'react-navigation'

// Screens
import {Search_page} from '../components/search_page'
import save_page from '../components/save_page'

const routeConfiguration = {
  search_page: { screen: Search_page },
  save_page: { screen: Save_page },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  //initialRouteName: 'home_page',
  showIcon: true
}

export const SearchPageNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
