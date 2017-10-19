import { AsyncStorage } from 'react-native'




const historyPageReducer = (state = {tracks: null, hasHistory: null}, action) => {
    switch(action.type) {

        case 'clearHistory': {
            AsyncStorage.clear()
            return Object.assign({}, state, {tracks: null, hasHistory: false})
        }

        case 'viewHistory': {
            if ((action.tracks).length === 0) {
                return Object.assign({}, state, {hasHistory: false})
            }
            else {
                return Object.assign({}, state, {tracks: action.tracks, hasHistory: true})
            }
        }


        default:
        {return state}
    }
}

export default historyPageReducer
