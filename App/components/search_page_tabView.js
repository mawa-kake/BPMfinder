'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import {SearchPageNavigator } from '../Navigation/searchPageNavigation'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
  navigationState: state.navReducer.search
   }
}

class SearchPageTab extends React.Component {
  static navigationOptions = {
    showIcon: true,
    tabBarIcon: ({tintColor }) => <Icon size={ 20 } name='home'  color={ tintColor }/>
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <SearchPageNavigator
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

const SearchTabContainer = connect(mapStateToProps)(SearcPageTab)
export default SearchTabContainer
