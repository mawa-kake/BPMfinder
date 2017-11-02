import { StackNavigator } from 'react-navigation'

// Screens
import SearchPageContainer from '../components/search_page'
import SavePageContainer from '../components/save_page'

const routeConfiguration = {
    search_page: { screen: SearchPageContainer }
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    //initialRouteName: 'home_page',
    showIcon: true
}

export const SearchPageNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
