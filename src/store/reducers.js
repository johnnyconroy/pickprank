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

        case C.REQUEST_USER_SIGN_IN :
            return {
                "authed": false,
                "loading" : true,
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

export const isContactModalVisible = (state=false, action) => {
    switch(action.type) {

        case C.SHOW_CONTACT_MODAL :
            return true

        case C.HIDE_CONTACT_MODAL :
            return false

        default:
            return state
    }
}

export const homeTransitionClass = (state="home-container", action) => {
    switch(action.type) {

        case C.ACTIVATE_HOME_TRANSITION :
            return "home-container"

        case C.DEACTIVATE_HOME_TRANSITION :
            return "home-container show"

        default:
            return state
    }
}

export default combineReducers({
    userData,
    URLs,
    isContactModalVisible,
    homeTransitionClass
})
