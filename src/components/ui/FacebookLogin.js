import React from 'react'
import PropTypes from 'prop-types'

export const FacebookLogin = ({authed, requestSignIn}) => (
	<div className="FacebookLogin">
		{authed === true ? <div></div> : (
			<button className="quickstart-sign-in"
					onClick={ requestSignIn }>
			    <img src='https://www.gstatic.com/firebasejs/ui/0.5.0/images/auth/facebook.svg' alt="facebook_logo"></img>
			    Sign in with Facebook
			</button>
		)}
	</div>
)

FacebookLogin.defaultProps = {
  authed: false,
  requestSignIn: f => f
}

FacebookLogin.propTypes = {
  authed: PropTypes.bool,
  requestSignIn: PropTypes.func,
}
