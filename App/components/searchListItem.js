'use strict'
import React from 'react'
import lodash from 'lodash'
import { Text, TouchableOpacity, View, Image} from 'react-native'
import {attemptSave} from '../store/actionTypes'

class SearchListitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {saved: false};
    }

    styles = StyleSheet.create({
        rowStyle: {
            flex:1,
            alignItems:'flex-start',
            justifyContent:'flex-start',
            flexDirection: 'row',
            height: 30,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 5
        },
        textStyleR: {
            fontSize: 8,
            alignSelf: 'flex-end',
            marginLeft: 'auto'

        },

    })

    render() {
        let saved = this.state.saved
        return (
            <View style={this.styles.rowStyle}>
                <View style={{
                    flexDirection: 'column',
                    fontSize: 8
                }}>
                    <Text>{this.props.name+ "          " + this.props.bpm}</Text>
                    <Text style={{color:'grey'}}>{this.props.artist}</Text>
                </View>
                <TouchableOpacity style={{
                    borderRadius: 20,
                    backgroundColor: saved? 'green': 'white'
                }} onPress={()=>{
                    this.props.save(this.props.name,this.props.bpm)
                    this.setState({saved:true})
                }}>
                    <Text style={{color: saved? 'white': 'black', fontSize: 8}}
                        {saved? 'Saved': 'Save'}
                    </Text>
                </TouchableOpacity>


            </View>)
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        save: (name, bpm) => {
            dispatch(attemptSave(name, bpm))

        }
    }
}

const SearchListItem = connect(null, mapDispatchToProps)(SearchListitem)

export default SearchListItem
