import {combineReducers} from 'redux'
import {TabBar} from '../Navigation/tabBarNavigation'
import { NavigationActions } from 'react-navigation'
import {HomePageNavigator} from '../Navigation/homePageNavigation'
import {TapperPageNavigator} from '../Navigation/tapperPageNavigation'


const firstAction = NavigationActions.navigate({ routeName: 'HomeTabContainer' })
const initialNavState = TabBar.router.getStateForAction(firstAction)

const tabBarReducer = (state = initialNavState,action) => {
  if (state) {
    if (action.type === 'jumpToTab') {
      return { ...state, index:0 }
    } else {
      return TabBar.router.getStateForAction(action,state)
    }
  }
  else {
    return initialNavState
  }

}

const firstAction2 = NavigationActions.navigate({ routeName: 'home_page' })
const initialNavState2 = HomePageNavigator.router.getStateForAction(firstAction2)

const firstAction3 = NavigationActions.navigate({ routeName: 'tapper_page' })
const initialNavState3 = TapperPageNavigator.router.getStateForAction(firstAction3)

export const navReducer = combineReducers({
  tabBar: tabBarReducer,
  home: (state = initialNavState2,action) => state? HomePageNavigator.router.getStateForAction(action,state) : initialNavState2,
  tapper: (state = initialNavState3,action) => state? TapperPageNavigator.router.getStateForAction(action,state) : initialNavState3,
})
