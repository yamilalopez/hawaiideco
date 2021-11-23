import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../img/logo.jpeg";
//import "../Navbar/Navbar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} className="imgNav" alt="cuadros"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link bg="dark" variant="dark">
              {" "}
              <Link to={"/"} className="link">
                {" "}
                Inicio{" "}
              </Link>{" "}
            </Nav.Link>
            <NavDropdown title="deco" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/categorias/almohadones"> Almohadones </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categorias/floreros"> Floreros/Jarrones </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;