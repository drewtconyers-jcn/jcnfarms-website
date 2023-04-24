import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src="./images/jcnfarms-logo-white.png"
          width="auto"
          height="30"
          className="d-inline-block align-top"
          alt="JCN Farms"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ alignItems: 'center' }}>
          <Nav.Link as={Link} to="/">Overview</Nav.Link>
          <Nav.Link as={Link} to="/agriculture">Agriculture</Nav.Link>
          <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
          <Nav.Link as={Link} to="/produce">Produce</Nav.Link>
          <Nav.Link as={Link} to="/sustainability">Sustainability</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
