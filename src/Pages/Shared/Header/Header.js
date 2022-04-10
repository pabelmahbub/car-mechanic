import React from 'react';
import {Navbar,Container,Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {HashLink} from 'react-router-hash-link'

function Header() {
    const {user,logOut} =useAuth();
  return (
    <>
    <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand href="#home">24/7 Car Mechanic</Navbar.Brand>

      <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
        
        {user?.email ?
            <Button onClick={logOut}variant='light'>Log Out</Button>:
            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
        }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>


     
      </Container>
    </Navbar>
    <br />
    
    
  </>
  )
}

export default Header