import './Navbar.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navvbar() {
  return (
    <div>
      
      


    <Navbar bg="light" color='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"} ><b>Bin Yousaf</b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"about"}>About Us</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Nav.Link as={Link} to={"/crud"}>CRUD</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Nav.Link as={Link} to={"/context"}>Context API</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Nav.Link as={Link} to={"/reducer"}>Use Reducer</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Nav.Link as={Link} to={"/callback"}>CallBack</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  







    </div>
  )
}

export default Navvbar
