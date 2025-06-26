import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Additem.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='title'>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Unit
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
function MydModalWithGrid(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='title'>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Add new category</Form.Label>
                  <Form.Control type="number" placeholder="Enter invoice number" />
                </Form.Group>
              </Form>
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

export const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
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
    {isOn ? 'ON' : 'OFF'}
  </span>
</label>
        </Col>
        <Col md={1} style={{fontSize:'20px'}}>
          Service
        </Col>
      </Row>
      <Form>
        <Row className='head2'>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Service name" required className='from' />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Service HSN" required className='from' />
            </Form.Group>
          </Col>
          <Col md={2} className='from1'>
            <>
              <Button onClick={() => setModalShow(true)}>
                SELECT UNIT
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </Col>
          <Col md={4} className='from2'>
            <p><Link to="/additem">Add item image</Link></p>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="file" placeholder="Add image" required className='from' />
                    </Form.Group> */}
          </Col>
        </Row>
        <Row className='head5'>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Default select example" className='from'>
                <option>Category</option>
                <option>
                  {/* <Button onClick={() => setModalShow(true)}>Add new category</Button>
                            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} /> */}
                </option>
              </Form.Select>
            </Form.Group>

          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Service Code" required className='from' />
            </Form.Group>
          </Col>
        </Row>
        <Row className='head3'>
          <Col md={1} className='price'>
            <p><Link to="">Pricing</Link></p>
          </Col>
          <Col md={10}></Col>
        </Row>
        <Row className='sale'>
          <Col md={6} className='sale1'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sale price</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" placeholder='sale price' />
                        <Form.Select aria-label="Default select example">
                          <option value="1">With tax</option>
                          <option value="2">Without tax</option>
                        </Form.Select>
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" placeholder='Disc on sale price' />
                        <Form.Select aria-label="Default select example">
                          <option value="1">Percentage</option>
                          <option value="2">Amount</option>
                        </Form.Select>
                      </InputGroup>

                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6} className='sale1'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Wholesale price</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" placeholder='Wholesale price' />
                        <Form.Select aria-label="Default select example">
                          <option value="1">With tax</option>
                          <option value="2">Without tax</option>
                        </Form.Select>
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <Form.Control aria-label="Text input with dropdown button" placeholder='Minimum wholesale quantity' />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className='sale'>
          <Col md={6} className='sale1'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Taxes</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={6}>
                      <Form.Select aria-label="Default select example">
                        <option>Tax rate</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col className='save'>
            <Button variant="outline-secondary" size="lg" disabled>
              Save & new
            </Button>
            <Button href="#" variant="secondary" size="lg" disabled className='link'>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Service




{/* <Row className='price1'>
            <Col>
                <Row className='price2'>
                    <Col>
                        <p>Sale Price</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" placeholder='sale price'/>
                        <Form.Select aria-label="Default select example">
                          <option value="1">With tax</option>
                          <option value="2">Without tax</option>
                        </Form.Select>
                      </InputGroup>
                    </Col>
                    <Col md={3}>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" placeholder='Disc on sale price'/>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Percentage</option>
                          <option value="2">Amount</option>
                        </Form.Select>
                      </InputGroup>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                  <Col md={6}>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>Wholesale price</Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Col md={6}>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button" placeholder='Wholesale price'/>
                        <Form.Select aria-label="Default select example">
                          <option value="1">With tax</option>
                          <option value="2">Without tax</option>
                        </Form.Select>
                      </InputGroup>
                                </Col>
                                <Col md={6}>
                                  <Form.Control aria-label="Text input with dropdown button" placeholder='Minimum wholesale quantity'/>
                                </Col>
                              </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                  </Col>
                </Row>
            </Col>
        </Row> */}