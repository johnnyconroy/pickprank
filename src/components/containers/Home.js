import { connect } from 'react-redux'
import { activateHomeTransition,
         deactivateHomeTransition } from '../../store/actions'
import { HomeUI } from '../ui/HomeUI'


const mapStateToProps = (state, props) => ({
    homeTransitionClass: state.homeTransitionClass,
    authed: props.authed,
    requestSignIn: props.requestSignIn
})

const mapDispatchToProps = (dispatch) =>
    ({
        activateHomeTransition() {
            dispatch(
                activateHomeTransition()
            )
        },
        deactivateHomeTransition() {
            dispatch(
                deactivateHomeTransition()
            )
        },
    })

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI)
