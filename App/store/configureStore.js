import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import {combineReducers} from 'redux'
import navReducer from '../reducers/navigation_reducer'
import tapperPageReducer from '../reducers/tapperPageReducer'
import savePageReducer from '../reducers/savePageReducer'
import historyPageReducer from '../reducers/historyPageReducer'
import searchPageReducer from '../reducers/searchPageReducer'
import moment from 'moment'

const enhancer = compose(
    applyMiddleware(thunk, promise, logger)
)

const reducer = combineReducers({
    navReducer: navReducer,
    tapReducer: tapperPageReducer,
    saveReducer: savePageReducer,
    searchReducer: searchPageReducer,
    historyReducer: historyPageReducer
})

const initialState = {avg: 0, numTaps: 0, lastTap: 0, queryName: null, trackData: null}

const store = createStore(reducer, initialState, enhancer)

export default store
