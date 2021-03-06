import { C } from '../config/constants'
import { login } from '../helpers/firebaseFunctions'

export const requestUserSignIn = () => {
    login()
    return ({type: C.REQUEST_USER_SIGN_IN})
}

export const switchUserToLoggedIn = user =>
    ({
        type: C.SWITCH_USER_TO_LOGGED_IN,
        payload: user
    })

export const switchUserToLoggedOut = () =>
    ({
        type: C.SWITCH_USER_TO_LOGGED_OUT
    })

export const storeUserGalleryURLs = galleryURLs =>
    ({
        type: C.STORE_galleryURLs,
        payload: galleryURLs
    })

export const storeUserMyPranksURLs = myPranksURLs =>
    ({
        type: C.STORE_myPranksURLs,
        payload: myPranksURLs
    })

export const showContactModal = () =>
    ({
        type: C.SHOW_CONTACT_MODAL
    })

export const hideContactModal = () =>
    ({
        type: C.HIDE_CONTACT_MODAL
    })

export const activateHomeTransition = () =>
    ({
        type: C.ACTIVATE_HOME_TRANSITION
    })

export const deactivateHomeTransition = () =>
    ({
        type: C.DEACTIVATE_HOME_TRANSITION
    })
