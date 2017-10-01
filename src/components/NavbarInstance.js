import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../images/simple_fuck_logo_right.png'

export class NavbarInstance extends Component {
    componentWillMount() {
        console.log("Component will mount")
    }

    componentWillUpdate() {
        console.log("Component will update")
    }

    render() {
        return (
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
    }
}
