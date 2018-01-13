import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { NavbarInstance } from './NavbarInstance'
import { Home } from '../containers/Home'
import { Gallery } from './Gallery'
import { MyPranks } from './MyPranks'
import { Footer } from '../containers/Footer'
import { MaterialLoader } from './MaterialLoader'
import { ThankYou } from './ThankYou'
import { Whoops404 } from './Whoops404'
import { firebaseAuth } from '../../config/constants'
import { getGalleryURLs, getMyPranksURLs } from '../../helpers/firebaseFunctions'

function PrivateRoute ({myPranksURLs, authed, component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component myPranksURLs={myPranksURLs} authed={authed} {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

export class AppUI extends Component {
    componentDidMount() {
        this.removeAuthListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.props.switchToLoggedIn(user)
            } else {
                this.props.switchToLoggedOut()
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
        getGalleryURLs.then( (galleryURLs) => {
            this.props.storeUserGalleryURLs(galleryURLs)
        })
        getMyPranksURLs.then( (myPranksURLs) => {
            this.props.storeUserMyPranksURLs(myPranksURLs)
        })
    }
    componentWillUnmount() {
        this.removeAuthListener()
    }
    render() {
        const {authed, user, loading, galleryURLs, myPranksURLs, requestSignIn} = this.props
        return loading === true ? <MaterialLoader /> : (
            <BrowserRouter>
                <div className="main">
                    <NavbarInstance authed={authed} user={user}/>
                    <Switch>
                        <Route exact path="/" render={(props) => <Home authed={authed} requestSignIn={requestSignIn} {...props}/>}/>
                        <Route path="/gallery" render={(props) => <Gallery galleryURLs={galleryURLs} authed={authed} requestSignIn={requestSignIn} {...props}/>}/>
                        <Route path="/thankyou" component={ThankYou}/>
                        <PrivateRoute myPranksURLs={myPranksURLs} authed={authed} path="/mypranks" component={MyPranks}/>
                        <Route component={Whoops404}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

AppUI.defaultProps = {
    authed: false,
    loading: false,
    user: {},
    galleryURLs: {},
    requestSignIn: f => f,
    switchToLoggedIn: f => f,
    switchToLoggedOut: f => f,
    storeGallerygalleryURLs: f => f,
}

AppUI.propTypes = {
    authed: PropTypes.bool,
    loading: PropTypes.bool,
    user: PropTypes.object,
    galleryURLs: PropTypes.object,
    requestSignIn: PropTypes.func,
    switchToLoggedIn: PropTypes.func,
    switchToLoggedOut: PropTypes.func,
    storeGallerygalleryURLs: PropTypes.func
}
