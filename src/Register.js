import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import { Link } from "react-router";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Sidebar from "./Sidebar";

export const Register = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .required("Mobile number is required")
      // .max(10,'Mobile must be atleast 10 digits')
      // .matches(/[0-9]/,'Mobile number must be 10 digits'),
      .matches(/^[0-9]{10}$/, "Mobile number be exactly 10 digits"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters")
      .matches(/[A-Z]/, "Password must contain one uppercase letter")
      .matches(/[a-z]/, "Password must contain one lowercase letter")
      .matches(/\d/, "Password must contain atleast one number")
      .matches(
        /[!@#$%^&*]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });
  return (
    <Container>
      <Row>
        {/* <Col md={2}>
          <Sidebar />
        </Col> */}
        <Col md={12}>
          <Row>
            {/* <Col md={4}></Col> */}
            <Col md={12} className="form1">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  mobile: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <h2>Create Account</h2>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                      />
                      {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />

                      {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email or mobile number with
                        anyone else.
                      </Form.Text>
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMobile">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="mobile"
                        placeholder="Enter mobile number"
                      />
                      {errors.mobile && touched.mobile ? (
                        <div>{errors.mobile}</div>
                      ) : null}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                      {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="but">
                      CREATE ACCOUNT
                    </Button>
                  </Form>
                )}
              </Formik>
              <br />
            </Col>
            {/* <Col md={4}></Col> */}
            <p>
              Already a member ? <Link to="/login">Login here</Link>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
