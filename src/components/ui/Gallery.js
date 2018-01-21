import React from 'react'
import PropTypes from 'prop-types'
import { FacebookLogin } from './FacebookLogin'
import { MaterialLoader } from './MaterialLoader'

export const Gallery = ({galleryURLs, authed, requestSignIn}) => {
	let listComponent = <div className="gallery-loader"><MaterialLoader /></div>
	const thumbnails = galleryURLs.thumbnails
	if (thumbnails !== undefined && thumbnails.length > 0 ) {
		listComponent = thumbnails.map( (url, index) => (
			<li key={index}>
				<img src={url} alt="gallery"></img>
			</li>
		))
	}

	return(
        <div>
        	<FacebookLogin authed={authed} requestSignIn={requestSignIn}/>
            <p className="dummyTitle"> Gallery Pics</p>
            <ul className="gallery-list">{listComponent}</ul>
        </div>
	)
}

Gallery.defaultProps = {
  galleryURLs: {},
  authed: false,
  requestSignIn: f => f
}

Gallery.propTypes = {
  galleryURLs: PropTypes.object,
  authed: PropTypes.bool,
  requestSignIn: PropTypes.func
}
