import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Admin Dashbord</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Dashbord
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
              <li className="nav-item">
                <NavLink to="/signin" className="nav-link">
                  SignIn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">
                  SignUp
                </NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
