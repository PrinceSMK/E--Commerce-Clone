import React from 'react'
import './Form.css'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { useState, useRef } from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';





function Forms() {
  

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target)
      
  };
  
  
  
  return (
    <div>



<div className='mt-5'>
      {[
        'secondary',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Returning customer? 
          <Alert.Link href="#"> Click here to login</Alert.Link>
        </Alert>
      ))}
    </div>
      


    <div className='mt-3'>
      {[
        'secondary',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Have a coupon? 
          <div ref={ref} className='buttonpopover'>
      <Button  onClick={handleClick}>Click here to enter your code</Button>

      <Overlay
        show={show}
        target={target}
        placement="right"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3" className='PopoverHeading'>If you have a coupon code, please apply it below.</Popover.Header>
          <Popover.Body>
            <strong>
            <div class="row g-3">
            <div class="col">
            <input type="number" class="form-control" placeholder="Coupon Number" aria-label="First name" />
            </div>
            </div>
           </strong> 
          <Button variant="outline-dark" className='mt-3 couponbutton'>Apply Coupon</Button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>



        </Alert>
      ))}
    </div>


            <h1 className='billingdetails'>Billing details</h1>

    <div className="row g-3">
  <div className="col">
    <input type="text" className="form-control firstname mt-5 py-3 formfield" placeholder="First name" aria-label="First name" />
  </div>
  <div className="col mb-3">
    <input type="text" className="form-control lastname mt-5 py-3 formfield" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>




    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label mx-3 mb-2">Company name (optional)</label>
  <input type="email" className="form-control mx-3 mb-2 py-3 formfield " id="exampleFormControlInput1"  />
</div>



    <div className="mx-4 mb-2">Countries</div>
    <Form.Select className="mb-3 mx-3 py-3 formfield" aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Pakistan</option>
      <option value="2">Iran</option>
      <option value="3">Australia</option>
      <option value="4">India</option>
      <option value="5">Afghanistan</option>
      <option value="6">Sri Lanka</option>
      <option value="7">Germany</option>
      <option value="8">Europe</option>
      <option value="9">Canada</option>
    </Form.Select>


    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label mx-4 mb-2 ">Street address</label>
  <input type="email" className="form-control mb-3 mx-3 py-3 formfield" id="exampleFormControlInput1" placeholder="House number and street name" />
</div>

<div className="mb-3">
  <input type="email" className="form-control mb-3 mx-3 py-3 formfield" id="exampleFormControlInput1" placeholder="Apartment, suite, unit, etc. (optional)" />
</div>



<div className="mx-4 mb-2">State</div>
<Form.Select className="mb-3 mx-3 py-3 formfield" aria-label="Default select example" >State
      <option className="mx-3 formfield">State</option>
      <option value="1">Lahore</option>
      <option value="2">Islamabad</option>
      <option value="3">Peshawar</option>
      <option value="4">Faisalabad</option>
      <option value="5">Quetta</option>
      <option value="6">Karachi</option><option value="1">Pa</option>
      <option value="7">Sialkot</option>
      <option value="8">Rawapindi</option>

    </Form.Select>


    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label mx-4 mb-2">Postalcode / ZIP</label>
  <input type="email" className="form-control mb-3 mx-3 py-3 formfield" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label mx-4 mb-2">Phone #</label>
  <input type="number" className="form-control mb-3 mx-3 py-3 formfield" id="exampleFormControlInput1" placeholder="0300-123456789" />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label mx-4 mb-2">E-mail address</label>
  <input type="email" className="form-control mb-3 mx-3 py-3 formfield" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>


    <Form className='mx-4 mb-2' >
      {['checkbox'].map((type) => (
        <div key={`Ship to a different address?-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Ship to a different address? ${type}`}
          />
        </div>
      ))}
    </Form>




    <Form.Group className="mb-3 mx-3 py-3 formfield" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Order notes (optional)</Form.Label>
        <Form.Control as="textarea" placeholder="Notes about your order, e.g. special notes for delivery." rows={3} />
      </Form.Group>


              <div className="mainform">
      <div >
        <h1 className="yourorder">Your Order</h1>

      <ul className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start listwidths">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Product</div>
      Boski    </div>
    <span className="badge bg-dark rounded-pill">RS 2000</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start listwidths">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Shipping	</div>
      Flat-Rate
    </div>
   <span className="badge bg-dark rounded-pill"> RS 200</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start listwidths">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Total</div>
      Total Payable
    </div>
    <span className="badge bg-dark rounded-pill">RS 2200</span>
  </li>
</ul>


<Form className='mx-4 mb-5 mt-5' >
      {['radio'].map((types) => (
        <div key={`Ship to a different address?-${types}`} className="mb-3">
          <Form.Check 
            type={types}
            id={`default-${types}`}
            label={`Cash on delivery ${types}`}
          />
        </div>
      ))}
    </Form>


    <p className='textformlast'>Pay with cash upon delivery.</p>
    <p className='textformlast'>Your personal data will be used to process your order, support <br /> your experience throughout this website, and for other <br /> purposes described in our privacy policy.</p>
    
    <Nav.Link as={Link} to="/" > <Button variant="dark" className='formplaceorderbutton'>PLACE ORDER</Button></Nav.Link>
    </div>
    </div>








    </div>
  )
}

export default Forms
