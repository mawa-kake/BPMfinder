'use strict'
import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import HistoryList from './historyList'
import {CLEAR_HISTORY} from '../store/actionTypes'
import Icon from 'react-native-vector-icons/FontAwesome'

const History_page = ({navigation, tracks, hasHistory, clear}) => (


    <View style={{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white'
    }}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={!hasHistory}
        >
            <View style={{marginTop: 22}}>
                <View>
                    <Text>No recently saved bpms!</Text>

                    <TouchableHighlight onPress={() => {

                        navigation.goBack()
                    }}>
                        <Text>Ok</Text>
                    </TouchableHighlight>

                </View>
            </View>
        </Modal>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}>
            <View style={{
                padding: 20,
                marginTop:22,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}> <TouchableOpacity
                    onPress={()=> {navigation.goBack()}}
                >
                    <Icon size={ 20 } name='arrow-left'  color={ 'black' }/>
                </TouchableOpacity>
            </View>

            <Text style={{
                padding: 20,
                marginTop: 22,
                Height: 15
            }}>Recently Found Tempos</Text>
            <TouchableOpacity
                onPress={ ()=>{clear()}}
                style={{
                    padding:20,
                    borderRadius:20,
                    backgroundColor:'lightcoral',
                    marginTop:20,
                    Height: 15
                }}>
                <Text>{'Clear Recents'}</Text>
            </TouchableOpacity>

        </View>
        {tracks? <ScrollView>
            <HistoryList tracks={tracks}/>
        </ScrollView> : null}


    </View>

)

const mapStateToProps = (state, ownProps) => {
    return {
        tracks: state.historyReducer.tracks,
        hasHistory: state.historyReducer.hasHistory
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clear: () => {
            dispatch({type: CLEAR_HISTORY})}
    }
}

const HistoryPageContainer = connect(mapStateToProps, mapDispatchToProps)(History_page)

export default HistoryPageContainer
