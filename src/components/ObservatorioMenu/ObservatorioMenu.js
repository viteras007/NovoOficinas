// React
import React, { Component } from 'react'

// ReactBootstrap
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';

import './ObservatorioMenu.css'
export default class ObservatorioMenu extends Component {
  render() {
    return (
      <div id="top">
        <Navbar inverse collapseOnSelect fixedTop>
          <NavbarHeader>
            <NavbarBrand>
              <a href="/">YoungLife</a>
            </NavbarBrand>
            <NavbarToggle />
          </NavbarHeader>
          <NavbarCollapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/login">Login</NavItem>
              <NavItem eventKey={2} href="/register">Register</NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    )
  }
}
