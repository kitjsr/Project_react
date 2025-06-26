import React , {useState} from 'react'
import './Item.css';
import { Button, Col, Container, Row } from 'react-bootstrap'

export const Item = () => {
  const[isLogin,setIsLogin]=useState(false);
  const changeLoginStatus=()=>{
    setIsLogin(true);
  }
  const[count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  return (
    <Container>
        <Row>
            <Col>
                <h3>Add item</h3>
                <p>{isLogin ? "Hi" : "Hello"}</p>
                <p>{count}</p>
                <Button variant='primary' onClick={changeLoginStatus}>Login</Button>
                <Button variant='primary' onClick={increment}>Increment</Button>
                <Button variant='primary' onClick={decrement}>Decrement</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Item
