'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import {HomePageNavigator } from '../Navigation/homePageNavigation'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
  navigationState: state.navReducer.home
   }
}

class HomePageTab extends React.Component {
  static navigationOptions = {
    showIcon: true,
    tabBarIcon: ({tintColor }) => <Icon size={ 20 } name='home'  color={ tintColor }/>
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <HomePageNavigator
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

const HomeTabContainer = connect(mapStateToProps)(HomePageTab)
export default HomeTabContainer
