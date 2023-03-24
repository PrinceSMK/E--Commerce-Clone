import React from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';



function Caraousel() {
  return (
    <div>
      

    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 Carouselimages"
          src="/images/img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to my Site</h3>
          <p>The Best Selling Platform is right here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 Carouselimages"
          src="/images/img2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Welcome to my Site</h3>
          <p>The Best Selling Platform is right here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 Carouselimages"
          src="/images/img3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Welcome to my Site</h3>
          <p>
          The Best Selling Platform is right here
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






    </div>
  )
}

export default Caraousel
