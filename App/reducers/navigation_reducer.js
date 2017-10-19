import {combineReducers} from 'redux'
import {TabBar} from '../Navigation/tabBarNavigation'
import { NavigationActions } from 'react-navigation'
import {HomePageNavigator} from '../Navigation/homePageNavigation'
import {TapperPageNavigator} from '../Navigation/tapperPageNavigation'
import {SearchPageNavigator} from '../Navigation/searchPageNavigation'
import {JUMP_TO_HISTORY} from '../store/actionTypes'



const firstAction = NavigationActions.navigate({ routeName: 'HomeTabContainer' })
const initialNavState = TabBar.router.getStateForAction(firstAction)

const tabBarReducer = (state = initialNavState,action) => {
    if (state) {
        if (action.type === 'jumpToTab') {
            dispatch({type: JUMP_TO_HISTORY}) //eslint-disable-line
            return { ...state, index:0 }
        } else {
            return TabBar.router.getStateForAction(action,state)
        }
    }
    else {
        return initialNavState
    }

}

const firstAction2 = NavigationActions.navigate({ routeName: 'HomePageContainer' })
const initialNavState2 = HomePageNavigator.router.getStateForAction(firstAction2)

const firstAction3 = NavigationActions.navigate({ routeName: 'tapperPageContainer' })
const initialNavState3 = TapperPageNavigator.router.getStateForAction(firstAction3)

const firstAction4 = NavigationActions.navigate({ routeName: 'SearchPageContainer' })
const initialNavState4 = SearchPageNavigator.router.getStateForAction(firstAction4)

const navReducer = combineReducers({
    tabBar: tabBarReducer,
    home: (state = initialNavState2,action) => {
        if (state) {
            if (action.type ==='jumpToHistory') {
                return HomePageNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'HistoryPageContainer'}))
            }
            else {
                return HomePageNavigator.router.getStateForAction(action,state)
            }
        }
        else {return initialNavState2}
    },
    tapper: (state = initialNavState3,action) => state? TapperPageNavigator.router.getStateForAction(action,state) : initialNavState3,
    search: (state = initialNavState4,action) => state? SearchPageNavigator.router.getStateForAction(action,state) : initialNavState4,
})

export default navReducer
