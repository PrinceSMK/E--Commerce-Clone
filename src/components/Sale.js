import React from 'react'
import "./Sale.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useState } from 'react'



function Sale() {

    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }
    
      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }






  return (
    <div>


      <div className="container-fluid">
        <div>
        <h1 className='darkskin'>Dark Skin</h1>
        <s> <p className='rupees'>RS 4,400</p></s>  
        </div>
        <p className='rp'>RS 4,400</p>

        
        <div className='incrementfunction'>
      <button className='decrement' onClick={decrement}>-</button>
      <p className='countnumber'></p> {count}
      <button className='increment' onClick={increment}>+</button>
      <Nav.Link as={Link} to="/form"> <Button className='Salebutton' variant="dark">Buy Now</Button></Nav.Link>

      </div>



      <div className="tags">
      <p>ADD TO WISHLIST</p>
      <p className='atc'>ADD TO COMPARE</p>
      </div>
        <div>
        <img className='saleimage' src="images/img1.jpg" alt="" srcset="" />
        </div>




        <div>
            <h1 className='RelatedProducts'>Related Products</h1>


        <CardGroup className='conatiner my-5'>
      <Card className='me-3 ms-3' >
      <Nav.Link as={Link} to="/form"><Card.Img variant="top" src="/images/img4.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/form" className='ms-5 '  > <Card.Title className='cardtitle cst' >Men Shawl</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card className='me-3 ms-3'>
      <Nav.Link as={Link} to="/form"><Card.Img variant="top" src="/images/img5.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/form" className='ms-5 '  > <Card.Title className='cardtitle cst' >Cotton</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card className='me-3 ms-3'>
      <Nav.Link as={Link} to="/form"><Card.Img variant="top" src="/images/img6.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/form"  className='ms-5 ' > <Card.Title  className='cardtitle cst'>Karandi</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>


    </div>
    </div>

   

        


        
        
        





        </div>
  )
}

export default Sale
