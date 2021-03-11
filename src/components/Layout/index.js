import React from "react";
import { Container } from "react-bootstrap";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Header from "../Header/index";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default Layout;
