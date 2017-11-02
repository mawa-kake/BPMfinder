'use strict'
import React from 'react'
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getRecents } from "../store/actionTypes"
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button} from 'react-native-elements'



const Home_page = ({navigation, viewRecents}) => (

    //if save done then render
    <View style={{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between'
    }}>
        <Text style={styles.headerText}>BPM Finder </Text>
        <View style={styles.descriptionText} >
            <View style={styles.descriptionRowStyle}>
                <Icon size={ 22 } name='hand-pointer-o'  color={ 'black' }/>
                <Text style={styles.rowText}>TAP TEMPO: Tap this tab to tap out a tempo</Text>
            </View>
            <View style={styles.descriptionRowStyle}>
                <Icon size={ 22 } name='search'  color={ 'black' }/>
                <Text style={styles.rowText}>SEARCH: Tap this tab to search for a specific song bpm via Spotify </Text>
            </View>
            <View style={styles.descriptionRowStyle}>
                <Icon size={ 22 } name='history'  color={ 'black' }/>
                <Text style={styles.rowText}>RECENTS: Tap the button below to view recently found bpms</Text>
            </View>
            <Text style={styles.descriptionRowStyle}> </Text>
        </View>

        <Button
            large
            onPress={()=>{
                viewRecents(()=>{navigation.navigate('history_page')})
            }}
            icon={{name: 'history', type: 'font-awesome', color: 'black'}}
            color={'black'}
            title='View Recents'
            borderRadius={20}
            backgroundColor={'lightcoral'} />


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
        fontSize: 50,
        textAlign: 'center',
        padding: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fomtFamily: 'Arial'
    },

    descriptionRowStyle: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        color: 'black'
    },
    descriptionText: {
        fontSize:30,
        textAlign: 'center',
        flexDirection: 'column',
        padding: 10
    },
    rowText: {
        fontSize: 17,
        paddingRight: 5
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
