'use strict'
import React from 'react'
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getRecents } from "../store/actionTypes"
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
// Icon


const Home_page = ({navigation, viewRecents}) => (

    //if save done then render
    <View style={{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between'
    }}>
        <Text style={styles.headerText}>Welcome to BeatFinder! </Text>
        <View style={styles.descriptionText} >
            <View style={styles.descriptionRowStyle}>
                <Icon size={ 20 } name='hand-pointer-o'  color={ 'black' }/>
                <Text>TAP TEMPO: tab to tap out a tempo</Text>
            </View>
            <View style={styles.descriptionRowStyle}>
                <Icon size={ 20 } name='search'  color={ 'black' }/>
                <Text>SEARCH: tab to search for a specific song bpm via apple music </Text>
            </View>
            <Text>Click the button below to view recently found bpms </Text>
        </View>

        <TouchableOpacity
            style={styles.viewRecentsButton}
            onPress={()=>{
                viewRecents(()=>{navigation.navigate('history_page')})


            }}>

            <Text >{'View Recents'}</Text>
        </TouchableOpacity>


        <Text style={styles.footer}>Created by Karan Marwah       Version 1</Text>
    </View>

)

const mapDispatchToProps = (dispatch) => {
    return {
        viewRecents: (cb) => {
            dispatch(getRecents(cb))

        }
    }
}



const styles = StyleSheet.create({

    headerText: {
        fontSize: 30,
        textAlign: 'center',
        padding: 30,
        fontWeight: 'bold',
        fontStyle: 'italics'
    },

    descriptionRowStyle: {
        flexDirection: 'column',
        paddingLeft: 10
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

const HomePageContainer = connect(null, mapDispatchToProps)(Home_page)

export default HomePageContainer
