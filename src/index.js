import React from 'react'
import { render } from 'react-dom'
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import sampleData from './store/initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'
import { App } from './App'

WebFont.load({
    google: {
    families: ['Baloo', 'Hind', 'Roboto', 'sans-serif']
    }
})

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
