import React from 'react'
import "./Sidebar.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div>





    <>
  

      <div className='container-fluid'>
    <Accordion defaultActiveKey="0" className='accordion item' >
      <Accordion.Item eventKey="0">
        <Accordion.Header > <b>Boski</b> </Accordion.Header>
        <Accordion.Body>
          Designs
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='items'><b>Boski</b></Accordion.Header>
        <Accordion.Body>
          Link
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
 

    <Accordion defaultActiveKey="0" className='accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <b>Boski</b></Accordion.Header>
        <Accordion.Body>
          Home
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <b>Boski</b></Accordion.Header>
        <Accordion.Body>
          Link
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>





    <div className="container-fluid">
    <div className="card-group">
  <div className="card sidebarcardmain ">
  <Nav.Link as={Link} to={"/sale"}> <img src="/images/img1.jpg" className="card-img-top sidebarimages" alt="..." /></Nav.Link> 
    <div className="card-body sidebartext">
    <Nav.Link as={Link} to={"/sale"}> <u><h5 className="card-title"    >Chocolate</h5></u> </Nav.Link> 
    </div>
    
  </div>
  <div className="card sidebarcardmain">
  <Nav.Link as={Link} to={"/sale"}><img src="/images/img2.jpg" className="card-img-top sidebarimages" alt="..." /></Nav.Link> 
    <div className="card-body sidebartext">
    <Nav.Link as={Link} to={"/sale"}> <u><h5 className="card-title"    >Dark Skin</h5></u></Nav.Link> 
    </div>
    
  </div>
  <div className="card sidebarcardmain">
  <Nav.Link as={Link} to={"/sale"}> <img src="/images/img3.jpg" className="card-img-top sidebarimages" alt="..." /></Nav.Link> 
    <div className="card-body sidebartext">
    <Nav.Link as={Link} to={"/sale"}> <u><h5 className="card-title"    >Khaki</h5></u> </Nav.Link> 
    </div>
    
  </div>
</div>


<br />
<div className="card-group">
  <div className="card sidebarcardmain2 mb-5">
  <Nav.Link as={Link} to={"/sale"}> <img src="/images/img4.jpg" className="card-img-top sidebarimages" alt="..." /></Nav.Link> 
    <div className="card-body sidebartext">
    <Nav.Link as={Link} to={"/sale"}> <u><h5 className="card-title"    >Lavish Pink</h5></u> </Nav.Link> 
    </div>
    
  </div>
  <div className="card sidebarcardmain2 mb-5">
   <Nav.Link as={Link} to={"/sale"}> <img src="/images/img5.jpg" className="card-img-top sidebarimages" alt="..." /></Nav.Link> 
    <div className="card-body sidebartext">
    <Nav.Link as={Link} to={"/sale"}> <u><h5 className="card-title"    >White</h5></u> </Nav.Link> 
    </div>
    
  </div>
  <div className="card sidebarcardmain2 mb-5">
  <Nav.Link as={Link} to={"/sale"}> <img src="/images/img6.jpg" className="card-img-top sidebarimages" alt="..." /></Nav.Link> 
    <div className="card-body sidebartext">
    <Nav.Link as={Link} to={"/sale"}> <u><h5 className="card-title"    >Woody Brown</h5></u> </Nav.Link> 
    </div>
    
  </div>
</div>
</div>












      
    </>
 



    



      
        
      





      
    </div>
  )
}

export default Sidebar







