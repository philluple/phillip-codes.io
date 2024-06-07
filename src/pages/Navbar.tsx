import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/Navbar.css';
import '../css/App.css';
import '../css/index.css';

function CustomNav() {
  return (
    <Navbar className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <a href="/">
            <img
              src="./logo-1.svg"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </a>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/experience" className="nav-link-custom">WORK</Nav.Link>
          <Nav.Link href="#link" className="nav-link-custom">PROJECTS</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
