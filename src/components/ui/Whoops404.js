import React from 'react'
import PropTypes from 'prop-types'

export const Whoops404 = ({location}) => (
    <div id="whoops-404">
        <h1>Whoops, route not found at "{location.pathname}"</h1>
    </div>
)

Whoops404.defaultProps = {
  location: ""
}

Whoops404.propTypes = {
  location: PropTypes.string
}
