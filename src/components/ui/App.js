import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { NavbarInstance } from './NavbarInstance'
import { Home } from './Home'
import { Gallery } from './Gallery'
import { MyPranks } from './MyPranks'
import { Footer } from './Footer'
import { MaterialLoader } from './MaterialLoader'
import { ThankYou } from './ThankYou'
import { Whoops404 } from './Whoops404'
import { firebaseAuth } from '../../config/constants'
import { getGalleryURLs } from '../../helpers/firebaseFunctions'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

export class App extends Component {
    constructor() {
        super()
        this.state = {
            authed: false,
            loading: true,
            user: null,
            URLs: {},
        }
    }
    componentDidMount() {
        this.removeAuthListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                    user: user,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false,
                    user: null,
                })
            }
        })
        firebaseAuth().getRedirectResult().then(function(result) {
            if (result.credential) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const token = result.credential.accessToken
                // Not possible to store token as a state (lost after refresh for instance as current function is only called during auth)
                localStorage.accessToken = token
            }
            }).catch(function(error) {
                console.log(error.message)
            })
        getGalleryURLs.then( (URLs) => {
            this.setState({
                    URLs: URLs
                })
        })
    }
    componentWillUnmount() {
        this.removeAuthListener()
    }
    render() {
        const {URLs, authed, user, loading} = this.state
        return loading === true ? <MaterialLoader /> : (
            <BrowserRouter>
                <div className="main">
                    <NavbarInstance authed={authed} user={user}/>
                    <Switch>
                        <Route exact path="/" render={() => <Home authed={authed}/>}/>
                        <Route path="/gallery" render={() => <Gallery URLs={URLs} authed={authed}/>}/>
                        <Route path="/thankyou" component={ThankYou}/>
                        <PrivateRoute authed={authed} path="/mypranks" component={MyPranks}/>
                        <Route component={Whoops404}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
