import {combineReducers} from 'redux'



const searchPageReducer = (state = {queryName: null, trackData: null, loading: false, fetchNumber: null, error: false},action) => {
    switch(action.type) {
        case 'updateQuery' : {
            return Object.assign({}, state, {
                queryName: action.queryName
            })
        }

        case 'tracksLoaded' : {
            return Object.assign({}, state, {
                trackData: action.tracks, loading: false, fetching: false, fetchCount: 0
            })
        }

        case 'loading' : {
            return Object.assign({}, state, {
                loading: true,
            })
        }

        case 'fetching' : {
            return Object.assign({}, state, {
                fetchNumber: action.id
            })
        }

        case 'error' : {
            return Object.assign({}, state, {
                error: (action.id === state.fetchNumber)
            })

        }

        case 'closeError' : {
            return Object.assign({}, state, {
                error: false
            })

        }

        default:
        {return state}
    }
}

export default searchPageReducer
