import React from 'react'
import './Cards.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div>



      
    <CardGroup className='conatiner my-5 mt-5'>
      <Card className='me-3 ms-3' >
      <Nav.Link as={Link} to="/sidebar"><Card.Img variant="top" src="/images/img1.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/sidebar" className='ms-5 ' > <Card.Title  className='cardtitle'>{props.title}</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card className='me-3 ms-3'>
      <Nav.Link as={Link} to="/sidebar"><Card.Img variant="top" src="/images/img2.jpg" /></Nav.Link>
        <Card.Body>
          <Nav.Link as={Link} to="/sidebar" className='ms-5 ' > <Card.Title  className='cardtitle'>Wash & Wear</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card className='me-3 ms-3'>
      <Nav.Link as={Link} to="/sidebar"> <Card.Img variant="top" src="/images/img3.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/sidebar"  className='ms-5 ' > <Card.Title  className='cardtitle'>Kurta</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>




    <CardGroup className='conatiner my-5'>
      <Card className='me-3 ms-3' >
      <Nav.Link as={Link} to="/sidebar"><Card.Img variant="top" src="/images/img4.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/sidebar" className='ms-5 '  > <Card.Title className='cardtitle' >Men Shawl</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card className='me-3 ms-3'>
      <Nav.Link as={Link} to="/sidebar"><Card.Img variant="top" src="/images/img5.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/sidebar" className='ms-5 '  > <Card.Title className='cardtitle' >Cotton</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card className='me-3 ms-3'>
      <Nav.Link as={Link} to="/sidebar"><Card.Img variant="top" src="/images/img6.jpg" /></Nav.Link>
        <Card.Body>
        <Nav.Link as={Link} to="/sidebar"  className='ms-5 ' > <Card.Title  className='cardtitle'>Karandi</Card.Title></Nav.Link>
          
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>


    <div className='containernews'>
    <h2 className='Newsletter'>NEWSLETTER</h2>
    <p className='words'>Subscribe our newsletter to get notify about discount and latest update. Don’t worry, we  <br /> spam!</p>
    </div>



      
        
      <InputGroup className='mb-3 inputgroup'>
        <InputGroup.Radio  aria-label="Radio button for following text input" />
        <Form.Control id="formtext" placeholder='E-Mail' aria-label="Text input with radio button" />
      </InputGroup>
  
    






      
    </div>
  )
}

export default Cards
