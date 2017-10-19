const tapperPageReducer = (state = {avg: 0, numTaps: 0, lastTap: 0},action) => {
    switch(action.type) {
        case 'updateAvg' : {
            //difference in seconds

            var diff
            var first
            var multiplier = 1

            if (state.numTaps >= 2) {
                diff = ((action.time).diff(state.lastTap))/1000
                first = false
                multiplier = 1
            }

            else if (state.numTaps >= 1) {
                diff = ((action.time).diff(state.lastTap))/1000
                first = false
                multiplier = 2
            }

            else {
                diff = 0
                first = true
            }

            const taps = state.numTaps + 1

            return Object.assign({}, state, {
            //computes updated average to display for bpm
                avg: first? diff: (((60/diff) + (state.avg * state.numTaps))/taps) * multiplier,
                lastTap: action.time,
                numTaps: taps
            })
        }


        case 'resetAvg' : {
            return Object.assign({}, state, {
                avg: 0,
                lastTap: 0,
                numTaps: 0
            })
        }

        default:
        {return state}
    }
}

export default tapperPageReducer
