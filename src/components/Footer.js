import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
 

export class Footer extends Component {
	constructor() {
		super()
		this.state = {
			show: false
		}
		this.close=this.close.bind(this)
		this.open=this.open.bind(this)
	}
	close() {
		this.setState({show: false})
	}
	open() {
		this.setState({show: true})
	}
	render() {
		return(
			<div className="modal-container" style={{height: 200}}>
				<div id="contact-button">
				<Button
					bsStyle="primary"
					bsSize="sm"
					onClick={this.open}
				>
					Contact
				</Button>
				</div>

				<Modal
					show={this.state.show}
					onHide={this.close}
					container={this}
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
		                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.close}>Close</button>
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
	}      
}