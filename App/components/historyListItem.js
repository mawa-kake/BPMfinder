'use strict'
import React from 'react'
import lodash from 'lodash'
import { Text, TouchableHighlight, View, Image} from 'react-native'

const HistoryListItem = ({bpm, name, key}) => (

    <View style={Styles.rowStyle}>
        <Text style={Styles.textStyleL}>{name}</Text>
        <Text style={Styles.textStyleR}>{bpm}</Text>
    </View>
)


const Styles = StyleSheet.create({
    rowStyle: {
        flex:1,
        alignItems:'left',
        justifyContent:'left',
        flexDirection: 'row',
        height: 30,
        marginLeft: 5,
        marginRight: 5,
    },
    textStyleL: {
        fontSize: 8
    },
    textStyleR: {
        fontSize: 8,
        alignSelf: 'flex-end',
        marginLeft: 'auto'

    }
})


export default HistoryListItem
