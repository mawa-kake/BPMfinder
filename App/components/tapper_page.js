'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {RESET_AVG, updateAvg} from "../store/actionTypes"
import moment from 'moment'

const tapper_page = ({avg, onTap, onReset, navigation, numTaps}) => (
        <View style={{
          flex:1,
          backgroundColor:'white',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.text}>Average bpm: </Text>
            <Text style={styles.text}>{(numTaps <= 1)? "First Tap" : avg}</Text>

          </View>

          <TouchableOpacity
          style={styles.resetButton}
          onPress={ () => onReset() }>
            <Text >{'Reset'}</Text>
          </TouchableOpacity>


          <TouchableOpacity
          style={styles.saveButton}
          onPress={ () => navigation.navigate('save_page') }>
            <Text >{'Save'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={ () => onTap() }
            style={styles.tapButton}>
            <Text >{'Tap me!'}</Text>
          </TouchableOpacity>
      </View>

  )


var styles = StyleSheet.create({

  saveButton: {
    justifyContent: 'center',
    height: 30,
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor:'#ADD8E6'
  },
  resetButton: {
    justifyContent: 'center',
    height: 30,
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor:'red',
    flexDirection: 'row'
  },
  tapButton: {

    justifyContent: 'center',
    height: 100,
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor:'lightcoral'
  },

  text: {
    fontSize:18,
    textAlign: 'center',
    flexDirection: 'column',
    color: 'black'
  }

})

const mapStateToProps = (state, ownProps) => {
  return {
    avg: state.tapReducer.avg,
    navigation: state.navReducer.tapper,
    numTaps: state.tapReducer.numTaps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onReset: () => {
      dispatch({type: RESET_AVG})
    },
    onTap: () => {
      var time = moment()
      dispatch(updateAvg(time))
    }
  }
}

const TapperPageContainer = connect(mapStateToProps,mapDispatchToProps)(tapper_page)

export default TapperPageContainer
