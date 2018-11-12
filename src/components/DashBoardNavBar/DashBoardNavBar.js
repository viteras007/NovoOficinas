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
    let usuario = JSON.parse(sessionStorage.getItem('user'));    
    return (
      <div id="top">
      <Navbar inverse collapseOnSelect fixedTop>
        <NavbarHeader>
          <NavbarBrand>
            <Link to="/" className="headerLogo">{usuario.name}</Link>            
            {/* para pegar o nome do cara */}
            { /* {JSON.parse(sessionStorage.getItem('user').name)} */}
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse className="itensText">
          <Nav pullRight>
            <NavDropdown eventKey={1} title="Cardápio" id="alimentos-dropdown">
              <MenuItem eventKey={1.1}>
                <Link to="/buscaralimento">Buscar Alimentos</Link>
              </MenuItem>
              <MenuItem eventKey={1.2}>
                <Link to="/adicionaralimento">Adicionar novo Alimento</Link>
              </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Usuário" id="usuario-dropdown">
              <MenuItem eventKey={2.1}>
                <Link to="/alterarsenha">Alterar Senha</Link>
              </MenuItem>
              <MenuItem eventKey={2.2}>
                <Link to="/alterarmeta">Alterar Meta</Link>
              </MenuItem>
            </NavDropdown>
            <NavItem className='logoutButton' eventKey={3}><Link to="/sobre">Sair</Link></NavItem>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
    )
  }
}