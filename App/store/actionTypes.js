//Actions
export const CLEAR_HISTORY = 'clearHistory'
export const VIEW_HISTORY = 'viewHistory'
export const UPDATE_AVG = 'updateAvg'
export const RESET_AVG = 'resetAvg'
export const SAVE_BPM = 'saveBPM'
export const JUMP_TO_TAB = 'jumpToTab'
export const UPDATE_NAME = 'updateName'


/**need to create action creators for update avg, that take as argument current time,
this then will feed to the current time to the reducer which will set and return:

avg = (60/(current tap time- last tap time))+avg/number of taps

last tap time = current tap time

number of taps = number of tapps++

last tap time, avg, and number of taps are on the state**/

export function updateAvg(time) {
  return { type: UPDATE_AVG, time }
}

export function nameUpdate(text) {
  return {type: UPDATE_NAME, text}
}
