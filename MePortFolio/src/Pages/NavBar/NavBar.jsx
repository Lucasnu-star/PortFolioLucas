import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className='' expand="lg">
      {/* Reemplaza el texto con la imagen y las clases de Tailwind */}
      <Navbar.Brand href="#home">
        <img
          src="./public/d.jpg"  // Sustituye con la ruta correcta de tu imagen
          alt="Logo"
          className="w-[150px] h-auto rounded-sm"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;