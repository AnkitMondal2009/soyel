import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css";
export default function CustomNavbar(props) {
  return (
    <Navbar bg={props.mode}   variant={props.mode} expand="lg" style={{ position: "fixed", width: "100%", height: "60px",backgroundColor:"white"  }}>
      <Container>
        <Link className="navbar-brand" to="/"><img src={props.logo} height="20px" width="20px" alt="ankit" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/">{props.text1}</Nav.Link>
            <Nav.Link as={Link} to={props.link2}>{props.text2}</Nav.Link>
            <Nav.Link as={Link} to={props.link3}>{props.text3}</Nav.Link>
            <Nav.Link as={Link} to={props.link4}>{props.text4}</Nav.Link>
          </Nav>
          <Form className="d-flex">
             
            <FormControl type="search" placeholder="Search" aria-label="Search" list="input" className="mr-2" />
            <datalist id="input">
              <option value="contact">Contact</option>
              <option value="students">Students</option>
              <option value="html">Learn Html</option>
              <option value="css">Learn Css</option>
              <option value="js">Learn JS</option>
              {/* ... other options ... */}
            </datalist>
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
