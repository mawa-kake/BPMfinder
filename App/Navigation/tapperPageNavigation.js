import { StackNavigator } from 'react-navigation'

// Screens
import TapperPageContainer from '../components/tapper_page'
import SavePageContainer from '../components/save_page'

const routeConfiguration = {
    tapper_page: { screen: TapperPageContainer },
    save_page: { screen: SavePageContainer },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    //initialRouteName: 'tapper_page'
}

export const TapperPageNavigator = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
