'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {nameUpdate, attemptSave} from "../store/actionTypes"
import { Keyboard, TextInput, StyleSheet, View, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import {resetModals} from '../store/actionTypes'
import {Button} from 'react-native-elements'


//upon save, reset all values, show the statusbar green ("saved to recents"), go back
const Save_page = ({bpm, onSave, navigation, name, updateName, saved, missingName, closeModal}) => (
    <View style={{
        flex:1,
        backgroundColor:'white',
        flexDirection: 'column'
    }}>

        <Modal
            animationType="slide"
            transparent={true}
            visible={saved}
        >
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: '#00000080'}}>
                <View style={{
                    padding: 40}}>
                    <View style={{flexDirection: 'column'}}>

                        <Button
                            large
                            onPress={()=>{
                                navigation.navigate('tapper_page')
                                closeModal()
                            }}
                            icon={{name: 'check', type: 'font-awesome', color: 'black'}}
                            color={'black'}
                            title='Saved'
                            borderRadius={20}
                            backgroundColor={'#3CB371'} />
                    </View>
                </View>
            </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={missingName}
        >
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: '#00000080'}}>
                <View style={{
                    padding: 40}}>
                    <View style={{flexDirection: 'column', alignSelf: 'center'}}>

                        <Button
                            large
                            onPress={()=>{
                                closeModal()
                            }}
                            icon={{name: 'times', type: 'font-awesome', color: 'black'}}
                            color={'black'}
                            title='Must Enter Name'
                            borderRadius={20}
                            backgroundColor={'red'} />
                    </View>
                </View>
            </View>
        </Modal>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30}}>
            <Text style={styles.avgNumberText}>{Math.round(bpm)}</Text>
            <Text style={styles.bpmLabel}>  BPM</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
            <Text style={styles.text}>Name: </Text>

            <TextInput style={styles.textInput}
                onChangeText={(text) => {updateName(text)}}
                value={name}
                placeholder='Enter Track Name...'
                onSubmitEditing={Keyboard.dismiss}
            />

        </View>


        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                onPress={ () => onSave(name, bpm) }
                style={ styles.confirmButton}>
                <Text>{'Confirm Save'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.goBack() }
                style={ styles.cancelButton}>
                <Text>{'Cancel'}</Text>
            </TouchableOpacity>
        </View>
    </View>

)


const mapStateToProps = (state) => {
    return {
        bpm: state.saveReducer.bpm,
        name: state.saveReducer.name,
        saved: state.saveReducer.saved,
        missingName: state.saveReducer.missingName,
        navFromSearch: state.saveReducer.navFromSearch
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (text) => {
            dispatch(nameUpdate(text))
        },
        onSave: (name, bpm) => {
            dispatch(attemptSave(name, bpm))
        },
        closeModal: () => {
            dispatch(resetModals())
        }
    }
}

var styles = StyleSheet.create({

    textInput: {
        alignSelf: 'flex-end',
        marginleft: 'auto'
    },

    confirmButton: {
        padding:20,
        borderRadius:20,
        backgroundColor:'#3CB371',
        marginTop:20,
        marginRight: 5
    },

    cancelButton: {
        padding:20,
        borderRadius:20,
        backgroundColor:'red',
        marginTop:20,
    },

    avgNumberText: {
        fontSize: 90,
        textAlign: 'center',
        flexDirection: 'column',
        color: 'black',
        marginLeft: 25
    },

    text: {
        fontSize:20,
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

const SavePageContainer = connect(mapStateToProps,mapDispatchToProps)(Save_page)

export default SavePageContainer
