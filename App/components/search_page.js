'use strict'
import React from 'react'
import { Alert, ActivityIndicator, Keyboard, View, TextInput, Text, TouchableOpacity } from 'react-native'
import SearchList from './searchList'
import {connect} from 'react-redux'
import {updateQuery, fetchTracks, LOADING, CLOSEERROR} from "../store/actionTypes"
import {SearchBar} from 'react-native-elements'


export const Search_page = ({onBlur, onSearch, trackData, navigation, queryName, loading, toggleLoading, error, closeError}) => (

    <View style={{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white'
    }}>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flexStart',
            marginTop: 30
        }}>

            <SearchBar
                onChangeText = {(text) => onBlur(text)}
                round
                lightTheme
                clearButtonMode = 'while-editing'
                placeholder = 'Type Song Name Here...'
                onSubmitEditing={ () => {
                    Keyboard.dismiss()
                    onSearch(queryName)

                }

                }
            />

        </View>

        <View style={{flex:1}}>
            {trackData && !loading? <SearchList tracks={trackData} navigation={navigation}/> : null}
        </View>


        {loading?
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 50}}>
                <ActivityIndicator size="large" />
            </View>: null}

        {error? Alert.alert('No Tracks Found', 'Either Spotify found no close matches, or you have a network connectivity issue', [{text: 'OK', onPress: () => closeError()}]) : null}


    </View>

)

const mapStateToProps = (state, ownProps) => {
    return {
        queryName: state.searchReducer.queryName,
        trackData: state.searchReducer.trackData,
        loading: state.searchReducer.loading,
        error: state.searchReducer.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBlur: (text) => {
            dispatch(updateQuery(text))
        },
        onSearch: (queryName) => {
            if (queryName !== null) {
                dispatch({type: LOADING})
                dispatch(fetchTracks(queryName))
            }

        },
        closeError: () => {
            dispatch({type: CLOSEERROR})
        }
    }
}

const SavePageContainer = connect(mapStateToProps,mapDispatchToProps)(Search_page)

export default SavePageContainer
