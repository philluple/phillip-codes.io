import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import '../css/Navbar.css'; // Import the CSS file
import '../css/App.css';
import '../css/index.css'; // Import global styles

function CustomNav() {
  return (
    <Navbar className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <a href="#home">
            <img
              src="./logo-1.svg"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </a>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="nav-link-custom">WORK</Nav.Link>
          <Nav.Link href="#link" className="nav-link-custom">PROJECTS</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
