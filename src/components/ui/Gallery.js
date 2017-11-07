import React from 'react'
import { FacebookLogin } from './FacebookLogin'
import PropTypes from 'prop-types'
import { MaterialLoader } from './MaterialLoader'

export const Gallery = ({URLs, authed}) => {
	
	let listComponent = <div id="gallery-loader"><MaterialLoader /></div>
	const thumbnails = URLs.thumbnails
	if (thumbnails !== undefined && thumbnails.length > 0 ) {
		listComponent = thumbnails.map( (url, index) => (
			<li key={index}>
				<img src={url} alt="gallery"></img>
			</li>
		))
	} 

	return(
        <div>
        	<FacebookLogin authed={authed}/>
            <p className="dummyTitle"> Gallery </p>
            <ul id="gallery-list">{listComponent}</ul>
        </div>
	)
}

Gallery.defaultProps = {
  URLs: {}
}

Gallery.propTypes = {
  URLs: PropTypes.object
}

