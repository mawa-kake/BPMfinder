import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import {combineReducers} from 'redux'
import {navReducer} from '../reducers/navigation_reducer'
import {tapperPageReducer} from '../reducers/tapperPageReducer'
import {savePageReducer} from '../reducers/savePageReducer'
import moment from 'moment'

// const store = function configureStore(initialState: any = undefined){
//   const logger = createLogger()
//   const enhancer = compose(
//     applyMiddleware(thunk, promise, logger)
//   )
//   return createStore(navReducer, initialState, enhancer)
// }

const enhancer = compose(
    applyMiddleware(thunk, promise, logger)
  )

  const reducer = combineReducers({
    navReducer: navReducer,
    tapReducer: tapperPageReducer,
    saveReducer: savePageReducer
  })

  const initialState = {avg: 0, numTaps: 0, lastTap: 0}

  const store = createStore(reducer, initialState, enhancer)
//should the lasttap be a moment?

export default store
