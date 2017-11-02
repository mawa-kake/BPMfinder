
const savePageReducer = (state = {bpm: 0, name: null, saved: false, missingName: false},action) => {
    switch(action.type) {
        case 'missingName' : {
            return Object.assign({}, state, {missingName: true})
        }

        case 'saveDone': {
            return Object.assign({}, state, {saved: true, name: null})
        }

        case 'resetModals': {
            return Object.assign({}, state, {saved: false, missingName: false})
        }

        case 'toBeSaved' : {
            return Object.assign({}, state, {name: action.name, bpm: action.bpm})
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

export default savePageReducer
