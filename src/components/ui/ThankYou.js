import React from 'react'
import ActionThumbUp from 'react-material-icons/icons/action/thumb-up'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export const ThankYou = () => (
    <div id="thank-you-message">
		<MuiThemeProvider>
    		<ActionThumbUp />
    	</MuiThemeProvider>
        <h1>Your message was successfully sent !</h1>
    </div>
)
