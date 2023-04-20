import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const logoSrc = process.env.PUBLIC_URL + '/jcnfarms-logo-white.png'; 

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="d-flex" style={{ width: "100%" }}>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoSrc}
            width="auto"
            height="30"
            className="d-inline-block align-top"
            alt="Your Company Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Overview</Nav.Link>
            <Nav.Link as={Link} to="/agriculture">Agriculture</Nav.Link>
            <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
            <Nav.Link as={Link} to="/produce">Produce</Nav.Link>
            <Nav.Link as={Link} to="/sustainability">Sustainability</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
