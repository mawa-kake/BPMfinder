import {AsyncStorage} from 'react-native'
import _ from 'lodash'
import Api from '../lib/api'
import {Alert} from 'react-native'

//Actions
export const CLEAR_HISTORY = 'clearHistory'
export const VIEW_HISTORY = 'viewHistory'
export const UPDATE_AVG = 'updateAvg'
export const RESET_AVG = 'resetAvg'
export const SAVE_DONE = 'saveDone'
export const JUMP_TO_TAB = 'jumpToTab'
export const UPDATE_NAME = 'updateName'
export const UPDATE_QUERY = 'updateQuery'
export const DO_QUERY = 'doQuery'
export const TRACKS_LOADED = 'tracksLoaded'
export const TO_BE_SAVED = 'toBeSaved'
export const JUMP_TO_HISTORY = 'jumpToHistory'
export const RESET_MODALS = 'resetModals'
export const MISSING_NAME = 'missingName'
export const LOADING = 'loading'

export function updateAvg(time) {
    return { type: UPDATE_AVG, time }
}

export function toBeSaved(bpm, name, navFromSearch) {
    return {type: TO_BE_SAVED, bpm, name, navFromSearch}
}

export function getRecents(cb) {
    return (dispatch) => {
        AsyncStorage.getAllKeys().then(
            (keys) => { return AsyncStorage.multiGet(keys)}).then(
            (stores) => { const tracks = _.map(stores, (store) => { return {name:store[0], bpm: store[1]}})
                dispatch({type: VIEW_HISTORY, tracks: tracks})
                cb()
            })}}

export function resetModals() {
    return (dispatch) => {
        dispatch({type: RESET_MODALS})
    }
}

export function attemptSave(name, bpm) {
    return (dispatch) => {
        if (!name || name === "") {
            dispatch({type: MISSING_NAME})
        }
        else {
            AsyncStorage.setItem(name, String(bpm)).then(
                () => {
                    dispatch({type: RESET_AVG})
                    dispatch({type: SAVE_DONE})
                })
        }
    }
}

export function fetchTracks(query) {
    return (dispatch) => {

        const queryNoSpecial = query.replace(" ", "%20").replace("’", "%27").replace("!","%21").replace("?","%3F").replace(":","%3A")
        .replace(";", "%3B")
        .replace("<","%3C")
        .replace("=","%3D")
        .replace(">","%3E")
        .replace("@","%40")
        .replace('"',"%22")
        .replace("#","%23")
        .replace("$","%24")
        .replace("%","%25")
        .replace("&","%26")
        .replace("(","%28")
        .replace(")","%29")
        .replace("*","%2A")
        .replace("+","%2B")
        .replace(",","%2C")
        .replace("-","%2D")
        .replace(".","%2E")
        .replace("/","%2F")

        Api.get("https://wicked-citadel-29532.herokuapp.com/" + queryNoSpecial, null, 'Accept': 'application/json').then(
            (data) => dispatch({type: TRACKS_LOADED, tracks: data })).catch(()=>
        {Alert.alert('No Tracks Found', 'Either Spotify found no close matches, or you have a network connectivity issue')})

    }
}

export function undoSave(name) {
    AsyncStorage.removeItem(name)
}
export function nameUpdate(text) {
    return {type: UPDATE_NAME, text}
}

export function updateQuery(queryName) {
    return {type: UPDATE_QUERY, queryName}
}
