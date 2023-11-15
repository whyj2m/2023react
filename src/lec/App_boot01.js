import { useState } from 'react';
import './App.css'
import { vData, vData1 } from '../data.js'

import { Button, Container, Navbar, NavDropdown, Nav, Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
        <h3 className='text-center'> GALLERY </h3>
        <Row>
          <Col sm={6} md={3} lg={6} className='mb-2' >
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={6} >
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={6} >
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={6} className='d-none d-md-block'>
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className='contentWrap01 py-2 py-md-5'>
      <Container className='px-0'>
        <h3 className='text-center'> GALLERY </h3>
        <Row>
          <Col sm={6} md={3} lg={6} className='mb-2' >
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={6} >
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={6} >
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={3} lg={6}>
            <Card>
              <Card.Img variant="top" src="./img/ham.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
