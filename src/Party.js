import React from 'react'
import "./Party.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Party = () => {
  return (
    <Container className='party'>
      <Form>
        <Row className='heading'>
          <Col>
            <h3>Add Party</h3>
          </Col>
        </Row>
        <Row className='heading1'>
          <Col md={4}>
            <Form.Control type="name" placeholder="Party name" />
          </Col>
          <Col md={4}>
            <Form.Control type="phone" placeholder="Phone number" />
          </Col>
          <Col md={4}>
            <Form.Control type="gst" placeholder="GSTIN" />
          </Col>
        </Row>
        <Row className='heading2'>
          <Col md={3}>
            <p>GST & Address</p>
          </Col>
          <Col md={3}>
            <p>Credit & Balance</p>
          </Col>
          <Col md={3}>
            <p>Additional Fields</p>
          </Col>
        </Row>
        <Row className='heading3'>
          <Col md={4} className='heading4'>
            <Form.Select aria-label="Default select example" className='form'>
              <option>GST Type</option>
              <option value="1">Unregistered Consumer</option>
              <option value="2">Registered Business-Regular</option>
              <option value="3">Registered Business-Composition</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className='form'>
              <option>State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control type="email" placeholder="Email" className='form'/>
          </Col>
          <Col md={4}>
              <Form.Control as="textarea" rows={3} placeholder='Billing Address'/>
          </Col>
          <Col md={4}>
              <Form.Control as="textarea" rows={3} placeholder='Shipping Address'/>
          </Col>
        </Row>
        <Row className='heading5'>
          <Col>
            <Button variant="outline-primary">Save & New</Button>
            <Button variant="primary" className='but'>Save</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Party
