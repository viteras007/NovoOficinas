// React
import React, { Component } from 'react';

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
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";

// CSS
import "../../components/DashBoardNavBar/DashBoardNavBar.css";

export default class Login extends Component {
    
  render() {
    return (
      <div id="top">
      <Navbar inverse collapseOnSelect fixedTop>
        <NavbarHeader>
          <NavbarBrand>
            <Link to="/" className="headerLogo">Username</Link>
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse className="itensText">
          <Nav pullRight>
            <NavDropdown eventKey={1} title="Dieta" id="dieta-dropdown">
              <MenuItem eventKey={1.1}>
                <Link to="/indicadorInst">Buscar Alimento</Link>
              </MenuItem>
              <MenuItem eventKey={1.2}>
              <Link to="/indicadorAno">Alterar Dieta</Link> 
              </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Alimentos" id="alimentos-dropdown">
              <MenuItem eventKey={2.1}>Adicionar</MenuItem>
              <MenuItem eventKey={2.2}>remover</MenuItem>
              <MenuItem eventKey={2.3}>alterar</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Usuário" id="usuario-dropdown">
              <MenuItem eventKey={3.1}>Alterar Senha</MenuItem>
              <MenuItem eventKey={3.2}>Alterar Nome</MenuItem>
              <MenuItem eventKey={3.2}>Alterar Meta</MenuItem>
            </NavDropdown>
            <NavItem className='logoutButton' eventKey={4}><Link to="/sobre">Sair</Link></NavItem>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
    )
  }
}