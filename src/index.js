import React from 'react'
import { render } from 'react-dom'
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import storeFactory from './store'
import sampleData from './store/initialState'
import { Provider } from 'react-redux'
import { App } from './components/containers/App'

WebFont.load({
    google: {
    families: ['Baloo', 'Hind', 'Roboto', 'sans-serif']
    }
})

const store = storeFactory(sampleData)

window.React = React
window.store = store

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
