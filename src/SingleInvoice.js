import React from "react";
import { usePDF } from "react-to-pdf";
import "./SingleInvoice.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

import Button from "react-bootstrap/Button";

export const SingleInvoice = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const invoices = [
    {
      id: 1,
      companyName: "Royal Service Center",
      companyAddress: "19 alipur road near by bala sanga club Kolkata 700027",
      companyPno: +918604467833,
      customerName: "Mr Banerji",
      customerAddress: "65, Central park Central enclave Kolkata 700070",
      customerPno: +919163898645,
      supply: "19-West Bengal",
      invoiceNo: 22950,
      invoiceDate: "13-04-2025",
      total: "Rs 10000.00",
      received: "Rs 10000.00",
      balance: "0.00",
      items: [
        {
          id: 1,
          itemNAme: "AC gas charge",
          "hsn/sac": "",
          quantity: 1,
          "price/unit": "Rs 4650.00",
          amount: "Rs 4650.00",
        },
        {
          id: 2,
          itemNAme: "AC capacitor",
          "hsn/sac": "",
          quantity: 1,
          "price/unit": "Rs 500.00",
          amount: "Rs 500.00",
        },
        {
          id: 3,
          itemNAme: "Servec",
          "hsn/sac": "",
          quantity: 1,
          "price/unit": "Rs 850.00",
          amount: "Rs 850.00",
        },
      ],
    },
    {
      id: 2,
      companyName: "Samsung center",
      companyAddress: "Bistupur",
      companyPno: +918604445673,
      customerName: "Mr Khurrana",
      customerAddress: "34, Nildih",
      customerPno: +919163890987,
      supply: "34, Nildih",
      invoiceNo: 22951,
      invoiceDate: "13-04-2025",
      total: "Rs 4000.00",
      received: "Rs 4000.00",
      balance: "0.00",
      items: [
        {
          id: 1,
          itemNAme: "Battery",
          "hsn/sac": "",
          quantity: 1,
          "price/unit": "Rs 4000.00",
          amount: "Rs 4000.00",
        },
        {
          id: 2,
          itemNAme: "Charger",
          "hsn/sac": "",
          quantity: 1,
          "price/unit": "Rs 500.00",
          amount: "Rs 500.00",
        },
      ],
    },
    {
      id: 3,
      companyName: "Computer Service Center",
      companyAddress: "19 alipur road near by bala sanga club Kolkata 700027",
      companyPno: +918604467833,
      customerName: "Mr Banerji",
      customerAddress: "65, Central park Central enclave Kolkata 700070",
      customerPno: +919163898645,
      supply: "19-West Bengal",
      invoiceNo: 22950,
      invoiceDate: "13-04-2025",
      total: "Rs 10000.00",
      received: "Rs 10000.00",
      balance: "0.00",
      items: [
        {
          id: 1,
          itemNAme: "AC gas charge",
          "hsn/sac": "",
          quantity: 1,
          "price/unit": "Rs 4650.00",
          amount: "Rs 4650.00",
        },
        {
          id: 2,
          itemNAme: "AC capacitor",
          "hsn/sac": "",
          quantity: 1,
          "price/unit": "Rs 500.00",
          amount: "Rs 500.00",
        },
      ],
    },
  ];
  console.log(invoices);
  console.log(invoices[0].items);
  return (
    <div ref={targetRef}>
      {invoices.map((invoice) => (
        <Container className="single">
          <Row>
            <Col md={6} className="title">
              <h4>{invoice.companyName}</h4>
              <p>
                {invoice.companyAddress} <br />
                Phone no : {invoice.companyPno}
              </p>
            </Col>
          </Row>
          <Row className="heading">
            <Col>
              <h3>Tax Invoice</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="bill">
              <p>
                <b>Bill To : {invoice.customerName}</b>
                <br />
                {invoice.customerAddress} <br />
                Contact No : {invoice.customerPno}
              </p>
            </Col>
            <Col md={6} className="supply">
              <p>
                Place of Supply : {invoice.supply} <br />
                <b>
                  Invoice No.:{invoice.invoiceNo} <br />
                  Date:{invoice.invoiceDate}
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover responsive className="heading1">
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
                  {invoice.items.map((item) => (
                    <tr>
                      <td style={{ textAlign: "center" }}>{item.id}</td>
                      <td>{item.itemNAme}</td>
                      <td></td>
                      <td style={{ textAlign: "center" }}>{item.quantity}</td>
                      <td>{item["price/unit"]}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="description" style={{ paddingLeft: "25px" }}>
              <h6>DESCRIPTION</h6>
              <p>1 years warranty only</p>
              <h6>INVOICE AMOUNT IN WORDS</h6>
              <p>Six thousand ruppees only</p>
              <h6>TERMS AND CONDITIONS</h6>
              <p>Thank you for doing business with us</p>
            </Col>
            <Col md={6} style={{ paddingRight: "25px" }} className="amount">
              <Row
                className="total"
                style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <Col md={6} className="total1">
                  <p>Total</p>
                </Col>
                <Col md={6} className="total2">
                  <p>{invoice.total}</p>
                </Col>
              </Row>
              <Row
                style={{
                  backgroundColor: "white",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Col md={6} className="total1">
                  <p>Received</p>
                </Col>
                <Col md={6} className="total2">
                  <p>{invoice.received}</p>
                </Col>
              </Row>
              <Row
                style={{
                  backgroundColor: "white",
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Col md={6} className="total1">
                  <p>Balance</p>
                </Col>
                <Col md={6} className="total2">
                  <p>{invoice.balance}</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Button variant="info" onClick={() => toPDF()}>
                Document to Pdf
              </Button>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default SingleInvoice;
