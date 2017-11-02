'use strict'
import React from 'react'
import lodash from 'lodash'
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {attemptSave, undoSave} from '../store/actionTypes'

class SearchListitem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {saved: false}
    }

    componentWillMount() {
        this.setState({saved: false})
    }

    styles = StyleSheet.create({
        rowStyle: {
            flex:1,
            alignItems:'flex-start',
            justifyContent:'flex-start',
            flexDirection: 'row',
            height: 50,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 5,
            borderBottomColor: 'lightgrey',
            borderBottomWidth: .5
        },
        textStyleR: {
            fontSize: 8,
            alignSelf: 'flex-end',
            marginLeft: 'auto'

        },

    })

    render() {
        let saved = this.state.saved
        let saveButtonText = this.state.saved? 'Saved' : 'Save'
        return (
            <View style={this.styles.rowStyle}>
                <View style={{
                    flexDirection: 'column'
                }}>
                    <View style={{flexDirection: 'row', maxWidth: 200}}>
                        <Text ellipsizeMode= {"tail"} numberOfLines = {1} style={{fontSize: 16}}>{this.props.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', maxWidth: 200}}>
                        <Text ellipsizeMode= {"tail"} numberOfLines = {1} style={{fontSize: 12}}>{this.props.artist}</Text>
                    </View>
                </View>
                <Text style={{fontSize: 20, alignSelf: 'flex-end', marginLeft: 'auto', marginBottom: 20, marginRight: 10}}>{Math.round(this.props.bpm)}</Text>
                <View style={{padding: 2}}>
                    <TouchableOpacity style={{
                        borderRadius: 6,
                        backgroundColor: saved? '#3CB371': 'white',
                        borderColor: 'black',
                        borderWidth: 1,
                        alignSelf: 'flex-end',
                        marginLeft: 'auto',
                        padding: 3
                    }} onPress={()=>{
                        if (saved) {
                            this.props.undoSave(this.props.name)
                            this.setState({saved: false})
                        }
                        else {
                            this.props.save(this.props.name,this.props.bpm)
                            this.setState({saved:true})
                        }

                    }}>
                        <Text style={{fontSize: 15}}>
                            {saveButtonText}
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (name, bpm) => {
            dispatch(attemptSave(name, bpm))

        },
        undoSave: (name) => {
            undoSave(name)
        }
    }
}

const SearchListItem = connect(null, mapDispatchToProps)(SearchListitem)

export default SearchListItem
