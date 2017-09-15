import {combineReducers} from 'redux'
import moment from 'moment'



export const savePageReducer = (state = state = {avg: 0, numTaps: 0, lastTap: 0},action) => {
    switch(action.type) {
      case 'saveBPM' : {
        return Object.assign({}, state, {
        })
      }


      case 'updateName' : {
        return Object.assign({}, state, {
          name: action.text
        })
      }

      default:
           {return state}
  }
}
