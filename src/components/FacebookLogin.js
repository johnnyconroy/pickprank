import React from 'react'
import { Component } from 'react'
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYd1uZm5HYGUnAXCPWcHQmxnbCy0ObED0",
  authDomain: "picpranck.firebaseapp.com",
  databaseURL: "https://picpranck.firebaseio.com",
  storageBucket: "picpranck.appspot.com",
};
firebase.initializeApp(config);

/**
* initApp handles setting up UI event listeners and registering Firebase auth listeners:
*  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
*    out, and that is where we update the UI.
*  - firebase.auth().getRedirectResult(): This promise completes when the user gets back from
*    the auth redirect flow. It is where you can get the OAuth access token from the IDP.
* 	 (REMOVED HERE)
*/
function initApp() {
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // Prevent from adding multiple div
        // if ($('#profile_info_nav').html() == "") {
        //     $('<a href="#"><img class="profile_pic" id="profile_pic_nav"></a><a class="user_name" id="user_name_nav" href="#"></a>').appendTo('#profile_info_nav')
        //     $('<a href="#"><img class="profile_pic" id="profile_pic_big"></a><a class="user_name" id="user_name_big" href="#"></a>').appendTo('#profile_info_big')
        // }
        //   	 $('#quickstart-sign-in').hide();
        //     $('.profile_pic').attr('src', photoURL);
        //     $('.user_name').text(displayName);
        //     $('.profile_info').css('display', 'flex');
        //     $("#loader-wrapper-init").fadeOut("1000");
        // } else {
        // // User is signed out.
        //     $('#dropdown_icon').hide();
        //     $('.signout').hide();
        //     // $('#myPranksHeap').hide();
        //     // TODO debug the line just under - #myPranksHeap does not disappear instantly after signout
        //     $('myPranksHeap').hide();
        //     $('#myPickPranksMobile').hide();
        //     $('#profile-link').hide();
        //     $('.profile_info').hide();
        //     $("#loader-wrapper-init").fadeOut("1000");
        }
    });
    // [END authstatelistener]
    // if (document.getElementById('quickstart-sign-in')) {
    //     document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);  
    // }         
}
window.onload = function() {
	initApp();
}

export class FacebookLogin extends Component {
	constructor() {
		super();
		this.state = {
			speed: 10
		}
	}

    /**
    * Function called when clicking the Login button.
    */
    // [START buttoncallback]
	toggleSignIn() {
		// [START createprovider]
		var provider = new firebase.auth.FacebookAuthProvider();
		// [END createprovider]
		// [START addscopes]
		provider.addScope('user_likes');
		// [END addscopes]
		// [START signin]
		firebase.auth().signInWithRedirect(provider);
		// [END signin]
    }
    // [END buttoncallback]

	componentDidMount() {
		const rootRef = firebase.database().ref().child('react');
		rootRef.on('value', snap => {
    		this.setState({
				speed: snap.val()
			})  
		})
	}

	MyDummyFunction() {
		console.log("toto");
	}

	render() {
		return (
			<div className="FacebookLogin">
				<h1> {this.state.speed} </h1>
				<button className="quickstart-sign-in" 
						onClick={ this.toggleSignIn }>
				    <img src='https://www.gstatic.com/firebasejs/ui/0.5.0/images/auth/facebook.svg' alt="facebook_logo"></img>
				    Sign in with Facebook
				</button>
			</div>
		)
	}
}
