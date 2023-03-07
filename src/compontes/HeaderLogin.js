import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

function HeaderLogin() {
  return (

    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img src= {logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">تسجيل الدخول</Nav.Link>
          <Nav.Link href="#">التسجيل </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default HeaderLogin