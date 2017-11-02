'use strict'
import React from 'react'
import _ from 'lodash'
import { ScrollView, TouchableHighlight } from 'react-native'
import HistoryListItem from './historyListItem'


const HistoryList = ({tracks, navigation}) => (

    <ScrollView>
        {_.map(tracks, (track) => {
            return (<HistoryListItem bpm={track.bpm} name={track.name} key={_.uniqueId()}/>)
        })}

    </ScrollView>
)


export default HistoryList
