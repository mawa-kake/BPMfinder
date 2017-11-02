import {combineReducers} from 'redux'
import {auth, getData, shapeData, getTracks} from '../lib/spotifyFetch'



const searchPageReducer = (state = {queryName: null, trackData: null, loading: false},action) => {
    switch(action.type) {
        case 'updateQuery' : {
            return Object.assign({}, state, {
                queryName: action.queryName
            })
        }

        case 'tracksLoaded' : {
            return Object.assign({}, state, {
                trackData: action.tracks, loading: false,
            })
        }

        case 'loading' : {
            return Object.assign({}, state, {
                loading: true,
            })
        }

        default:
        {return state}
    }
}

export default searchPageReducer
