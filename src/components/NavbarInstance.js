import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import logo from '../images/simple_fuck_logo_right.png'

const NavbarInstance = () => (
  <Navbar inverse collapseOnSelect className="navbar-fixed-top">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          <img id="Logo" src={logo} alt="Logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Gallery</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;
