'use strict'
import React from 'react'
import { Keyboard, View, TextInput, Text, TouchableOpacity } from 'react-native'
import SearchList from './searchList'
import {connect} from 'react-redux'
import {updateQuery, fetchTracks} from "../store/actionTypes"
import {SearchBar} from 'react-native-elements'


export const Search_page = ({onBlur, onSearch, trackData, navigation, queryName}) => (

    <View style={{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white'
    }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start'
        }}>

            <SearchBar
                style={{height: 40, width: '80%', borderColor: 'black', marginTop: 20, borderWidth: 1, borderRadius: 10}}
                onChangeText = {(text) => onBlur(text)}
                round
                lightTheme
                clearButtonMode= 'while-editing'
                placeHolder = 'Type Song Name Here'
                placeHolderTextColor = { 'gray' }
                onSubmitEditing={ () => {
                    onSearch(queryName)
                    Keyboard.dismiss()
                }

                }
            />

        </View>

        <View>
            {trackData? <SearchList tracks={trackData} navigation={navigation}/> : null}
        </View>

    </View>

)

const mapStateToProps = (state, ownProps) => {
    return {
        queryName: state.searchReducer.queryName,
        trackData: state.searchReducer.trackData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBlur: (text) => {
            dispatch(updateQuery(text))
        },
        onSearch: (queryName) => {
            dispatch(fetchTracks(queryName))
        }
    }
}

const SavePageContainer = connect(mapStateToProps,mapDispatchToProps)(Search_page)

export default SavePageContainer
