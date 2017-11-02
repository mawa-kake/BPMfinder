'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {RESET_AVG, updateAvg} from "../store/actionTypes"
import moment from 'moment'
import {toBeSaved} from '../store/actionTypes'

const tapper_page = ({avg, onTap, onReset, navigation, numTaps, onConfirmSave}) => (
    <View style={{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'white'
    }}>
        <View style={{flexDirection: "row", alignItems: 'flex-start', marginTop: 30}}>
            <TouchableOpacity
                style={styles.resetButton}
                onPress={ () => onReset() }>
                <Text style={{color:'#E00000', fontSize: 15}}>{'Reset'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.saveButton}
                onPress={ () => {
                    onConfirmSave(avg)
                    navigation.navigate('save_page')
                }}>
                <Text style={{color: '#009933', fontSize: 15}} >{'Save'}</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30}}>
            <Text style={styles.avgNumberText}>{(numTaps <= 1)? "0 " : Math.round(avg)}</Text>
            <Text style={styles.bpmLabel}>  BPM</Text>
        </View>

        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 50}}>
            <TouchableOpacity
                onPress={ () => onTap() }
                style={styles.tapButton}>
                <Text style={styles.text} >{'Tap Me'}</Text>
            </TouchableOpacity>
        </View>

    </View>

)


var styles = StyleSheet.create({

    saveButton: {

        alignSelf: 'flex-end',
        marginLeft: 'auto',
        paddingRight: 10,


    },
    resetButton: {

        paddingLeft: 10,


    },
    tapButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        width: 180,
        padding: 20,
        borderRadius: 90,
        marginBottom: 10,
        backgroundColor:'lightcoral'
    },

    avgNumberText: {
        fontSize: 90,
        textAlign: 'center',
        flexDirection: 'column',
        color: 'black',
        marginLeft: 25
    },

    text: {
        fontSize:30,
        textAlign: 'center',
        flexDirection: 'column',
        color: 'black'
    },

    bpmLabel: {
        fontSize:15,
        textAlign: 'center',
        flexDirection: 'column',
        color: 'black'
    }

})

const mapStateToProps = (state, ownProps) => {
    return {
        avg: state.tapReducer.avg,
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
        },
        onConfirmSave: (bpm) => {
            dispatch(toBeSaved(bpm, undefined, false))
        }


    }
}

const TapperPageContainer = connect(mapStateToProps,mapDispatchToProps)(tapper_page)

export default TapperPageContainer
