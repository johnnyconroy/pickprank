import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCYd1uZm5HYGUnAXCPWcHQmxnbCy0ObED0",
  authDomain: "picpranck.firebaseapp.com",
  databaseURL: "https://picpranck.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth