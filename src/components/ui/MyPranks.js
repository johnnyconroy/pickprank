import React from 'react'
import PropTypes from 'prop-types'
import { MaterialLoader } from './MaterialLoader'

export const MyPranks = ({myPranksURLs, authed}) => {
	let listComponent = <div className="gallery-loader"><MaterialLoader /></div>
	const thumbnails = myPranksURLs.thumbnails
	if (thumbnails !== undefined && thumbnails.length > 0 ) {
		listComponent = thumbnails.map( (url, index) => (
			<li key={index}>
				<img src={url} alt="my_prank"></img>
			</li>
		))
	}

	return(
        <div>
            <p className="dummyTitle"> My Pranks </p>
            <ul className="gallery-list">{listComponent}</ul>
        </div>
	)
}

MyPranks.defaultProps = {
  myPranksURLs: {},
  authed: false,
}

MyPranks.propTypes = {
  myPranksURLs: PropTypes.object,
  authed: PropTypes.bool,
}
