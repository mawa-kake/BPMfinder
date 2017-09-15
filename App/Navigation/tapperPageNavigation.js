import { StackNavigator } from 'react-navigation'

// Screens
import tapperPageContainer from '../components/tapper_page'
import save_page from '../components/save_page'

const routeConfiguration = {
  tapper_page: { screen: tapperPageContainer },
  save_page: { screen: save_page },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  //initialRouteName: 'tapper_page'
}

export const TapperPageNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
