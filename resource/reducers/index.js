import { combineReducers } from 'redux'

function fecthUser(initState={}, action) {
    switch(action.type) {
        case 'USER_FETCH_SUCCEEDED': 
            console.log(action)
            return action.user
        default:
            return initState
    }
       
}

export default combineReducers({
    fecthUser
})