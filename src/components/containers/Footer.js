import { connect } from 'react-redux'
import { showContactModal,
         hideContactModal } from '../../store/actions'
import { FooterUI } from '../ui/FooterUI'


const mapStateToProps = (state) => ({
    isContactModalVisible: state.isContactModalVisible
})

const mapDispatchToProps = (dispatch) =>
    ({
        showContactModal() {
            dispatch(
                showContactModal()
            )
        },
        hideContactModal() {
            dispatch(
                hideContactModal()
            )
        },
    })

export const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterUI)
