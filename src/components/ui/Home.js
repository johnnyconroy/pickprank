import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { FacebookLogin } from './FacebookLogin'
import app_1_thumb from '../images/screenshots/app_1_thumb.png'
import app_2_thumb from '../images/screenshots/app_2_thumb.png'
import app_3_thumb from '../images/screenshots/app_3_thumb.png'

export class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			homeClass: 'home-container'
		}
	}
	componentDidMount() {
		setTimeout( () => {
			this.setState({
				homeClass: 'home-container show'
			})}, 200) 	
	}
	render() {
		return (
	        <div className={this.state.homeClass}>
	        	<FacebookLogin authed={this.props.authed}/>
	        	<div id="background-container"></div>
		        <div id="pitchText">
		            <p> <span>Create customizable pranks and send them to your friends! </span> </p>
		        </div>
			    <div id="carousel-container">
			    	<div id="carousel-inner">
						<Carousel>
							<Carousel.Item className='slide'>
								<img alt="app-screenshot-1" src={app_1_thumb}/>
							</Carousel.Item>
							<Carousel.Item className='slide'>
								<img alt="app-screenshot-2" src={app_2_thumb}/>
							</Carousel.Item>
							<Carousel.Item className='slide'>
								<img alt="app-screenshot-3" src={app_3_thumb}/>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
				<div id="purchase">
					<h1><b>Let the troll inside you take over!</b></h1>
					<p><b>It's easy, come come.</b></p>
					<button type="button"></button>
				</div>
	        </div>
		)
	}
}


