import { connect } from 'react-redux'
import { requestUserSignIn,
         switchUserToLoggedIn,
         switchUserToLoggedOut,
         storeUserGalleryURLs,
         storeUserMyPranksURLs } from '../../store/actions'
import { AppUI } from '../ui/AppUI'


const mapStateToProps = (state) => ({
    authed: state.userData.authed,
    loading: state.userData.loading,
    user: state.userData.user,
    galleryURLs: state.galleryURLs,
    myPranksURLs: state.myPranksURLs,
})

const mapDispatchToProps = (dispatch) =>
    ({
        requestSignIn() {
            dispatch(
                requestUserSignIn()
            )
        },
        switchToLoggedIn(user) {
            dispatch(
                switchUserToLoggedIn(user)
            )
        },
        switchToLoggedOut() {
            dispatch(
                switchUserToLoggedOut()
            )
        },
        storeUserGalleryURLs(galleryURLs) {
            dispatch(
                storeUserGalleryURLs(galleryURLs)
            )
        },
        storeUserMyPranksURLs(myPranksURLs) {
            dispatch(
                storeUserMyPranksURLs(myPranksURLs)
            )
        }
    })

export const App = connect(mapStateToProps, mapDispatchToProps)(AppUI)
