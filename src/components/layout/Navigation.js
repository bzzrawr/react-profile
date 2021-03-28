import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const navigation = () =>{
    return (
      <div>
        <Navbar id="mainNav" bg="dark" variant="dark" collapseOnSelect fixed="top" expand="md">
          <Container>
          <Navbar.Brand href="#home" margin-left="0px"><div className="logo"></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-toggler navbar-toggler-right collapsed" aria-expanded="false" aria-label="Toggle navigation"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-nav">
              <Nav.Link href="/home" className="js-scroll-trigger">SKILLS</Nav.Link>
              <Nav.Link href="/background" className="js-scroll-trigger">BACKGROUND</Nav.Link>
              <Nav.Link href="/about" className="js-scroll-trigger">ABOUT</Nav.Link>
              <Nav.Link href="/contact" className="js-scroll-trigger">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
}

export default navigation
