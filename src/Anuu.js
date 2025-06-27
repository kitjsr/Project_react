import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Anuu.css";

export const Anuu = () => {
  return (
    <Container className='an'>
      <Row>
        <Col md={3} className='box'>Hello</Col>
        <Col md={3} className='box'></Col>
        <Col md={3} className='box'></Col>
        <Col md={3} className='box'></Col>
      </Row>
    </Container>
  )
}

export default Anuu