'use strict'
import React from 'react'
import lodash from 'lodash'
import { Text, TouchableHighlight, View, Image, StyleSheet} from 'react-native'

const HistoryListItem = ({bpm, name, key}) => (

    <View style={Styles.rowStyle}>
        <View style={{maxWidth: 200}}>
            <Text ellipsizeMode= {"tail"} numberOfLines = {1} style={Styles.textStyleL}>{name}</Text>
        </View>
        <Text style={Styles.textStyleR}>{Math.round(bpm)}</Text>
    </View>


)


const Styles = StyleSheet.create({
    rowStyle: {
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: .5
    },
    textStyleL: {
        fontSize: 25
    },
    textStyleR: {
        fontSize: 25,
        alignSelf: 'flex-end',
        marginLeft: 'auto'

    }
})


export default HistoryListItem
