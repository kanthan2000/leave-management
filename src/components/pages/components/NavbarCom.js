import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

class NavbarCom extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Iconio Technology Private Limited</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  as={Link} to ={"/home"}>Home</Nav.Link>
      <Nav.Link  as={Link} to ={"/about"}>About Us</Nav.Link>
      <Nav.Link  as={Link} to ={"/contact"}>Contact Us</Nav.Link>
      <NavDropdown title="Features" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Services</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Blogs</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Careers</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"> Log In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
 <div>
<Switch>
      <Route path="/About">
             <About />
      </Route>
      <Route path="/Home">
              <Home />
      </Route>                      
      <Route path="/Contact">
              <Contact />
      </Route>
</Switch>                           
</div>
                                    </Router>
        );
    }
}

export default NavbarCom;