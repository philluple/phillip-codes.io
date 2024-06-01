import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Import the CSS file
import './App.css';
import './index.css'; // Import global styles

function CustomNav() {
  return (
    <Navbar className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <a href="#home">
            <img
              src="/logo.svg"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </a>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="nav-link-custom">Work</Nav.Link>
          <Nav.Link href="#link" className="nav-link-custom">Projects</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
