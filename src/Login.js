import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { Link } from 'react-router';


export const Login = () => {
  return (
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4} className='form1'>
        <Form>
            <h2>LOGIN</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address/Mobile number</Form.Label>
        <Form.Control type="email mobile" placeholder="Enter email/mobile number" />
        <Form.Text className="text-muted">
          We'll never share your email or mobile number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit" className='but1'>
        LOGIN
      </Button>
    </Form>
    
        <br/>
        </Col>
        <Col md={4}></Col>
        
      </Row>
        <Row>
        <Col md={4}></Col>
            <Col md={4}>
        <p>Forgot your password</p>
      <Button variant="primary" type="submit" className='but2'>
        LOGIN WITH OTP
      </Button>
      
      </Col>
        <Col md={4}></Col>
    
        <p>Don't have an account <Link to="/register">Create account</Link></p>
        </Row>
    </Container>
  )
}

export default Login
