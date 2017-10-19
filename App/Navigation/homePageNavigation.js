import { StackNavigator } from 'react-navigation'

// Screens
import HomePageContainer from '../components/home_page'
import HistoryPageContainer from '../components/history_page'

const routeConfiguration = {
    home_page: { screen: HomePageContainer },
    history_page: { screen: HistoryPageContainer },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    //initialRouteName: 'home_page',
    showIcon: true
}

export const HomePageNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
