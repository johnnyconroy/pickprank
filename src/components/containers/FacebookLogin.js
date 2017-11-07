import React from 'react'
import PropTypes from 'prop-types'
import { login } from '../../helpers/firebaseFunctions'


export const FacebookLogin = ({authed}) => (
	<div className="FacebookLogin">
		{authed === true ? <div></div> : (
			<button className="quickstart-sign-in"
					onClick={ login }>
			    <img src='https://www.gstatic.com/firebasejs/ui/0.5.0/images/auth/facebook.svg' alt="facebook_logo"></img>
			    Sign in with Facebook
			</button>
		)}
	</div>
)

FacebookLogin.defaultProps = {
  authed: false
}

FacebookLogin.propTypes = {
  authed: PropTypes.bool
}
