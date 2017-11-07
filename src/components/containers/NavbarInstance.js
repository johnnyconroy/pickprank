import React from 'react'
import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { logout } from '../../helpers/firebaseFunctions'
import logo from '../../images/simple_fuck_logo_right.png'
import profile_pic_placeholder from '../../images/silhouette.jpg'

export const NavbarInstance = ({authed, user}) => (
    <div>
        <Navbar inverse collapseOnSelect className="navbar-fixed-top">
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img id="Logo" src={logo} alt="Logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                {authed === false ?
                    (<div>
                        <Nav pullRight>
                            <LinkContainer to="gallery">
                                <NavItem id="galleryLink" eventKey={1}>Gallery</NavItem>
                            </LinkContainer>
                        </Nav>
                    </div>) :
                    (<div>
                        <Nav pullRight>
                            <NavItem id="navbarItemProfile">
                                <div id="navbarProfile">
                                    {localStorage.accessToken !== "undefined" ?
                                        <img src={`https://graph.facebook.com/me/picture?access_token=${localStorage.accessToken}`}
                                             alt="profile-pic"></img> :
                                        <img src={profile_pic_placeholder} alt="profile-pic"></img>}
                                    <p>{user.displayName.split(" ")[0]}</p>
                                </div>
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/#">
                                <NavItem eventKey={3} onClick = { logout }>Sign Out</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="mypranks">
                                <NavItem id="myPranksLink" eventKey={2}>My Pranks</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="gallery">
                                <NavItem id="galleryLink" eventKey={1}>Gallery</NavItem>
                            </LinkContainer>
                        </Nav>
                    </div>)
                }

            </Navbar.Collapse>
        </Navbar>
    </div>
)

NavbarInstance.defaultProps = {
  authed: false,
  user: {}
}

NavbarInstance.propTypes = {
  authed: PropTypes.bool,
  user: PropTypes.object
}
