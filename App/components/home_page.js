'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {VIEW_HISTORY} from "../store/actionTypes"
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

export class Home_page extends React.Component {
  render(){
    return(

    <View style={{
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'space-between'
    }}>
      <Text style={styles.headerText}>Welcome to BeatFinder! </Text>
      <View style={styles.descriptionText} >
        <Text>Click the &#61461; tab to tap out a tempo</Text>
        <Text> Click the &#62042; tab to search for a specific song''s bpm via apple music </Text>
        <Text> Click below to view recently found bpms </Text>
      </View>
      <TouchableOpacity
      onPress={ () => this.props.navigation.navigate('history_page') }
        style={styles.viewRecentsButton}>
        <Text >{'View Recents'}</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Created by Karan Marwah       Version 1</Text>
    </View>
  )

  }
}


// const mapStateToProps = (state, ownProps) => {
//     return {
//
//     }
//
// }



var styles = StyleSheet.create({

  headerText: {


    fontSize: 30,
    textAlign: 'center',
    padding: 30,
    fontWeight: 'bold',
    fontStyle: 'italics'
  },

  descriptionText: {
    fontSize:18,
    textAlign: 'center',
    flexDirection: 'column',
    padding: 10
  },
  viewRecentsButton: {
    justifyContent: 'center',
    height: 30,
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor:'lightcoral'
  },
  footer: {
    fontSize: 10,
    fontStyle: 'italics'
  }
})


// const HomePageContainer = connect(mapStateToProps)(home_page)
// export default HomePageContainer
