// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import './Home.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// export const Home = () => {
//   return (
//     <header className='toparea'>
//         <Container>
//         <Row>
//             <Col md={5} className='toparea1'>Pinch of Yum</Col>
//             <Col md={7}>
//                 <Navbar expand="lg" className="bg-body-tertiary">
//                     <Container>
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Nav className="me-auto links">
//                                 <Nav.Link href="#home" className='links1'>HOME</Nav.Link>
//                                 <Nav.Link href="#about" className='links1'>ABOUT</Nav.Link>
//                                 <Nav.Link href="#recipes" className='links1'>RECIPES</Nav.Link>
//                                 <Nav.Link href="#start" className='links1'>START HERE</Nav.Link>
//                             </Nav>
//                             <Form className="d-flex links">
//                                 <Form.Control
//                                     type="search"
//                                     placeholder="Search"
//                                     className="me-2"
//                                     aria-label="Search"
//                                     />
//                                 <Button variant="outline-success">Search</Button>
//                             </Form>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//             </Col>
//         </Row>
//         </Container>
//     </header>
    
    

//   )
// }

// export default Home


import React,{useState} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Additem.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{backgroundColor:'#C4E4ED'}}>
        <Modal.Title id="contained-modal-title-vcenter">
          SELECT UNIT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={6}>
              <Form.Label className='base'>Base unit</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Base unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label className='secondary'>Secondary unit</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Secondary unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export const Home = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    
      setIsOn(!isOn);
  };
 
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isOn, setIsOn] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    
      const [show, setShow] = useState(false);
  
    
  return (
     <Container className='head'>
           <Row className='head1'>
             <Col md={3}>
               <h3>Add Item</h3>
             </Col>
             <Col md={1} style={{fontSize:'20px'}}>
               Product
             </Col>
             <Col md={1}><label class="switch">
       <input type="checkbox" onClick={handleToggle} />
       
       <span class="slider round">
       </span>
       
         {isOn ? 'ON' : 'OFF'}
     </label>
             </Col>
             <Col md={1} style={{fontSize:'20px'}}>
               Service
             </Col>
           </Row>
          </Container>
  )
}

export default Home
