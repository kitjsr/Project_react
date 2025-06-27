import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import "./Invoice.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBIcon } from "mdb-react-ui-kit";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Sidebar from "./Sidebar";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import * as formik from "formik";
import * as yup from "yup";
export const Invoice = () => {
  const [balance, invoiceAmount, received, setBalance] = useState(0.0);
  const balance1 = () => {
    setBalance(invoiceAmount - received);
  };
  const { Formik } = formik;

  const schema = yup.object().shape({
    companyName: yup.string().required(),
    companyAddress: yup.string().required(),
    invoiceNumber: yup.number().required(),
    invoiceDate: yup.date().required(),
    customerName: yup.string().required(),
    customerAddress: yup.string().required(),
    invoiceAmount: yup.number().required(),
    received: yup.number().required(),
  });
  return (
    <Container className="top">
      <Row className="invoice">
        <Col md={6} className="heading">
          <h3>Enter details to make your first Sale 🚀</h3>
          <p className="para">
            First sale is made in less than a minute on Vyapar
          </p>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              companyName: "",
              companyAddress: "",
              invoiceNumber: "",
              invoiceDate: "",
              customerName: "",
              customerAddress: "",
              invoiceAmount: "",
              received: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="invoice1">
                  <Col>
                    <p>
                      <DescriptionOutlined className="person" />
                      Company Details
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Comapny Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter company name"
                        name="companyName"
                        value={values.companyName}
                        onChange={handleChange}
                        isValid={touched.companyName && !errors.companyName}

                        isInvalid={!!errors.companyName}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.companyName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Comapny address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter company address"
                        name="companyAddress"
                        value={values.companyAddress}
                        onChange={handleChange}
                        isValid={
                          touched.companyAddress && !errors.companyAddress
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.companyAddress}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="invoice1">
                  <Col md={6}>
                    <p>
                      <DescriptionOutlined className="desc" /> Invoice Details :
                    </p>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Invoice Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter invoice number"
                        name="invoiceNumber"
                        value={values.invoiceNumber}
                        onChange={handleChange}
                        isValid={touched.invoiceNumber && !errors.invoiceNumber}
                        isInvalid={!!errors.invoiceNumber}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.invoiceNumber}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Invoice Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Invoice date"
                        name="invoiceDate"
                        value={values.invoiceDate}
                        onChange={handleChange}
                        isValid={touched.invoiceDate && !errors.invoiceDate}
                        isInvalid={!!errors.invoiceDate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.invoiceDate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <p>
                      <PersonOutlineOutlinedIcon className="person" />
                      Bill To :
                    </p>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Customer Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer name"
                        name="customerName"
                        value={values.customerName}
                        onChange={handleChange}
                        isValid={touched.customerName && !errors.customerName}

                        isInvalid={!!errors.customerName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.customerName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Address </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer address"
                        name="customerAddress"
                        value={values.customerAddress}
                        onChange={handleChange}
                        isValid={
                          touched.customerAddress && !errors.customerAddress
                        }
                        isInvalid={!!errors.customerAddress}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.customerAddress}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="invoice2">
                  <Col>
                    <p>
                      <ViewInArOutlinedIcon />
                      <a href="">Add Sample item</a>
                        
                    </p>
                  </Col>
                </Row>
                <Row className="invoice1">
                  <Col>
                    <p>
                      <CurrencyRupeeIcon className="person" />
                      Invoice calculation :{" "}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Invoice Amount</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0.00"
                        name="invoiceAmount"
                        value={values.invoiceAmount}
                        onChange={handleChange}
                        isValid={touched.invoiceAmount && !errors.invoiceAmount}

                        isInvalid={!!errors.invoiceAmount}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.invoiceAmount}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="validationFormik04">
                      <Form.Label>Received</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="0.00"
                        name="received"
                        value={values.received}
                        onChange={handleChange}
                        isValid={touched.received && !errors.received}

                        isInvalid={!!errors.received}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.received}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Alert variant="success">
                      <Row>
                        <Col md={6}>Balance</Col>
                        <Col md={6} className="am">
                          {balance1}
                        </Col>
                      </Row>
                    </Alert>
                  </Col>
                </Row>
                <Row>
                  <Col className="but2">
                    <Button type="submit" className="but3">
                      Create your invoice
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
        <Col md={6} className="sample">
          <h5>Sample Invoice</h5>
          <br />
          <Image
            src="https://consumercomplaintscourt.com/wp-content/uploads/IMG-20230413-WA0068.jpg"
            className="img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Invoice;
