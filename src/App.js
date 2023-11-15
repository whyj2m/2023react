import { useState } from 'react';
import './App.css'
import { vData, vData1 } from './data.js'

import { Button, Container, Navbar, NavDropdown, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [myData,setMyData] = useState(vData)
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"> Logo </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Company</Nav.Link>
              <Nav.Link href="#link">Product</Nav.Link>
              <Nav.Link href="#link">Board</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='visualWrap mb-2'>
        <Container className='py-5 text-white'>
          <h3>Lorem, ipsum dolor.</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repudiandae.</p>
        </Container>
      </div>

      <Container className='px-0 mb-2 mb-md-5'>
        <div className='text-center mb-3'>
          <h3 className='title dot'> GALLERY </h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <Row>
          {
            myData.map(function(item, i){
              return(
                <>
                  <CardView product={myData[i]}/>
                </>
                //  위에  return <CardView product={myData[i]} /> 로 바로 사용가능.
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function CardView({product}) {
  return (
    <>
      <Col sm={6} md={3} className='mb-2' >
        <Card>
          <Card.Img variant="top" src={`./img/${product.img}`}/>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.Content}
            </Card.Text>
            <Button variant="primary"> 들어가기 </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default App;
