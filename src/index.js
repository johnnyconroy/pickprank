import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import WebFont from 'webfontloader'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { Home } from './components/Home'
import { Gallery } from './components/Gallery'
import { MyPranks } from './components/MyPranks'
import { Whoops404 } from './components/Whoops404'

WebFont.load({
    google: {
    families: ['Baloo', 'Hind', 'Roboto', 'sans-serif']
    }
})

window.React = React

render(
    <HashRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/mypranks" component={MyPranks}/>
                <Route component={Whoops404}/>
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('root')
)

registerServiceWorker()
