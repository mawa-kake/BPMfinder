import {TabNavigator} from 'react-navigation'

import HomeTabContainer from '../components/home_page_tabView'
import TapperTabContainer from '../components/tapper_page_tabView'
import SearchTabContainer from '../components/search_page_tabView'




const routeConfiguration = {
    HomeTabContainer: {screen: HomeTabContainer},
    TapperTabContainer: {screen: TapperTabContainer},
    SearchTabContainer: {screen: SearchTabContainer}
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
