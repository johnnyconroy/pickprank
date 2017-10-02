import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NavbarInstance } from './components/NavbarInstance';
import { FacebookLogin } from './components/FacebookLogin';
import { Home } from './components/Home'
import { Gallery } from './components/Gallery'
import { MyPranks } from './components/MyPranks'
import { Whoops404 } from './components/Whoops404'
import { firebaseAuth } from './config/constants'

export class App extends Component {
    state = {
        authed: false,
        loading: true,
    }
    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })
    }
    componentWillUnmount () {
        this.removeListener()
    }
    render() {
        return this.state.loading === true ? <h1>Loading</h1> : (
            <BrowserRouter>
                <div className="main">
                    <NavbarInstance authed={this.state.authed} />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/mypranks" component={MyPranks}/>
                        <Route component={Whoops404}/>
                    </Switch>
                    <FacebookLogin />
                </div>
            </BrowserRouter>
        )
    }
}
