import React from 'react'
import PropTypes from 'prop-types'
import profile_pic_placeholder from '../../images/silhouette.jpg'

export const Profile = ({user}) => (
    (localStorage.accessToken !== "undefined" && user != null) ?
        (<div className="profileContainer">
            <img src={`https://graph.facebook.com/me/picture?access_token=${localStorage.accessToken}`}
             alt="profile-pic"></img>
             <p>{user.displayName.split(" ")[0]}</p>
         </div>) :
         <img src={profile_pic_placeholder} alt="profile-pic"></img>
)

Profile.defaultProps = {
  user: {}
}

Profile.propTypes = {
  user: PropTypes.object
}
