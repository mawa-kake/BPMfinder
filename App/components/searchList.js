'use strict'
import React from 'react'
import _ from 'lodash'
import { ScrollView, TouchableHighlight } from 'react-native'
import SearchListItem from './searchListItem'


const SearchList = ({tracks, navigation}) => (

    <ScrollView>

        {_.map(tracks, (track) => {
            return (<SearchListItem bpm={track.bpm} name={track.name} artist={track.artist} key={track.id} navigation={navigation}/>)
        })}

    </ScrollView>
)

export default SearchList
