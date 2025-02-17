import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Handyman_Logo.svg'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className='csnav-link'>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className='csnav-link'>About</Nav.Link>
          <Nav.Link as={Link} to="/services" className='csnav-link'>Services</Nav.Link>
          <Nav.Link as={Link} to="/contact" className='csnav-link'>Contact</Nav.Link>
          <Nav.Link as={Link} to="/register" className='csnav-link'>Register</Nav.Link>
            <Nav.Link as={Link} to="/login" className='csnav-link-orangebtn'>Login</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
