import { C } from '../config/constants'

export const switchUserToLoggedIn = user =>
  ({
      type: C.SWITCH_USER_TO_LOGGED_IN,
      payload: user
  })

export const switchUserToLoggedOut = () =>
    ({
        type: C.SWITCH_USER_TO_LOGGED_OUT
    })

export const storeGalleryURLs = URLs =>
    ({
        type: C.STORE_GALLERY_URLS,
        payload: URLs
    })
