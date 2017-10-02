import React from 'react'
import { login } from '../helpers/auth'


export const FacebookLogin = () => (
	<div className="FacebookLogin">
		<button className="quickstart-sign-in" 
				onClick={ login }>
		    <img src='https://www.gstatic.com/firebasejs/ui/0.5.0/images/auth/facebook.svg' alt="facebook_logo"></img>
		    Sign in with Facebook
		</button>
	</div>
)
