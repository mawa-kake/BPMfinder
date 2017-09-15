'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {updateName, SAVE_BPM} from "../store/actionTypes"
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const save_page = ({avg, onSave, navigation, name, updateName}) => (


      <View style={{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={text}>BPM </Text>
          <Text style={text}>{avg}</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>Name </Text>
          <TextInput style={styles.text} onChangeText={(text) => {updateName(text)}} value={name}/>
        </View>
        <TouchableOpacity
        onPress={ () => onSave() }
          style={ styles.confirmButton}>
          <Text>{'Confirm'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={ () => this.props.navigation.navigate('save_page') }
          style={ styles.cancelButton}>
          <Text>{'Cancel'}</Text>
        </TouchableOpacity>
      </View>

  )


const mapStateToProps = (state, ownProps) => {
  return {
    avg: state.tapReducer.avg,
    name: state.saveReducer.name,
    navigation: state.navReducer.home
  }

}

const mapDispatchToProps = (state, ownProps) => {
  return {
    updateName: (text) => {
      dispatch(nameUpdate(text))
    },
    onSave: () => {
      dispatch(SAVE_BPM)
    }
  }
}

var styles = StyleSheet.create({

  text: {
    flexDirection: 'row',
    fontSize:18,
    textAlign: 'center'
  },

  confirmButton: {
    padding:20,
    borderRadius:20,
    backgroundColor:'green',
    marginTop:20
  },

  cancelButton: {
    padding:20,
    borderRadius:20,
    backgroundColor:'red',
    marginTop:20
  }
})

  const SavePageContainer = connect(mapStateToProps,mapDispatchToProps)(save_page)

  export default SavePageContainer
