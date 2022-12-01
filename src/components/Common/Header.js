import React from "react";
import "../../assets/styles/components/Header.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomLink from "../../customHooks/CustomLink";
const Header = () => {
  

  return(
  <nav >
    <Navbar className="nav-bar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" > <h1>Movies DB</h1> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-container" >
          <Nav className="me-auto  ">
            
            <CustomLink to="/" label="Home">Home</CustomLink>
            <CustomLink to="/watchlist">WatchList</CustomLink>
            <CustomLink to="/seen">Seen</CustomLink>
            <CustomLink to="/favorites">Favorites</CustomLink>
          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </nav>
  )
};

export default Header;
