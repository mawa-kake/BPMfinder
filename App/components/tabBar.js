//React
import React from 'react'

//Navigation bizness
import { addNavigationHelpers } from 'react-navigation'
import {TabBar} from '../Navigation/tabBarNavigation'

//Redux bih
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.navReducer.tabBar,
  }
}

class TabBarNavigation extends React.Component {
  render(){
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
      navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

const TabBarContainer = connect(mapStateToProps)(TabBarNavigation)
export default TabBarContainer
