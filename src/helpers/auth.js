import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login () {
    var provider = new firebaseAuth.FacebookAuthProvider();
    firebaseAuth().signInWithRedirect(provider);
}

export function saveUser (user) {
  return ref.child(`usersPicPrancks/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
