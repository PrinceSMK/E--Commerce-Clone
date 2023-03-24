import React from 'react'
import "./Footer.css"
import Container from 'react-bootstrap/Container';




function Footer() {
  return (
    
    
    <>
    
       
       
    <div className="container">
  <footer className="py-5 ms-3">
    <div className="row">
      <div className="col-2">
        <h5>Help</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-5"><a href="#" className="nav-link p-0 text-muted">Shipping</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Returns/Exchange</a></li>

        </ul>
      </div>

      <div className="col-2">
        <ul className="nav flex-column">
          <li className="nav-item mb-4"></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
          
        </ul>
      </div>

      <div className="col-2">
        <h5>Explore</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About us </a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Get the look</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email" />
            <button className="btn btn-dark " type="button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2021 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        
      </ul>
    </div>
  </footer>
</div>
    </>




      
  )
}

export default Footer







