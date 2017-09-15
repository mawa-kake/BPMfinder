import {TabNavigator} from 'react-navigation'

import HomeTabContainer from '../components/home_page_tabView'
import TapperTabContainer from '../components/tapper_page_tabView'
import home_page from '../components/home_page'



const routeConfiguration = {
  HomeTabContainer: {screen: HomeTabContainer},
  TapperTabContainer: {screen: TapperTabContainer}
}

const tabBarConfiguration = {
  //style stuff
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    activeBackgroundColor: 'lightcoral',
    inactiveBackgroundColor: 'white',
    showLabel: false,
    showIcon: true
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)
