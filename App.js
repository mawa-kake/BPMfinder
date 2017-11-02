import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Provider, connect} from 'react-redux'
import store from './App/store/configureStore'
import TabBarContainer from "./App/components/tabBar"


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <TabBarContainer/>
            </Provider>
        )
    }
}
