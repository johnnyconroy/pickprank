import { databaseRef, storageRef, firebaseAuth } from '../config/constants'

export function logout () {
	return firebaseAuth().signOut()
}

export function login () {
    const provider = new firebaseAuth.FacebookAuthProvider();
    firebaseAuth().signInWithRedirect(provider);
}

// TODO - Create a standard login with email and password
// export function auth (email, pw) {
//   return firebaseAuth().createUserWithEmailAndPassword(email, pw)
//     .then(saveUser)
// }

// export function saveUser (user) {
//   return ref.child(`usersPicPrancks/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then(() => user)
// }

export const getGalleryURLs = new Promise((resolve, reject) => {
	const dbRefGallery = databaseRef.child('/availablePicPrancks')
	const storageRefGallery = storageRef.child('/availablePicPrancks')
	let galleryURLs = {
			images: [],
        	thumbnails: []
        }
	dbRefGallery.once('value', snap => {
        const galleryObject = snap.val()
        try {
			for ( let key in galleryObject ) {
				const picture = galleryObject[key]
				const thumbnailPath = `${picture}/web/thumbnail_${picture}.png`
				storageRefGallery.child(thumbnailPath).getDownloadURL().then( url => {
					galleryURLs["thumbnails"].push(url)
				})
				.then( () => {
						const imagePath = `${picture}/web/image_${picture}.png`
						storageRefGallery.child(imagePath).getDownloadURL().then( url => {
						galleryURLs["images"].push(url)
						})
						.then( () => {
							if ( galleryURLs["images"].length === galleryObject.length ) {
								resolve(galleryURLs)
							}
						})
						.catch( e => {
							console.log("gallery image THEN error")
						})
				})
				.catch( e => {
					console.log("gallery thumbnail THEN error")
				})
			}
        } catch(e) {
			console.log(e)
        }
	})
})

export const getMyPranksURLs = new Promise((resolve, reject) => {
	const dbRefMyPranks = databaseRef.child('/myPranksSample')
	const storageRefMyPranks = storageRef.child('/myPranksSample')
	let myPranksURLs = {
			images: [],
        	thumbnails: []
        }
	dbRefMyPranks.once('value', snap => {
        const myPranksObject = snap.val()
        try {
			for ( let key in myPranksObject ) {
				const picture = myPranksObject[key]
				const thumbnailPath = `${picture}/thumbnail_${picture}.png`
				storageRefMyPranks.child(thumbnailPath).getDownloadURL().then( url => {
					myPranksURLs["thumbnails"].push(url)
				})
				.then( () => {
						const imagePath = `${picture}/image_${picture}.png`
						storageRefMyPranks.child(imagePath).getDownloadURL().then( url => {
						myPranksURLs["images"].push(url)
						})
						.then( () => {
							if ( myPranksURLs["images"].length === myPranksObject.length ) {
								resolve(myPranksURLs)
							}
						})
						.catch( e => {
							console.log("myPranks image THEN error")
						})
				})
				.catch( e => {
					console.log("myPranks thumbnail THEN error")
				})
			}
        } catch(e) {
			console.log(e)
        }
	})
})
