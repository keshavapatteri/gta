// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import '../Header.css';



// function Header() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
         
//         <Navbar.Brand href="#home">Keshavapatteri M</Navbar.Brand>
//           <Navbar.Brand href="#home">Home</Navbar.Brand>
//           <Nav className="me-auto">
   
// <Nav.Link as={Link} to={"/contact"} >Contact</Nav.Link>
// <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
// <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
// <Nav.Link as={Link} to={'/services'}>Services</Nav.Link>

//           </Nav>
   

//         </Container>
//       </Navbar>
//       <br />
     
      
//     </>
//   );
// }

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


