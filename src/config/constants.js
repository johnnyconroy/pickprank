/**
 * Firebase
 */
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCYd1uZm5HYGUnAXCPWcHQmxnbCy0ObED0",
  authDomain: "picpranck.firebaseapp.com",
  databaseURL: "https://picpranck.firebaseio.com",
  storageBucket: "picpranck.appspot.com",
}

firebase.initializeApp(config)

export const databaseRef = firebase.database().ref()
export const storageRef = firebase.storage().ref()
export const firebaseAuth = firebase.auth



/**
 * Redux Store
 */
 export const C = {
    SWITCH_USER_TO_LOGGED_IN: "SWITCH_USER_TO_LOGGED_IN",
    SWITCH_USER_TO_LOGGED_OUT: "SWITCH_USER_TO_LOGGED_OUT",
    STORE_GALLERY_URLS: "STORE_GALLERY_URLS"
}
