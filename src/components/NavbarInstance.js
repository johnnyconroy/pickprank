import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../images/simple_fuck_logo_right.png'

export const NavbarInstance = () => (
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
            <Nav pullRight>
                <LinkContainer to="gallery">
                    <NavItem id="gallery-link" eventKey={1}>Gallery</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
