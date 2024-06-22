import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { ReactNode } from "react";
import '../css/Navbar.css';
import '../css/App.css';
import '../css/index.css';
import { Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

// function CustomLink({ to, children, ...props }: CustomLinkProps) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }

// function CustomNav() {
//   return (
//     <Navbar className="custom-navbar">
//       <Container>
//         <Navbar.Brand href="#home">
//           <a href="/">
//             <img
//               src="./logo-1.svg"
//               height="40"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//             />
//           </a>
//         </Navbar.Brand>
//         <Nav className="ml-auto">
//           <Nav.Link href="/experience" className="nav-link-custom">WORK</Nav.Link>
//           <Nav.Link href="#link" className="nav-link-custom">PROJECTS</Nav.Link>
//           <Nav.Link href="#about" className="nav-link-custom">CONTACT</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNav;
