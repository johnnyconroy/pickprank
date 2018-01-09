import { connect } from 'react-redux'
import { requestUserSignIn,
         switchUserToLoggedIn,
         switchUserToLoggedOut,
         storeUserGalleryURLs } from '../../store/actions'
import { AppUI } from '../ui/AppUI'


const mapStateToProps = (state) => ({
    authed: state.userData.authed,
    loading: state.userData.loading,
    user: state.userData.user,
    URLs: state.URLs,
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
        storeGalleryURLs(URLs) {
            dispatch(
                storeUserGalleryURLs(URLs)
            )
        }
    })

export const App = connect(mapStateToProps, mapDispatchToProps)(AppUI)
