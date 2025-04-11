import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          🛍️  Tienda Soda Stereo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#categoria1">Álbumes de estudio</Nav.Link>
            <Nav.Link href="#categoria2">Ediciones especiales</Nav.Link>
            <Nav.Link href="#categoria3">Merchandising</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
