import React from 'react'
import { render } from 'react-dom'
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { App } from './App'

WebFont.load({
    google: {
    families: ['Baloo', 'Hind', 'Roboto', 'sans-serif']
    }
})

window.React = React

render(
        <App />,
    document.getElementById('root')
)

registerServiceWorker()