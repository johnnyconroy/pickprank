import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'

export const MaterialLoader = () => (
	<div id="materialLoader">
		<MuiThemeProvider>
			<CircularProgress />
		</MuiThemeProvider>
	</div>
)
