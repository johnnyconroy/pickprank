import { C } from '../config/constants'
import { combineReducers } from 'redux'

export const userData = (state={}, action) => {
    switch(action.type) {

        case C.SWITCH_USER_TO_LOGGED_IN :
            return {
        		"authed": true,
        		"loading": false,
        		"user": action.payload
        	}

        case C.SWITCH_USER_TO_LOGGED_OUT :
            return {
        		"authed": false,
        		"loading": false,
        		"user": null
        	}

        default:
            return state
    }
}

export const URLs = (state={}, action) =>
    (action.type === C.STORE_GALLERY_URLS) ?
      	action.payload :
      	state

export default combineReducers({
    userData,
    URLs
})
