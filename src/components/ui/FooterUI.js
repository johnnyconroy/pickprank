import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'

export const FooterUI = ({isContactModalVisible, showContactModal, hideContactModal}) => (
	<div className="modal-container" style={{height: 200}}>
		<div id="contact-button">
		<Button
			bsStyle="primary"
			bsSize="sm"
			onClick={showContactModal}
		>
			Contact
		</Button>
		</div>

		<Modal
			show={isContactModalVisible}
			onHide={hideContactModal}
			aria-labelledby="contained-modal-title"
		>
			<Modal.Header closeButton>
		    	<Modal.Title id="contained-modal-title"><b>New message</b></Modal.Title>
		  	</Modal.Header>
		  	<Modal.Body>
                <form method="POST" action="http://formspree.io/pickprank@gmail.com">
                    <div className="form-group">
                    <label htmlFor="user-name" className="control-label">Your Name:</label>
                    <input type="text" className="form-control" id="user-name" name="name"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="user-email" className="control-label">Your Email:</label>
                    <input type="text" className="form-control" id="user-email" name="_replyto"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="user-subject" className="control-label">Subject:</label>
                    <input type="text" className="form-control" id="user-subject" name="_subject"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="message-text" className="control-label">Message:</label>
                    <textarea className="form-control" id="message-text" name="message"></textarea>
                    </div>
                    <input type="hidden" name="_next" value="thankyou" />

                <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={hideContactModal}>Close</button>
                <button type="submit" className="btn btn-primary">Send message</button>
                </div>
                </form>
		  	</Modal.Body>
		</Modal>
		<section id="copyright">
	    	<p>&copy; 2017 Pick Prank </p>
		</section>
	</div>
)

FooterUI.defaultProps = {
  isContactModalVisible: false,
  showContactModal: f => f,
  hideContactModal: f => f
}

FooterUI.propTypes = {
  isContactModalVisible: PropTypes.bool,
  showContactModal: PropTypes.func,
  hideContactModal: PropTypes.func,
}
