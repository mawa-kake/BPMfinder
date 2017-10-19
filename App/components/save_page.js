'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {nameUpdate, attemptSave} from "../store/actionTypes"
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import {resetModals} from '../store/actionTypes'


//upon save, reset all values, show the statusbar green ("saved to recents"), go back
const Save_page = ({bpm, onSave, navigation, name, updateName, saved, missingName, closeModal, navFromSearch}) => (
    <View style={{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }}>

        <Modal
            animationType="slide"
            transparent={false}
            visible={saved}
        >
            <View style={{marginTop: 22}}>
                <View>
                    <Text>Saved Succesfully!</Text>

                    <TouchableHighlight onPress={() => {
                        navigation.navigate('tapper_page')
                        closeModal()
                    }}>
                        <Text>Ok</Text>
                    </TouchableHighlight>

                </View>
            </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={false}
            visible={missingName}
        >
            <View style={{marginTop: 22}}>
                <View>
                    <Text>Must enter a name</Text>

                    <TouchableHighlight onPress={() => {
                        closeModal()
                    }}>
                        <Text>Ok</Text>
                    </TouchableHighlight>

                </View>
            </View>
        </Modal>
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>BPM </Text>
            <Text style={styles.text}>{bpm}</Text>
        </View>
        {!(navFromSearch) ?
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>Name </Text>
                <TextInput style={styles.text}
                    onChangeText={(text) => {updateName(text)}}
                    value={name}/>
            </View> : <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>Name </Text>
                <Text style={styles.text}>{name} </Text>
            </View>

        }

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

    text: {
        flexDirection: 'row',
        fontSize:18,
        textAlign: 'center',
        height: 40,
        width: 100
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

const SavePageContainer = connect(mapStateToProps,mapDispatchToProps)(Save_page)

export default SavePageContainer
