'use strict'
import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import HistoryList from './historyList'
import {CLEAR_HISTORY} from '../store/actionTypes'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button} from 'react-native-elements'

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
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',}}>
                <View style={{
                    padding: 40}}>
                    <View style={{flexDirection: 'column'}}>
                        <Button
                            large
                            onPress={()=>{
                                navigation.goBack()
                            }}
                            icon={{name: 'arrow-left', type: 'font-awesome', color: 'black'}}
                            color={'black'}
                            title='No Recents'
                            borderRadius={20}
                            backgroundColor={'red'} />
                    </View>
                </View>
            </View>
        </Modal>

        <View style={{
            marginTop:22,
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }}>
            <TouchableOpacity
                onPress={()=> {navigation.goBack()}}>
                <Icon size={ 30 } name='arrow-left'  color={ 'black' }/>
            </TouchableOpacity>
        </View>



        <View style={{flex:1}}>
            {tracks? <HistoryList tracks={tracks}/> : null}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30}}>

            <Button
                large
                onPress={
                    ()=>{clear()}
                }
                color={'black'}
                title='Clear Recents'
                borderRadius={20}
                backgroundColor={'red'} />
        </View>


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
