import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';









function Headerr() {
 
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 
 
    return (
    
<>

        <Button  variant="outline-success" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body> */}

<Offcanvas.Header closeButton className="offcanvas-lg fluid d-flex flex-column">
<Offcanvas.Body className="d-flex flex-column">
<Navbar bg="light" expand="lg" >
      <Container  className="  d-flex flex-column"  >
        <Navbar.Brand href="#" >Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex flex-column"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="d-flex flex-column">Home</Nav.Link>
            <Nav.Link href="#action2" className="d-flex flex-column">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" className="d-flex flex-column">
              <NavDropdown.Item href="#action3" className="d-flex flex-column">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="d-flex flex-column">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          
          {/* <Form className=" mt-5 d-flex flex-column align-items-end">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2 d-flex flex-column "
              aria-label="Search"
            />
            <Button className="d-flex flex-column  " variant="outline-primary">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Offcanvas.Body>
    </Offcanvas.Header>
 




        
      </Offcanvas>



       </>
  );
}

export default Headerr;