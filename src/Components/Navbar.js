import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
  <div className="App">
  <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.Nav className="mr-auto"> 
  <Link to="/Home">
    <ReactBootStrap.Nav.Link href="#Home">HOME</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/CRUD">
    <ReactBootStrap.Nav.Link href="#CRUD">CRUD</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/DatosGlobales">
    <ReactBootStrap.Nav.Link href="#DatosGlobales">DATOS GLOBALES</ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/dankmemes">
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Designed by Diego Bajo
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;