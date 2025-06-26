import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Additem.css";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{ backgroundColor: "#C4E4ED" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          SELECT UNIT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={6}>
              <Form.Label className="base">Base unit</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Base unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label className="secondary">Secondary unit</Form.Label>
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

export const Additem = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  const { Formik } = formik;
  
    const schema = yup.object().shape({
      itemName: yup.string().required(),
      itemHsn: yup.number().required(),
      itemCode: yup.number().required(),
      sale: yup.number().required(),
      disale: yup.number().required(),
      wholesale: yup.number().required(),
      minqty: yup.number().required(),
      purchase: yup.number().required(),
    });
  return (
    <Container className="head">
      <Row className="head1">
        <Col md={3}>
          <h3>Add Item</h3>
        </Col>
        <Col md={1} style={{ fontSize: "20px" }}>
          Product
        </Col>
        <Col md={1}>
          <label class="switch">
            <input type="checkbox" onClick={handleToggle} />

            <span class="slider round"></span>

            {isOn ? "ON" : "OFF"}
          </label>
        </Col>
        <Col md={1} style={{ fontSize: "20px" }}>
          Service
        </Col>
      </Row>
      <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              itemName : "",
              itemHsn : "",
              itemCode : "",
              sale : "",
              disale : "",
              wholesale : "",
              minqty : "",
              purchase : "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="head2">
              <Col md={3}>
                <Form.Group
                  className="mb-3"
                  controlId="validationFormik04"
                >
                  <Form.Control
                    type="text"
                    placeholder="Item name"
                        name="itemName"
                        value={values.itemName}
                        onChange={handleChange}
                        isValid={touched.itemName && !errors.itemName}

                        isInvalid={!!errors.itemName}
                  />
                  <Form.Control.Feedback type="invalid">
                                          {errors.itemName}
                                        </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group
                  className="mb-3"
                  controlId="validationFormik04"
                >
                  <Form.Control
                    type="number"
                    placeholder="Item HSN"
                    className="from"
                    
                        value={values.itemHsn}
                        name="itemHsn"
                        onChange={handleChange}
                        isValid={touched.itemHsn && !errors.itemHsn}

                        isInvalid={!!errors.itemHsn}
                  />
                  <Form.Control.Feedback type="invalid">
                                          {errors.itemHsn}
                                        </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={2} className="from1">
                <>
                  <Button onClick={() => setModalShow(true)}>
                    SELECT UNIT
                  </Button>
                  <MydModalWithGrid
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </>
              </Col>
              <Col md={4} className="from2">
                <p>
                  <Link to="/additem">Add item image</Link>
                </p>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="file" placeholder="Add image" required className='from' />
                    </Form.Group> */}
              </Col>
            </Row>
            <Row className="head5">
              <Col md={3}>
                <>
                  <Button
                    onClick={handleShow}
                    className="category"
                    style={{
                      color: "#626163",
                      textAlign: "left",
                      borderColor: "white",
                    }}
                  >
                    Add Category
                  </Button>
                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header
                      closeButton
                      style={{ backgroundColor: "#C4E4ED" }}
                    >
                      <Modal.Title>Add Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Container>
                        <Row>
                          <Col>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Add new category</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter category"
                                />
                              </Form.Group>
                            </Form>
                          </Col>
                        </Row>
                      </Container>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleClose}>
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/* <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} /> */}
                </>
              </Col>
              <Col md={3}>
                <Form.Group
                  className="mb-3"
                  controlId="validationFormik04"
                >
                  <Form.Control
                    type="number"
                    placeholder="Item Code"
                    className="from"
                        value={values.itemCode}
                        name="itemCode"
                        onChange={handleChange}
                        isValid={touched.itemCode && !errors.itemCode}

                        isInvalid={!!errors.itemCode}
                  />
                  <Form.Control.Feedback type="invalid">
                                          {errors.itemCode}
                                        </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="head3">
              <Col md={1} className="price">
                <p>
                  <Link to="">Pricing</Link>
                </p>
              </Col>
              <Col md={1} className="stock">
                <p>
                  <Link to="/stock">Stock</Link>
                </p>
              </Col>
              <Col md={10}></Col>
            </Row>
            <Row className="sale">
              <Col md={6} className="sale1">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Sale price</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col md={6}>
                          <InputGroup className="mb-3" 
                  controlId="validationFormik04">
                            <Form.Control
                              aria-label="Text input with dropdown button"
                              placeholder="sale price"
                        value={values.sale}
                        name="sale"
                        onChange={handleChange}
                        isValid={touched.sale && !errors.sale}

                        isInvalid={!!errors.sale}
                  />
                  <Form.Control.Feedback type="invalid">
                                          {errors.sale}
                                        </Form.Control.Feedback>
                            <Form.Select aria-label="Default select example">
                              <option value="1">With tax</option>
                              <option value="2">Without tax</option>
                            </Form.Select>
                          </InputGroup>
                        </Col>
                        <Col md={6}>
                          <InputGroup className="mb-3" 
                  controlId="validationFormik04">
                            <Form.Control
                              aria-label="Text input with dropdown button"
                              placeholder="Disc on sale price"
                        value={values.disale}
                        name="disale"
                        onChange={handleChange}
                        isValid={touched.disale && !errors.disale}

                        isInvalid={!!errors.disale}
                  />
                  <Form.Control.Feedback type="invalid">
                                          {errors.disale}
                                        </Form.Control.Feedback>
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
              <Col md={6} className="sale1">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Wholesale price</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col md={6}>
                          <InputGroup className="mb-3" 
                  controlId="validationFormik04">
                            <Form.Control
                              aria-label="Text input with dropdown button"
                              placeholder="Wholesale price"
                        value={values.wholesale}
                        name="wholesale"
                        onChange={handleChange}
                        isValid={touched.wholesale && !errors.wholesale}

                        isInvalid={!!errors.wholesale}
                  />
                  <Form.Control.Feedback type="invalid">
                                          {errors.wholesale}
                                        </Form.Control.Feedback>
                            <Form.Select aria-label="Default select example">
                              <option value="1">With tax</option>
                              <option value="2">Without tax</option>
                            </Form.Select>
                          </InputGroup>
                        </Col>
                        <Col md={6}>
                          <Form.Control
                            aria-label="Text input with dropdown button"
                            placeholder="Minimum wholesale quantity"
                          />
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            <Row className="sale">
              <Col md={6} className="sale1">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Purchase price</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col md={6}>
                          <InputGroup className="mb-3" 
                  controlId="validationFormik04">
                            <Form.Control
                              aria-label="Text input with dropdown button"
                              placeholder="Purchase price"
                        value={values.purchase}
                        name="purchase"
                        onChange={handleChange}
                        isValid={touched.purchase && !errors.purchase}

                        isInvalid={!!errors.purchase}
                  />
                  <Form.Control.Feedback type="invalid">
                                          {errors.purchase}
                                        </Form.Control.Feedback>
                            <Form.Select aria-label="Default select example">
                              <option value="1">With tax</option>
                              <option value="2">Without tax</option>
                            </Form.Select>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col md={6} className="sale1">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Taxes</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col md={6}>
                          <Form.Select
                            aria-label="Default select example"
                          >
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
              <Col className="save">
                <Button type="submit">Save</Button>
              </Col>
            </Row>
          </Form>
            )}
          </Formik>
    </Container>
  );
};

export default Additem;

{
  /* <Row className='price1'>
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
        </Row> */
}
