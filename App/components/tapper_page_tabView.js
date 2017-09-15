'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import {TapperPageNavigator } from '../Navigation/tapperPageNavigation'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
  navigationState: state.navReducer.tapper
   }
}

class TapperPageTab extends React.Component {
  static navigationOptions = {
    showIcon: true,
    tabBarIcon: ({tintColor }) => <Icon size={ 20 } name='hand-pointer-o' color={ tintColor }/>
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <TapperPageNavigator
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

const TapperTabContainer = connect(mapStateToProps)(TapperPageTab)
export default TapperTabContainer
