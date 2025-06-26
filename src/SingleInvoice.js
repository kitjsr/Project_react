import React from 'react'
import { usePDF } from 'react-to-pdf';
import "./SingleInvoice.css";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

import Button from 'react-bootstrap/Button';

export const SingleInvoice = () => {
    
       const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    // const invoices[
    //     {
    //         "companyName":"Vmart",
    //         "companyAddress":"New Delhi",
    //         "invoiceNumber":22580,
    //         "invoiceDate":12/05/25,
    //         "customerName":"Esha Kumari",
    //         "customerAddress":"Telco, Jamshedpur",
    //         "addItem":"Jeans",
            
    //     },
    // ]
  return (
    <div ref={targetRef}>
    <Container className='single'>
                <Row>
                    <Col md={6} className='title'>
                        <h4>Royal Service Center</h4>
                        <p>
                            19 alipur road near by bala sanga club <br/>
                            Kolkata 700027 <br/>
                            Phone no : +918604467833
                        </p>
                    </Col>
                    <Col md={6}>
                        {/* <Image src=''/> */}
                    </Col>
                </Row>
                <Row className='heading'>
                    <Col>
                        <h3>Tax Invoice</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='bill'>
                        <p><b>Bill To : Mr Banerji</b><br/>
                            65, Central park Central enclave Kolkata 700070 <br/>
                            Contact No : +919163898645
                        </p>
                    </Col>
                    <Col md={6} className='supply'>
                        <p>Place of Supply : 19-West Bengal <br/>
                            <b>Invoice No.:22950 <br/>
                            Date:13-04-2025
                            </b>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover responsive className='heading1'>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>HSN/SAC</th>
          <th>Quantity</th>
          <th>Price/Unit</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>AC gas charge</td>
          <td></td>
          <td>1</td>
          <td>Rs 4,650.00</td>
          <td>Rs 4,650.00</td>
        </tr>
        <tr>
          <td>1</td>
          <td>AC capacitor</td>
          <td></td>
          <td>1</td>
          <td>Rs 500.00</td>
          <td>Rs 500.00</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Servec</td>
          <td></td>
          <td>1</td>
          <td>Rs 850.00</td>
          <td>Rs 850.00</td>
        </tr>
      </tbody>
    </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='description' style={{paddingLeft:'25px'}}>
                        <h6>DESCRIPTION</h6>
                        <p>1 years warranty only</p>
                        <h6>INVOICE AMOUNT IN WORDS</h6>
                        <p>Six thousand ruppees only</p>
                        <h6>TERMS AND CONDITIONS</h6>
                        <p>Thank you for doing business with us</p>
                    </Col>
                    <Col md={6} style={{paddingRight:'25px'}} className='amount'>
                        <Row className='total' style={{boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                            <Col md={6} className='total1'>
                                <p>Total</p>
                            </Col>
                            <Col md={6} className='total2'>
                                <p>Rs 6,000.00</p>
                            </Col>
                        </Row>
                        <Row style={{backgroundColor:'white',boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                            <Col md={6} className='total1'>
                                <p>Received</p>
                            </Col>
                            <Col md={6} className='total2'>
                                <p>Rs 6,000.00</p>
                            </Col>
                        </Row>
                        <Row style={{backgroundColor:'white' , boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                            <Col md={6} className='total1'>
                                <p>Balance</p>
                            </Col>
                            <Col md={6} className='total2'>
                                <p>0.00</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{textAlign:'center'}}>
                    <Col>
                        <Button variant="info" onClick={() => toPDF()}>Document to Pdf</Button>
                    </Col>
                </Row>
    </Container>
    </div>
  )
}

export default SingleInvoice
