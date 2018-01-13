import React from 'react'
import PropTypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { logout } from '../../helpers/firebaseFunctions'
import logo from '../../images/simple_fuck_logo_right.png'
import { Profile } from './Profile'

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
            <div id="navbarProfileMobile">
                <Profile user={user}/>
            </div>
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
                                    <Profile user={user}/>
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
